"use client";

import { useEffect, useMemo, useState } from "react";

const fallbackItems=[
 {name:"Obsidian Link Bracelet",type:"Bracelets",price:"₦48,000",img:"https://cdn.shopify.com/s/files/1/0725/3465/5094/collections/photo-1611591437281-460bfbe1220a.jpg?v=1791417235"},
 {name:"House Meridian Watch",type:"Watches",price:"₦165,000",img:"https://cdn.shopify.com/s/files/1/0725/3465/5094/collections/photo-1524805444758-089113d48a6d.jpg?v=1791417238"},
 {name:"Lagos Frame",type:"Eyewear",price:"₦72,000",img:"https://cdn.shopify.com/s/files/1/0725/3465/5094/collections/photo-1511499767150-a48a237f0083.jpg?v=1791417242"},
 {name:"Noir Leather Carry",type:"Bags",price:"₦120,000",img:"https://cdn.shopify.com/s/files/1/0725/3465/5094/collections/photo-1553062407-98eeb64c6a62.jpg?v=1791417245"},
 {name:"House Line Belt",type:"Belts",price:"₦55,000",img:"https://cdn.shopify.com/s/files/1/0725/3465/5094/collections/photo-1624222247344-550fb60583dc.jpg?v=1791417250"},
 {name:"After Hours Runner",type:"Footwear",price:"₦135,000",img:"https://cdn.shopify.com/s/files/1/0725/3465/5094/collections/photo-1542291026-7eec264c27ff.jpg?v=1791417254"}
];

const collections=[
 {name:"Bracelets",type:"BRACELETS",image:"https://cdn.shopify.com/s/files/1/0725/3465/5094/collections/photo-1611591437281-460bfbe1220a.jpg?v=1791417235",description:"Wrist objects"},
 {name:"Watches",type:"WATCHES",image:"https://cdn.shopify.com/s/files/1/0725/3465/5094/collections/photo-1524805444758-089113d48a6d.jpg?v=1791417238",description:"Timepieces"},
 {name:"Eyewear",type:"EYEWEAR",image:"https://cdn.shopify.com/s/files/1/0725/3465/5094/collections/photo-1511499767150-a48a237f0083.jpg?v=1791417242",description:"Frames"},
 {name:"Leather Carry",type:"BAGS",image:"https://cdn.shopify.com/s/files/1/0725/3465/5094/collections/photo-1553062407-98eeb64c6a62.jpg?v=1791417245",description:"Bags & carry"},
 {name:"Belts",type:"BELTS",image:"https://cdn.shopify.com/s/files/1/0725/3465/5094/collections/photo-1624222247344-550fb60583dc.jpg?v=1791417250",description:"Leather & hardware"},
 {name:"Footwear",type:"FOOTWEAR",image:"https://cdn.shopify.com/s/files/1/0725/3465/5094/collections/photo-1542291026-7eec264c27ff.jpg?v=1791417254",description:"Movement"}
];

const cats=["ALL","BRACELETS","WATCHES","BAGS","BELTS","EYEWEAR","FOOTWEAR","GIFTS"];
type CatalogueProduct={id:string;title:string;productType:string;tags:string[];image:string|null;alt:string;variants:Array<{id:string;title:string;price:string;availableForSale:boolean}>};

export default function SleekEazy(){
 const [cat,setCat]=useState("ALL");
 const [bag,setBag]=useState<string[]>([]);
 const [products,setProducts]=useState<CatalogueProduct[]>([]);
 const [catalogueLive,setCatalogueLive]=useState(false);

 useEffect(()=>{
  try{const saved=localStorage.getItem("eazy-sleek-bag");if(saved)setBag(JSON.parse(saved));}catch{}
  fetch("/api/shopify/products").then(r=>r.json()).then(data=>{
   if(data?.configured&&Array.isArray(data.products)&&data.products.length){setProducts(data.products);setCatalogueLive(true);}
  }).catch(()=>{});
 },[]);

 function addToComposition(product:CatalogueProduct){
  const variant=product.variants[0]; if(!variant)return;
  const entry=JSON.stringify({productId:product.id,variantId:variant.id,title:product.title,productType:product.productType,price:variant.price});
  const next=[...bag,entry]; setBag(next); localStorage.setItem("eazy-sleek-bag",JSON.stringify(next));
 }

 const source=useMemo(()=>products.length?products:fallbackItems.map((x,i)=>({id:String(i),title:x.name,productType:x.type,tags:["SLEEK_EAZY"],image:x.img,alt:x.name,variants:[{id:String(i),title:"Default",price:x.price.replace("₦","").replace(/,/g,""),availableForSale:true}]})),[products]);

 const imageFor=(product:CatalogueProduct)=>{
  if(product.image)return product.image;
  const match=fallbackItems.find(x=>x.name===product.title);
  return match?.img||null;
 };

 const filtered=cat==="ALL"?source:source.filter(x=>x.productType.toUpperCase()===cat||x.tags.some(t=>t.toUpperCase()===cat)||cat==="GIFTS");

 return <main className="sleek-page">
  <header className="sleek-nav">
   <a href="/" className="back">EAZY</a>
   <div className="sleek-word"><span>SLEEK</span> EAZY</div>
   <a href="/composition">Composition <span>{bag.length}</span></a>
  </header>

  <section className="sleek-hero">
   <div className="sleek-heroimg"></div>
   <div className="sleek-herotext">
    <p className="eyebrow">SLEEK EAZY · CURATED OBJECTS</p>
    <h1>Objects for<br/><em>the well-dressed man.</em></h1>
    <p>Premium accessories and gifts for the moments that matter — whether or not you came for an EAZY garment.</p>
    <div className="actions">
     <a className="primary" href="#collections">Enter the collections ↘</a>
     <a className="secondary light" href="/">Discover EAZY clothing ↗</a>
    </div>
   </div>
  </section>

  <section className="sleek-intro">
   <p className="eyebrow">THE IDEA</p>
   <h2>You do not have to buy<br/>the cloth to enter the world.</h2>
   <p>Come for a bracelet. Stay for the details. Choose a birthday gift, an anniversary piece, a watch for a milestone, or complete an EAZY creation with objects selected for the composition.</p>
  </section>

  <section id="collections" className="sleek-collections">
   <div className="sectionhead">
    <div><p className="eyebrow">THE SLEEK EAZY COLLECTIONS</p><h2>Each object has a world.</h2></div>
   </div>
   <div className="sleek-collection-grid">
    {collections.map(collection=><button key={collection.type} className={cat===collection.type?"sleek-collection active": "sleek-collection"} onClick={()=>{setCat(collection.type);document.getElementById("shop")?.scrollIntoView({behavior:"smooth"});}}>
     <span className="sleek-collection-image"><img src={collection.image} alt={collection.name}/></span>
     <span className="sleek-collection-meta"><span><small>{collection.description}</small><strong>{collection.name}</strong></span><i>↗</i></span>
    </button>)}
   </div>
  </section>

  <section id="shop" className="sleek-shop">
   <div className="sectionhead">
    <div><p className="eyebrow">SLEEK EAZY {catalogueLive?"· LIVE CATALOGUE":"· CURATED PREVIEW"}</p><h2>{cat==="ALL"?"Curated now.":collections.find(x=>x.type===cat)?.name||"Curated now."}</h2></div>
   </div>
   <div className="filters">
    {cats.map(c=><button key={c} className={cat===c?"active":""} onClick={()=>setCat(c)}>{c}</button>)}
   </div>
   <div className="sleek-grid">
    {filtered.map(x=><article className="sleek-card" key={x.id}>
     <div className="sleek-img">
      <img src={imageFor(x) || ""} alt={x.alt || x.title}/>
      <button onClick={()=>addToComposition(x)}>Add to composition</button>
     </div>
     <p>{x.productType}</p><h3>{x.title}</h3><strong>₦{Number(x.variants[0]?.price||0).toLocaleString()}</strong>
    </article>)}
   </div>
  </section>

  <section className="gift-section">
   <div><p className="eyebrow">GIFTING</p><h2>Give something<br/><em>worth remembering.</em></h2></div>
   <div><p>Birthdays. Anniversaries. Weddings. Promotions. Father’s Day. Milestones. Or no occasion at all.</p><a className="primary" href="#shop">Find a gift ↗</a></div>
  </section>

  <section className="sleek-bridge">
   <p className="eyebrow">CREATING AN EAZY LOOK?</p>
   <h2>Take what you love<br/><em>back to your composition.</em></h2>
   <p>Your selected SLEEK EAZY pieces can travel with you. Return to EAZY, review the full composition and validate before commissioning.</p>
   <a className="primary dark" href="/composition">Return to EAZY Composition ↗</a>
  </section>

  <footer>
   <a href="/">EAZY CLOTHING EXQUISITES</a>
   <span>SLEEK EAZY</span>
   <small>CURATED OBJECTS · LAGOS</small>
  </footer>
 </main>
}
