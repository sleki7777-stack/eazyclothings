import { NextResponse } from "next/server";
import { applyHouseReview } from "@/lib/sleek-eazy-intelligence";

export async function POST(req:Request){
  try{
    const body=await req.json();
    if(!body?.candidate || !["APPROVE","REJECT"].includes(body.decision))
      return NextResponse.json({ok:false,error:"Candidate and APPROVE/REJECT decision are required."},{status:400});
    const result=applyHouseReview(body.candidate,body.decision,body.reviewer||"EAZY HOUSE",body.notes);
    return NextResponse.json({ok:result.allowed,...result},{status:result.allowed?200:409});
  }catch(error){
    return NextResponse.json({ok:false,error:error instanceof Error?error.message:"House review failed."},{status:400});
  }
}
