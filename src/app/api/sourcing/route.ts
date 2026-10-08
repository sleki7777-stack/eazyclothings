import { NextResponse } from "next/server";
import { isShopifyConfigured, shopifyAdminGraphql } from "@/lib/shopify";
import { evaluateMarketProof } from "@/lib/sleek-eazy-intelligence";

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
          marketProof:{salesSignal:meta.sales_signal||meta.sales_proof||"",reviewCount:meta.review_count?Number(meta.review_count):0,rating:meta.review_rating?Number(meta.review_rating):0,reviewEvidence:meta.review_evidence||"",source:meta.market_source||""},
          edition:meta.edition||"CORE",limitedEdition:(()=>{ try { return meta.limited_edition ? JSON.parse(meta.limited_edition) : undefined; } catch { return undefined; } })(),
          retail:p.variants.nodes[0]?.price||null
        };
      });
    const supplierNames = Array.from(new Set(candidates.map((c:any)=>c.vendor).filter(Boolean)));
    const supplierInvestigations = supplierNames.map((vendor:any)=>{
      const supplierCandidates = candidates.filter((c:any)=>c.vendor === vendor);
      const marketProof = supplierCandidates.map((c:any)=>evaluateMarketProof({
        salesEvidence:c.marketProof.salesSignal ? [{value:c.marketProof.salesSignal,sourceUrl:c.marketProof.source || "",capturedAt:new Date().toISOString(),confidence:"MEDIUM"}] : [],
        reviewEvidence:c.marketProof.reviewEvidence ? [{value:c.marketProof.reviewEvidence,sourceUrl:c.marketProof.source || "",capturedAt:new Date().toISOString(),confidence:"MEDIUM"}] : [],
        rating:c.marketProof.rating,
        reviewCount:c.marketProof.reviewCount
      }));
      const hasDiscoveryProof = marketProof.some((p:any)=>p.qualifies);
      const approved = supplierCandidates.filter((c:any)=>c.status === "APPROVED").length;
      return {
        supplier:vendor,
        candidateCount:supplierCandidates.length,
        marketProofPassed:hasDiscoveryProof,
        approvedCount:approved,
        decision:!hasDiscoveryProof ? "MOVE_ON" : approved ? "ACTIVE" : "INVESTIGATE"
      };
    });
    const summary = {
      total:candidates.length,
      suppliers:supplierInvestigations.length,
      withMarketProof:candidates.filter((c:any)=>evaluateMarketProof({
        salesEvidence:c.marketProof.salesSignal ? [{value:c.marketProof.salesSignal,sourceUrl:c.marketProof.source || "",capturedAt:new Date().toISOString(),confidence:"MEDIUM"}] : [],
        reviewEvidence:c.marketProof.reviewEvidence ? [{value:c.marketProof.reviewEvidence,sourceUrl:c.marketProof.source || "",capturedAt:new Date().toISOString(),confidence:"MEDIUM"}] : [],
        rating:c.marketProof.rating,
        reviewCount:c.marketProof.reviewCount
      }).qualifies).length,
      withPositiveReviews:candidates.filter((c:any)=>c.marketProof.rating >= 4.5 && c.marketProof.reviewCount > 0).length,
      approved:candidates.filter((c:any)=>c.status === "APPROVED").length,
      suppliersToMoveOn:supplierInvestigations.filter((s:any)=>s.decision === "MOVE_ON").length
    };
    return NextResponse.json({ok:true,configured:true,candidates,supplierInvestigations,summary});
  } catch(error) {
    return NextResponse.json({ok:false,configured:true,candidates:[],error:error instanceof Error?error.message:"Unable to load sourcing records."},{status:502});
  }
}
