import { NextResponse } from "next/server";

const MAX_BYTES=3_000_000;
const TIMEOUT_MS=12000;

function publicUrl(raw:string){
  try{
    const u=new URL(raw);
    if(!["http:","https:"].includes(u.protocol)) return null;
    const h=u.hostname.toLowerCase();
    if(h==="localhost"||h==="127.0.0.1"||h==="0.0.0.0"||h==="::1"||/^10\./.test(h)||/^192\.168\./.test(h)||/^172\.(1[6-9]|2\d|3[0-1])\./.test(h)) return null;
    return u;
  }catch{return null}
}
function abs(base:URL,value:string){
  try{return new URL(value,base).toString()}catch{return ""}
}
function text(v:any):string{
  if(v==null)return "";
  if(typeof v==="string")return v.replace(/\s+/g," ").trim();
  if(Array.isArray(v))return v.map(text).filter(Boolean).join(", ");
  if(typeof v==="object")return text(v.name||v.value||v.text||"");
  return String(v);
}
function walk(value:any,out:any[]){
  if(!value)return;
  if(Array.isArray(value)){for(const x of value)walk(x,out);return}
  if(typeof value!=="object")return;
  const type=text(value["@type"]).toLowerCase();
  if(type.includes("product") && value.name)out.push(value);
  if(value["@graph"])walk(value["@graph"],out);
}

export async function POST(req:Request){
  try{
    const body=await req.json();
    const url=publicUrl(String(body?.url||""));
    if(!url)return NextResponse.json({ok:false,error:"Enter a valid public product or collection URL."},{status:400});
    const controller=new AbortController();
    const timer=setTimeout(()=>controller.abort(),TIMEOUT_MS);
    const res=await fetch(url.toString(),{signal:controller.signal,redirect:"follow",headers:{"User-Agent":"EAZY-Sleek-Eazy-Product-Investigator/1.0"}});
    clearTimeout(timer);
    const html=(await res.text()).slice(0,MAX_BYTES);
    const plain=html.replace(/<script[\\s\\S]*?<\\/script>/gi," ").replace(/<style[\\s\\S]*?<\\/style>/gi," ").replace(/<[^>]+>/g," ").replace(/\\s+/g," ").toLowerCase();
    const products:any[]=[];
    for(const m of html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)){
      try{walk(JSON.parse(m[1]),products)}catch{}
    }
    const unique=new Map<string,any>();
    for(const p of products){
      const link=abs(url,text(p.url)||text(p["@id"]));
      const key=(link||text(p.name)).toLowerCase();
      if(key&&!unique.has(key))unique.set(key,p);
    }
    const candidates=[...unique.values()].slice(0,50).map((p:any,index:number)=>{
      const offers=Array.isArray(p.offers)?p.offers[0]:p.offers;
      const aggregate=p.aggregateRating||{};
      const images=Array.isArray(p.image)?p.image:[p.image].filter(Boolean);
      const rating=Number(aggregate.ratingValue||0);
      const reviewCount=Number(aggregate.reviewCount||aggregate.ratingCount||0);
      return {
        rank:index+1,
        title:text(p.name)||"Untitled product",
        sourceUrl:abs(url,text(p.url)||text(p["@id"]))||url.toString(),
        images:images.map((x:any)=>abs(url,text(x))).filter(Boolean).slice(0,8),
        material:text(p.material),
        brand:text(p.brand),
        description:text(p.description).slice(0,500),
        price:Number(offers?.price||0)||null,
        currency:text(offers?.priceCurrency),
        availability:text(offers?.availability),
        rating:rating||null,
        reviewCount:reviewCount||null,
        marketProof:(rating>=4.5&&reviewCount>0)?"POSITIVE_REVIEW_SIGNAL":"EVIDENCE_REQUIRED",
        salesEvidence:(/\\b(?:sold|units sold|orders|purchased|best[- ]seller|bestseller|best[- ]selling|sold out)\\b/i.test(plain))?"TRACTION_SIGNAL_DETECTED":null,
        evidence:{
          productSchema:true,
          reviewEvidence:rating>0||reviewCount>0,
          capturedAt:new Date().toISOString()
        }
      };
    });
    return NextResponse.json({
      ok:true,
      storefrontUrl:url.toString(),
      finalUrl:res.url,
      productCount:candidates.length,
      candidates,
      nextStep:"Candidates still require source verification, market-proof verification, quality screening and explicit House approval. No sample stage is used."
    });
  }catch(error){
    return NextResponse.json({ok:false,error:error instanceof Error?error.message:"Unable to extract product candidates."},{status:502});
  }
}
