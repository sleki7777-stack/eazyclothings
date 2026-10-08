"use client";

import { useEffect, useState } from "react";
import EazyThread from "@/components/EazyThread";


type CompositionItem = { productId?: string; variantId?: string; title?: string; productType?: string; price?: string };

type AtelierState = {
  photo?: string;
  size?: string;
  garment?: string;
  approved?: boolean;
  textile?: string;
  collar?: string;
  sleeve?: string;
  fit?: string;
  finish?: string;
  previewTone?: string;
  designerMessage?: string;
};

export default function Composition(){
  const [validated,setValidated]=useState(false);
  const [atelier,setAtelier]=useState<AtelierState>({});
  const [accessories,setAccessories]=useState<CompositionItem[]>([]);
  const [shopUrl,setShopUrl]=useState("");
  const [shopError,setShopError]=useState("");
  const [shopBusy,setShopBusy]=useState(false);

  useEffect(()=>{
    try{
      const saved=localStorage.getItem("eazy-atelier");
      if(saved)setAtelier(JSON.parse(saved));
      const sleek=localStorage.getItem("eazy-sleek-bag");
      if(sleek){
        const selected=JSON.parse(sleek);
        if(Array.isArray(selected))setAccessories(selected.map((entry)=>typeof entry==="string"?JSON.parse(entry):entry).filter(Boolean));
      }
    }catch{}
  },[]);

  const approved=atelier.approved===true;
  const designerMessage=atelier.designerMessage||"";

  function removeAccessory(index:number){
    const next=accessories.filter((_,i)=>i!==index);
    setAccessories(next);
    localStorage.setItem("eazy-sleek-bag",JSON.stringify(next.map((item)=>JSON.stringify(item))));
    setValidated(false);
    setShopUrl("");
    setShopError("");
  }

  async function prepareShopify(){
    setShopBusy(true); setShopError("");
    try{
      const response=await fetch("/api/shopify/checkout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({approved:true,compositionLocked:true,items:accessories.filter((item)=>item.variantId).map((item)=>({variantId:item.variantId,quantity:1})),composition:{garment:atelier.garment,textile:atelier.textile,collar:atelier.collar,sleeve:atelier.sleeve,fit:atelier.fit||atelier.size,finish:atelier.finish,edition:"07 of 24",designerNotes:designerMessage}})});
      const data=await response.json();
      if(!response.ok||!data?.checkoutUrl)throw new Error(data?.error||"Unable to prepare checkout.");
      setShopUrl(data.checkoutUrl);
    }catch(error){setShopError(error instanceof Error?error.message:"Unable to prepare checkout.");}
    finally{setShopBusy(false);}
  }

  return <main className="composition-page">
    <EazyThread current="composition" />
    <header className="composition-nav">
      <a href="/">← EAZY</a><span>COMPOSITION</span><a href="/sleek-eazy">SLEEK EAZY ↗</a>
    </header>
    <section className="composition-head">
      <p className="eyebrow">EAZY COMPOSITION · WORK 001</p>
      <h1>What you create<br/><em>is what you get.</em></h1>
      <p>Review the EAZY work and the SLEEK EAZY pieces you have selected before the composition is locked for commissioning.</p>
    </section>
    <section className="composition-grid">
      <div className="composition-work">
        <div className="composition-photo">
          {atelier.photo ? <img src={atelier.photo} alt="Your EAZY design reference"/> : <img src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1600&q=88" alt="EAZY Lagos Soil work"/>}
        </div>
        <div className="composition-meta">
          <span>WORK 001 · LAGOS SOIL</span>
          <h2>{atelier.garment || "Modern Native / Senator"}</h2>
          <p>{atelier.textile || "Lagos Earth"} · {atelier.collar || "Band Collar"} · {atelier.sleeve || "Long"} sleeve · {atelier.fit || atelier.size || "L"} fit · {atelier.finish || "Hand Finish"} · Edition: 07 of 24</p>
          {!approved&&<small>Approve the exact design reference in Atelier before validation. Any later change reopens approval.</small>}
        </div>
      </div>
      <aside>
        <p className="eyebrow">YOUR ADDITIONS</p>
        {accessories.map((x,i)=><div className="addition" key={(x.variantId||x.title||"item")+i}><span>{String(i+1).padStart(2,"0")}</span><div><strong>{x.title||"SLEEK EAZY object"}</strong><small>SLEEK EAZY · {x.productType||"SELECTED"} · {x.price?`₦${Number(x.price).toLocaleString()}`:"SELECTED"}</small></div><button onClick={()=>removeAccessory(i)}>×</button></div>)}
        <a className="composition-add" href="/sleek-eazy">+ Add from SLEEK EAZY</a>
        <div className={validated?"validation approved":"validation"}><span>{validated?"VALIDATED":"READY TO VALIDATE"}</span><p>{validated?"Your composition is locked for the next commissioning step.":"We will check the locked garment configuration, textile availability, edition, selected additions and final composition before production."}</p>{designerMessage&&<small>Designer note carried with this composition.</small>}</div>
        <button className="primary dark validate" disabled={!approved} onClick={()=>setValidated(true)}>{!approved?"Approve Design First":validated?"Composition Locked ✓":"Validate My Composition →"}</button>{validated&&accessories.some((item)=>item.variantId)&&<>{!shopUrl?<button className="primary validate" onClick={prepareShopify} disabled={shopBusy}>{shopBusy?"Preparing Shopify…":"Continue to Shopify Checkout →"}</button>:<a className="primary validate" href={shopUrl}>Open Shopify Checkout →</a>}{shopError&&<small>{shopError}</small>}</>}
      </aside>
    </section>
    <section className="composition-law"><p className="eyebrow">HOUSE LAW</p><h2>EAZY creates the work.<br/>SLEEK EAZY completes the world.<br/><em>You approve the composition.</em></h2></section>
  </main>
}