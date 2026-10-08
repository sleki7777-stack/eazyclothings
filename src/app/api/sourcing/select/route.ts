import { NextResponse } from "next/server";
import { buildSupplierSelectionReport, type ProductCandidateWithMarketProof, type SupplierRecord } from "@/lib/sleek-eazy-intelligence";

export async function POST(req:Request){
  try{
    const body=await req.json();
    const supplier:SupplierRecord=body?.supplier;
    const candidates:ProductCandidateWithMarketProof[]=body?.candidates;
    if(!supplier?.id || !supplier?.name) return NextResponse.json({ok:false,error:"Supplier identity is required."},{status:400});
    if(!Array.isArray(candidates)) return NextResponse.json({ok:false,error:"Product candidates are required."},{status:400});
    const report=buildSupplierSelectionReport(candidates,supplier,27);
    return NextResponse.json({ok:true,report});
  }catch(error){
    return NextResponse.json({ok:false,error:error instanceof Error?error.message:"Selection failed."},{status:400});
  }
}
