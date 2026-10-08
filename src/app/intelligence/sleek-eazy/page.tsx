"use client";
import { useEffect,useMemo,useState } from "react";
import { REAL_SOURCING_CANDIDATES, REAL_SUPPLIER_CANDIDATES } from "@/lib/sleek-eazy-candidates";
import { SUPPLIER_PIPELINE, supplierStatusLabel, evaluateQualityGate, type SupplierPipelineStatus, type ProductCandidate } from "@/lib/sleek-eazy-intelligence";

type Candidate={id:string;title:string;vendor?:string;brand?:string;productType?:string;world?:string;status:string;sourceType?:string;sourceUrl:string;material?:string;origin?:string;qualityCheck?:string;provenance?:string;retail?:number|string|null};

const initialSupplierStatus:Record<string,SupplierPipelineStatus> = Object.fromEntries(
  REAL_SUPPLIER_CANDIDATES.map(s=>[s.id,"DISCOVERED"])
) as Record<string,SupplierPipelineStatus>;

export default function SleekEazyIntelligence(){
 const [items,setItems]=useState<Candidate[]>([]);
 const [loading,setLoading]=useState(true);
 const [supplierStatus,setSupplierStatus]=useState(initialSupplierStatus);
 const [filter,setFilter]=useState<"ALL"|SupplierPipelineStatus>("ALL");

 useEffect(()=>{
   fetch("/api/sourcing")
    .then(r=>r.json())
    .then(d=>setItems([
      ...(REAL_SOURCING_CANDIDATES as any[]).map(x=>({
        id:x.id,title:x.title,brand:x.brand,world:x.world,status:x.status,
        sourceUrl:x.sourceUrl,material:x.material,origin:x.origin,
        qualityCheck:x.qcStatus,provenance:x.provenanceEvidence
      })),
      ...(d.candidates||[])
    ]))
    .catch(()=>setItems(REAL_SOURCING_CANDIDATES as any))
    .finally(()=>setLoading(false))
 },[]);

 const visibleSuppliers=useMemo(()=>REAL_SUPPLIER_CANDIDATES.filter(s=>filter==="ALL"||supplierStatus[s.id]===filter),[filter,supplierStatus]);

 return <main className="sourcing-page">
  <header className="sourcing-head">
   <p className="eyebrow">SLEEK EAZY · HOUSE INTELLIGENCE</p>
   <h1>Supplier<br/><em>Intelligence.</em></h1>
   <p>Nothing enters the catalogue until its source, material, origin, evidence and quality path can be understood.</p>
  </header>

  <section className="sourcing-law">
   <p className="eyebrow">HOUSE APPROVAL LAW</p>
   <h2>SOURCE → EVIDENCE → SAMPLE → INSPECT → APPROVE → SHOPIFY</h2>
   <p>Supplier discovery is not approval. A beautiful listing is not proof. Every product must survive evidence and physical quality control.</p>
  </section>

  <section className="sourcing-table">
   <div className="quality-banner"><span>QUALITY GATE</span><strong>NO APPROVED QC · NO CUSTOMER SALE</strong><small>Candidate records are scored for evidence completeness. A score is not approval.</small></div>
   <div className="sourcing-row sourcing-label"><span>PRODUCT</span><span>SOURCE</span><span>ORIGIN</span><span>QC</span><span>STATUS</span></div>
   {loading
    ? <div className="sourcing-empty">Loading live sourcing records…</div>
    : items.length
      ? items.map(x=><div className="sourcing-row" key={x.id}>
          <strong>{x.title}<small>{x.brand||x.vendor||""}{x.world ? " · "+x.world : ""}</small></strong>
          <span>{x.sourceUrl ? <a href={x.sourceUrl} target="_blank" rel="noreferrer">SOURCE</a> : "Pending"}</span>
          <span>{x.origin||"Not recorded"}</span>
          <span>{x.qualityCheck||"Pending"}</span>
          <b>{x.status.replaceAll("_"," ")}</b>
        </div>)
      : <div className="sourcing-empty"><h3>No sourcing records yet.</h3><p>That is intentional. Add a verified candidate before anything becomes a SLEEK EAZY product.</p></div>}
  </section>

  <section className="sourcing-suppliers">
   <div className="sourcing-section-head">
    <div><p className="eyebrow">SUPPLIER PIPELINE · {REAL_SUPPLIER_CANDIDATES.length}</p><h2>From discovery to House approval.</h2></div>
    <span>NO PRODUCT SKIPS QC</span>
   </div>

   <div className="sourcing-filters">
    {(["ALL",...SUPPLIER_PIPELINE] as const).map(status=>
      <button key={status} type="button" className={filter===status?"is-active":""} onClick={()=>setFilter(status)}>
        {status==="ALL" ? "ALL" : supplierStatusLabel(status)}
      </button>
    )}
   </div>

   <div className="supplier-grid">
    {visibleSuppliers.map(s=>{
      const status=supplierStatus[s.id];
      const currentIndex=SUPPLIER_PIPELINE.indexOf(status);
      return <article className="supplier-card" key={s.id}>
        <div className="supplier-card-top"><p className="eyebrow">{s.country} · {s.categories[0]}</p><b>{supplierStatusLabel(status)}</b></div>
        <h3>{s.name}</h3>
        <p>{s.notes||"Supplier candidate. Verification required."}</p>
        <div className="supplier-meta"><span>Materials: {s.materials.join(", ")}</span><span>Sample: {s.sampleAvailable ? "Available" : "Not confirmed"}</span><span>Approval remains blocked until evidence + physical QC are complete.</span></div>
        <div className="supplier-progress" aria-label={"Supplier stage "+(currentIndex+1)+" of "+SUPPLIER_PIPELINE.length}>
          {SUPPLIER_PIPELINE.map((stage,i)=><span key={stage} className={i<=currentIndex?"is-complete":""}/>)}
        </div>
        <div className="supplier-actions">
          <a href={s.website} target="_blank" rel="noreferrer">OPEN SOURCE</a>
          {status!=="APPROVED" && <button type="button" onClick={()=>setSupplierStatus(prev=>({...prev,[s.id]:SUPPLIER_PIPELINE[Math.min(currentIndex+1,SUPPLIER_PIPELINE.length-1)]}))}>ADVANCE STAGE</button>}
        </div>
        <small className="supplier-note">Local stage only until supplier evidence/terms are actually received. No claim of contact or approval is made.</small>
      </article>
    })}
   </div>
  </section>
 </main>
}
