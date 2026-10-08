import { NextResponse } from "next/server";
import { applySampleQcAction } from "@/lib/sleek-eazy-intelligence";

export async function POST(req:Request){
  try{
    const body=await req.json();
    if(!body?.candidate) return NextResponse.json({ok:false,error:"Candidate is required."},{status:400});
    const result=applySampleQcAction(body.candidate,body.action,body.notes);
    return NextResponse.json({ok:result.allowed,...result},{status:result.allowed?200:409});
  }catch(error){
    return NextResponse.json({ok:false,error:error instanceof Error?error.message:"Inspection action failed."},{status:400});
  }
}
