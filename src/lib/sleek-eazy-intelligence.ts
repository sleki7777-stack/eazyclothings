export type SourcingTier = "SELECT" | "PRIVATE" | "OBJECTS" | "CULTURAL_HOUSE";
export type ProductReviewStatus = "CANDIDATE" | "EVIDENCE_REQUIRED" | "APPROVED" | "REJECTED";
export type SleekEazyEdition = "CORE" | "SEASONAL_EDIT" | "LIMITED_EDITION" | "ARCHIVE";
export type SleekEazyPriceTier = "ENTRY" | "ACCESSIBLE" | "STRONGER" | "PREMIUM" | "LIMITED_EDITION";

export const SLEEK_EAZY_PRICE_TIERS = {
  ENTRY: { min: 0, maxExclusive: 50001, role: "The door into Sleek Eazy.", target: 250 },
  ACCESSIBLE: { min: 50001, maxExclusive: 150001, role: "The everyday upgrade.", target: 150 },
  STRONGER: { min: 150001, maxExclusive: 300001, role: "The gift and occasion tier.", target: 75 },
  PREMIUM: { min: 300001, maxExclusive: Number.POSITIVE_INFINITY, role: "The top regular house range.", target: 20 },
  LIMITED_EDITION: { min: 0, maxExclusive: Number.POSITIVE_INFINITY, role: "Rare, verified scarcity only.", target: 10 }
} as const;

export const SLEEK_EAZY_CATALOG_TARGET = {
  minimumDirectionalTarget: 505,
  entryTarget: 250,
  accessibleTarget: 150,
  strongerTarget: 75,
  premiumTarget: 20,
  limitedEditionTarget: 10,
  firstThreeTarget: 475,
  premiumPlusLimitedTarget: 30,
  targetsAreNotQuotas: true,
  qualityCanYieldLess: true
} as const;

export function classifySleekEazyPriceTier(price:number, edition?:SleekEazyEdition):SleekEazyPriceTier {
  if (edition === "LIMITED_EDITION") return "LIMITED_EDITION";
  if (price < 50001) return "ENTRY";
  if (price < 150001) return "ACCESSIBLE";
  if (price < 300001) return "STRONGER";
  return "PREMIUM";
}

export type LimitedEditionEvidence = {
  isGenuinelyLimited:boolean;
  editionSize?:number;
  unitsAvailable?:number;
  scarcityReason?:string;
  evidence?:EvidenceRecord[];
};

export type SleekEazyEditionDecision = {
  edition:SleekEazyEdition;
  eligible:boolean;
  reason:string;
};
export type CultureLane = "AFRICAN_HERITAGE"|"IGBO_HERITAGE"|"LAGOS_MADE"|"CONTEMPORARY_AFRICAN"|"GLOBAL_SELECT"|"AFRICAN_GLOBAL_FUSION";
export type MakerType = "AFRICAN_ARTISAN"|"AFRICAN_BRAND"|"INTERNATIONAL_BRAND"|"CURATED_TRADER";

export type SupplierPipelineStatus = "DISCOVERED" | "CONTACTED" | "ACCESS_GRANTED" | "TERMS_RECEIVED" | "QUALITY_REVIEW" | "APPROVED" | "REJECTED";

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

export type SupplierInvestigationStage =
  | "DISCOVERED"
  | "STOREFRONT_ACCESSED"
  | "MARKET_PROOF_REVIEW"
  | "CANDIDATES_EXTRACTED"
  | "QUALITY_SCREEN"
  | "HOUSE_DECISION";

export type SupplierInvestigationDecision =
  | "INVESTIGATE"
  | "MOVE_ON"
  | "APPROVE"
  | "REJECT";

export type SupplierInvestigation = {
  supplierId:string;
  stage:SupplierInvestigationStage;
  decision:SupplierInvestigationDecision;
  startedAt:string;
  updatedAt:string;
  storefrontUrl:string;
  marketProof?:SupplierMarketProof;
  candidateCount:number;
  eligibleCandidateCount:number;
  selectedCandidateIds:string[];
  rejectionReasons:string[];
  notes?:string;
};

export const SLEEK_EAZY_INVESTIGATION_RULES = {
  storefrontMustBeInvestigated: true,
  marketProofBeforeCandidateSelection: true,
  positiveReviewsRequiredForDiscovery: true,
  qualityStandardStillOverridesMarketDemand: true,
  supplierCanYieldZeroProducts: true,
  moveOnWhenNoFit: true
} as const;

export type QualityDimensions = {
  material:number;
  craftsmanship:number;
  finish:number;
  durability:number;
  design:number;
  consistency:number;
  presentation:number;
  provenance:number;
};

export const SLEEK_EAZY_QUALITY_WEIGHTS:QualityDimensions = {
  material:20,
  craftsmanship:20,
  finish:15,
  durability:15,
  design:10,
  consistency:10,
  presentation:5,
  provenance:5
};

export function scoreQualityDimensions(dimensions:QualityDimensions):number {
  const total = Object.entries(SLEEK_EAZY_QUALITY_WEIGHTS).reduce((sum,[key,weight]) => {
    const value = dimensions[key as keyof QualityDimensions];
    return sum + Math.max(0, Math.min(100, value)) * weight;
  }, 0);
  return Math.round(total / 100);
}

export function decideSupplierInvestigation(
  investigation:SupplierInvestigation,
  selectedCount:number
):{ decision:SupplierInvestigationDecision; reason:string } {
  const proof = evaluateMarketProof(investigation.marketProof);
  if (!proof.qualifies) {
    return { decision:"MOVE_ON", reason:proof.reason };
  }
  if (investigation.candidateCount === 0 || selectedCount === 0) {
    return { decision:"MOVE_ON", reason:"Supplier has market evidence, but no product meets the EAZY quality threshold." };
  }
  return { decision:"INVESTIGATE", reason:"Supplier has passed discovery gates and requires the next investigation stage." };
}

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
  imageRightsVerified?:boolean; commercialTermsVerified?:boolean;
  authenticityEvidence?:string; provenanceEvidence?:string; qualityNotes?:string;
  status:ProductReviewStatus;
  reviewerNotes?:string; createdAt:string; updatedAt:string;
  edition?:SleekEazyEdition; limitedEdition?:LimitedEditionEvidence;
};

export const SUPPLIER_PIPELINE: readonly SupplierPipelineStatus[] = [
  "DISCOVERED","CONTACTED","ACCESS_GRANTED","TERMS_RECEIVED","QUALITY_REVIEW","APPROVED"
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
  "Commercial terms recorded",
  "EAZY House approval"
] as const;

export function transparencyReady(candidate:ProductCandidate, supplier?:SupplierRecord){
  return Boolean(
    candidate.sourceUrl && supplier?.name && candidate.material && candidate.origin &&
    candidate.imageUrls.length &&
    candidate.provenanceEvidence && candidate.status === "APPROVED"
  );
}

export type QualityGate = {
  id:
    | "SOURCE" | "MARKET_PROOF" | "REVIEWS" | "MATERIAL" | "ORIGIN"
    | "AUTHENTICITY" | "IMAGE_RIGHTS" | "COMMERCIAL" | "HOUSE_APPROVAL";
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

  const notes = candidate.qualityNotes || "";
  const text = (candidate.material || "") + " " + notes;

  const dimensions:QualityDimensions = {
    material: candidate.material ? (/solid|sterling|gold|silver|leather|acetate|stainless|silk|cashmere|cotton/i.test(text) ? 100 : 70) : 0,
    craftsmanship: /craft|handmade|hand[- ]?finished|construction|stitched|machined|artisan/i.test(notes) ? 100 : 45,
    finish: /finish|polished|refined|engraved|detail|precision/i.test(notes) ? 100 : 45,
    durability: /durab|stainless|solid|reinforced|long[- ]?lasting|resistant/i.test(text) ? 100 : 45,
    design: notes ? 75 : 0,
    consistency: candidate.supplierId ? 75 : 0,
    presentation: candidate.imageUrls.length >= 3 ? 100 : candidate.imageUrls.length ? 70 : 0,
    provenance: candidate.provenanceEvidence ? 100 : 0
  };

  return scoreQualityDimensions(dimensions);
}

export function evaluateQualityGate(candidate:ProductCandidateWithMarketProof, supplier?:SupplierRecord):QualityGateResult {
  const gates:QualityGate[] = [
    { id:"SOURCE", label:"Identifiable source", passed:Boolean(candidate.sourceUrl && supplier?.name), blocking:true, evidence:candidate.sourceUrl || "Source URL missing" },
    { id:"MARKET_PROOF", label:"Proven market demand", passed:Boolean(candidate.marketProof?.salesSignal), blocking:true, evidence:candidate.marketProof?.salesSignal || "No verified sales/traction signal" },
    { id:"REVIEWS", label:"Positive customer evidence", passed:Boolean(candidate.marketProof?.reviewCount && candidate.marketProof.reviewCount > 0 && candidate.marketProof.rating && candidate.marketProof.rating >= 4.5), blocking:true, evidence:candidate.marketProof?.reviewEvidence || "No sufficient positive review evidence" },
    { id:"MATERIAL", label:"Material documented", passed:Boolean(candidate.material), blocking:true, evidence:candidate.material || "Material evidence missing" },
    { id:"ORIGIN", label:"Manufacturing origin", passed:Boolean(candidate.origin), blocking:true, evidence:candidate.origin || "Origin evidence missing" },
    { id:"AUTHENTICITY", label:"Authenticity / provenance", passed:Boolean(candidate.provenanceEvidence && (!candidate.brand || candidate.authenticityEvidence)), blocking:true, evidence:candidate.provenanceEvidence || "Provenance evidence missing" },
    { id:"IMAGE_RIGHTS", label:"Product image rights", passed:Boolean(candidate.imageUrls.length && candidate.imageRightsVerified === true), blocking:true, evidence:candidate.imageRightsVerified ? "Product imagery and usage rights verified" : candidate.imageUrls.length ? "Images present; usage rights are not verified" : "Approved product imagery missing" },
    { id:"COMMERCIAL", label:"Commercial terms", passed:candidate.commercialTermsVerified === true, blocking:true, evidence:candidate.commercialTermsVerified ? "Commercial terms verified" : "Supplier/resale terms are not verified" },
    { id:"HOUSE_APPROVAL", label:"House approval", passed:candidate.status === "APPROVED", blocking:false, evidence:candidate.status }
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
export const SLEEK_EAZY_EDITION_RULES = {
  limitedEditionRequiresVerifiedScarcity: true,
  limitedEditionRequiresHouseApproval: true,
  limitedEditionRequiresQcPassed: true,
  limitedEditionRequiresMarketProof: true,
  limitedEditionNeverArtificial: true,
  archiveWhenSoldOut: true,
  weeklyUpdatesAreCurated: true,
  monthlyEditIsCurated: true
} as const;

export function decideEdition(candidate:ProductCandidateWithMarketProof):SleekEazyEditionDecision {
  if (candidate.status !== "APPROVED") return {edition:"CORE", eligible:false, reason:"Product is not House-approved."};
  if (!candidate.marketProof || !candidate.marketProof.salesSignal) return {edition:"CORE", eligible:false, reason:"Market proof is required before an edition can be published."};
  const limited = candidate.limitedEdition;
  if (limited?.isGenuinelyLimited && (limited.editionSize || limited.unitsAvailable) && limited.scarcityReason && limited.evidence?.length) {
    return {edition:"LIMITED_EDITION", eligible:true, reason:"Verified genuine scarcity supports limited-edition treatment."};
  }
  return {edition:candidate.edition || "SEASONAL_EDIT", eligible:true, reason:"Approved product belongs in the current curated edit."};
}

export const SLEEK_EAZY_CURATION_RULE = {
  principle: "BEST_OF_SUPPLIER_ONLY",
  defaultMaxProductsPerSupplier: 27,
  minimumQualityScore: 90,
  minimumReviewRating: 4.5,
  minimumReviewCount: 1,
  requiresMarketProof: true,
  storefrontRequiresApproval: true,
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
    .map(c => ({
      candidate:c,
      quality:evaluateQualityGate(c, supplier),
      market:evaluateMarketProof(c.marketProof ? {
        storefrontUrl:c.sourceUrl,
        salesEvidence:c.marketProof.salesEvidence,
        reviewEvidence:c.marketProof.reviewEvidence || (c.marketProof.reviewEvidence ? [{value:c.marketProof.reviewEvidence,sourceUrl:c.sourceUrl,capturedAt:c.updatedAt,confidence:"MEDIUM"}] : []),
        rating:c.marketProof.rating,
        reviewCount:c.marketProof.reviewCount
      } : undefined)
    }))
    .filter(x => x.market.qualifies && x.quality.passed && x.quality.score >= SLEEK_EAZY_CURATION_RULE.minimumQualityScore)
    .sort((a,b) => {
      const scoreDelta = b.quality.score - a.quality.score;
      if (scoreDelta !== 0) return scoreDelta;
      const aReviews = a.candidate.marketProof?.reviewCount || 0;
      const bReviews = b.candidate.marketProof?.reviewCount || 0;
      return bReviews - aReviews;
    });
  return ranked.slice(0, Math.max(0, maxProducts)).map(x => x.candidate);
}

export type SupplierSelectionReport = {
  supplierId:string;
  supplierName:string;
  candidatesConsidered:number;
  marketProofEligible:number;
  qualityEligible:number;
  selected:string[];
  rejected:Array<{candidateId:string;title:string;score:number;reasons:string[]}>;
};

export function buildSupplierSelectionReport(
  candidates:ProductCandidateWithMarketProof[],
  supplier:SupplierRecord,
  maxProducts=SLEEK_EAZY_CURATION_RULE.defaultMaxProductsPerSupplier
):SupplierSelectionReport {
  const supplierCandidates=candidates.filter(c=>c.supplierId===supplier.id);
  const evaluated=supplierCandidates.map(candidate=>{
    const quality=evaluateQualityGate(candidate,supplier);
    const market=evaluateMarketProof(candidate.marketProof ? {
      storefrontUrl:candidate.sourceUrl,
      salesEvidence:candidate.marketProof.salesEvidence,
      reviewEvidence:candidate.marketProof.reviewEvidence || (candidate.marketProof.reviewEvidence ? [{value:candidate.marketProof.reviewEvidence,sourceUrl:candidate.sourceUrl,capturedAt:candidate.updatedAt,confidence:"MEDIUM"}] : []),
      rating:candidate.marketProof.rating,
      reviewCount:candidate.marketProof.reviewCount
    } : undefined);
    const reasons=[...quality.blockers];
    if(!market.qualifies) reasons.unshift(market.reason);
    return {candidate,quality,market,reasons};
  });
  const ranked=evaluated
    .filter(x=>x.market.qualifies && x.quality.passed && x.quality.score>=SLEEK_EAZY_CURATION_RULE.minimumQualityScore)
    .sort((a,b)=>b.quality.score-a.quality.score || (b.candidate.marketProof?.reviewCount||0)-(a.candidate.marketProof?.reviewCount||0));
  const selected=new Set(ranked.slice(0,Math.max(0,maxProducts)).map(x=>x.candidate.id));
  return {
    supplierId:supplier.id,
    supplierName:supplier.name,
    candidatesConsidered:supplierCandidates.length,
    marketProofEligible:evaluated.filter(x=>x.market.qualifies).length,
    qualityEligible:ranked.length,
    selected:[...selected],
    rejected:evaluated.filter(x=>!selected.has(x.candidate.id)).map(x=>({
      candidateId:x.candidate.id,
      title:x.candidate.title,
      score:x.quality.score,
      reasons:x.reasons.length?x.reasons:["Below the supplier selection cutoff."]
    }))
  };
}

export type SupplierSelectionQueueStatus = "DISCOVERY"|"SCREENED"|"SELECTED"|"HOUSE_REVIEW"|"APPROVED"|"REJECTED"|"MOVE_ON";

export type SupplierSelectionQueueItem = {
  candidateId:string;
  supplierId:string;
  status:SupplierSelectionQueueStatus;
  score:number;
  marketProofConfidence:EvidenceConfidence;
  reasons:string[];
  updatedAt:string;
};

export function buildSupplierSelectionQueue(
  candidates:ProductCandidateWithMarketProof[],
  supplier:SupplierRecord,
  maxProducts=SLEEK_EAZY_CURATION_RULE.defaultMaxProductsPerSupplier
):SupplierSelectionQueueItem[] {
  const report=buildSupplierSelectionReport(candidates,supplier,maxProducts);
  const selected=new Set(report.selected);
  return candidates.filter(c=>c.supplierId===supplier.id).map(candidate=>{
    const quality=evaluateQualityGate(candidate,supplier);
    const market=evaluateMarketProof(candidate.marketProof ? {
      storefrontUrl:candidate.sourceUrl,
      salesEvidence:candidate.marketProof.salesEvidence,
      reviewEvidence:candidate.marketProof.reviewEvidence,
      rating:candidate.marketProof.rating,
      reviewCount:candidate.marketProof.reviewCount
    }:undefined);
    const reasons=report.rejected.find(r=>r.candidateId===candidate.id)?.reasons||[];
    let status:SupplierSelectionQueueStatus=selected.has(candidate.id)?"SELECTED":"SCREENED";
    if(!market.qualifies) status="MOVE_ON";
    else if(candidate.status==="APPROVED") status="APPROVED";
    else if(candidate.status==="REJECTED") status="REJECTED";
    else if(selected.has(candidate.id)) status="HOUSE_REVIEW";
    return {candidateId:candidate.id,supplierId:supplier.id,status,score:quality.score,marketProofConfidence:market.confidence,reasons,updatedAt:new Date().toISOString()};
  });
}

export type HouseReviewDecision = "PENDING"|"APPROVE"|"REJECT";

export type HouseReviewRecord = {
  candidateId:string;
  decision:HouseReviewDecision;
  reviewer:string;
  reviewedAt:string;
  notes?:string;
};

export function evaluateHouseReviewEligibility(candidate:ProductCandidateWithMarketProof,supplier?:SupplierRecord){
  const quality=evaluateQualityGate(candidate,supplier);
  const market=evaluateMarketProof(candidate.marketProof ? {
    storefrontUrl:candidate.sourceUrl,
    salesEvidence:candidate.marketProof.salesEvidence,
    reviewEvidence:candidate.marketProof.reviewEvidence,
    rating:candidate.marketProof.rating,
    reviewCount:candidate.marketProof.reviewCount
  }:undefined);
  if(!market.qualifies) return {eligible:false,reason:"Market proof has not met the discovery threshold."};
  if(!quality.passed) return {eligible:false,reason:"One or more blocking quality gates are not passed.",blockers:quality.blockers};
  if(quality.score<SLEEK_EAZY_CURATION_RULE.minimumQualityScore) return {eligible:false,reason:"Product is below the EAZY minimum quality score.",score:quality.score};
  if(candidate.status==="REJECTED") return {eligible:false,reason:"Product has already been rejected."};
  return {eligible:true,reason:"Product is eligible for explicit EAZY House review.",score:quality.score};
}

export function applyHouseReview(
  candidate:ProductCandidateWithMarketProof,
  decision:Exclude<HouseReviewDecision,"PENDING">,
  reviewer:string,
  notes?:string
):{candidate:ProductCandidateWithMarketProof;allowed:boolean;reason:string;review:HouseReviewRecord}{
  const eligibility=evaluateHouseReviewEligibility(candidate);
  const review={candidateId:candidate.id,decision,reviewer,reviewedAt:new Date().toISOString(),notes};
  if(!eligibility.eligible) return {candidate,allowed:false,reason:eligibility.reason,review};
  const next={...candidate,updatedAt:review.reviewedAt,status:decision==="APPROVE"?"APPROVED":"REJECTED" as ProductReviewStatus};
  return {candidate:next,allowed:true,reason:decision==="APPROVE"?"House approval granted. Product is unlocked for the Shopify publishing pipeline.":"House rejection recorded. Product remains blocked from Shopify.",review};
}

export function canPublishToShopify(candidate:ProductCandidateWithMarketProof){
  return candidate.status==="APPROVED" && candidate.sourceUrl.length>0 && !!candidate.material && !!candidate.origin && !!candidate.provenanceEvidence && !!candidate.authenticityEvidence && candidate.imageUrls.length>0 && candidate.imageRightsVerified===true && candidate.commercialTermsVerified===true;
}

export function supplierStatusLabel(status:SupplierPipelineStatus){
  return status.replaceAll("_"," ");
}
