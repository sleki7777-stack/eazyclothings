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

      <div className="sleek-investigation__rule">
        <b>HOUSE RULE</b>
        <p>Market demand gets a supplier through the door. It does not get a product into the house. Material, craftsmanship, finish, durability, authenticity, sample/QC and final EAZY approval still have to be earned.</p>
      </div>
      <small>{result.caveat}</small>
    </section>}
  </main>;
}
