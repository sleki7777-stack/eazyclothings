export type SourcingTier = "SELECT" | "PRIVATE" | "OBJECTS" | "CULTURAL_HOUSE";
export type ProductReviewStatus = "CANDIDATE" | "EVIDENCE_REQUIRED" | "SAMPLE_REQUIRED" | "QC_PENDING" | "APPROVED" | "REJECTED";
export type SupplierPipelineStatus = "DISCOVERED" | "CONTACTED" | "ACCESS_GRANTED" | "TERMS_RECEIVED" | "SAMPLE_ORDERED" | "SAMPLE_RECEIVED" | "QC" | "APPROVED" | "REJECTED";

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

export const SUPPLIER_PIPELINE: readonly SupplierPipelineStatus[] = [
  "DISCOVERED","CONTACTED","ACCESS_GRANTED","TERMS_RECEIVED",
  "SAMPLE_ORDERED","SAMPLE_RECEIVED","QC","APPROVED"
];

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
    | "SOURCE"
    | "MATERIAL"
    | "ORIGIN"
    | "AUTHENTICITY"
    | "IMAGE_RIGHTS"
    | "COMMERCIAL"
    | "SAMPLE"
    | "QC"
    | "HOUSE_APPROVAL";
  label:string;
  passed:boolean;
  blocking:boolean;
  evidence:string;
};

export type QualityGateResult = {
  passed:boolean;
  score:number;
  gates:QualityGate[];
  blockers:string[];
};

export function evaluateQualityGate(candidate:ProductCandidate, supplier?:SupplierRecord):QualityGateResult {
  const gates:QualityGate[] = [
    {
      id:"SOURCE", label:"Identifiable source", passed:Boolean(candidate.sourceUrl && supplier?.name),
      blocking:true, evidence:candidate.sourceUrl || "Source URL missing"
    },
    {
      id:"MATERIAL", label:"Material documented", passed:Boolean(candidate.material),
      blocking:true, evidence:candidate.material || "Material evidence missing"
    },
    {
      id:"ORIGIN", label:"Manufacturing origin", passed:Boolean(candidate.origin),
      blocking:true, evidence:candidate.origin || "Origin evidence missing"
    },
    {
      id:"AUTHENTICITY", label:"Authenticity / provenance", passed:Boolean(candidate.authenticityEvidence && candidate.provenanceEvidence),
      blocking:true, evidence:candidate.provenanceEvidence || "Provenance evidence missing"
    },
    {
      id:"IMAGE_RIGHTS", label:"Product image rights", passed:Boolean(candidate.imageUrls.length),
      blocking:true, evidence:candidate.imageUrls.length ? "Product imagery recorded" : "Approved product imagery missing"
    },
    {
      id:"COMMERCIAL", label:"Commercial terms", passed:Boolean(candidate.cost || candidate.retail),
      blocking:true, evidence:candidate.cost ? "Cost recorded" : candidate.retail ? "Retail reference recorded; wholesale cost still required" : "Commercial terms missing"
    },
    {
      id:"SAMPLE", label:"Sample inspection", passed:candidate.sampleStatus === "INSPECTED",
      blocking:true, evidence:candidate.sampleStatus
    },
    {
      id:"QC", label:"EAZY QC passed", passed:candidate.qcStatus === "PASSED",
      blocking:true, evidence:candidate.qcStatus
    },
    {
      id:"HOUSE_APPROVAL", label:"House approval", passed:candidate.status === "APPROVED",
      blocking:true, evidence:candidate.status
    }
  ];

  const blockers=gates.filter(g=>g.blocking && !g.passed).map(g=>g.label);
  return {
    passed:blockers.length===0,
    score:Math.round((gates.filter(g=>g.passed).length/gates.length)*100),
    gates,
    blockers
  };
}

export function supplierStatusLabel(status:SupplierPipelineStatus){
  return status.replaceAll("_"," ");
}
