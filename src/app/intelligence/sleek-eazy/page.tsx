"use client";
import { useEffect,useState } from "react";

type Candidate={id:string;title:string;vendor:string;productType:string;status:string;sourceType:string;sourceUrl:string;material:string;origin:string;qualityCheck:string;provenance:string;retail:string|null};

export default function SleekEazyIntelligence(){
 const [items,setItems]=useState<Candidate[]>([]); const [loading,setLoading]=useState(true);
 useEffect(()=>{fetch("/api/sourcing").then(r=>r.json()).then(d=>setItems(d.candidates||[])).finally(()=>setLoading(false))},[]);
 return <main className="sourcing-page">
  <header className="sourcing-head"><p className="eyebrow">SLEEK EAZY · HOUSE INTELLIGENCE</p><h1>Supplier<br/><em>Intelligence.</em></h1><p>Nothing enters the catalogue until its source, material, origin, evidence and quality path can be understood.</p></header>
  <section className="sourcing-law"><p className="eyebrow">APPROVAL LAW</p><h2>SOURCE → EVIDENCE → SAMPLE → INSPECT → APPROVE → SHOPIFY</h2></section>
  <section className="sourcing-table"><div className="sourcing-row sourcing-label"><span>PRODUCT</span><span>SOURCE</span><span>ORIGIN</span><span>QC</span><span>STATUS</span></div>
  {loading?<div className="sourcing-empty">Loading live sourcing records…</div>:items.length?items.map(x=><div className="sourcing-row" key={x.id}><strong>{x.title}</strong><span>{x.vendor||"Not recorded"}</span><span>{x.origin||"Not recorded"}</span><span>{x.qualityCheck||"Pending"}</span><b>{x.status.replace("_"," ")}</b></div>):<div className="sourcing-empty"><h3>No sourcing records yet.</h3><p>That is intentional. Add a verified candidate before anything becomes a SLEEK EAZY product.</p></div>}
  </section>
 </main>
}
