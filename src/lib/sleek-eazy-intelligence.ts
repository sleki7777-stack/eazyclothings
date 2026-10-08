export type SourcingTier = "SELECT" | "PRIVATE" | "OBJECTS" | "CULTURAL_HOUSE";
export type ProductReviewStatus = "CANDIDATE" | "EVIDENCE_REQUIRED" | "SAMPLE_REQUIRED" | "QC_PENDING" | "APPROVED" | "REJECTED";

export type SupplierRecord = {
  id:string; name:string; website:string; country:string; categories:string[];
  manufacturingOrigin:string; materials:string[]; wholesaleAvailable:boolean;
  privateLabel:boolean; moq?:number; sampleAvailable:boolean; shippingTerms?:string;
  returnsTerms?:string; imageRights?:string; authenticityEvidence?:string;
  notes?:string; rating?:number; verifiedAt?:string;
};

export type ProductCandidate = {
  id:string; supplierId:string; title:string; sourceUrl:string; tier:SourcingTier;
  world:string; brand?:string; material?:string; origin?:string; cost?:number;
  retail?:number; currency?:string; moq?:number; imageUrls:string[];
  authenticityEvidence?:string; provenanceEvidence?:string; qualityNotes?:string;
  sampleStatus:"NOT_REQUESTED"|"REQUESTED"|"RECEIVED"|"INSPECTED";
  qcStatus:"PENDING"|"PASSED"|"FAILED"; status:ProductReviewStatus;
  reviewerNotes?:string; createdAt:string; updatedAt:string;
};

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
