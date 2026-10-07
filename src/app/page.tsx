"use client";

import { useState } from "react";

const looks = [
  {code:"WORK 001",name:"Lagos Soil",type:"Native / Senator",img:"https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1400&q=88"},
  {code:"WORK 004",name:"After Dark",type:"Tailoring / Evening",img:"https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1400&q=88"},
  {code:"WORK 009",name:"Concrete",type:"Utility / Relaxed",img:"https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=1400&q=88"},
  {code:"WORK 012",name:"Waterline",type:"Resort / Shirting",img:"https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?auto=format&fit=crop&w=1400&q=88"},
  {code:"WORK 018",name:"House Quarter",type:"Knitwear / Heritage",img:"https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1400&q=88"},
  {code:"WORK 021",name:"Indigo Night",type:"Denim / Relaxed",img:"https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1400&q=88"}
];
const categories=["ALL","TAILORING","NATIVE","SHIRTING","KNITWEAR","OUTERWEAR","UTILITY","RELAXED","RESORT","DENIM","ACTIVE / SWIM","LOUNGE / NIGHT","HEADWEAR"];

export default function Home(){
 const [menu,setMenu]=useState(false); const [filter,setFilter]=useState("ALL"); const [atelier,setAtelier]=useState(false);
 const visible=filter==="ALL"?looks:looks.filter(x=>x.type.toUpperCase().includes(filter.replace(" / "," / ")));
 return <main>
  <header className="nav">
   <a className="brand" href="#top"><span className="needle">E</span><span>EAZY</span></a>
   <nav className={menu?"navlinks open":"navlinks"}>
    <a href="#house" onClick={()=>setMenu(false)}>The House</a><a href="#collections" onClick={()=>setMenu(false)}>Collections</a><a href="#atelier" onClick={()=>setMenu(false)}>Atelier</a><a href="#wardrobe" onClick={()=>setMenu(false)}>Wardrobe</a><a href="#runway" onClick={()=>setMenu(false)}>Runway</a><a href="#journal" onClick={()=>setMenu(false)}>Journal</a>
   </nav>
   <div className="navtools"><a href="/slekon-eazy">SLEKON EAZY</a><a href="/atelier">Enter Atelier</a><button>Bag 0</button></div>
   <button className="menubtn" onClick={()=>setMenu(!menu)} aria-label="Open menu">☰</button>
  </header>

  <section id="top" className="hero"><div className="heroimage"></div><div className="heroshade"></div><div className="herooverlay">
   <p className="eyebrow">EAZY CLOTHING EXQUISITES · LAGOS</p><h1>CRAFTED IN LAGOS.<br/><i>DESIGNED FOR EVERYWHERE.</i></h1>
   <p className="heroquote">A contemporary men's fashion house where Lagos becomes a design language.</p>
   <div className="actions"><a className="primary" href="#collections">Explore the works <span>↗</span></a><a className="ghost" href="/atelier">Enter the Atelier</a></div>
  </div><div className="scroll">SCROLL TO EXPLORE <span>↓</span></div></section>

  <section id="house" className="statement section"><div><p className="eyebrow">THE HOUSE</p><h2>Lagos is the soil.<br/>Craft is the foundation.<br/><em>Design is the expression.</em></h2></div><div className="copy"><p>EAZY does not simply make clothes. We create works shaped by Lagos — its movement, heat, craft, nights, people and contradictions — translated into contemporary form for the world.</p><a href="#journal">Discover the House ↗</a></div></section>

  <section id="collections" className="works section"><div className="sectionhead"><div><p className="eyebrow">EAZY WORKS</p><h2>Classic, current, EAZY.</h2></div><a href="#journal">View archive ↗</a></div>
   <div className="filters">{categories.map(c=><button key={c} className={filter===c?"active":""} onClick={()=>setFilter(c)}>{c}</button>)}</div>
   <div className="grid">{visible.map((x,i)=><article className="work" key={x.code}><div className="workimg"><img src={x.img} alt={x.name}/><span className="workno">{String(i+1).padStart(2,"0")}</span><span className="workseal">E</span></div><div className="workmeta"><div><span>{x.code}</span><h3>{x.name}</h3></div><p>{x.type}</p></div></article>)}</div>
  </section>

  <section id="atelier" className="atelier section"><div className="ateliervisual"><img src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1800&q=88" alt="Textile and tailoring detail"/></div><div className="ateliercopy"><p className="eyebrow">EAZY DIGITAL ATELIER</p><h2>Build the work.<br/><em>Make it yours.</em></h2><p>Choose a design language, textile direction and configuration. Save the look, request a commission and carry the work into your EAZY Wardrobe.</p><a className="primary dark" href="/atelier">Enter Atelier ↗</a><div className="atelierfacts"><span>TEXTILE ARCHIVE</span><span>CONTROLLED CONFIGURATION</span><span>COMMISSION</span></div></div></section>

  <section className="composition-promo"><div><p className="eyebrow">EAZY COMPOSITION</p><h2>Create the garment.<br/><em>Complete the world around it.</em></h2><p>When you are ready, move between EAZY and SLEKON EAZY. Add the pieces you want, return to your composition and validate the exact combination before commissioning.</p></div><div className="composition-actions"><a className="primary" href="/slekon-eazy">Enter SLEKON EAZY ↗</a><a className="secondary" href="/composition">Review a composition ↗</a></div></section>

  <section id="wardrobe" className="wardrobe section"><p className="eyebrow">EAZY WARDROBE</p><h2>One house.<br/><em>Many ways to move.</em></h2><div className="wardrobegrid"><div><span>01</span><h3>Native</h3><p>Senator, two-piece, kaftan, agbada and contemporary native forms.</p></div><div><span>02</span><h3>Tailoring</h3><p>Sharp proportions, African tailoring and modern formalwear.</p></div><div><span>03</span><h3>Everyday</h3><p>Shirting, knitwear, relaxed forms, denim, resort and outerwear.</p></div><div><span>04</span><h3>Headwear</h3><p>House-designed caps, structured forms and culturally informed silhouettes.</p></div></div></section>

  <section id="runway" className="runway"><div className="runwaybg"></div><div className="runwaycopy"><p className="eyebrow">EAZY RUNWAY</p><h2>THE WORLD<br/><em>SEES LAGOS.</em></h2><p>Digital presentation for physical works. A cinematic space for collections, movement and the House point of view.</p><a className="primary" href="#journal">Enter Runway ↗</a></div></section>

  <section id="journal" className="journal section"><div className="sectionhead"><div><p className="eyebrow">FROM THE HOUSE</p><h2>Notes, material, movement.</h2></div><a href="#top">All journal ↗</a></div><div className="journalgrid"><article><span>01 · ORIGIN</span><h3>Lagos, translated.</h3><p>How heat, movement, concrete and ceremony become design vocabulary.</p></article><article><span>02 · CRAFT</span><h3>The hand behind the work.</h3><p>Textile, construction, finishing and the quiet discipline of making well.</p></article><article><span>03 · INTELLIGENCE</span><h3>Signals become EAZY.</h3><p>Global movement enters the House, is deconstructed, interpreted and reviewed.</p></article></div></section>

  <section className="seal-section"><div className="sealmark">E</div><div><p className="eyebrow">EAZY MASTER SEAL</p><h2>Every work has a story.<br/><em>Every story stays with the work.</em></h2><p>Collection → textile → design → craft → production → QC → edition → owner.</p></div></section>

  <footer><div className="footerbrand"><span className="needle">E</span><strong>EAZY</strong><small>CLOTHING EXQUISITES</small></div><p>CRAFTED IN LAGOS. DESIGNED FOR EVERYWHERE.</p><div className="footlinks"><a href="#house">The House</a><a href="#collections">Collections</a><a href="#atelier">Atelier</a><a href="/slekon-eazy">SLEKON EAZY</a><a href="#journal">Journal</a></div><small>© {new Date().getFullYear()} EAZY CLOTHING EXQUISITES. LAGOS.</small></footer>

  {false&&<div className="modal"><div className="modalcard"><button className="close" onClick={()=>setAtelier(false)}>×</button><p className="eyebrow">DIGITAL ATELIER</p><h2>Begin your EAZY work.</h2><p>Select a design family to continue. Configuration, textile and commission controls will connect to the production system.</p><div className="modalchoices"><button>Native / Senator</button><button>Tailoring</button><button>Shirting</button><button>Resort / Relaxed</button></div><a className="primary dark" href="/composition">Continue to Composition ↗</a></div></div>}
 </main>
}