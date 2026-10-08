import { NextResponse } from "next/server";
import { applyHouseReview, type SupplierRecord, type ProductCandidateWithMarketProof } from "@/lib/sleek-eazy-intelligence";

export async function POST(req:Request){
  try{
    const body=await req.json();
    const candidate=body?.candidate as ProductCandidateWithMarketProof;
    const supplier=body?.supplier as SupplierRecord | undefined;
    if(!candidate?.id || !supplier?.id || !supplier?.name)
      return NextResponse.json({ok:false,error:"Candidate and verified supplier identity are required."},{status:400});
    if(!["APPROVE","REJECT"].includes(body.decision))
      return NextResponse.json({ok:false,error:"APPROVE or REJECT decision is required."},{status:400});
    const result=applyHouseReview(candidate,body.decision,body.reviewer||"EAZY HOUSE",body.notes,supplier);
    return NextResponse.json({ok:result.allowed,...result},{status:result.allowed?200:409});
  }catch(error){
    return NextResponse.json({ok:false,error:error instanceof Error?error.message:"House review failed."},{status:400});
  }
}
