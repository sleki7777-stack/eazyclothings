import { NextResponse } from "next/server";
import { isShopifyConfigured, shopifyAdminGraphql } from "@/lib/shopify";
import { canPublishToShopify, type ProductCandidateWithMarketProof } from "@/lib/sleek-eazy-intelligence";

const MUTATION = `#graphql
mutation CreateSleekEazyProduct($product: ProductCreateInput!, $media: [CreateMediaInput!]) {
  productCreate(product: $product, media: $media) {
    product { id title handle status tags options { id name values } variants(first: 100) { nodes { id title sku price compareAtPrice } } media(first: 20) { nodes { id mediaContentType ... on MediaImage { image { url } } } } }
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

    const tags=["SLEEK_EAZY","EAZY_APPROVED","EAZY_VERIFIED","SUPPLIER_FULFILLED",...(candidate.collections||[]).map((slug:string) => "COLLECTION:"+slug)];
    if(candidate.artisanMade) tags.push("SLEEK_ARTISAN");
    for(const lane of candidate.cultureLanes||[]) tags.push("SLEEK_"+lane);

    const variantSource = candidate.variants?.length ? candidate.variants : [{
      id: candidate.id+"-default",
      title: "Default",
      supplierPrice: candidate.cost || 0,
      supplierCurrency: candidate.currency || "NGN",
      retailPrice: candidate.retail || 0,
      retailCurrency: candidate.currency || "NGN",
      imageUrls: candidate.imageUrls,
      imageRightsVerified: candidate.imageRightsVerified,
      exactImageMatchesSource: candidate.exactImageMatchesSource,
      exactImageEvidence: candidate.exactImageEvidence
    }];

    const optionDefinitions = Object.keys(variantSource[0]?.attributes || {}).map((name) => ({
      name,
      values: [...new Set(variantSource.map((v:any) => v.attributes?.[name]).filter(Boolean))]
    })).filter((option:any) => option.values.length);

    const product:any={
      title:candidate.title,
      vendor:candidate.brand||"Sleek Eazy",
      productType:"Sleek Eazy",
      status:"DRAFT",
      tags,
      ...(optionDefinitions.length ? {productOptions: optionDefinitions.map((option:any) => ({name: option.name, values: option.values.map((name:string) => ({name}))}))} : {}),
      descriptionHtml:candidate.qualityNotes||"",
      metafields:[
        {namespace:"eazy",key:"source_url",type:"url",value:candidate.sourceUrl},
        {namespace:"eazy",key:"source_image_url",type:"url",value:candidate.exactImageEvidence?.sourceImageUrl||candidate.imageUrls[0]||""},
        {namespace:"eazy",key:"exact_image_match",type:"boolean",value:String(candidate.exactImageMatchesSource===true)},
        {namespace:"eazy",key:"image_rights_verified",type:"boolean",value:String(candidate.imageRightsVerified===true)},
        {namespace:"eazy",key:"material",type:"single_line_text_field",value:candidate.material||""},
        {namespace:"eazy",key:"origin",type:"single_line_text_field",value:candidate.origin||""},
        {namespace:"eazy",key:"provenance",type:"multi_line_text_field",value:candidate.provenanceEvidence||""},
        {namespace:"eazy",key:"authenticity",type:"multi_line_text_field",value:candidate.authenticityEvidence||""},
        {namespace:"eazy",key:"quality_check",type:"single_line_text_field",value:"HOUSE APPROVED"},
        {namespace:"eazy",key:"edition",type:"single_line_text_field",value:candidate.edition||"CORE"},
        {namespace:"eazy",key:"fulfillment_mode",type:"single_line_text_field",value:"SUPPLIER_FULFILLED"}
      ]
    };

    const media=(Array.from(new Set(variantSource.flatMap((v:any) => v.imageUrls || []))) as string[]).slice(0, 20).map((url:string)=>({originalSource:url,mediaContentType:"IMAGE",alt:"Sleek Eazy — "+candidate.title+" — VARIANT "+variantSource.findIndex((v:any)=>v.imageUrls?.includes(url))}));
    const data=await shopifyAdminGraphql<any>(MUTATION,{product,media});
    const errors=data.productCreate.userErrors||[];
    if(errors.length) return NextResponse.json({ok:false,error:errors.map((e:any)=>e.message).join("; ")},{status:422});

    const created=data.productCreate.product;
    if(created?.variants?.nodes?.[0]?.id){
      const mediaByUrl = new Map<string,string>();
      for (const mediaNode of created.media?.nodes || []) {
        const url = mediaNode?.image?.url;
        if (url) mediaByUrl.set(url, mediaNode.id);
      }

      const optionValueFor = (variant:any) => Object.entries(variant.attributes || {}).map(([name,value]) => ({
        optionName: name,
        name: String(value)
      }));

      const defaultVariant = variantSource[0];
      const updatePayload:any = {
        id: created.variants.nodes[0].id,
        inventoryPolicy:"CONTINUE",
        price:String(defaultVariant.retailPrice),
        ...(defaultVariant.sku ? {sku:defaultVariant.sku} : {}),
        ...(defaultVariant.imageUrls?.length ? {mediaSrc:defaultVariant.imageUrls.slice(0,10)} : {}),
        ...(optionValueFor(defaultVariant).length ? {optionValues:optionValueFor(defaultVariant)} : {}),
        metafields:[
          {namespace:"eazy",key:"supplier_price",type:"number_decimal",value:String(defaultVariant.supplierPrice)},
          {namespace:"eazy",key:"supplier_currency",type:"single_line_text_field",value:defaultVariant.supplierCurrency},
          {namespace:"eazy",key:"retail_price_verified",type:"number_decimal",value:String(defaultVariant.retailPrice)},
          {namespace:"eazy",key:"variant_source_image",type:"url",value:defaultVariant.exactImageEvidence?.sourceImageUrl || defaultVariant.imageUrls?.[0] || ""},
          {namespace:"eazy",key:"variant_exact_image_match",type:"boolean",value:String(defaultVariant.exactImageMatchesSource === true)},
          {namespace:"eazy",key:"variant_image_rights_verified",type:"boolean",value:String(defaultVariant.imageRightsVerified === true)}
        ]
      };

      const variantData=await shopifyAdminGraphql<any>(`#graphql
mutation ConfigureSleekEazyVariants($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
  productVariantsBulkUpdate(productId: $productId, variants: $variants) {
    productVariants { id title sku price compareAtPrice inventoryPolicy }
    userErrors { field message }
  }
}`,{productId:created.id,variants:[updatePayload]});
      const variantErrors=variantData.productVariantsBulkUpdate?.userErrors||[];
      if(variantErrors.length) return NextResponse.json({ok:false,error:variantErrors.map((e:any)=>e.message).join("; "),product:created},{status:422});

      if (variantSource.length > 1) {
        const additionalVariants = variantSource.slice(1).map((variant:any) => ({
          price:String(variant.retailPrice),
          inventoryPolicy:"CONTINUE",
          ...(variant.sku ? {sku:variant.sku} : {}),
          ...(variant.imageUrls?.length ? {mediaSrc:variant.imageUrls.slice(0,10)} : {}),
          ...(optionValueFor(variant).length ? {optionValues:optionValueFor(variant)} : {}),
          metafields:[
            {namespace:"eazy",key:"supplier_price",type:"number_decimal",value:String(variant.supplierPrice)},
            {namespace:"eazy",key:"supplier_currency",type:"single_line_text_field",value:variant.supplierCurrency},
            {namespace:"eazy",key:"retail_price_verified",type:"number_decimal",value:String(variant.retailPrice)},
            {namespace:"eazy",key:"variant_source_image",type:"url",value:variant.exactImageEvidence?.sourceImageUrl || variant.imageUrls?.[0] || ""},
            {namespace:"eazy",key:"variant_exact_image_match",type:"boolean",value:String(variant.exactImageMatchesSource === true)},
            {namespace:"eazy",key:"variant_image_rights_verified",type:"boolean",value:String(variant.imageRightsVerified === true)}
          ]
        }));
        const createData=await shopifyAdminGraphql<any>(`#graphql
mutation CreateSleekEazyVariants($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
  productVariantsBulkCreate(productId: $productId, variants: $variants, strategy: DEFAULT) {
    productVariants { id title sku price compareAtPrice inventoryPolicy }
    userErrors { field message }
  }
}`,{productId:created.id,variants:additionalVariants});
        const createErrors=createData.productVariantsBulkCreate?.userErrors||[];
        if(createErrors.length) return NextResponse.json({ok:false,error:createErrors.map((e:any)=>e.message).join("; "),product:created},{status:422});
      }
    }

    return NextResponse.json({ok:true,published:false,status:"DRAFT",product:created,fulfillmentMode:"SUPPLIER_FULFILLED",inventoryPolicy:"CONTINUE",message:"House-approved product created in Shopify as a draft. Each verified supplier variant carries its own supplier cost, EAZY retail price and exact variant image; storefront activation remains separate."});
  } catch(error) {
    return NextResponse.json({ok:false,error:error instanceof Error?error.message:"Shopify product creation failed."},{status:502});
  }
}
