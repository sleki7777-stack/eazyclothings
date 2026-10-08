"use client";

import { useEffect, useMemo, useState } from "react";
import { eazyCollections } from "@/lib/eazy-collections";

export default function CollectionsPage() {
  const [active, setActive] = useState("all");
  const [catalogue, setCatalogue] = useState<Record<string, { image: string; title: string; handle: string }[]>>({});
  useEffect(() => {
    fetch("/api/shopify/products").then((res) => res.json()).then((data) => {
      if (!data?.products) return;
      const next: Record<string, { image: string; title: string; handle: string }[]> = {};
      for (const product of data.products) {
        const collectionTags = (product.tags || []).filter((tag: string) => tag.toUpperCase().startsWith("COLLECTION:"));
        for (const tag of collectionTags) {
          const slug = tag.slice("COLLECTION:".length).trim().toLowerCase().replace(/\s+/g, "-");
          if (!product.image) continue;
          next[slug] = [...(next[slug] || []), { image: product.image, title: product.title, handle: product.handle }];
        }
      }
      setCatalogue(next);
    }).catch(() => {});
  }, []);
  const collections = useMemo(() => active === "all" ? eazyCollections : eazyCollections.filter((item) => item.slug === active), [active]);

  return <main className="collections-page">
    <header className="collections-hero">
      <a href="/" className="collections-back">← EAZY</a>
      <p className="eyebrow">EAZY CLOTHING EXQUISITES · COLLECTIONS</p>
      <h1>The complete<br/><em>men’s world.</em></h1>
      <p>From Senator and African tailoring to denim, knitwear, active, resort and night — a growing library of EAZY works, all viewed through Lagos.</p>
    </header>
    <nav className="collection-nav" aria-label="EAZY collections">
      <button className={active === "all" ? "active" : ""} onClick={() => setActive("all")}>ALL WORLDS</button>
      {eazyCollections.map((item) => <button key={item.slug} className={active === item.slug ? "active" : ""} onClick={() => setActive(item.slug)}>{item.title.toUpperCase()}</button>)}
    </nav>
    {collections.map((collection) => <section className="collection-world" key={collection.slug}>
      <div className="collection-heading"><div><p className="eyebrow">{collection.eyebrow}</p><h2>{collection.title}</h2></div><p>{collection.description}</p></div>{catalogue[collection.slug]?.length ? <div className="collection-promo">
        <div className="collection-promo-collage" aria-label={collection.title + " verified catalogue product overview"}>
          {catalogue[collection.slug].slice(0, 4).map((item) => <img key={item.handle} src={item.image} alt={collection.title + " — " + item.title} loading="lazy" />)}
        </div>
        <div className="collection-promo-copy">
          <span className="eyebrow">VERIFIED PRODUCT EDIT</span>
          <strong>{collection.title}</strong>
          <p>{collection.description}</p>
          <small>{catalogue[collection.slug].length} live products · Images are taken from the products assigned to this collection.</small>
        </div>
      </div> : <div className="collection-promo collection-promo-empty">
        <div className="collection-promo-copy">
          <span className="eyebrow">COLLECTION IMAGE PENDING</span>
          <strong>{collection.title}</strong>
          <p>{collection.description}</p>
          <small>We will not use substitute or AI imagery here. The collection image appears only when verified catalogue products are assigned to this collection.</small>
        </div>
      </div>}
      <div className="collection-grid">{collection.works.map((item) => <a className="collection-card" key={item.code} href={`/works/${item.code.toLowerCase().replace(/\s+/g, "-")}`}>
        <div className="collection-image"><img src={item.image} alt={item.name} loading="lazy"/><span>{item.code}</span></div>
        <div className="collection-meta"><div><small>{item.form}</small><h3>{item.name}</h3></div><small>{item.direction}</small></div>
      </a>)}</div>
    </section>)}
  </main>;
}
