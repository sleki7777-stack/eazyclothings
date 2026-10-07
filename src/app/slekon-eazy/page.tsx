"use client";

import { useState } from "react";
const items=[
 {name:"Obsidian Link Bracelet",type:"Bracelets",price:"₦48,000",img:"https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1200&q=88"},
 {name:"House Meridian Watch",type:"Watches",price:"₦165,000",img:"https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=88"},
 {name:"Lagos Frame",type:"Eyewear",price:"₦72,000",img:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=88"},
 {name:"Noir Leather Carry",type:"Bags",price:"₦120,000",img:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=88"},
 {name:"House Line Belt",type:"Belts",price:"₦55,000",img:"https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=1200&q=88"},
 {name:"After Hours Runner",type:"Footwear",price:"₦135,000",img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=88"}
];
const cats=["ALL","BRACELETS","WATCHES","BAGS","BELTS","EYEWEAR","FOOTWEAR","GIFTS"];
export default function Slekon(){const [cat,setCat]=useState("ALL");const [bag,setBag]=useState<string[]>([]);const filtered=cat==="ALL"?items:items.filter(x=>x.type.toUpperCase()===cat||cat==="GIFTS");
return <main className="slekon-page">
<header className="slekon-nav"><a href="/" className="back">EAZY</a><div className="slekon-word"><span>SLEKON</span> EAZY</div><a href="/composition">Composition <span>{bag.length}</span></a></header>
<section className="slekon-hero"><div className="slekon-heroimg"></div><div className="slekon-herotext"><p className="eyebrow">SLEKON EAZY · CURATED OBJECTS</p><h1>Objects for<br/><em>the well-dressed man.</em></h1><p>Premium accessories and gifts for the moments that matter — whether or not you came for an EAZY garment.</p><div className="actions"><a className="primary" href="#shop">Shop the collection ↘</a><a className="secondary light" href="/">Discover EAZY clothing ↗</a></div></div></section>
<section className="slekon-intro"><p className="eyebrow">THE IDEA</p><h2>You do not have to buy<br/>the cloth to enter the world.</h2><p>Come for a bracelet. Stay for the details. Choose a birthday gift, an anniversary piece, a watch for a milestone, or complete an EAZY creation with objects selected for the composition.</p></section>
<section id="shop" className="slekon-shop"><div className="sectionhead"><div><p className="eyebrow">SLEKON EAZY</p><h2>Curated now.</h2></div></div><div className="filters">{cats.map(c=><button key={c} className={cat===c?"active":""} onClick={()=>setCat(c)}>{c}</button>)}</div><div className="slekon-grid">{filtered.map(x=><article className="slekon-card" key={x.name}><div className="slekon-img"><img src={x.img} alt={x.name}/><button onClick={()=>setBag([...bag,x.name])}>Add</button></div><p>{x.type}</p><h3>{x.name}</h3><strong>{x.price}</strong></article>)}</div></section>
<section className="gift-section"><div><p className="eyebrow">GIFTING</p><h2>Give something<br/><em>worth remembering.</em></h2></div><div><p>Birthdays. Anniversaries. Weddings. Promotions. Father’s Day. Milestones. Or no occasion at all.</p><a className="primary" href="#shop">Find a gift ↗</a></div></section>
<section className="slekon-bridge"><p className="eyebrow">CREATING AN EAZY LOOK?</p><h2>Take what you love<br/><em>back to your composition.</em></h2><p>Your selected SLEKON EAZY pieces can travel with you. Return to EAZY, review the full composition and validate before commissioning.</p><a className="primary dark" href="/composition">Return to EAZY Composition ↗</a></section>
<footer><a href="/">EAZY CLOTHING EXQUISITES</a><span>SLEKON EAZY</span><small>CURATED OBJECTS · LAGOS</small></footer>
</main>}