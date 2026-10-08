import { NextResponse } from "next/server";
import { isShopifyConfigured, shopifyAdminGraphql } from "@/lib/shopify";

const QUERY = `#graphql
query SourcingCatalogue {
  products(first: 100) {
    nodes {
      id title handle vendor productType tags
      metafields(first: 30, namespace: "eazy") { nodes { key value } }
      variants(first: 20) { nodes { id sku price inventoryQuantity } }
    }
  }
}`;

export async function GET() {
  if (!isShopifyConfigured()) return NextResponse.json({ ok:false, configured:false, candidates:[] });
  try {
    const data = await shopifyAdminGraphql<any>(QUERY);
    const candidates = data.products.nodes
      .filter((p:any)=>p.tags.some((t:string)=>t.toUpperCase()==="SLEEK_EAZY" || t.toUpperCase()==="SLEEK_EAZY_CANDIDATE"))
      .map((p:any)=>{
        const meta=Object.fromEntries(p.metafields.nodes.map((m:any)=>[m.key.toLowerCase(),m.value]));
        return {
          id:p.id,title:p.title,handle:p.handle,vendor:p.vendor,productType:p.productType,
          status:p.tags.some((t:string)=>t.toUpperCase()==="EAZY_APPROVED")?"APPROVED":"EVIDENCE_REQUIRED",
          sourceType:meta.source_type||"",sourceUrl:meta.source_url||"",material:meta.material||"",
          origin:meta.origin||"",qualityCheck:meta.quality_check||"",provenance:meta.provenance||"",
          retail:p.variants.nodes[0]?.price||null
        };
      });
    return NextResponse.json({ok:true,configured:true,candidates});
  } catch(error) {
    return NextResponse.json({ok:false,configured:true,candidates:[],error:error instanceof Error?error.message:"Unable to load sourcing records."},{status:502});
  }
}
