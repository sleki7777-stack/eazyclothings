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
          origin:meta.origin||"",qualityCheck:meta.quality_check||"",provenance:meta.provenance||"",\n          marketProof:{salesSignal:meta.sales_signal||meta.sales_proof||"",reviewCount:meta.review_count?Number(meta.review_count):0,rating:meta.review_rating?Number(meta.review_rating):0,reviewEvidence:meta.review_evidence||"",source:meta.market_source||""},
          retail:p.variants.nodes[0]?.price||null
        };
      });
    const summary = {\n      total:candidates.length,\n      withMarketProof:candidates.filter((c:any)=>Boolean(c.marketProof.salesSignal)).length,\n      withPositiveReviews:candidates.filter((c:any)=>c.marketProof.rating >= 4.5 && c.marketProof.reviewCount > 0).length,\n      approved:candidates.filter((c:any)=>c.status === "APPROVED").length\n    };\n    return NextResponse.json({ok:true,configured:true,candidates,summary});
  } catch(error) {
    return NextResponse.json({ok:false,configured:true,candidates:[],error:error instanceof Error?error.message:"Unable to load sourcing records."},{status:502});
  }
}
