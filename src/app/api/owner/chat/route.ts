import { NextResponse } from "next/server";
import { reasonWithOwner,type OwnerChatMessage } from "@/lib/eazy-owner-ai";
export async function POST(request:Request){try{
 const body=await request.json();
 const messages=Array.isArray(body?.messages)?body.messages.filter((m:unknown)=>{if(!m||typeof m!=="object")return false;const x=m as Record<string,unknown>;return (x.role==="user"||x.role==="assistant")&&typeof x.content==="string";}).slice(-30) as OwnerChatMessage[]:[];
 if(!messages.length)return NextResponse.json({ok:false,error:"No owner message supplied."},{status:400});
 return NextResponse.json({ok:true,...await reasonWithOwner(messages,typeof body?.context==="string"?body.context.slice(0,12000):undefined)});
}catch(error){return NextResponse.json({ok:false,error:error instanceof Error?error.message:"EAZY AI is unavailable."},{status:500});}}
