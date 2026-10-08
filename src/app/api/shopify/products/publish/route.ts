import { NextResponse } from "next/server";
import { isShopifyConfigured, shopifyAdminGraphql } from "@/lib/shopify";
import { canPublishToShopify, type ProductCandidateWithMarketProof } from "@/lib/sleek-eazy-intelligence";

const MUTATION = `#graphql
mutation CreateSleekEazyProduct($product: ProductCreateInput!, $media: [CreateMediaInput!]) {
  productCreate(product: $product, media: $media) {
    product { id title handle status tags variants(first: 1) { nodes { id price compareAtPrice } } }
    userErrors { field message }
  }
}`;

export async function POST(req:Request){
  try {
    if (!isShopifyConfigured()) return NextResponse.json({ok:false,error:"Shopify is not configured."},{status:503});
    const body=await req.json();
    const candidate=body?.candidate as ProductCandidateWithMarketProof;
    if (!candidate?.id) return NextResponse.json({ok:false,error:"Approved candidate is required."},{status:400});
    if (!canPublishToShopify(candidate)) return NextResponse.json({ok:false,error:"Candidate is not eligible for Shopify publishing."},{status:409});

    const tags=["SLEEK_EAZY","EAZY_APPROVED","EAZY_VERIFIED"];
    if(candidate.artisanMade) tags.push("SLEEK_ARTISAN");
    for(const lane of candidate.cultureLanes||[]) tags.push("SLEEK_"+lane);

    const product:any={
      title:candidate.title,
      vendor:candidate.brand||"Sleek Eazy",
      productType:"Sleek Eazy",
      status:"DRAFT",
      tags,
      descriptionHtml:candidate.qualityNotes||"",
      metafields:[
        {namespace:"eazy",key:"source_url",type:"url",value:candidate.sourceUrl},
        {namespace:"eazy",key:"material",type:"single_line_text_field",value:candidate.material||""},
        {namespace:"eazy",key:"origin",type:"single_line_text_field",value:candidate.origin||""},
        {namespace:"eazy",key:"provenance",type:"multi_line_text_field",value:candidate.provenanceEvidence||""},
        {namespace:"eazy",key:"authenticity",type:"multi_line_text_field",value:candidate.authenticityEvidence||""},
        {namespace:"eazy",key:"quality_check",type:"single_line_text_field",value:"HOUSE APPROVED"},
        {namespace:"eazy",key:"edition",type:"single_line_text_field",value:candidate.edition||"CORE"}
      ]
    };

    const media=(candidate.imageUrls||[]).slice(0,10).map((url:string)=>({originalSource:url,mediaContentType:"IMAGE",alt:"Sleek Eazy — "+candidate.title}));
    const data=await shopifyAdminGraphql<any>(MUTATION,{product,media});
    const errors=data.productCreate.userErrors||[];
    if(errors.length) return NextResponse.json({ok:false,error:errors.map((e:any)=>e.message).join("; ")},{status:422});

    const created=data.productCreate.product;
    if(candidate.retail && created?.variants?.nodes?.[0]?.id){
      const variantData=await shopifyAdminGraphql<any>(`#graphql
mutation SetInitialPrice($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
  productVariantsBulkUpdate(productId: $productId, variants: $variants) {
    productVariants { id price compareAtPrice }
    userErrors { field message }
  }
}`,{productId:created.id,variants:[{id:created.variants.nodes[0].id,price:String(candidate.retail)}]});
      const variantErrors=variantData.productVariantsBulkUpdate?.userErrors||[];
      if(variantErrors.length) return NextResponse.json({ok:false,error:variantErrors.map((e:any)=>e.message).join("; "),product:created},{status:422});
    }

    return NextResponse.json({ok:true,published:false,status:"DRAFT",product:created,message:"House-approved product created in Shopify as a draft. Storefront activation remains separate."});
  } catch(error) {
    return NextResponse.json({ok:false,error:error instanceof Error?error.message:"Shopify product creation failed."},{status:502});
  }
}
