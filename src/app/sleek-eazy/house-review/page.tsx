"use client";

import { useState } from "react";

export default function HouseReviewPage(){
  const [candidate,setCandidate]=useState("");
  const [reviewer,setReviewer]=useState("EAZY HOUSE");
  const [notes,setNotes]=useState("");
  const [message,setMessage]=useState("");
  const [loading,setLoading]=useState(false);

  async function decide(decision:"APPROVE"|"REJECT"){
    setLoading(true); setMessage("");
    try{
      const parsed=JSON.parse(candidate);
      const res=await fetch("/api/sourcing/house-review",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({candidate:parsed,decision,reviewer,notes})});
      const data=await res.json();
      if(!res.ok||!data.ok) throw new Error(data.error||"House review failed.");
      setMessage(data.reason);
    }catch(e){setMessage(e instanceof Error?e.message:"Invalid candidate JSON.");}
    finally{setLoading(false);}
  }

  return <main className="sleek-investigation">
    <div className="sleek-investigation__eyebrow">SLEEK EAZY / HOUSE REVIEW</div>
    <h1>Selected is not approved.<br/><em>The House decides.</em></h1>
    <p className="sleek-investigation__intro">Only a product that has cleared market-proof and quality gates can be reviewed here. Approval is explicit and unlocks the Shopify publishing pipeline.</p>
    <label>Candidate record</label>
    <textarea value={candidate} onChange={e=>setCandidate(e.target.value)} placeholder='Paste the selected candidate JSON here…' style={{width:"100%",minHeight:260,marginTop:12}} />
    <label style={{display:"block",marginTop:18}}>Reviewer</label>
    <input value={reviewer} onChange={e=>setReviewer(e.target.value)} style={{width:"100%",marginTop:8}} />
    <label style={{display:"block",marginTop:18}}>House notes</label>
    <textarea value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Why this product earns—or does not earn—the EAZY signature." style={{width:"100%",minHeight:120,marginTop:8}} />
    <div style={{display:"flex",gap:12,marginTop:18}}>
      <button disabled={loading} onClick={()=>decide("APPROVE")}>APPROVE FOR SHOPIFY</button>
      <button disabled={loading} onClick={()=>decide("REJECT")}>REJECT</button>
    </div>
    {message&&<div className="sleek-investigation__result" style={{marginTop:20}}>{message}</div>}
    <div className="sleek-investigation__rule" style={{marginTop:24}}>
      <b>NON-NEGOTIABLE</b>
      <p>Selection never publishes a product. Only explicit House approval unlocks the publishing path. Rejection keeps the product blocked.</p>
    </div>
  </main>;
}
