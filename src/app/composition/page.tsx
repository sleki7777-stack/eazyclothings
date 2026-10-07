"use client";

import { useEffect, useState } from "react";

const fallbackAccessories=["Obsidian Link Bracelet","House Meridian Watch","Lagos Frame"];

type AtelierState = {
  photo?: string;
  size?: string;
  garment?: string;
  approved?: boolean;
};

export default function Composition(){
  const [validated,setValidated]=useState(false);
  const [atelier,setAtelier]=useState<AtelierState>({});
  const [accessories,setAccessories]=useState<string[]>(fallbackAccessories);

  useEffect(()=>{
    try{
      const saved=localStorage.getItem("eazy-atelier");
      if(saved)setAtelier(JSON.parse(saved));
      const sleek=localStorage.getItem("eazy-sleek-bag");
      if(sleek){
        const selected=JSON.parse(sleek);
        if(Array.isArray(selected)&&selected.length)setAccessories(selected);
      }
    }catch{}
  },[]);

  const approved=atelier.approved===true;

  return <main className="composition-page">
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
          <p>Textile: Lagos Soil · Fit: {atelier.size || "L"} · Edition: 07 of 24</p>
          {!approved&&<small>Approve your design reference in Atelier before validation.</small>}
        </div>
      </div>
      <aside>
        <p className="eyebrow">YOUR ADDITIONS</p>
        {accessories.map((x,i)=><div className="addition" key={x+i}><span>{String(i+1).padStart(2,"0")}</span><div><strong>{x}</strong><small>SLEEK EAZY · SELECTED</small></div><button onClick={()=>{const next=accessories.filter((_,index)=>index!==i);setAccessories(next);localStorage.setItem("eazy-sleek-bag",JSON.stringify(next));}}>×</button></div>)}
        <a className="composition-add" href="/sleek-eazy">+ Add from SLEEK EAZY</a>
        <div className={validated?"validation approved":"validation"}><span>{validated?"VALIDATED":"READY TO VALIDATE"}</span><p>{validated?"Your composition is locked for the next commissioning step.":"We will check garment configuration, textile availability, edition, selected additions and final composition before production."}</p></div>
        <button className="primary dark validate" disabled={!approved} onClick={()=>setValidated(true)}>{!approved?"Approve Design First":validated?"Composition Locked ✓":"Validate My Composition →"}</button>
      </aside>
    </section>
    <section className="composition-law"><p className="eyebrow">HOUSE LAW</p><h2>EAZY creates the work.<br/>SLEEK EAZY completes the world.<br/><em>You approve the composition.</em></h2></section>
  </main>
}