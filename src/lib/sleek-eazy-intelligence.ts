export type SourcingTier = "SELECT" | "PRIVATE" | "OBJECTS" | "CULTURAL_HOUSE";
export type ProductReviewStatus = "CANDIDATE" | "EVIDENCE_REQUIRED" | "SAMPLE_REQUIRED" | "QC_PENDING" | "APPROVED" | "REJECTED";
export type CultureLane = "AFRICAN_HERITAGE"|"LAGOS_MADE"|"CONTEMPORARY_AFRICAN"|"GLOBAL_SELECT"|"AFRICAN_GLOBAL_FUSION";
export type MakerType = "AFRICAN_ARTISAN"|"AFRICAN_BRAND"|"INTERNATIONAL_BRAND"|"CURATED_TRADER";

export type SupplierPipelineStatus = "DISCOVERED" | "CONTACTED" | "ACCESS_GRANTED" | "TERMS_RECEIVED" | "SAMPLE_ORDERED" | "SAMPLE_RECEIVED" | "QC" | "APPROVED" | "REJECTED";

export type SupplierRecord = {
  id:string; name:string; website:string; country:string; categories:string[]; makerType?:MakerType; cultureLanes?:CultureLane[];
  manufacturingOrigin:string; materials:string[]; wholesaleAvailable:boolean;
  privateLabel:boolean; moq?:number; sampleAvailable:boolean; shippingTerms?:string;
  returnsTerms?:string; imageRights?:string; authenticityEvidence?:string;
  notes?:string; rating?:number; verifiedAt?:string;
};


export type EvidenceConfidence = "UNVERIFIED" | "LOW" | "MEDIUM" | "HIGH";

export type EvidenceRecord = {
  value:string;
  sourceUrl:string;
  capturedAt:string;
  confidence:EvidenceConfidence;
};

export type SupplierMarketProof = {
  storefrontUrl?:string;
  salesEvidence?:EvidenceRecord[];
  reviewEvidence?:EvidenceRecord[];
  rating?:number;
  reviewCount?:number;
  positiveReviewRatio?:number;
};

export type MarketEvidenceDecision = {
  qualifies:boolean;
  reason:string;
  confidence:EvidenceConfidence;
};

export function evaluateMarketProof(proof?:SupplierMarketProof):MarketEvidenceDecision {
  if (!proof) return { qualifies:false, reason:"No market evidence supplied.", confidence:"UNVERIFIED" };
  const sales = proof.salesEvidence?.length || 0;
  const reviews = proof.reviewEvidence?.length || 0;
  const rating = proof.rating || 0;
  const count = proof.reviewCount || 0;
  if (!sales) return { qualifies:false, reason:"No verified sales/traction evidence.", confidence:"UNVERIFIED" };
  if (!reviews || count < 1 || rating < 4.5) return { qualifies:false, reason:"Insufficient positive customer-review evidence.", confidence:"LOW" };
  const high = sales >= 2 && reviews >= 2 && rating >= 4.7 && count >= 10;
  return { qualifies:true, reason:"Market demand and positive customer evidence meet discovery requirements.", confidence:high ? "HIGH" : "MEDIUM" };
}

export type ProductCandidate = {
  id:string; supplierId:string; title:string; sourceUrl:string; tier:SourcingTier; cultureLanes?:CultureLane[]; artisanMade?:boolean;
  world:string; brand?:string; material?:string; origin?:string; cost?:number;
  retail?:number; currency?:string; moq?:number; imageUrls:string[];
  authenticityEvidence?:string; provenanceEvidence?:string; qualityNotes?:string;
  sampleStatus:"NOT_REQUESTED"|"REQUESTED"|"RECEIVED"|"INSPECTED";
  qcStatus:"PENDING"|"PASSED"|"FAILED"; status:ProductReviewStatus;
  reviewerNotes?:string; createdAt:string; updatedAt:string;
};

export const SUPPLIER_PIPELINE: readonly SupplierPipelineStatus[] = [
  "DISCOVERED","CONTACTED","ACCESS_GRANTED","TERMS_RECEIVED",
  "SAMPLE_ORDERED","SAMPLE_RECEIVED","QC","APPROVED"
];

export const SLEEK_EAZY_MAKER_PRINCIPLES = [
  "African makers and artisans can enter without a listing fee",
  "No maker is published without verification and quality review",
  "Cultural provenance is preserved and presented with respect",
  "Eazy supplies discovery, presentation and commerce infrastructure",
  "Commercial terms and maker economics are transparent before approval"
] as const;

export const SLEEK_EAZY_APPROVAL_REQUIREMENTS = [
  "Identifiable supplier or brand source",
  "Verifiable product/material information",
  "Manufacturing origin disclosed or explicitly unknown",
  "Legitimate product photography/use rights",
  "Authenticity evidence for branded goods",
  "Sample inspection or documented QC path",
  "Commercial terms recorded",
  "EAZY House approval"
] as const;

export function transparencyReady(candidate:ProductCandidate, supplier?:SupplierRecord){
  return Boolean(
    candidate.sourceUrl && supplier?.name && candidate.material && candidate.origin &&
    candidate.imageUrls.length && candidate.qcStatus === "PASSED" &&
    candidate.provenanceEvidence && candidate.status === "APPROVED"
  );
}

export type QualityGate = {
  id:
    | "SOURCE" | "MARKET_PROOF" | "REVIEWS" | "MATERIAL" | "ORIGIN"
    | "AUTHENTICITY" | "IMAGE_RIGHTS" | "COMMERCIAL" | "SAMPLE" | "QC" | "HOUSE_APPROVAL";
  label:string;
  passed:boolean;
  blocking:boolean;
  evidence:string;
};

export type MarketProof = {
  salesSignal?:string;
  reviewCount?:number;
  rating?:number;
  reviewEvidence?:string;
  source?:string;
};

export type ProductCandidateWithMarketProof = ProductCandidate & {
  marketProof?:MarketProof & { salesEvidence?:EvidenceRecord[]; reviewEvidence?:EvidenceRecord[]; };
};

export type QualityGateResult = {
  passed:boolean;
  score:number;
  gates:QualityGate[];
  blockers:string[];
};

const PREMIUM_WEIGHTS = {
  marketProof:20,
  reviews:10,
  material:15,
  craftsmanship:15,
  finish:10,
  durability:10,
  design:5,
  consistency:5,
  presentation:5,
  provenance:5
} as const;

function premiumScore(candidate:ProductCandidateWithMarketProof, gates:QualityGate[]):number {
  const hardPassed = gates.every(g => !g.blocking || g.passed);
  if (!hardPassed) return 0;

  const craftsmanship = /craft|handmade|hand[- ]?finished|construction|stitched|machined/i.test(candidate.qualityNotes || "") ? 15 : 0;
  const finish = /finish|polished|refined|detail/i.test(candidate.qualityNotes || "") ? 10 : 0;
  const durability = /durab|stainless|solid|reinforced|long[- ]?lasting/i.test((candidate.material || "")+" "+(candidate.qualityNotes || "")) ? 10 : 0;
  const design = candidate.qualityNotes ? 5 : 0;
  const consistency = candidate.supplierId ? 5 : 0;
  const presentation = candidate.imageUrls.length ? 5 : 0;
  const provenance = candidate.provenanceEvidence ? 5 : 0;
  const market = candidate.marketProof?.salesSignal ? 20 : 0;
  const reviews = candidate.marketProof?.rating && (candidate.marketProof.reviewCount || 0) > 0 ? 10 : 0;
  const material = candidate.material ? 15 : 0;

  return Math.min(100, market + reviews + material + craftsmanship + finish + durability + design + consistency + presentation + provenance);
}

export function evaluateQualityGate(candidate:ProductCandidateWithMarketProof, supplier?:SupplierRecord):QualityGateResult {
  const gates:QualityGate[] = [
    { id:"SOURCE", label:"Identifiable source", passed:Boolean(candidate.sourceUrl && supplier?.name), blocking:true, evidence:candidate.sourceUrl || "Source URL missing" },
    { id:"MARKET_PROOF", label:"Proven market demand", passed:Boolean(candidate.marketProof?.salesSignal), blocking:true, evidence:candidate.marketProof?.salesSignal || "No verified sales/traction signal" },
    { id:"REVIEWS", label:"Positive customer evidence", passed:Boolean(candidate.marketProof?.reviewCount && candidate.marketProof.reviewCount > 0 && candidate.marketProof.rating && candidate.marketProof.rating >= 4.5), blocking:true, evidence:candidate.marketProof?.reviewEvidence || "No sufficient positive review evidence" },
    { id:"MATERIAL", label:"Material documented", passed:Boolean(candidate.material), blocking:true, evidence:candidate.material || "Material evidence missing" },
    { id:"ORIGIN", label:"Manufacturing origin", passed:Boolean(candidate.origin), blocking:true, evidence:candidate.origin || "Origin evidence missing" },
    { id:"AUTHENTICITY", label:"Authenticity / provenance", passed:Boolean(candidate.authenticityEvidence && candidate.provenanceEvidence), blocking:true, evidence:candidate.provenanceEvidence || "Provenance evidence missing" },
    { id:"IMAGE_RIGHTS", label:"Product image rights", passed:Boolean(candidate.imageUrls.length), blocking:true, evidence:candidate.imageUrls.length ? "Product imagery recorded" : "Approved product imagery missing" },
    { id:"COMMERCIAL", label:"Commercial terms", passed:Boolean(candidate.cost || candidate.retail), blocking:true, evidence:candidate.cost ? "Cost recorded" : candidate.retail ? "Retail reference recorded; wholesale cost still required" : "Commercial terms missing" },
    { id:"SAMPLE", label:"Sample inspection", passed:candidate.sampleStatus === "INSPECTED", blocking:true, evidence:candidate.sampleStatus },
    { id:"QC", label:"EAZY QC passed", passed:candidate.qcStatus === "PASSED", blocking:true, evidence:candidate.qcStatus },
    { id:"HOUSE_APPROVAL", label:"House approval", passed:candidate.status === "APPROVED", blocking:true, evidence:candidate.status }
  ];
  const blockers=gates.filter(g=>g.blocking && !g.passed).map(g=>g.label);
  return { passed:blockers.length===0, score:premiumScore(candidate,gates), gates, blockers };
}

/**
 * SLEEK EAZY — BEST-OF-SUPPLIER RULE
 *
 * We do not publish a supplier's catalogue. We curate the exceptional minority.
 * Market demand and positive customer evidence are discovery gates, not substitutes
 * for physical/product QC. A supplier can contribute zero products.
 */
export const SLEEK_EAZY_CURATION_RULE = {
  principle: "BEST_OF_SUPPLIER_ONLY",
  defaultMaxProductsPerSupplier: 27,
  minimumQualityScore: 90,
  minimumReviewRating: 4.5,
  minimumReviewCount: 1,
  requiresMarketProof: true,
  storefrontRequiresApproval: true,
  storefrontRequiresQcPassed: true,
  neverAutoPublishWholeSupplierCatalogue: true,
  supplierMayContributeZeroProducts: true,
  collectionCountIsNotAQualityException: true
} as const;

export type ProductSelectionDecision = {
  eligible:boolean;
  reason:string;
  supplierRank?:number;
  supplierEligibleCount?:number;
};

export function selectBestOfSupplier(
  candidates:ProductCandidateWithMarketProof[],
  supplier:SupplierRecord,
  maxProducts = SLEEK_EAZY_CURATION_RULE.defaultMaxProductsPerSupplier
):ProductCandidateWithMarketProof[] {
  const ranked = candidates
    .filter(c => c.supplierId === supplier.id)
    .map(c => ({ candidate:c, quality:evaluateQualityGate(c, supplier) }))
    .filter(x => x.quality.passed && x.quality.score >= SLEEK_EAZY_CURATION_RULE.minimumQualityScore)
    .sort((a,b) => {
      const scoreDelta = b.quality.score - a.quality.score;
      if (scoreDelta !== 0) return scoreDelta;
      const aReviews = a.candidate.marketProof?.reviewCount || 0;
      const bReviews = b.candidate.marketProof?.reviewCount || 0;
      return bReviews - aReviews;
    });
  return ranked.slice(0, Math.max(0, maxProducts)).map(x => x.candidate);
}

export function supplierStatusLabel(status:SupplierPipelineStatus){
  return status.replaceAll("_"," ");
}
