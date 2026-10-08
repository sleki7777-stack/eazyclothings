"use client";

import { useEffect, useMemo, useState } from "react";

const fallbackItems = [
  { name: "Obsidian Link Bracelet", type: "Jewellery", price: "₦48,000", img: "https://cdn.shopify.com/s/files/1/0725/3465/5094/collections/photo-1611591437281-460bfbe1220a.jpg?v=1791417235" },
  { name: "House Meridian Watch", type: "Watches", price: "₦165,000", img: "https://cdn.shopify.com/s/files/1/0725/3465/5094/collections/photo-1524805444758-089113d48a6d.jpg?v=1791417238" },
  { name: "Lagos Frame", type: "Eyewear", price: "₦72,000", img: "https://cdn.shopify.com/s/files/1/0725/3465/5094/collections/photo-1511499767150-a48a237f0083.jpg?v=1791417242" },
  { name: "Noir Leather Carry", type: "Leather", price: "₦120,000", img: "https://cdn.shopify.com/s/files/1/0725/3465/5094/collections/photo-1553062407-98eeb64c6a62.jpg?v=1791417245" },
  { name: "House Line Belt", type: "Leather", price: "₦55,000", img: "https://cdn.shopify.com/s/files/1/0725/3465/5094/collections/photo-1624222247344-550fb60583dc.jpg?v=1791417250" },
  { name: "After Hours Runner", type: "Footwear", price: "₦135,000", img: "https://cdn.shopify.com/s/files/1/0725/3465/5094/collections/photo-1542291026-7eec264c27ff.jpg?v=1791417254" }
];

const collections = [
  { name: "Watches", key: "WATCHES", description: "Timepieces", image: fallbackItems[1].img },
  { name: "Jewellery", key: "JEWELLERY", description: "Metal · leather · stone", image: fallbackItems[0].img },
  { name: "Eyewear", key: "EYEWEAR", description: "Frames & sun", image: fallbackItems[2].img },
  { name: "Leather", key: "LEATHER", description: "Carry · belts · cases", image: fallbackItems[3].img },
  { name: "Footwear", key: "FOOTWEAR", description: "Dress · resort · street", image: fallbackItems[5].img },
  { name: "Ceremony", key: "CEREMONY", description: "The finishing details", image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=1200&q=85" },
  { name: "Fragrance & Grooming", key: "FRAGRANCE", description: "Scent · care · presence", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=85" },
  { name: "After Dark", key: "AFTER_DARK", description: "Night · lounge · objects", image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=85" },
  { name: "Resort", key: "RESORT", description: "Sun · water · escape", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85" },
  { name: "Objects", key: "OBJECTS", description: "Valet · tech · desk", image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=85" },
  { name: "Gifts", key: "GIFTS", description: "For moments that matter", image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=1200&q=85" }
];

const cats = ["ALL", ...collections.map((collection) => collection.key)];

type CatalogueProduct = {
  id: string;
  title: string;
  productType: string;
  tags: string[];
  image: string | null;
  alt: string;
  variants: Array<{ id: string; title: string; price: string; availableForSale: boolean }>;
};

function belongs(product: CatalogueProduct, key: string) {
  const haystack = [product.productType, ...product.tags, product.title].join(" ").toUpperCase();
  const rules: Record<string, string[]> = {
    WATCHES: ["WATCH", "TIMEPIECE"],
    JEWELLERY: ["BRACELET", "JEWELLERY", "JEWELRY", "RING", "CHAIN", "CUFFLINK", "PENDANT"],
    EYEWEAR: ["EYEWEAR", "SUNGLASS", "FRAME"],
    LEATHER: ["LEATHER", "BELT", "WALLET", "CARD", "BAG", "CARRY", "BRIEFCASE", "CLUTCH"],
    FOOTWEAR: ["FOOTWEAR", "SHOE", "LOAFER", "BOOT", "SNEAKER", "SLIDE", "SANDAL"],
    CEREMONY: ["CEREMONY", "TIE", "BOW TIE", "POCKET SQUARE", "CUFFLINK", "LAPEL", "WEDDING", "GROOM"],
    FRAGRANCE: ["FRAGRANCE", "PERFUME", "PARFUM", "OUD", "GROOMING", "BEARD", "SHAV"],
    AFTER_DARK: ["AFTER DARK", "CIGAR", "LIGHTER", "BAR", "LOUNGE", "NIGHT", "GAME"],
    RESORT: ["RESORT", "SWIM", "BEACH", "POOL", "TRAVEL", "SLIDE"],
    OBJECTS: ["OBJECT", "VALET", "DESK", "TECH", "PHONE", "AIRPOD", "CHARG", "ORGANIZER"],
    GIFTS: ["GIFT", "BIRTHDAY", "ANNIVERSARY", "FATHER", "EXECUTIVE", "WEDDING"]
  };
  return rules[key]?.some((term) => haystack.includes(term)) ?? false;
}

export default function SleekEazy() {
  const [cat, setCat] = useState("ALL");
  const [bag, setBag] = useState<string[]>([]);
  const [products, setProducts] = useState<CatalogueProduct[]>([]);
  const [catalogueLive, setCatalogueLive] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("eazy-sleek-bag");
      if (saved) setBag(JSON.parse(saved));
    } catch {}
    fetch("/api/shopify/products").then((r) => r.json()).then((data) => {
      if (data?.configured && Array.isArray(data.products) && data.products.length) {
        setProducts(data.products);
        setCatalogueLive(true);
      }
    }).catch(() => {});
  }, []);

  function addToComposition(product: CatalogueProduct) {
    const variant = product.variants[0];
    if (!variant) return;
    const entry = JSON.stringify({ productId: product.id, variantId: variant.id, title: product.title, productType: product.productType, price: variant.price });
    const next = [...bag, entry];
    setBag(next);
    localStorage.setItem("eazy-sleek-bag", JSON.stringify(next));
  }

  const source = useMemo(() => products.length ? products : fallbackItems.map((x, i) => ({
    id: String(i),
    title: x.name,
    productType: x.type,
    tags: ["SLEEK_EAZY"],
    image: x.img,
    alt: x.name,
    variants: [{ id: String(i), title: "Default", price: x.price.replace("₦", "").replace(/,/g, ""), availableForSale: true }]
  })), [products]);

  const filtered = cat === "ALL" ? source : source.filter((product) => belongs(product, cat));
  const activeCollection = collections.find((collection) => collection.key === cat);

  return (
    <main className="sleek-page">
      <header className="sleek-nav">
        <a href="/" className="back">EAZY</a>
        <div className="sleek-word"><span>SLEEK</span> EAZY</div>
        <button className="sleek-bag-link" onClick={() => setBagOpen(true)}>Composition <span>{bag.length}</span></button>
      </header>

      {bagOpen && <aside className="sleek-bag-drawer" aria-label="SLEEK EAZY composition bag">\n        <div className="sleek-bag-head"><div><p className="eyebrow">SLEEK EAZY</p><h2>Your composition</h2></div><button onClick={() => setBagOpen(false)} aria-label="Close">×</button></div>\n        <div className="sleek-bag-list">{bag.length ? bag.map((raw, i) => { const item = JSON.parse(raw) as {title:string;productType:string;price:string}; return <div className="sleek-bag-row" key={i}><div><small>{item.productType}</small><strong>{item.title}</strong></div><span>₦{Number(item.price).toLocaleString()}</span><button onClick={() => { const next = bag.filter((_, n) => n !== i); setBag(next); localStorage.setItem("eazy-sleek-bag", JSON.stringify(next)); }}>Remove</button></div> }) : <div className="sleek-empty"><p className="eyebrow">COMPOSITION</p><h3>Nothing selected.</h3><p>Choose an object that belongs with your EAZY look.</p></div>}</div>\n        {bag.length > 0 && <div className="sleek-bag-foot"><a className="primary dark" href="/composition">Continue to composition ↗</a></div>}\n      </aside>}\n\n      <section className="sleek-hero">
        <div className="sleek-heroimg"></div>
        <div className="sleek-herotext">
          <p className="eyebrow">SLEEK EAZY · THE MEN'S OBJECT HOUSE</p>
          <h1>Objects for<br /><em>the well-dressed man.</em></h1>
          <p>Premium accessories for the way he dresses, carries, scents, celebrates, travels, unwinds and presents himself.</p>
          <div className="actions">
            <a className="primary" href="#collections">Enter SLEEK EAZY ↘</a>
            <a className="secondary light" href="/">Discover EAZY clothing ↗</a>
          </div>
        </div>
      </section>

      <section className="sleek-intro">
        <p className="eyebrow">THE SLEEK EAZY RULE</p>
        <h2>Nothing enters<br />just because it sells.</h2>
        <p>Every piece must belong beside EAZY clothing. Material, build quality, finish, proportion, function and presence come first. SLEEK EAZY is curated — never a catalogue of random men's products.</p>
        <div className="sleek-pillars">
          <span>AFRICAN ORIGIN</span><span>GLOBAL LUXURY</span><span>AFTER DARK ENERGY</span><span>EAZY STANDARD</span>
        </div>
      </section>

      <section id="collections" className="sleek-collections">
        <div className="sectionhead">
          <div><p className="eyebrow">THE WORLDS</p><h2>Curated worlds, not endless categories.</h2></div>
        </div>
        <div className="sleek-collection-grid">
          {collections.map((collection) => (
            <button key={collection.key} className={cat === collection.key ? "sleek-collection active" : "sleek-collection"} onClick={() => { setCat(collection.key); document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" }); }}>
              <span className="sleek-collection-image"><img src={collection.image} alt={collection.name} /></span>
              <span className="sleek-collection-meta"><span><small>{collection.description}</small><strong>{collection.name}</strong></span><i>↗</i></span>
            </button>
          ))}
        </div>
      </section>

      <section id="shop" className="sleek-shop">
        <div className="sectionhead">
          <div><p className="eyebrow">SLEEK EAZY {catalogueLive ? "· LIVE CATALOGUE" : "· CURATED PREVIEW"}</p><h2>{activeCollection?.name || "The edit"}</h2></div>
          <p className="sleek-shop-note">{activeCollection ? activeCollection.description : "The current house selection"}</p>
        </div>
        <div className="filters">
          {cats.map((c) => <button key={c} className={cat === c ? "active" : ""} onClick={() => setCat(c)}>{c.replace("_", " ")}</button>)}
        </div>
        <div className="sleek-grid">
          {filtered.length ? filtered.map((x) => (
            <article className="sleek-card" key={x.id}>
              <div className="sleek-img">
                <img src={x.image || fallbackItems.find((item) => item.name === x.title)?.img || ""} alt={x.alt || x.title} />
                <button onClick={() => addToComposition(x)}>Add to composition</button>
              </div>
              <p>{x.productType}</p><h3>{x.title}</h3><strong>₦{Number(x.variants[0]?.price || 0).toLocaleString()}</strong>
            </article>
          )) : (
            <div className="sleek-empty"><p className="eyebrow">HOUSE EDIT</p><h3>This world is being curated.</h3><p>We would rather show nothing than lower the standard.</p></div>
          )}
        </div>
      </section>

      <section className="sleek-worlds">
        <div><p className="eyebrow">THE MINDSET</p><h2>From Lagos<br /><em>to everywhere.</em></h2></div>
        <p>Rooted in African confidence, shaped by Lagos, and finished with a global luxury retail instinct. SLEEK EAZY can feel at home in a Lagos evening, an Accra celebration, a Johannesburg dinner, a Dubai hotel, Miami heat or Las Vegas after dark — without becoming a costume.</p>
      </section>

      <section className="gift-section">
        <div><p className="eyebrow">GIFTING</p><h2>Give something<br /><em>worth remembering.</em></h2></div>
        <div><p>Birthdays. Anniversaries. Weddings. Promotions. Father’s Day. Milestones. Or no occasion at all.</p><a className="primary" href="#shop" onClick={() => setCat("GIFTS")}>Find a gift ↗</a></div>
      </section>

      <section className="sleek-bridge">
        <p className="eyebrow">CREATING AN EAZY LOOK?</p>
        <h2>Take what you love<br /><em>back to your composition.</em></h2>
        <p>Your selected SLEEK EAZY pieces can travel with you. Return to EAZY, review the full composition and validate before commissioning.</p>
        <a className="primary dark" href="/composition">Return to EAZY Composition ↗</a>
      </section>

      <footer>
        <a href="/">EAZY CLOTHING EXQUISITES</a>
        <span>SLEEK EAZY</span>
        <small>CURATED OBJECTS · LAGOS · AFRICA · EVERYWHERE</small>
      </footer>
    </main>
  );
}
