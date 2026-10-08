"use client";

import { useEffect, useMemo, useState } from "react";

const collections = [
  { name: "Watches", key: "WATCHES", description: "Timepieces" },
  { name: "Jewellery", key: "JEWELLERY", description: "Metal · leather · stone" },
  { name: "Eyewear", key: "EYEWEAR", description: "Frames & sun" },
  { name: "Leather", key: "LEATHER", description: "Carry · belts · cases" },
  { name: "Footwear", key: "FOOTWEAR", description: "Dress · resort · street" },
  { name: "Ceremony", key: "CEREMONY", description: "The finishing details" },
  { name: "Fragrance & Grooming", key: "FRAGRANCE", description: "Scent · care · presence" },
  { name: "After Dark", key: "AFTER_DARK", description: "Night · lounge · objects" },
  { name: "Resort", key: "RESORT", description: "Sun · water · escape" },
  { name: "Objects", key: "OBJECTS", description: "Valet · tech · desk" },
  { name: "Gifts", key: "GIFTS", description: "For moments that matter" }
];

const cultureLanes = [
  { key: "AFRICAN_HERITAGE", name: "African Heritage", description: "Traditional beads · craft · ceremony" },
  { key: "LAGOS_MADE", name: "Lagos Made", description: "Nigerian makers · Lagos craft" },
  { key: "CONTEMPORARY_AFRICAN", name: "Contemporary Africa", description: "Modern African design" },
  { key: "GLOBAL_SELECT", name: "Global Select", description: "International pieces, Eazy standard" },
  { key: "AFRICAN_GLOBAL_FUSION", name: "African × Global", description: "African identity meets global design" }
];
const cats = ["ALL", ...cultureLanes.map((x) => x.key), ...collections.map((collection) => collection.key)];

type CatalogueProduct = {
  id: string;
  title: string;
  productType: string;
  tags: string[];
  image: string | null;
  alt: string;
  vendor: string;
  sourceType: string;
  origin: string;
  transparencyReady: boolean;
  purchaseReady: boolean;
  edition?: "CORE" | "SEASONAL_EDIT" | "LIMITED_EDITION" | "ARCHIVE";
  limitedEdition?: { editionSize?: number; unitsAvailable?: number; scarcityReason?: string };
  variants: Array<{
    id: string;
    title: string;
    price: string;
    availableForSale: boolean;
    selectedOptions: Array<{ name: string; value: string }>;
    image: string | null;
    sourceImage: string | null;
    exactImageMatch: boolean;
    imageRightsVerified: boolean;
  }>;
};

function belongs(product: CatalogueProduct, key: string) {
  const culture = (product.tags || []).map((x) => x.toUpperCase());
  const cultureRules: Record<string, string[]> = {
    AFRICAN_HERITAGE: ["SLEEK-AFRICAN-HERITAGE", "SLEEK-CULTURAL", "SLEEK-BEADS", "SLEEK-TRADITIONAL-ARTS"],
    LAGOS_MADE: ["SLEEK-LAGOS-MADE", "SLEEK-LAGOS", "SLEEK-NIGERIA"],
    CONTEMPORARY_AFRICAN: ["SLEEK-CONTEMPORARY-AFRICAN", "SLEEK-AFRICA"],
    GLOBAL_SELECT: ["SLEEK-GLOBAL-SELECT", "SLEEK-INTERNATIONAL"],
    AFRICAN_GLOBAL_FUSION: ["SLEEK-AFRICAN-GLOBAL", "SLEEK-FUSION"]
  };
  if (cultureRules[key]?.some((term) => culture.includes(term))) return true;
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
  const [catalogueError, setCatalogueError] = useState<string | null>(null);
  const [bagOpen, setBagOpen] = useState(false);
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem("eazy-sleek-bag");
      if (saved) setBag(JSON.parse(saved));
    } catch {}
    fetch("/api/shopify/products").then((r) => r.json()).then((data) => {
      if (data?.error) setCatalogueError(data.error);
      if (data?.configured && Array.isArray(data.products)) {
        setProducts(data.products);
        setCatalogueLive(true);
      }
    }).catch(() => setCatalogueError("The live catalogue could not be reached."));
  }, []);

  function selectedVariant(product: CatalogueProduct) {
    const selectedId = selectedVariants[product.id];
    return product.variants.find((variant) => variant.id === selectedId) || product.variants[0];
  }

  function addToComposition(product: CatalogueProduct) {
    const variant = selectedVariant(product);
    if (!variant) return;
    const entry = JSON.stringify({
      productId: product.id,
      variantId: variant.id,
      title: product.title,
      productType: product.productType,
      price: variant.price,
      variantTitle: variant.title,
      selectedOptions: variant.selectedOptions
    });
    const next = [...bag, entry];
    setBag(next);
    localStorage.setItem("eazy-sleek-bag", JSON.stringify(next));
  }

  const source = useMemo(() => products.filter((product) => product.purchaseReady), [products]);

  const filtered = cat === "ALL" ? source : source.filter((product) => belongs(product, cat));
  const activeCollection = collections.find((collection) => collection.key === cat);

  return (
    <main className="sleek-page">
      <header className="sleek-nav">
        <a href="/" className="back">EAZY</a>
        <div className="sleek-word"><span>SLEEK</span> EAZY</div>
        <button className="sleek-bag-link" onClick={() => setBagOpen(true)}>Composition <span>{bag.length}</span></button>
      </header>

      {bagOpen && <aside className="sleek-bag-drawer" aria-label="SLEEK EAZY composition bag">
        <div className="sleek-bag-head"><div><p className="eyebrow">SLEEK EAZY</p><h2>Your composition</h2></div><button onClick={() => setBagOpen(false)} aria-label="Close">×</button></div>
        <div className="sleek-bag-list">{bag.length ? bag.map((raw, i) => { const item = JSON.parse(raw) as {title:string;productType:string;price:string}; return <div className="sleek-bag-row" key={i}><div><small>{item.productType}</small><strong>{item.title}</strong></div><span>₦{Number(item.price).toLocaleString()}</span><button onClick={() => { const next = bag.filter((_, n) => n !== i); setBag(next); localStorage.setItem("eazy-sleek-bag", JSON.stringify(next)); }}>Remove</button></div> }) : <div className="sleek-empty"><p className="eyebrow">COMPOSITION</p><h3>Nothing selected.</h3><p>Choose an object that belongs with your EAZY look.</p></div>}</div>
        {bag.length > 0 && <div className="sleek-bag-foot"><a className="primary dark" href="/composition">Continue to composition ↗</a></div>}
      </aside>}

      <section className="sleek-hero">
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
        <p className="eyebrow">AFRICA × THE WORLD</p>
        <h2>African excellence<br />belongs everywhere.</h2>
        <p>We curate exceptional African makers, traditional craft and Lagos design beside the strongest international pieces. African identity is not a limitation here — it is part of the signature.</p>
        <div className="sleek-pillars">
          <span>AFRICAN HERITAGE</span><span>LAGOS MADE</span><span>GLOBAL SELECT</span><span>AFRICAN × GLOBAL</span>
        </div>
      </section>

      <section className="sleek-maker-banner">
        <p className="eyebrow">FOR MAKERS & ARTISANS</p>
        <h2>Your craft.<br /><em>A bigger stage.</em></h2>
        <p>Exceptional African makers should not need a giant marketing budget to reach serious customers. Eazy can provide the channel, presentation and discovery layer — while every product still earns its place through verification and quality review.</p>
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
          {collections.map((collection) => {
            const collectionProducts = source.filter((product) =>
              (product.tags || []).some((tag) =>
                tag.toUpperCase().startsWith("COLLECTION:") &&
                tag.slice("COLLECTION:".length).trim().toUpperCase() === collection.key
              )
            );
            return (
              <button key={collection.key} className={cat === collection.key ? "sleek-collection active" : "sleek-collection"} onClick={() => { setCat(collection.key); document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" }); }}>
                <span className="sleek-collection-image">
                  {collectionProducts.length ? collectionProducts.slice(0, 4).map((product) => (
                    <img key={product.id} src={product.image || ""} alt={collection.name + " — " + product.title} loading="lazy" />
                  )) : <span className="sleek-collection-pending">COLLECTION IMAGE PENDING<small>VERIFIED PRODUCTS REQUIRED</small></span>}
                </span>
                <span className="sleek-collection-meta"><span><small>{collection.description}</small><strong>{collection.name}</strong></span><i>↗</i></span>
              </button>
            );
          })}
        </div>
      </section>

      <section id="shop" className="sleek-shop">
        <div className="sectionhead">
          <div><p className="eyebrow">SLEEK EAZY {catalogueLive ? "· LIVE CATALOGUE" : "· CATALOGUE"}</p><h2>{activeCollection?.name || "The edit"}</h2></div>
          <p className="sleek-shop-note">{activeCollection ? activeCollection.description : "The current house selection"} · Only purchase-ready House-approved pieces are shown.</p>
        </div>
        <div className="filters">
          {cultureLanes.map((lane) => <button key={lane.key} className={cat === lane.key ? "active" : ""} onClick={() => setCat(lane.key)}>{lane.name}</button>)}
          {cats.map((c) => <button key={c} className={cat === c ? "active" : ""} onClick={() => setCat(c)}>{c.replace("_", " ")}</button>)}
        </div>
        {catalogueError && <div className="sleek-empty"><p className="eyebrow">CATALOGUE STATUS</p><h3>Live catalogue unavailable.</h3><p>{catalogueError}</p></div>}
        <div className="sleek-edit-banner"><p className="eyebrow">THE EDIT</p><h3>New discoveries, carefully chosen.</h3><p>We update Sleek Eazy regularly, but never for the sake of volume. Weekly discoveries and monthly edits are made from products that have already earned the house standard.</p></div>
        <div className="sleek-grid">
          {filtered.length ? filtered.map((x) => {
            const variant = selectedVariant(x);
            const displayImage = variant?.image || x.image;
            return (
              <article className="sleek-card" key={x.id}>
                <div className="sleek-img">
                  {displayImage ? <img src={displayImage} alt={x.alt || x.title + " — " + (variant?.title || "")} /> : <div className="sleek-image-missing">IMAGE PENDING<br/><small>REAL PRODUCT IMAGE REQUIRED</small></div>}
                  <button onClick={() => addToComposition(x)} disabled={!x.purchaseReady || !variant?.availableForSale}>Add to composition</button>
                </div>
                <p>{x.productType}</p>
                {x.edition === "LIMITED_EDITION" && <span className="sleek-edition-badge">LIMITED EDITION{x.limitedEdition?.editionSize ? ` · ${x.limitedEdition.editionSize} MADE` : ""}</span>}
                {x.edition === "SEASONAL_EDIT" && <span className="sleek-edition-badge">CURRENT EDIT</span>}
                <h3>{x.title}</h3>
                {x.variants.length > 1 && <label className="sleek-variant-picker">
                  <span>SELECT VARIANT</span>
                  <select value={variant?.id || ""} onChange={(event) => setSelectedVariants((current) => ({ ...current, [x.id]: event.target.value }))}>
                    {x.variants.map((option) => (
                      <option key={option.id} value={option.id} disabled={!option.availableForSale}>
                        {option.selectedOptions?.length ? option.selectedOptions.map((item) => item.name + ": " + item.value).join(" · ") : option.title} — ₦{Number(option.price).toLocaleString()}
                      </option>
                    ))}
                  </select>
                </label>}
                <strong>₦{Number(variant?.price || 0).toLocaleString()}</strong>
                <div className="sleek-transparency">
                  <span>{x.vendor || "Supplier not recorded"}</span>
                  <span>{x.origin || "Origin not recorded"}</span>
                  <span>{x.transparencyReady ? "PROVENANCE READY" : "HOUSE APPROVED"}</span>
                  {variant?.exactImageMatch && variant?.imageRightsVerified && <span>EXACT VARIANT IMAGE VERIFIED</span>}
                </div>
              </article>
            );
          }) : (
            <div className="sleek-empty"><p className="eyebrow">HOUSE EDIT</p><h3>No verified products yet.</h3><p>SLEEK EAZY will not display placeholders or unverified products. A product enters only after source, material, origin and quality records are present.</p></div>
          )}
        </div>
      </section>

      <section className="sleek-worlds">
        <div><p className="eyebrow">THE MINDSET</p><h2>From Lagos<br /><em>to everywhere.</em></h2></div>
        <p>Rooted in African confidence, shaped by Lagos, and finished with a global luxury retail instinct. Traditional beads can sit beside a Swiss timepiece. Lagos leather can sit beside Italian eyewear. Native craft can meet contemporary design. The point is not to make Africa look foreign — it is to let African excellence travel. SLEEK EAZY can feel at home in a Lagos evening, an Accra celebration, a Johannesburg dinner, a Dubai hotel, Miami heat or Las Vegas after dark — without becoming a costume.</p>
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
