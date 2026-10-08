"use client";

import { useEffect, useState } from "react";

type Variant = {
  id: string;
  title: string;
  price: string;
  availableForSale: boolean;
  selectedOptions: Array<{name:string;value:string}>;
  image: string | null;
  exactImageMatch: boolean;
  imageRightsVerified: boolean;
};

type Product = {
  id: string;
  handle: string;
  title: string;
  vendor: string;
  productType: string;
  image: string | null;
  alt: string;
  origin: string;
  transparencyReady: boolean;
  purchaseReady: boolean;
  transparency: {material:string;qualityCheck:string;provenance:string;approved:boolean};
  variants: Variant[];
};

export default function ProductPage({params}:{params:Promise<{handle:string}>}) {
  const [product,setProduct]=useState<Product|null>(null);
  const [variantId,setVariantId]=useState("");
  const [error,setError]=useState("");
  useEffect(()=>{
    params.then(({handle})=>fetch("/api/shopify/products").then(r=>r.json()).then(data=>{
      const found=(data.products||[]).find((item:Product)=>item.handle===decodeURIComponent(handle));
      if(!found || !found.purchaseReady) throw new Error("This product is not currently purchase-ready.");
      setProduct(found);
      setVariantId(found.variants[0]?.id||"");
    }).catch(e=>setError(e instanceof Error?e.message:"Product unavailable.")));
  },[params]);

  if(error) return <main className="sleek-empty"><p className="eyebrow">PRODUCT UNAVAILABLE</p><h1>Verified product unavailable.</h1><p>{error}</p><a className="primary dark" href="/collections">Return to collections ↗</a></main>;
  if(!product) return <main className="sleek-empty"><p className="eyebrow">EAZY CATALOGUE</p><h1>Loading product…</h1></main>;

  const variant=product.variants.find(v=>v.id===variantId)||product.variants[0];
  const image=variant?.image||product.image;
  const add=()=>{
    if(!variant?.availableForSale) return;
    const existing=JSON.parse(localStorage.getItem("eazy-sleek-bag")||"[]");
    const entry=JSON.stringify({productId:product.id,variantId:variant.id,title:product.title,productType:product.productType,price:variant.price,variantTitle:variant.title,selectedOptions:variant.selectedOptions});
    localStorage.setItem("eazy-sleek-bag",JSON.stringify([...existing,entry]));
    window.location.href="/composition";
  };

  return <main className="sleek-page">
    <header className="sleek-nav"><a href="/collections" className="back">← COLLECTIONS</a><div className="sleek-word"><span>EAZY</span> PRODUCT</div><a className="sleek-bag-link" href="/composition">Composition ↗</a></header>
    <section className="sleek-shop" style={{paddingTop:"8rem"}}>
      <a className="eyebrow" href="/collections">← BACK TO VERIFIED COLLECTIONS</a>
      <div style={{display:"grid",gridTemplateColumns:"minmax(0,1.15fr) minmax(320px,.85fr)",gap:"3rem",marginTop:"2rem"}}>
        <div>{image?<img src={image} alt={product.alt} style={{width:"100%",display:"block",aspectRatio:"1 / 1",objectFit:"cover"}}/>:<div className="sleek-image-missing">IMAGE PENDING</div>}<p className="eyebrow" style={{marginTop:"1rem"}}>EXACT PRODUCT IMAGERY</p><p>Product imagery is tied to the verified catalogue variant. EAZY does not recolour, substitute or generate inventory images.</p></div>
        <div><p className="eyebrow">{product.productType}</p><h1 style={{fontSize:"clamp(2.5rem,6vw,5rem)",lineHeight:.95}}>{product.title}</h1><p>{product.vendor}</p><strong style={{display:"block",fontSize:"1.5rem",margin:"1.5rem 0"}}>₦{Number(variant?.price||0).toLocaleString()}</strong>
        {product.variants.length>1&&<label className="sleek-variant-picker"><span>SELECT EXACT VARIANT</span><select value={variant?.id||""} onChange={e=>setVariantId(e.target.value)}>{product.variants.map(v=><option key={v.id} value={v.id} disabled={!v.availableForSale}>{v.selectedOptions.length?v.selectedOptions.map(o=>o.name+": "+o.value).join(" · "):v.title} — ₦{Number(v.price).toLocaleString()}</option>)}</select></label>}
        <button className="primary dark" disabled={!variant?.availableForSale} onClick={add}>{variant?.availableForSale?"Add exact variant to composition →":"Variant currently unavailable"}</button>
        <div className="sleek-transparency" style={{marginTop:"2rem"}}><span>{product.transparencyReady?"TRANSPARENCY RECORD READY":"TRANSPARENCY RECORD PENDING"}</span><span>{variant?.exactImageMatch&&variant.imageRightsVerified?"EXACT VARIANT IMAGE VERIFIED":"IMAGE VERIFICATION REQUIRED"}</span><span>{product.transparency.material||"Material record pending"}</span><span>{product.origin||"Origin record pending"}</span></div>
        <div style={{marginTop:"2rem"}}><p><strong>Material</strong><br/>{product.transparency.material||"Not published until verified."}</p><p><strong>Quality check</strong><br/>{product.transparency.qualityCheck||"Not published until verified."}</p><p><strong>Provenance</strong><br/>{product.transparency.provenance||"Not published until verified."}</p></div></div>
      </div>
    </section>
  </main>;
}
