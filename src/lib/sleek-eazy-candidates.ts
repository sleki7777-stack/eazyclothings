import type { ProductCandidate, SupplierRecord } from "./sleek-eazy-intelligence";

export const REAL_SOURCING_CANDIDATES: ProductCandidate[] = [
  {
    id:"freyrs-vesper-aviator", supplierId:"freyrs-eyewear", title:"Vesper Unisex Aviator Sunglasses",
    sourceUrl:"https://www.faire.com/product/p_jy8vjj8a4w", tier:"SELECT", world:"Eyewear", brand:"FREYRS Eyewear",
    material:"Stainless steel frame; nylon lenses", origin:"Not independently verified; supplier listing requires verification",
    cost:85, currency:"USD MSRP reference", retail:85, imageUrls:[],
    authenticityEvidence:"Wholesale listing identifies FREYRS Eyewear; authorization for EAZY resale still requires supplier account verification.",
    provenanceEvidence:"Faire supplier listing; manufacturing/origin verification pending.", status:"EVIDENCE_REQUIRED",
    reviewerNotes:"Strong fit: premium aviator silhouette, stainless construction, UVA/UVB protection, complimentary case. Do not publish until supplier terms, origin and sample QC are verified.",
    createdAt:"2026-10-08", updatedAt:"2026-10-08"
  },
  {
    id:"freyrs-addison-acetate", supplierId:"freyrs-eyewear", title:"Addison Acetate Unisex Aviator Sunglasses",
    sourceUrl:"https://www.faire.com/product/p_eqt3wxzgkv", tier:"SELECT", world:"Eyewear", brand:"FREYRS Eyewear",
    material:"Handmade acetate frame; stainless steel hinges; CR39 lenses", origin:"Made in China per supplier listing",
    cost:85, currency:"USD MSRP reference", retail:85, imageUrls:[],
    authenticityEvidence:"Wholesale listing identifies FREYRS Eyewear; authorization for EAZY resale still requires supplier account verification.",
    provenanceEvidence:"Supplier listing states Made in China; documentary verification pending.", status:"EVIDENCE_REQUIRED",
    reviewerNotes:"Strong fit: acetate construction, stainless hinges, UVA/UVB protection and included case. Verify wholesale cost separately; listed page exposes MSRP, not verified wholesale.",
    createdAt:"2026-10-08", updatedAt:"2026-10-08"
  },
  {
    id:"freyrs-madison-flat-top", supplierId:"freyrs-eyewear", title:"Madison Acetate Unisex Flat Top Sunglasses",
    sourceUrl:"https://www.faire.com/product/p_hgb646aw4y", tier:"SELECT", world:"Eyewear", brand:"FREYRS Eyewear",
    material:"Acetate; stainless steel; CR39 lenses", origin:"Not independently verified from the public listing",
    cost:85, currency:"USD MSRP reference", retail:85, imageUrls:[],
    authenticityEvidence:"Wholesale listing identifies FREYRS Eyewear; authorization for EAZY resale still requires supplier account verification.",
    provenanceEvidence:"Supplier listing; origin documentation pending.", status:"EVIDENCE_REQUIRED",
    reviewerNotes:"Strong fit for Lagos/after-dark styling. Verify origin, wholesale cost and sample before approval.",
    createdAt:"2026-10-08", updatedAt:"2026-10-08"
  },
  {
    id:"tres-cuervos-flint-bracelet", supplierId:"tres-cuervos", title:"Flint Single Waxed Canvas Bracelet",
    sourceUrl:"https://www.faire.com/brand/b_9oyccg2p5s", tier:"SELECT", world:"After Dark", brand:"Tres Cuervos",
    material:"Waxed canvas; construction details pending supplier verification", origin:"United States supplier; manufacturing origin pending",
    imageUrls:[],
    authenticityEvidence:"Faire brand page identifies Tres Cuervos and its wholesale catalogue.",
    provenanceEvidence:"Supplier brand page; exact product origin pending.", status:"EVIDENCE_REQUIRED",
    reviewerNotes:"Good fit for the understated Lagos/after-dark object language. Brand is rated 5.0 on 59 reviews with 5.0 product quality and fulfillment on the surfaced wholesale page. Verify exact material and manufacturing origin before approval.",
    createdAt:"2026-10-08", updatedAt:"2026-10-08"
  },
  {
    id:"tres-cuervos-agave-wallet", supplierId:"tres-cuervos", title:"Agave Wallet",
    sourceUrl:"https://www.faire.com/brand/b_9oyccg2p5s", tier:"SELECT", world:"Leather", brand:"Tres Cuervos",
    material:"Material specification pending supplier verification", origin:"United States supplier; manufacturing origin pending",
    imageUrls:[],
    authenticityEvidence:"Faire brand page identifies Tres Cuervos and its wholesale catalogue.",
    provenanceEvidence:"Supplier brand page; exact product origin pending.", status:"EVIDENCE_REQUIRED",
    reviewerNotes:"Potential SLEEK EAZY leather-world candidate. Must verify material, construction, wholesale price and sample QC before listing.",
    createdAt:"2026-10-08", updatedAt:"2026-10-08"
  },
  {
    id:"curated-basics-leather-goods", supplierId:"curated-basics", title:"Curated Basics — Leather Goods / Small Objects Edit",
    sourceUrl:"https://www.faire.com/brand/b_94e8mnvjlr", tier:"SELECT", world:"Objects", brand:"Curated Basics",
    material:"Leather goods; exact material varies by SKU", origin:"New York supplier; manufacturing origin varies by SKU",
    imageUrls:[],
    authenticityEvidence:"Faire brand page identifies Curated Basics and describes direct factory relationships and small-batch production.",
    provenanceEvidence:"Supplier brand page; SKU-level provenance required.", status:"EVIDENCE_REQUIRED",
    reviewerNotes:"Supplier-level candidate rather than a single approved SKU. Shortlist only the strongest leather goods, bags, jewelry and small objects after SKU-level inspection.",
    createdAt:"2026-10-08", updatedAt:"2026-10-08"
  },
  {
    id:"zone-a-loveth-bamboo-mini", supplierId:"zone-a-limited", title:"Loveth Bamboo Handle Mini Bag — Adire, Aso Oke & Genuine Leather",
    sourceUrl:"https://shopzonea.com/shop/", tier:"SELECT", world:"African Heritage", brand:"Zone A Limited",
    material:"Adire; Aso-oke; genuine animal-skin leather", origin:"Benin City, Nigeria", retail:24900, currency:"NGN", imageUrls:[],
    authenticityEvidence:"Official Zone A storefront identifies the product and supplier.",
    provenanceEvidence:"Zone A states each piece is handmade in its Benin City workshop.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["AFRICAN_HERITAGE","AFRICAN_GLOBAL_FUSION"],
    reviewerNotes:"Strong heritage/accessibility candidate. Supplier storefront has 42 Google reviews and documents handmade production plus wholesale pricing. SKU-level fulfilment and exact reseller terms still require verification.",
    createdAt:"2026-10-08", updatedAt:"2026-10-08"
  },
  {
    id:"becawax-hni-maxi", supplierId:"becawax", title:"HNI Maxi Bag",
    sourceUrl:"https://shop-becawax.myshopify.com/en-us/products/hni-maxi-bag", tier:"SELECT", world:"African Heritage", brand:"BECAWAX",
    material:"Handcrafted Aso Oke", origin:"Nigeria", retail:82500, currency:"NGN", imageUrls:[],
    authenticityEvidence:"Official BECAWAX product page.",
    provenanceEvidence:"Official product page describes full Aso Oke construction and the supplier storefront is Nigeria-based.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["AFRICAN_HERITAGE"],
    reviewerNotes:"Strong Accessible-tier candidate. Official storefront shows 58 products, worldwide shipping, recent positive customer feedback, and the HNI product has a positive review. Wholesale/drop-ship terms still require direct verification before listing.",
    createdAt:"2026-10-08", updatedAt:"2026-10-08"
  },
  {
    id:"kemiland-igbo-ozo-cap", supplierId:"kemiland-fabrics", title:"Beaded Velvet Igbo Ozo Cap", sourceUrl:"https://www.etsy.com/shop/KemilandFabrics",
    tier:"SELECT", world:"Igbo Heritage", brand:"KemilandFabrics", material:"Velvet; beadwork", origin:"Nigeria design/sourcing; supplier location United States", imageUrls:[],
    authenticityEvidence:"Etsy shop and product listings identify KemilandFabrics and its Igbo Ozo cap range.",
    provenanceEvidence:"Supplier shop presents Igbo Ozo caps and Nigerian cultural goods; exact production location requires verification.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["IGBO_HERITAGE","AFRICAN_HERITAGE"],
    reviewerNotes:"Strong Igbo Headwear candidate. Seller is a Star Seller with 788 sales and 4.4/5 across 224 reviews; the surfaced beaded Igbo cap has a 5-star item review. Shop states wholesale is available. Need direct verification of exact materials, production, reseller fulfilment and current wholesale economics.", createdAt:"2026-10-08", updatedAt:"2026-10-08"
  },
  {
    id:"kemiland-igbo-coral-set", supplierId:"kemiland-fabrics", title:"Men's Red Coral Bead Necklace & Bracelet Set", sourceUrl:"https://www.etsy.com/listing/4426376352/african-traditional-red-coral-bead",
    tier:"SELECT", world:"Igbo Heritage", brand:"KemilandFabrics", material:"Coral gemstone beads", origin:"Nigeria design/sourcing; supplier location United States", imageUrls:[],
    authenticityEvidence:"Etsy product listing identifies the maker and product.",
    provenanceEvidence:"Listing describes Edo/Igbo royal-regalia inspiration; gemstone/material authenticity requires supplier documentation.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["IGBO_HERITAGE","AFRICAN_HERITAGE"],
    reviewerNotes:"Potential Stronger/occasion heritage piece. Seller has 788 sales and 4.4/5 from 224 reviews and accepts bulk orders. Must verify that 'coral' is genuine, obtain exact fulfilment terms and confirm lawful material sourcing before approval.", createdAt:"2026-10-08", updatedAt:"2026-10-08"
  },
  {
    id:"handmadeng-aso-oke-duffel", supplierId:"handmade-ng", title:"Aso-oke Duffel Travel Bag",
    sourceUrl:"https://www.handmadeng.com/product/aso-oke-duffel-travel-bag/", tier:"SELECT", world:"African Heritage", brand:"Handmade NG",
    material:"Handwoven Aso-oke; structured travel-bag construction", origin:"Nigeria", retail:45000, currency:"NGN", imageUrls:[],
    authenticityEvidence:"Official Handmade NG product page.",
    provenanceEvidence:"Official product page identifies the Aso-oke construction and Nigerian vendor.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["AFRICAN_HERITAGE"],
    reviewerNotes:"Strong Entry-tier candidate: ₦45,000 current price and supplier rating 4.88/5 from 17 customer ratings. Resale/fulfilment terms are not yet public, so keep out of Shopify until commercial terms are verified.",
    createdAt:"2026-10-08", updatedAt:"2026-10-08"
  }
];

export const REAL_SUPPLIER_CANDIDATES: SupplierRecord[] = [
  {
    id:"freyrs-eyewear", name:"FREYRS Eyewear", website:"https://www.faire.com/brand/b_6ea9t0p053",
    country:"United States", categories:["Eyewear"], manufacturingOrigin:"SKU verification required",
    materials:["Acetate","Stainless steel","CR39","Nylon"], wholesaleAvailable:true, privateLabel:false,
    sampleAvailable:false, imageRights:"Supplier/platform terms must be verified", authenticityEvidence:"Wholesale brand listing",
    notes:"5.0 brand rating surfaced on Faire; product quality 4.9 and fulfillment 5.0. Wholesale authorization for EAZY still requires account verification.",
    rating:5
  },
  {
    id:"tres-cuervos", name:"Tres Cuervos", website:"https://www.faire.com/brand/b_9oyccg2p5s",
    country:"United States", categories:["Bracelets","Leather","After Dark","Accessories"], manufacturingOrigin:"SKU verification required",
    materials:["Waxed canvas","Leather","Brass"], wholesaleAvailable:true, privateLabel:false,
    sampleAvailable:false, imageRights:"Supplier/platform terms must be verified", authenticityEvidence:"Wholesale brand listing",
    notes:"5.0 brand rating and 5.0 product quality/fulfillment surfaced on Faire.",
    rating:5
  },
  {
    id:"curated-basics", name:"Curated Basics", website:"https://www.faire.com/brand/b_94e8mnvjlr",
    country:"United States", categories:["Leather","Jewellery","Objects","Bags"], manufacturingOrigin:"SKU verification required",
    materials:["Leather","Metal","Mixed materials"], wholesaleAvailable:true, privateLabel:false,
    sampleAvailable:false, imageRights:"Supplier/platform terms must be verified", authenticityEvidence:"Wholesale brand listing",
    notes:"4.9 brand rating surfaced on Faire. Brand says it independently designs and works directly with factories on small-batch goods.",
    rating:4.9
  },
  {
    id:"zone-a-limited", name:"Zone A Limited", website:"https://shopzonea.com/", country:"Nigeria", categories:["African Heritage","Leather","Aso-oke","Bags","Footwear"], manufacturingOrigin:"Benin City, Nigeria",
    materials:["Leather","Aso-oke","Ankara","Denim"], wholesaleAvailable:true, privateLabel:true, sampleAvailable:false,
    imageRights:"Supplier terms must be verified", authenticityEvidence:"Official business storefront and registered-business claims",
    notes:"42 Google reviews; handmade production; official wholesale tiers of 7%, 12% and 17% depending on quantity. Product-page prices require reconciliation before use.", rating:4.9
  },
  {
    id:"becawax", name:"BECAWAX", website:"https://shop-becawax.myshopify.com/", country:"Nigeria", categories:["African Heritage","Aso-oke","Ankara","Bags","Gifts"], manufacturingOrigin:"Nigeria",
    materials:["Aso-oke","Ankara","Adire","Mixed textiles"], wholesaleAvailable:false, privateLabel:false, sampleAvailable:false,
    imageRights:"Supplier terms must be verified", authenticityEvidence:"Official Shopify storefront",
    notes:"Official storefront has 58 products, worldwide shipping, and a sustained trail of positive customer feedback. Wholesale/drop-ship partnership terms are not publicly established.", rating:5
  },
  {
    id:"kemiland-fabrics", name:"KemilandFabrics", website:"https://www.etsy.com/shop/KemilandFabrics", country:"United States", categories:["Igbo Heritage","Coral Beads","Igbo Caps","Aso-oke","African Accessories"], manufacturingOrigin:"Exact SKU origin requires verification",
    materials:["Coral","Velvet","Beads","Aso-oke"], wholesaleAvailable:true, privateLabel:false, sampleAvailable:false,
    imageRights:"Supplier/Etsy terms must be verified", authenticityEvidence:"Etsy Star Seller storefront",
    notes:"788 sales and 4.4/5 from 224 reviews surfaced on Etsy; 379+ listings in one surfaced shop snapshot, including 81 Igbo caps and 28 coral-bead listings. Shop explicitly states bulk/wholesale orders are available.", rating:4.4
  },
  {
    id:"handmade-ng", name:"Handmade NG", website:"https://www.handmadeng.com/", country:"Nigeria", categories:["African Heritage","Aso-oke","Handmade Bags","Leather"], manufacturingOrigin:"Nigeria",
    materials:["Aso-oke","Leather","Ankara"], wholesaleAvailable:false, privateLabel:false, sampleAvailable:false,
    imageRights:"Supplier terms must be verified", authenticityEvidence:"Official vendor storefront",
    notes:"Supplier rating 4.88/5 from 17 customer ratings on surfaced products. Commercial resale/fulfilment terms are not publicly established.", rating:4.88
  },
];


// 2026-10-08 FIRST BEST-OF-COLLECTION SOURCING PASS
// These are sourcing candidates, not live Shopify listings. Commercial rights,
// supplier fulfilment and final House approval remain blocking gates.
REAL_SOURCING_CANDIDATES.push(
  {
    id:"oriade-signature-fila", supplierId:"oriade", title:"Signature Fìlà Collection — Handwoven Yorùbá Caps",
    sourceUrl:"https://www.oriade.co/products/signature-fila-collection-handwoven-modern-iconic",
    tier:"CULTURAL_HOUSE", world:"Native Headwear", brand:"Orí Adé",
    material:"Handwoven Aso-Oke", origin:"Nigeria", imageUrls:[],
    authenticityEvidence:"Official Orí Adé product page identifies the Signature Fìlà collection.",
    provenanceEvidence:"Official product page states the caps are handwoven Yorùbá forms intended for agbadas, kaftans, senator wear and linen sets.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["AFRICAN_HERITAGE","AFRICAN_GLOBAL_FUSION"],
    reviewerNotes:"High-fit native-headwear candidate. Made-to-order with Nigerian delivery and sizing support. Resale/wholesale rights must be established before any listing."
  },
  {
    id:"ilisabawn-python-loafer", supplierId:"ilisabawn", title:"Python Leather Loafer — Bespoke",
    sourceUrl:"https://ilisabawn.com/",
    tier:"CULTURAL_HOUSE", world:"Footwear", brand:"Ilisabawn",
    material:"Premium leather / python leather", origin:"Lagos, Nigeria", cost:80000, currency:"NGN starting price", retail:80000, imageUrls:[],
    authenticityEvidence:"Official Ilisabawn storefront.",
    provenanceEvidence:"Official site states the shoes are handcrafted in Lagos by skilled artisans.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["LAGOS_MADE","AFRICAN_GLOBAL_FUSION"],
    reviewerNotes:"Strong Lagos-made footwear candidate: made-to-measure, premium leather construction and explicit custom-order pathway. Need supplier/reseller or fulfilment agreement before listing."
  },
  {
    id:"zerimar-mens-leather-moccasin", supplierId:"zerimar-1942", title:"Men's Leather Moccasin Loafer Flat Shoes — Zerimar",
    sourceUrl:"https://www.faire.com/product/p_vwsrd46gvn",
    tier:"SELECT", world:"Footwear", brand:"Zerimar 1942",
    material:"High-quality Nappa leather", origin:"Spain", imageUrls:[],
    authenticityEvidence:"Faire wholesale product listing identifies Zerimar 1942.",
    provenanceEvidence:"Wholesale listing states Made in Spain.",
    status:"EVIDENCE_REQUIRED",
    reviewerNotes:"Strong global footwear candidate: 4.8/5 brand rating from 57 reviews; listing reports 4.8 product quality, fulfilment and communication. Wholesale access is visible on Faire; EAZY supplier account/fulfilment terms still require verification."
  },
  {
    id:"aim-eternal-black-onyx-signet", supplierId:"aim-eternal", title:"Stainless Steel Black Onyx Edged Men's Signet Ring",
    sourceUrl:"https://www.faire.com/discover/ring-men",
    tier:"SELECT", world:"Jewellery", brand:"Aim Eternal",
    material:"Stainless steel; black onyx detail", origin:"Supplier verification required", imageUrls:[],
    authenticityEvidence:"Faire wholesale catalogue identifies Aim Eternal.",
    provenanceEvidence:"Wholesale marketplace source; SKU-level origin documentation pending.",
    status:"EVIDENCE_REQUIRED",
    reviewerNotes:"Strong signet-ring candidate with 4.8/5 brand rating from 755 reviews surfaced in the current Faire category. Verify exact stone/material construction and resale terms."
  },
  {
    id:"cuff-daddy-black-onyx-tuxedo", supplierId:"cuff-daddy", title:"Men's Tuxedo Cufflinks and Studs — Black Onyx with Gold Tone",
    sourceUrl:"https://www.faire.com/discover/cufflinks-for-men",
    tier:"SELECT", world:"Ceremony", brand:"Cuff-Daddy",
    material:"Black onyx detail; gold-tone metal", origin:"Supplier verification required", imageUrls:[],
    authenticityEvidence:"Faire wholesale catalogue identifies Cuff-Daddy.",
    provenanceEvidence:"Wholesale marketplace source; SKU-level origin documentation pending.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["GLOBAL_SELECT"],
    reviewerNotes:"Good ceremony-world candidate: current Faire result shows 4.9/5 from 16 brand reviews. Verify exact metal composition, finish, packaging and resale terms."
  },
  {
    id:"dukhni-royal-oud-attar-gift", supplierId:"dukhni", title:"Royal Oud Attar Gift Set",
    sourceUrl:"https://www.faire.com/discover/oud-parfum",
    tier:"SELECT", world:"Fragrance & Grooming", brand:"Dukhni",
    material:"Fragrance / attar", origin:"Supplier verification required", imageUrls:[],
    authenticityEvidence:"Faire wholesale catalogue identifies Dukhni.",
    provenanceEvidence:"Wholesale marketplace source; exact manufacturing/origin documentation pending.",
    status:"EVIDENCE_REQUIRED",
    reviewerNotes:"Strong gifting/fragrance candidate: current Faire listing shows 5.0/5 brand rating from 13 reviews. Fragrance-category regulatory, authenticity, shipping and reseller requirements must be verified before listing."
  },
  {
    id:"al-haramain-amber-oud-gold", supplierId:"al-haramain", title:"Amber Oud Gold Edition Eau de Parfum",
    sourceUrl:"https://www.faire.com/discover/oud-parfum",
    tier:"SELECT", world:"Fragrance & Grooming", brand:"Al Haramain",
    material:"Eau de parfum", origin:"United Arab Emirates / exact batch documentation required", imageUrls:[],
    authenticityEvidence:"Current Faire wholesale listing identifies the branded product and supplier.",
    provenanceEvidence:"Wholesale marketplace source; batch/authorisation documentation required.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["GLOBAL_SELECT"],
    reviewerNotes:"Current Faire result shows 5.0/5 supplier rating from 32 reviews. Strong branded-fragrance candidate, but authenticity, authorised resale, dangerous-goods shipping and Nigerian regulatory requirements are hard gates."
  }
);

REAL_SUPPLIER_CANDIDATES.push(
  {
    id:"oriade", name:"Orí Adé", website:"https://www.oriade.co/", country:"Nigeria",
    categories:["Native Headwear","Yorùbá Fìlà","Aso-Oke"], manufacturingOrigin:"Nigeria",
    materials:["Aso-Oke"], wholesaleAvailable:false, privateLabel:false, sampleAvailable:false,
    imageRights:"Supplier terms must be verified", authenticityEvidence:"Official storefront",
    notes:"Official store offers handwoven Fìlà, made-to-order sizing and Nigerian delivery. Resale/wholesale relationship still needs direct agreement."
  },
  {
    id:"ilisabawn", name:"Ilisabawn", website:"https://ilisabawn.com/", country:"Nigeria",
    categories:["Men's Footwear","Leather","Loafers","Mules","Boots"], manufacturingOrigin:"Lagos, Nigeria",
    materials:["Full-grain leather","Python leather","Suede"], wholesaleAvailable:false, privateLabel:false, sampleAvailable:false,
    imageRights:"Supplier terms must be verified", authenticityEvidence:"Official storefront",
    notes:"Official site states handcrafted in Lagos, made-to-measure and international delivery. Reseller/fulfilment terms need direct verification."
  },
  {
    id:"zerimar-1942", name:"Zerimar 1942", website:"https://www.faire.com/", country:"Spain",
    categories:["Men's Footwear","Leather Loafers"], manufacturingOrigin:"Spain",
    materials:["Nappa leather"], wholesaleAvailable:true, privateLabel:false, sampleAvailable:false,
    imageRights:"Faire/supplier terms must be verified", authenticityEvidence:"Faire wholesale listing",
    notes:"Current wholesale listing shows 4.8/5 brand rating from 57 reviews with 4.8 product quality, fulfilment and communication."
  },
  {
    id:"aim-eternal", name:"Aim Eternal", website:"https://www.faire.com/", country:"United States",
    categories:["Men's Rings","Signet Rings"], manufacturingOrigin:"SKU verification required",
    materials:["Stainless steel","Onyx"], wholesaleAvailable:true, privateLabel:false, sampleAvailable:false,
    imageRights:"Faire/supplier terms must be verified", authenticityEvidence:"Faire wholesale catalogue",
    notes:"Current Faire category result shows 4.8/5 from 755 reviews."
  },
  {
    id:"cuff-daddy", name:"Cuff-Daddy", website:"https://www.faire.com/", country:"United States",
    categories:["Cufflinks","Ceremony Accessories"], manufacturingOrigin:"SKU verification required",
    materials:["Metal","Onyx"], wholesaleAvailable:true, privateLabel:false, sampleAvailable:false,
    imageRights:"Faire/supplier terms must be verified", authenticityEvidence:"Faire wholesale catalogue",
    notes:"Current Faire category result shows 4.9/5 from 16 reviews for the Black Onyx tuxedo cufflink/stud set."
  },
  {
    id:"dukhni", name:"Dukhni", website:"https://www.faire.com/", country:"United Kingdom / supplier verification required",
    categories:["Fragrance","Oud","Gifts"], manufacturingOrigin:"SKU verification required",
    materials:["Fragrance oils","Attar"], wholesaleAvailable:true, privateLabel:false, sampleAvailable:false,
    imageRights:"Faire/supplier terms must be verified", authenticityEvidence:"Faire wholesale catalogue",
    notes:"Current Faire result shows 5.0/5 from 13 reviews for Dukhni's Royal Oud Attar Gift Set."
  },
  {
    id:"al-haramain", name:"Al Haramain", website:"https://www.faire.com/", country:"United Arab Emirates / supplier verification required",
    categories:["Fragrance","Oud","Gifts"], manufacturingOrigin:"SKU/batch verification required",
    materials:["Fragrance"], wholesaleAvailable:true, privateLabel:false, sampleAvailable:false,
    imageRights:"Faire/supplier terms must be verified", authenticityEvidence:"Faire wholesale catalogue",
    notes:"Current Faire result shows 5.0/5 from 32 reviews for the supplier listing of Amber Oud Gold Edition. Authorised resale and batch authenticity remain mandatory gates."
  }
);
