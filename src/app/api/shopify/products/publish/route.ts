import { NextResponse } from "next/server";
import { isShopifyConfigured, shopifyAdminGraphql } from "@/lib/shopify";
import { canPublishToShopify, type ProductCandidateWithMarketProof } from "@/lib/sleek-eazy-intelligence";

const MUTATION = `#graphql
mutation CreateSleekEazyProduct($input: ProductInput!) {
  productCreate(input: $input) {
    product {
      id
      title
      handle
      status
      tags
    }
    userErrors { field message }
  }
}`;

export async function POST(req:Request){
  try{
    if(!isShopifyConfigured()) return NextResponse.json({ok:false,error:"Shopify is not configured."},{status:503});
    const body=await req.json();
    const candidate=body?.candidate as ProductCandidateWithMarketProof;
    if(!candidate?.id) return NextResponse.json({ok:false,error:"Approved candidate is required."},{status:400});
    if(!canPublishToShopify(candidate)) return NextResponse.json({ok:false,error:"Candidate is not eligible for Shopify publishing. Explicit House approval, source, material, origin, provenance, authenticity and imagery are required."},{status:409});

    const tags=["SLEEK_EAZY","EAZY_APPROVED","EAZY_VERIFIED"];
    if(candidate.artisanMade) tags.push("SLEEK_ARTISAN");
    for(const lane of candidate.cultureLanes||[]) tags.push("SLEEK_"+lane);
    const input:any={
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
        {namespace:"eazy",key:"edition",type:"single_line_text_field",value:(candidate.edition||"CORE")},
      ]
    };
    const data=await shopifyAdminGraphql<any>(MUTATION,{input});
    const errors=data.productCreate.userErrors||[];
    if(errors.length) return NextResponse.json({ok:false,error:errors.map((e:any)=>e.message).join("; ")},{status:422});
    return NextResponse.json({ok:true,published:false,status:"DRAFT",product:data.productCreate.product,message:"House-approved product created in Shopify as a draft. Final storefront activation remains a separate publishing action."});
  }catch(error){
    return NextResponse.json({ok:false,error:error instanceof Error?error.message:"Shopify product creation failed."},{status:502});
  }
}
