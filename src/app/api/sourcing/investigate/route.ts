import { NextResponse } from "next/server";

const MAX_BYTES = 2_000_000;
const TIMEOUT_MS = 12_000;

function validPublicUrl(raw:string){
  try{
    const u=new URL(raw);
    if(!["http:","https:"].includes(u.protocol)) return null;
    const host=u.hostname.toLowerCase();
    if(host==="localhost" || host.endsWith(".localhost") || host==="127.0.0.1" || host==="0.0.0.0" || host==="::1" || /^10\./.test(host) || /^192\.168\./.test(host) || /^172\.(1[6-9]|2\d|3[0-1])\./.test(host)) return null;
    return u;
  }catch{return null}
}

function stripHtml(html:string){
  return html.replace(/<script[\s\S]*?<\/script>/gi," ")
    .replace(/<style[\s\S]*?<\/style>/gi," ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi," ")
    .replace(/<[^>]+>/g," ")
    .replace(/&nbsp;/gi," ").replace(/&amp;/gi,"&")
    .replace(/&quot;/gi,'\"').replace(/&#39;/gi,"'")
    .replace(/\s+/g," ").trim();
}
const hitCount=(text:string,terms:string[])=>terms.filter(term=>text.includes(term)).length;

export async function POST(req:Request){
  try{
    const body=await req.json();
    const url=validPublicUrl(String(body?.url||""));
    if(!url) return NextResponse.json({ok:false,error:"Enter a valid public supplier storefront URL."},{status:400});

    const controller=new AbortController();
    const timer=setTimeout(()=>controller.abort(),TIMEOUT_MS);
    const response=await fetch(url.toString(),{
      signal:controller.signal,redirect:"follow",
      headers:{"User-Agent":"EAZY-Sleek-Eazy-Supplier-Investigator/1.0"}
    });
    clearTimeout(timer);

    const contentLength=Number(response.headers.get("content-length")||0);
    if(contentLength>MAX_BYTES) return NextResponse.json({ok:false,error:"Storefront response is too large for first-pass investigation."},{status:413});
    const html=(await response.text()).slice(0,MAX_BYTES);
    const text=stripHtml(html).toLowerCase();

    const ratingMatches=[...text.matchAll(/(?:rating|rated|stars?)\s*[:\-]?\s*(\d(?:\.\d)?)(?:\s*\/\s*5)?/gi)].map(m=>Number(m[1])).filter(n=>n<=5);
    const reviewCountMatches=[...text.matchAll(/(?:reviews?|ratings?)\s*[:\-]?\s*([\d,]+)\+?/gi)].map(m=>Number(m[1].replace(/,/g,""))).filter(n=>n>0);
    const maxRating=ratingMatches.length?Math.max(...ratingMatches):0;
    const reviewCount=reviewCountMatches.length?Math.max(...reviewCountMatches):0;

    const salesHits=hitCount(text,["best seller","bestseller","best-selling","sold out","orders","units sold","customers","purchased","sales","trending","popular","most purchased"]);
    const reviewHits=hitCount(text,["customer reviews","reviews","verified reviews","verified purchase","what customers say","testimonials"]);
    const materialHits=hitCount(text,["sterling silver","gold","18k","14k","solid","stainless steel","leather","acetate","silk","cashmere","handmade","hand-finished","artisan"]);
    const provenanceHits=hitCount(text,["made in","crafted in","origin","country of origin","manufacturer","artisan","maker"]);
    const imageCount=(html.match(/<img\b/gi)||[]).length;

    const marketProof={
      salesEvidenceFound:salesHits>0,
      reviewEvidenceFound:reviewHits>0 || reviewCount>0,
      rating:maxRating,
      reviewCount,
      confidence:(salesHits>0 && reviewHits>0 && maxRating>=4.7 && reviewCount>=10)?"HIGH":(salesHits>0 && (reviewHits>0||reviewCount>0))?"MEDIUM":"UNVERIFIED"
    };
    const discoveryQualifies=marketProof.salesEvidenceFound && marketProof.reviewEvidenceFound && maxRating>=4.5 && reviewCount>=1;

    return NextResponse.json({
      ok:true,
      investigation:{
        storefront:{url:url.toString(),status:response.status,title:(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]||"").trim()},
        marketProof,
        qualitySignals:{materialHits,provenanceHits,imageCount},
        discoveryQualifies,
        decision:discoveryQualifies?"INVESTIGATE":"MOVE_ON",
        caveat:"Automated first-pass evidence extraction only. It is not EAZY approval. Evidence must be verified against the source and product/sample before House approval.",
        capturedAt:new Date().toISOString()
      }
    });
  }catch(error){
    return NextResponse.json({ok:false,error:error instanceof Error?error.message:"Unable to investigate storefront."},{status:502});
  }
}
