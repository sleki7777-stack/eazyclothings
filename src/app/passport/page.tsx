"use client";

import { useEffect, useState } from "react";
import EazyThread from "@/components/EazyThread";

type AtelierState={garment?:string;size?:string;approved?:boolean;textile?:string;collar?:string;sleeve?:string;fit?:string;finish?:string};

export default function Passport(){
 const [a,setA]=useState<AtelierState>({});
 const [objects,setObjects]=useState<string[]>([]);
 useEffect(()=>{try{setA(JSON.parse(localStorage.getItem("eazy-atelier")||"{}"));const x=JSON.parse(localStorage.getItem("eazy-sleek-bag")||"[]");if(Array.isArray(x))setObjects(x)}catch{}},[]);
 const locked=a.approved===true;
 return <main className="passport-page">
  <EazyThread current="seal"/>
  <header className="passport-nav"><a href="/">EAZY</a><span>EAZY PASSPORT</span><a href="/composition">Composition ↗</a></header>
  <section className="passport-hero"><p className="eyebrow">EAZY MASTER SEAL · DIGITAL PROVENANCE</p><div className="passport-mark">E</div><h1>WORK 001<br/><em>LAGOS SOIL</em></h1><p>{locked?"This reference is locked as the approved design direction.":"Your provenance record begins when the Atelier reference is approved."}</p></section>
  <section className="passport-grid">
   <div><p className="eyebrow">THE WORK</p><h2>{a.garment||"Modern Native / Senator"}</h2><p>Collection: Lagos Soil<br/>Edition: 07 of 24<br/>Status: {locked?"Approved direction":"Awaiting approval"}</p></div>
   <div><p className="eyebrow">TEXTILE + FORM</p><p><strong>{a.textile||"Lagos Earth"}</strong><br/>{a.collar||"Band Collar"} · {a.sleeve||"Long"} sleeve<br/>{a.fit||a.size||"L"} fit · {a.finish||"Hand Finish"}</p></div>
   <div><p className="eyebrow">COMPOSITION</p><p>{objects.length?objects.length+" SLEEK EAZY object"+(objects.length>1?"s":"")+" selected":"No SLEEK EAZY objects selected yet."}</p></div>
  </section>
  <section className="passport-history"><p className="eyebrow">PROVENANCE CHAIN</p>{["DESIGN REFERENCE","TEXTILE","CRAFT","PRODUCTION","QUALITY CONTROL","MASTER SEAL","OWNER"].map((x,i)=><div key={x}><span>{String(i+1).padStart(2,"0")}</span><strong>{x}</strong><small>{i<2&&locked?"RECORDED":"PENDING · PRODUCTION LAYER"}</small></div>)}</section>
  <section className="passport-note"><p className="eyebrow">EAZY PASSPORT</p><h2>The story stays<br/><em>with the work.</em></h2><p>Production identifiers, measurements and private customer information are intentionally excluded from this public-facing prototype.</p></section>
 </main>
}