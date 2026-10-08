"use client";

import { FormEvent, useState } from "react";

type Investigation = {
  storefront:{url:string;status:number;title:string};
  marketProof:{salesEvidenceFound:boolean;reviewEvidenceFound:boolean;rating:number;reviewCount:number;confidence:string};
  qualitySignals:{materialHits:number;provenanceHits:number;imageCount:number};
  discoveryQualifies:boolean;
  decision:"INVESTIGATE"|"MOVE_ON";
  caveat:string;
  capturedAt:string;
};

export default function SupplierInvestigationPage(){
  const [url,setUrl]=useState("");
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState("");
  const [result,setResult]=useState<Investigation|null>(null);
  const [products,setProducts]=useState<any[]>([]);
  const [productLoading,setProductLoading]=useState(false);

  async function investigate(e:FormEvent){
    e.preventDefault(); setLoading(true); setError(""); setResult(null);
    try{
      const res=await fetch("/api/sourcing/investigate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url})});
      const data=await res.json();
      if(!res.ok || !data.ok) throw new Error(data.error||"Investigation failed.");
      setResult(data.investigation);
    }catch(err){setError(err instanceof Error?err.message:"Investigation failed.");}
    finally{setLoading(false);}
  }

  async function inspectProducts(){
    if(!url) return;
    setProductLoading(true); setError("");
    try{
      const res=await fetch("/api/sourcing/investigate/products",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url})});
      const data=await res.json();
      if(!res.ok || !data.ok) throw new Error(data.error||"Product extraction failed.");
      setProducts(data.candidates||[]);
    }catch(err){setError(err instanceof Error?err.message:"Product extraction failed.");}
    finally{setProductLoading(false);}
  }

  return <main className="sleek-investigation">
    <div className="sleek-investigation__eyebrow">SLEEK EAZY / SUPPLIER INTELLIGENCE</div>
    <h1>We do not shop catalogues.<br/><em>We investigate them.</em></h1>
    <p className="sleek-investigation__intro">Enter a real supplier storefront. EAZY first checks for market proof and positive customer signals. Only suppliers that earn a place continue to product-level quality screening.</p>

    <form onSubmit={investigate} className="sleek-investigation__form">
      <label htmlFor="supplier-url">Supplier storefront URL</label>
      <div className="sleek-investigation__inputrow">
        <input id="supplier-url" value={url} onChange={e=>setUrl(e.target.value)} placeholder="https://supplier-storefront.com" required />
        <button disabled={loading}>{loading?"INVESTIGATING…":"INVESTIGATE"}</button>
      </div>
      <small>Automated first-pass research only. No product is approved from this screen.</small>
    </form>

    {error && <div className="sleek-investigation__error">{error}</div>}

    {result && <section className="sleek-investigation__result">
      <div className={"sleek-investigation__decision "+(result.discoveryQualifies?"pass":"move")}>
        <span>{result.discoveryQualifies?"INVESTIGATE FURTHER":"MOVE ON"}</span>
        <strong>{result.storefront.title || result.storefront.url}</strong>
      </div>

      <div className="sleek-investigation__grid">
        <article><span>MARKET PROOF</span><strong>{result.marketProof.salesEvidenceFound?"FOUND":"NOT FOUND"}</strong><p>Sales / traction signals detected on the storefront.</p></article>
        <article><span>REVIEWS</span><strong>{result.marketProof.rating ? result.marketProof.rating.toFixed(1)+"/5" : "NOT FOUND"}</strong><p>{result.marketProof.reviewCount ? result.marketProof.reviewCount.toLocaleString()+" review signals" : "No reliable review count detected."}</p></article>
        <article><span>EVIDENCE CONFIDENCE</span><strong>{result.marketProof.confidence}</strong><p>Confidence in the automated discovery signals.</p></article>
        <article><span>PRODUCT SIGNALS</span><strong>{result.qualitySignals.materialHits + result.qualitySignals.provenanceHits}</strong><p>{result.qualitySignals.materialHits} material/provenance terms detected across the storefront.</p></article>
      </div>

      <div className="sleek-investigation__products-head">
        <div><b>PRODUCT DISCOVERY</b><p>Now inspect the supplier's actual product pages. Only products with market proof and strong evidence move into the best-of-supplier selection screen.</p></div>
        <button onClick={inspectProducts} disabled={productLoading}>{productLoading?"EXTRACTING…":"INSPECT PRODUCTS"}</button>
      </div>
      {products.length>0 && <div className="sleek-investigation__products">
        {products.map((p:any)=><article key={p.sourceUrl+p.title}>
          {p.images[0] ? <img src={p.images[0]} alt="" /> : <div className="sleek-investigation__noimage">NO IMAGE</div>}
          <div className="sleek-investigation__productbody">
            <span>#{p.rank} · {p.brand||"UNBRANDED"}</span>
            <h3>{p.title}</h3>
            <div className="sleek-investigation__productmeta">
              <b>{p.rating ? p.rating.toFixed(1)+"/5" : "NO RATING"}</b>
              <b>{p.reviewCount ? p.reviewCount.toLocaleString()+" REVIEWS" : "NO REVIEW COUNT"}</b>
              <b>{p.material||"MATERIAL NOT DISCLOSED"}</b>
            </div>
            <p>{p.description||"No product description extracted."}</p>
            <strong className={p.rating>=4.5&&p.reviewCount>0?"evidence-pass":"evidence-pending"}>{p.marketProof}</strong>
          </div>
        </article>)}
      </div>}
      {products.length>0 && <button className="sleek-investigation__selectall" onClick={async()=>{
        setProductLoading(true); setError("");
        try{
          const candidates=products.map((p:any,i:number)=>({
            id:"investigated-"+i,
            supplierId:"investigated-supplier",
            title:p.title,
            sourceUrl:p.sourceUrl,
            tier:"SELECT",
            world:"GLOBAL_SELECT",
            brand:p.brand,
            material:p.material,
            origin:p.origin,
            imageUrls:p.images||[],
            authenticityEvidence:p.brand ? "Brand recorded from product evidence." : undefined,
            provenanceEvidence:p.description||undefined,
            qualityNotes:p.description||"",
            status:"CANDIDATE",
            createdAt:new Date().toISOString(),
            updatedAt:new Date().toISOString(),
            marketProof:{
              salesSignal:p.salesEvidence ? "Storefront traction signal detected." : undefined,
              reviewCount:p.reviewCount,
              rating:p.rating,
              reviewEvidence:p.reviewCount ? "Product review evidence detected." : undefined,
              salesEvidence:p.salesEvidence ? [{value:p.salesEvidence,sourceUrl:p.sourceUrl,capturedAt:new Date().toISOString(),confidence:"MEDIUM"}] : []
            }
          }));
          const res=await fetch("/api/sourcing/select",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
            supplier:{id:"investigated-supplier",name:result?.storefront.title||"Investigated Supplier",website:url,country:"UNKNOWN",categories:[],manufacturingOrigin:"UNKNOWN",materials:[],wholesaleAvailable:false,privateLabel:false,sampleAvailable:false},
            candidates
          })});
          const data=await res.json();
          if(!res.ok||!data.ok) throw new Error(data.error||"Selection failed.");
          setProducts((products as any[]).map((p:any,i:number)=>({...p,selection:data.report.selected.includes("investigated-"+i)?"SELECTED":"REJECTED",selectionReasons:data.report.rejected.find((r:any)=>r.candidateId==="investigated-"+i)?.reasons||[]})));
        }catch(err){setError(err instanceof Error?err.message:"Selection failed.");}
        finally{setProductLoading(false);}
      }}>{productLoading?"RANKING…":"RUN BEST-OF-SUPPLIER SELECTION"}</button>}
      <div className="sleek-investigation__rule">
        <b>HOUSE RULE</b>
        <p>Market demand gets a supplier through the door. It does not get a product into the house. Material, craftsmanship, finish, durability, authenticity, verification and final EAZY House approval still have to be earned. No sample stage is required.</p>
      </div>
      <small>{result.caveat}</small>
    </section>}
  </main>;
}
