import type { ProductCandidate, SupplierRecord } from "./sleek-eazy-intelligence";

export const REAL_SOURCING_CANDIDATES: ProductCandidate[] = [
  {
    id:"freyrs-vesper-aviator", supplierId:"freyrs-eyewear", title:"Vesper Unisex Aviator Sunglasses",
    sourceUrl:"https://www.faire.com/product/p_jy8vjj8a4w", tier:"SELECT", world:"Eyewear", brand:"FREYRS Eyewear",
    material:"Stainless steel frame; nylon lenses", origin:"Not independently verified; supplier listing requires verification",
    cost:85, currency:"USD MSRP reference", retail:85, imageUrls:[],
    authenticityEvidence:"Wholesale listing identifies FREYRS Eyewear; authorization for EAZY resale still requires supplier account verification.",
    provenanceEvidence:"Faire supplier listing; manufacturing/origin verification pending.", status:"EVIDENCE_REQUIRED",
    reviewerNotes:"Strong fit: premium aviator silhouette, stainless construction, UVA/UVB protection, complimentary case. Do not publish until supplier terms, origin and product QC are verified.",
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
    reviewerNotes:"Strong fit for Lagos/after-dark styling. Verify origin, wholesale cost and product before approval.",
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
    reviewerNotes:"Potential SLEEK EAZY leather-world candidate. Must verify material, construction, wholesale price and product QC before listing.",
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


// Continued 2026-10-08 collection coverage: leather, resort, fragrance and Nigerian craft.
REAL_SOURCING_CANDIDATES.push(
  {
    id:"american-leather-goods-full-grain-wallet", supplierId:"american-leather-goods", title:"Men's Full-Grain Crazy Leather Bifold Wallet with ID Window",
    sourceUrl:"https://www.faire.com/product/p_9g9t86xzcf", tier:"SELECT", world:"Leather", brand:"American Leather Goods",
    material:"Premium full-grain crazy leather", origin:"Turkey", imageUrls:[],
    authenticityEvidence:"Faire wholesale product listing identifies American Leather Goods.",
    provenanceEvidence:"Current wholesale listing states Made in Turkey and gives material details.",
    status:"EVIDENCE_REQUIRED", reviewerNotes:"Strong leather/Objects/Gifts candidate: bestseller with 97 product reviews; brand 4.8/5, product quality 4.9/5 and fulfilment 4.8/5. Exact EAZY reseller economics and shipping to Nigeria still require verification."
  },
  {
    id:"renato-borzatta-full-grain-wallet", supplierId:"renato-borzatta", title:"Men's Full-Grain Genuine Leather RFID Wallet — Blue",
    sourceUrl:"https://www.faire.com/product/p_y4ke5wx6cc", tier:"SELECT", world:"Leather", brand:"Kaili mood / RENATO BORZATTA",
    material:"Full-grain genuine leather", origin:"Italy design; handcrafted production requires SKU verification", imageUrls:[],
    authenticityEvidence:"Faire wholesale listing identifies the brand and product.",
    provenanceEvidence:"Listing states designed in Italy and handcrafted with top-quality leather; exact manufacturing location should be confirmed for the SKU.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["GLOBAL_SELECT"],
    reviewerNotes:"Very strong fit for premium everyday leather and gifting: brand 4.9/5 from 41 reviews; product quality 5.0/5, fulfilment 5.0/5 and communication 4.8/5. Gift-box packaging and RFID protection are useful differentiators."
  },
  {
    id:"suie-valentini-genuine-leather-briefcase", supplierId:"suie-valentini", title:"VE4816 Genuine Leather Briefcase",
    sourceUrl:"https://www.faire.com/en-ca/product/p_jravc7z5xg", tier:"PREMIUM", world:"Leather", brand:"Suie Valentini srl",
    material:"100% genuine leather", origin:"Bangladesh", imageUrls:[],
    authenticityEvidence:"Faire wholesale product listing identifies Suie Valentini srl.",
    provenanceEvidence:"Current listing states 100% genuine leather and Made in Bangladesh.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["GLOBAL_SELECT"],
    reviewerNotes:"High-potential executive carry candidate: brand 4.9/5 from 339 reviews with 4.9 product quality and fulfilment. Suitable for Leather/Objects/Gifts after exact wholesale economics, product imagery rights and Nigerian shipping are verified."
  },
  {
    id:"wessi-double-buckle-loafer", supplierId:"wessi", title:"Men's Black Leather Loafers with Double Buckle Detail",
    sourceUrl:"https://www.faire.com/product/p_j7p8j9u8bn", tier:"STRONGER", world:"Footwear", brand:"Wessi",
    material:"Premium leather", origin:"Turkey", imageUrls:[],
    authenticityEvidence:"Faire wholesale product listing identifies Wessi.",
    provenanceEvidence:"Current listing states Made in Turkey.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["GLOBAL_SELECT"],
    reviewerNotes:"Current Faire listing shows a 5.0/5 brand rating. Strong formal/ceremony silhouette, but review volume is only 4 brand reviews, so quality confidence must be supplemented with supplier documentation."
  },
  {
    id:"johnny-fall-26-loafer", supplierId:"johnny-fall-26", title:"Johnny Men's Leather Loafer — Fall 26",
    sourceUrl:"https://www.faire.com/product/p_cw3gm3rfnp", tier:"STRONGER", world:"Footwear", brand:"Supplier listing — Johnny",
    material:"Premium pebbled leather; leather lining; rubber driver-style sole", origin:"Brazil", imageUrls:[],
    authenticityEvidence:"Current Faire wholesale product page.",
    provenanceEvidence:"Current listing states Made in Brazil and details leather upper, lining and driver sole.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["GLOBAL_SELECT"],
    reviewerNotes:"Excellent functional-luxury candidate: current Faire result shows 5.0/5 brand rating from 18 reviews with 5.0 product quality, fulfilment and communication. Verify exact brand identity and wholesale terms before approval."
  },
  {
    id:"american-leather-goods-wallet-gift", supplierId:"american-leather-goods", title:"Genuine Full-Grain Leather Bifold Wallet with Magnetic Closure",
    sourceUrl:"https://www.faire.com/product/p_snm4bdnrpf", tier:"ENTRY", world:"Gifts", brand:"American Leather Goods",
    material:"Crazy Horse-style genuine leather", origin:"Turkey", imageUrls:[],
    authenticityEvidence:"Faire wholesale product listing identifies American Leather Goods.",
    provenanceEvidence:"Current listing states Made in Turkey and describes full-grain leather construction.",
    status:"EVIDENCE_REQUIRED",
    reviewerNotes:"Strong accessible gifting candidate: new listing under a supplier with 272+ brand reviews, 4.9 product quality and 4.8 fulfilment. Keep as a candidate until current wholesale cost, image rights and reseller terms are confirmed."
  },
  {
    id:"zousz-black-oud", supplierId:"zousz", title:"Black Oud Men's Eau de Parfum",
    sourceUrl:"https://www.faire.com/product/p_j8rzmkwd9a", tier:"STRONGER", world:"Fragrance & Grooming", brand:"ZOUSZ",
    material:"Eau de Parfum", origin:"United Kingdom", imageUrls:[],
    authenticityEvidence:"Faire wholesale listing identifies ZOUSZ and the product.",
    provenanceEvidence:"Current listing states Made in United Kingdom and gives ingredient disclosure.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["GLOBAL_SELECT"],
    reviewerNotes:"Strong fragrance candidate: 5.0/5 brand rating from 10 reviews and 5.0 product quality/fulfilment. Needs Nigerian fragrance/import compliance, authorised resale confirmation and dangerous-goods shipping review."
  },
  {
    id:"noble-oud-spirits", supplierId:"noble-oud", title:"Noble Oud Spirits Cologne",
    sourceUrl:"https://www.faire.com/product/p_pqquyur88y", tier:"STRONGER", world:"Fragrance & Grooming", brand:"Noble Oud",
    material:"Parfum-grade fragrance", origin:"United States", imageUrls:[],
    authenticityEvidence:"Faire wholesale listing identifies Noble Oud.",
    provenanceEvidence:"Current listing states Made in United States and describes a 20% oil blend.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["GLOBAL_SELECT"],
    reviewerNotes:"Very strong product-quality signal: brand 4.9/5 from 56 reviews, product quality 5.0/5 and fulfilment 4.9/5. Regulatory, authenticity, shipping and margin checks remain mandatory."
  },
  {
    id:"manready-leather-valet-tray", supplierId:"manready", title:"Leather Valet Tray — Catch All",
    sourceUrl:"https://www.faire.com/product/p_e7mtn9avma", tier:"ACCESSIBLE", world:"Objects", brand:"Manready Mercantile",
    material:"Leather", origin:"United States", imageUrls:[],
    authenticityEvidence:"Faire wholesale product listing identifies the brand and product.",
    provenanceEvidence:"Current listing and reviews identify leather construction and U.S. production.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["GLOBAL_SELECT"],
    reviewerNotes:"Excellent Objects/Gifts candidate: current listing shows 5.0/5 brand rating from 54 reviews, 5.0 product quality and 5.0 fulfilment; multiple 2026 customer reviews praise quality, workmanship and packaging."
  },
  {
    id:"mavialo-elite-signature-belt", supplierId:"mavialo-elite", title:"The Signature Belt",
    sourceUrl:"https://www.mavialoelitebrand.com/", tier:"ENTRY", world:"Belts & Leather", brand:"Mavialo Elite",
    material:"Full-grain leather", origin:"Lagos, Nigeria", retail:7000, currency:"NGN", imageUrls:[],
    authenticityEvidence:"Official Mavialo Elite storefront.",
    provenanceEvidence:"Official site states pieces are made entirely by hand from full-grain leather in Lagos.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["LAGOS_MADE","AFRICAN_GLOBAL_FUSION"],
    reviewerNotes:"Strong Lagos-made discovery candidate: official site presents a Signature Belt alongside handcrafted briefcases and accessories. Current site price is ₦7,000, which requires commercial and positioning review before EAZY adoption."
  },
  {
    id:"aaboux-architectural-leather", supplierId:"aaboux", title:"AABOUX Limited-Edition Architectural Leather Piece",
    sourceUrl:"https://aaboux.com/about-aaboux/", tier:"CULTURAL_HOUSE", world:"African Heritage", brand:"AABOUX",
    material:"Ethically sourced leather / selected exotic and textured skins", origin:"Lagos, Nigeria", imageUrls:[],
    authenticityEvidence:"Official AABOUX brand site.",
    provenanceEvidence:"Official brand story states pieces are handcrafted in Lagos by third-generation artisans and produced in limited runs.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["LAGOS_MADE","AFRICAN_HERITAGE"],
    reviewerNotes:"Strong House-level sourcing relationship candidate rather than a specific SKU. The near stitch-less construction and limited-run approach are highly differentiated. Need men's SKU identification, pricing and commercial partnership before listing."
  },
  {
    id:"paciencia-limited-leather", supplierId:"paciencia", title:"Paciencia Limited Intentional-Production Leather Piece",
    sourceUrl:"https://mypaciencia.co/about-us/", tier:"CULTURAL_HOUSE", world:"African Heritage", brand:"Paciencia",
    material:"Real leather", origin:"Lagos, Nigeria", imageUrls:[],
    authenticityEvidence:"Official Paciencia brand site.",
    provenanceEvidence:"Official site states products are handcrafted by Nigerian artisans in real leather and made in limited, intentional production runs.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["LAGOS_MADE","AFRICAN_HERITAGE"],
    reviewerNotes:"Strong Lagos craft relationship candidate aligned with EAZY's fewer-but-better philosophy. Need men's product/SKU selection and commercial partnership details."
  },
  {
    id:"reign-collection-mens-slide", supplierId:"reign-collection", title:"The Duke Toe-loop Slide",
    sourceUrl:"https://reigncollection.co/", tier:"CULTURAL_HOUSE", world:"Footwear", brand:"Reign Collection",
    material:"Top-grain leather; quality sole; hand-finished brass hardware", origin:"Lagos, Nigeria", retail:45000, currency:"NGN", imageUrls:[],
    authenticityEvidence:"Official Reign Collection storefront.",
    provenanceEvidence:"Official site states products are handcrafted in Lagos with top-grain leather, quality soles and hand-finished brass hardware.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["LAGOS_MADE","AFRICAN_GLOBAL_FUSION"],
    reviewerNotes:"Excellent Nigerian footwear candidate: current listed price ₦45,000 and the brand presents multiple men's slides, accessories and ready-now products. Resale/fulfilment rights still require a direct relationship."
  },
  {
    id:"lagoscraft-shumaka-loafer", supplierId:"lagoscraft", title:"Shumaka Bi-Material Double Tassel Loafers — Coffee Brown",
    sourceUrl:"https://lagoscraft.com/", tier:"STRONGER", world:"Footwear", brand:"Lagoscraft",
    material:"Leather / bi-material construction", origin:"Nigeria", retail:35000, currency:"NGN", imageUrls:[],
    authenticityEvidence:"Official Lagoscraft storefront.",
    provenanceEvidence:"Official site describes products as 100% leather and handmade.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["LAGOS_MADE","AFRICAN_GLOBAL_FUSION"],
    reviewerNotes:"Strong Lagos-made candidate; current storefront lists the Shumaka coffee-brown double-tassel loafer at ₦35,000 and states 100% leather/handmade. Quality, supplier terms and fulfilment must be directly verified."
  },
  {
    id:"orí-ade-signature-fila", supplierId:"oriade", title:"Signature Fìlà Collection — Handwoven Yorùbá Caps",
    sourceUrl:"https://www.oriade.co/products/signature-fila-collection-handwoven-modern-iconic", tier:"CULTURAL_HOUSE", world:"Ceremony", brand:"Orí Adé",
    material:"Handwoven Aso-Oke", origin:"Nigeria", imageUrls:[],
    authenticityEvidence:"Official Orí Adé product page.",
    provenanceEvidence:"Official product page presents handwoven Yorùbá Fìlà forms and made-to-order sizing.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["AFRICAN_HERITAGE","AFRICAN_GLOBAL_FUSION"],
    reviewerNotes:"Strong ceremony/native-headwear candidate for SLEEK EAZY where the product complements EAZY Clothing. It should remain distinct from the House's own headwear designs. Resale partnership required."
  }
);

REAL_SUPPLIER_CANDIDATES.push(
  {
    id:"american-leather-goods", name:"American Leather Goods", website:"https://www.faire.com/", country:"United States",
    categories:["Men's Wallets","Leather","Gifts"], manufacturingOrigin:"Turkey",
    materials:["Full-grain leather","Crazy Horse leather"], wholesaleAvailable:true, privateLabel:false, sampleAvailable:false,
    imageRights:"Faire/supplier terms must be verified", authenticityEvidence:"Faire wholesale listings",
    notes:"Current Faire listings show 4.8/5 brand rating from 276+ reviews and approximately 4.9 product-quality scoring."
  },
  {
    id:"renato-borzatta", name:"Kaili mood / RENATO BORZATTA", website:"https://www.faire.com/", country:"Italy",
    categories:["Men's Wallets","Leather Accessories","Gifts"], manufacturingOrigin:"SKU verification required",
    materials:["Full-grain leather"], wholesaleAvailable:true, privateLabel:false, sampleAvailable:false,
    imageRights:"Faire/supplier terms must be verified", authenticityEvidence:"Faire wholesale listing",
    notes:"Current listing shows 4.9/5 from 41 reviews and 5.0 product quality."
  },
  {
    id:"suie-valentini", name:"Suie Valentini srl", website:"https://www.faire.com/", country:"Italy",
    categories:["Leather Briefcases","Executive Bags","Objects"], manufacturingOrigin:"Bangladesh",
    materials:["Genuine leather"], wholesaleAvailable:true, privateLabel:false, sampleAvailable:false,
    imageRights:"Faire/supplier terms must be verified", authenticityEvidence:"Faire wholesale listing",
    notes:"Current listing shows 4.9/5 from 339 reviews and 4.9 product quality/fulfilment."
  },
  {
    id:"wessi", name:"Wessi", website:"https://www.faire.com/", country:"Turkey",
    categories:["Men's Footwear","Formalwear Accessories"], manufacturingOrigin:"Turkey",
    materials:["Leather"], wholesaleAvailable:true, privateLabel:false, sampleAvailable:false,
    imageRights:"Faire/supplier terms must be verified", authenticityEvidence:"Faire wholesale listing",
    notes:"Current loafers listing carries a 5.0/5 brand rating, though only 4 reviews."
  },
  {
    id:"johnny-fall-26", name:"Johnny / Fall 26 supplier listing", website:"https://www.faire.com/", country:"Brazil",
    categories:["Men's Footwear","Loafers"], manufacturingOrigin:"Brazil",
    materials:["Pebbled leather","Leather lining","Rubber"], wholesaleAvailable:true, privateLabel:false, sampleAvailable:false,
    imageRights:"Faire/supplier terms must be verified", authenticityEvidence:"Current Faire wholesale product page",
    notes:"Current product result shows 5.0/5 from 18 brand reviews and 5.0 product quality."
  },
  {
    id:"zousz", name:"ZOUSZ", website:"https://www.faire.com/", country:"United Kingdom",
    categories:["Fragrance","Oud","Gifts"], manufacturingOrigin:"United Kingdom",
    materials:["Fragrance"], wholesaleAvailable:true, privateLabel:false, sampleAvailable:false,
    imageRights:"Faire/supplier terms must be verified", authenticityEvidence:"Faire wholesale listing",
    notes:"Black Oud listing currently shows 5.0/5 from 10 brand reviews and 5.0 product quality."
  },
  {
    id:"noble-oud", name:"Noble Oud", website:"https://www.faire.com/", country:"United States",
    categories:["Fragrance","Oud","Gifts"], manufacturingOrigin:"United States",
    materials:["Parfum fragrance"], wholesaleAvailable:true, privateLabel:false, sampleAvailable:false,
    imageRights:"Faire/supplier terms must be verified", authenticityEvidence:"Faire wholesale listing",
    notes:"Current listing shows 4.9/5 from 56 reviews and 5.0 product quality."
  },
  {
    id:"manready", name:"Manready Mercantile", website:"https://www.faire.com/", country:"United States",
    categories:["Leather Objects","Valet","Gifts"], manufacturingOrigin:"United States",
    materials:["Leather"], wholesaleAvailable:true, privateLabel:false, sampleAvailable:false,
    imageRights:"Faire/supplier terms must be verified", authenticityEvidence:"Faire wholesale listing",
    notes:"Current valet tray listing shows 5.0/5 from 54 reviews and 5.0 product quality/fulfilment."
  },
  {
    id:"mavialo-elite", name:"Mavialo Elite", website:"https://www.mavialoelitebrand.com/", country:"Nigeria",
    categories:["Belts","Leather","Briefcases","Accessories"], manufacturingOrigin:"Lagos, Nigeria",
    materials:["Full-grain leather"], wholesaleAvailable:false, privateLabel:false, sampleAvailable:false,
    imageRights:"Supplier terms must be verified", authenticityEvidence:"Official storefront",
    notes:"Official site presents 2026 collection, full-grain leather, hand craftsmanship and Lagos address."
  },
  {
    id:"aaboux", name:"AABOUX", website:"https://aaboux.com/", country:"Nigeria",
    categories:["Leather","Limited Edition","Bags","Statement Objects"], manufacturingOrigin:"Lagos, Nigeria",
    materials:["Leather","Selected exotic/textured skins"], wholesaleAvailable:false, privateLabel:false, sampleAvailable:false,
    imageRights:"Supplier terms must be verified", authenticityEvidence:"Official brand site",
    notes:"Official site states limited-edition production and handcrafted construction by third-generation Lagos artisans."
  },
  {
    id:"paciencia", name:"Paciencia", website:"https://mypaciencia.co/", country:"Nigeria",
    categories:["Leather","Bags","Intentional Limited Runs"], manufacturingOrigin:"Lagos, Nigeria",
    materials:["Real leather"], wholesaleAvailable:false, privateLabel:false, sampleAvailable:false,
    imageRights:"Supplier terms must be verified", authenticityEvidence:"Official brand site",
    notes:"Official site emphasizes handcrafted Nigerian leather goods and limited intentional production."
  },
  {
    id:"reign-collection", name:"Reign Collection", website:"https://reigncollection.co/", country:"Nigeria",
    categories:["Men's Footwear","Slides","Gifts","Accessories"], manufacturingOrigin:"Lagos, Nigeria",
    materials:["Top-grain leather","Brass"], wholesaleAvailable:false, privateLabel:false, sampleAvailable:false,
    imageRights:"Supplier terms must be verified", authenticityEvidence:"Official storefront",
    notes:"Official site lists men's slides at ₦45,000 and states top-grain leather, quality soles and hand-finished brass."
  },
  {
    id:"lagoscraft", name:"Lagoscraft", website:"https://lagoscraft.com/", country:"Nigeria",
    categories:["Men's Footwear","Loafers","Sandals"], manufacturingOrigin:"Nigeria",
    materials:["Leather"], wholesaleAvailable:false, privateLabel:false, sampleAvailable:false,
    imageRights:"Supplier terms must be verified", authenticityEvidence:"Official storefront",
    notes:"Official site states 100% leather and handmade; Shumaka double-tassel loafer currently listed at ₦35,000."
  }
);


// Jewelry expansion from current wholesale discovery.
REAL_SOURCING_CANDIDATES.push(
  {
    id:"we-are-all-smith-black-box-chain", supplierId:"we-are-all-smith", title:"Black Stainless Steel Chain Necklace for Men — 3MM",
    sourceUrl:"https://www.faire.com/product/p_yrr5fq6ezu", tier:"ENTRY", world:"Jewellery", brand:"We Are All Smith",
    material:"Black-plated stainless steel", origin:"United States", imageUrls:[],
    authenticityEvidence:"Faire wholesale product listing identifies We Are All Smith.",
    provenanceEvidence:"Current listing states Made in United States and gives chain dimensions/material.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["GLOBAL_SELECT"],
    reviewerNotes:"Strong clean everyday-chain candidate: 4.9/5 brand rating from 35 reviews, 5.0 product quality and 5.0 fulfilment. Multiple lengths support styling and composition. Verify Nigerian fulfilment economics before approval."
  },
  {
    id:"pinktown-24in-antique-chain", supplierId:"pinktownusa", title:"24in 4DC 12MM Antique Stainless Steel Chain",
    sourceUrl:"https://www.faire.com/product/p_z9q2g9j7fj", tier:"ACCESSIBLE", world:"Jewellery", brand:"PinktownUSA",
    material:"Stainless steel", origin:"China", imageUrls:[],
    authenticityEvidence:"Faire wholesale product listing identifies PinktownUSA.",
    provenanceEvidence:"Current listing states Made in China.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["GLOBAL_SELECT"],
    reviewerNotes:"Strong statement-chain candidate: 4.9/5 brand rating from 698 reviews, 5.0 product quality and 5.0 fulfilment. Waterproof/corrosion-resistant claims should be validated against supplier documentation before EAZY approval."
  },
  {
    id:"mio-queena-13mm-chain", supplierId:"mio-queena", title:"Men's Stainless Steel Chain Necklace MIO70821",
    sourceUrl:"https://www.faire.com/product/p_q97dze5vm4", tier:"ENTRY", world:"Jewellery", brand:"Mio Queena",
    material:"Stainless steel", origin:"China", imageUrls:[],
    authenticityEvidence:"Faire wholesale product listing identifies Mio Queena.",
    provenanceEvidence:"Current listing states Made in China and describes 13mm, high-polish stainless construction.",
    status:"EVIDENCE_REQUIRED",
    reviewerNotes:"Exceptional market-proof candidate: 4.9/5 brand rating from more than 2,000 reviews, 4.9 product quality and 4.9 fulfilment. Because EAZY is premium, exact SKU quality and presentation still need House review rather than relying on the marketplace rating alone."
  },
  {
    id:"mio-queena-woven-chain", supplierId:"mio-queena", title:"Men's Stainless Steel Woven Chain Necklace",
    sourceUrl:"https://www.faire.com/product/p_hpeaensu4g", tier:"ENTRY", world:"Jewellery", brand:"Mio Queena",
    material:"Titanium steel / 316 stainless steel", origin:"China", imageUrls:[],
    authenticityEvidence:"Faire wholesale product listing identifies Mio Queena.",
    provenanceEvidence:"Current listing states Made in China with vacuum electroplating and manual polishing.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["GLOBAL_SELECT"],
    reviewerNotes:"High market-proof candidate: 4.9/5 brand rating from more than 1,700 reviews with strong fulfilment and communication. Keep below the House bar until finish consistency and image/presentation rights are verified."
  },
  {
    id:"mad-man-mm-chain", supplierId:"mad-man", title:"M|M Stainless Chain Necklace",
    sourceUrl:"https://www.faire.com/product/p_de54ldvy", tier:"ENTRY", world:"Jewellery", brand:"Mad Man",
    material:"Stainless steel", origin:"China", imageUrls:[],
    authenticityEvidence:"Faire wholesale product listing identifies Mad Man.",
    provenanceEvidence:"Current listing states Made in China.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["GLOBAL_SELECT"],
    reviewerNotes:"Strong market-proof candidate: 4.8/5 brand rating from 436 reviews, 4.7 product quality, 5.0 fulfilment. Candidate for accessible chain edit after exact finish, packaging and reseller terms are verified."
  }
);

REAL_SUPPLIER_CANDIDATES.push(
  {
    id:"we-are-all-smith", name:"We Are All Smith", website:"https://www.faire.com/", country:"United States",
    categories:["Men's Chains","Stainless Steel Jewellery"], manufacturingOrigin:"United States",
    materials:["Stainless steel"], wholesaleAvailable:true, privateLabel:false, sampleAvailable:false,
    imageRights:"Faire/supplier terms must be verified", authenticityEvidence:"Faire wholesale listing",
    notes:"Current black chain listing shows 4.9/5 from 35 reviews and 5.0 product quality."
  },
  {
    id:"pinktownusa", name:"PinktownUSA", website:"https://www.faire.com/", country:"United States",
    categories:["Men's Chains","Stainless Steel Jewellery"], manufacturingOrigin:"China",
    materials:["Stainless steel"], wholesaleAvailable:true, privateLabel:false, sampleAvailable:false,
    imageRights:"Faire/supplier terms must be verified", authenticityEvidence:"Faire wholesale listing",
    notes:"Current 24-inch chain listing shows 4.9/5 from 698 reviews and 5.0 product quality."
  },
  {
    id:"mio-queena", name:"Mio Queena", website:"https://www.faire.com/", country:"China / supplier verification required",
    categories:["Men's Chains","Stainless Steel Jewellery"], manufacturingOrigin:"China",
    materials:["Stainless steel","Titanium steel"], wholesaleAvailable:true, privateLabel:false, sampleAvailable:false,
    imageRights:"Faire/supplier terms must be verified", authenticityEvidence:"Faire wholesale listings",
    notes:"Current products surfaced with 4.9/5 brand ratings across 1,700–2,000+ reviews and strong product-quality/fulfilment scores."
  },
  {
    id:"mad-man", name:"Mad Man", website:"https://www.faire.com/", country:"United States",
    categories:["Men's Chains","Stainless Steel Jewellery"], manufacturingOrigin:"China",
    materials:["Stainless steel"], wholesaleAvailable:true, privateLabel:false, sampleAvailable:false,
    imageRights:"Faire/supplier terms must be verified", authenticityEvidence:"Faire wholesale listing",
    notes:"Current M|M chain listing shows 4.8/5 from 436 reviews."
  }
);


// Further coverage: belts and ceremony finishing pieces.
REAL_SOURCING_CANDIDATES.push(
  {
    id:"meninas-bonitas-italian-leather-belt", supplierId:"meninas-bonitas-cork", title:"Made in Italy Genuine Leather Men's Belt — LEL-05-B",
    sourceUrl:"https://www.faire.com/product/p_td63rf57cf", tier:"ACCESSIBLE", world:"Belts & Leather", brand:"Meninas Bonitas Cork",
    material:"100% genuine leather; polished metal hardware", origin:"Portugal", imageUrls:[],
    authenticityEvidence:"Faire wholesale listing identifies the supplier and SKU.",
    provenanceEvidence:"Current listing describes Italian leather and states Made in Portugal; exact tanning/production provenance should be documented for House approval.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["GLOBAL_SELECT"],
    reviewerNotes:"Excellent everyday/formal belt candidate: 4.9/5 brand rating from 453 reviews, 4.8 product quality and 4.9 fulfilment. Large review base makes this a stronger discovery candidate than low-volume 5-star listings."
  },
  {
    id:"maison-unik-italian-belt", supplierId:"maison-unik-accessoires", title:"Genuine Leather Men's Belt — Italian Made",
    sourceUrl:"https://www.faire.com/product/p_axqv7urb4a", tier:"ACCESSIBLE", world:"Belts & Leather", brand:"Maison Unik Accessoires",
    material:"Textured genuine leather; gunmetal buckle", origin:"Italy", imageUrls:[],
    authenticityEvidence:"Faire wholesale product listing identifies Maison Unik Accessoires.",
    provenanceEvidence:"Current listing states Made in Italy.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["GLOBAL_SELECT"],
    reviewerNotes:"Strong clean belt candidate: 4.9/5 brand rating from 40 reviews with 4.8 product quality, fulfilment and communication. One-size adjustable design could reduce fit complexity, but EAZY must verify leather quality and finish."
  },
  {
    id:"cuff-daddy-fiber-optic-cufflinks", supplierId:"cuff-daddy", title:"Gray & Silver Fiber Optic Cufflinks",
    sourceUrl:"https://www.faire.com/product/p_nv7du63jyr", tier:"STRONGER", world:"Ceremony", brand:"Cuff-Daddy",
    material:"Rhodium-coated polished silver frame; catseye/fiber optic stones", origin:"United States", imageUrls:[],
    authenticityEvidence:"Faire wholesale product listing identifies Cuff-Daddy.",
    provenanceEvidence:"Current listing states Made in United States.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["GLOBAL_SELECT"],
    reviewerNotes:"Excellent ceremony candidate: current listing shows 4.9/5 brand rating, 5.0 product quality, fulfilment and communication, plus 13 product reviews. Neutral gray/silver treatment is especially suitable for broad formal styling."
  },
  {
    id:"cuff-daddy-stainless-cufflinks", supplierId:"blackjack-mens-jewelry", title:"Men's Stainless Steel Cuff Links",
    sourceUrl:"https://www.faire.com/product/p_s929svxcnk/", tier:"ENTRY", world:"Ceremony", brand:"Blackjack Mens Jewelry",
    material:"Stainless steel", origin:"China", imageUrls:[],
    authenticityEvidence:"Faire wholesale listing identifies Blackjack Mens Jewelry.",
    provenanceEvidence:"Current listing states Made in China.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["GLOBAL_SELECT"],
    reviewerNotes:"Strong market-proof ceremony candidate: 4.9/5 brand rating from 76 reviews, 5.0 product quality and fulfilment. Verify exact finish, packaging and positioning for EAZY before inclusion."
  }
);

REAL_SUPPLIER_CANDIDATES.push(
  {
    id:"meninas-bonitas-cork", name:"Meninas Bonitas Cork", website:"https://www.faire.com/", country:"Portugal / supplier verification required",
    categories:["Men's Belts","Italian Leather"], manufacturingOrigin:"Portugal",
    materials:["Genuine leather","Metal"], wholesaleAvailable:true, privateLabel:false, sampleAvailable:false,
    imageRights:"Faire/supplier terms must be verified", authenticityEvidence:"Faire wholesale listing",
    notes:"Current belt listing shows 4.9/5 brand rating from 453 reviews and 4.8 product quality."
  },
  {
    id:"maison-unik-accessoires", name:"Maison Unik Accessoires", website:"https://www.faire.com/", country:"Italy / supplier verification required",
    categories:["Men's Belts","Leather Accessories"], manufacturingOrigin:"Italy",
    materials:["Genuine leather","Metal"], wholesaleAvailable:true, privateLabel:false, sampleAvailable:false,
    imageRights:"Faire/supplier terms must be verified", authenticityEvidence:"Faire wholesale listing",
    notes:"Current men's belt listing shows 4.9/5 from 40 reviews and 4.8 product quality."
  },
  {
    id:"blackjack-mens-jewelry", name:"Blackjack Mens Jewelry", website:"https://www.faire.com/", country:"United States / supplier verification required",
    categories:["Cufflinks","Men's Jewellery","Rings","Chains"], manufacturingOrigin:"SKU verification required",
    materials:["Stainless steel","Mixed metals"], wholesaleAvailable:true, privateLabel:false, sampleAvailable:false,
    imageRights:"Faire/supplier terms must be verified", authenticityEvidence:"Faire wholesale listing",
    notes:"Current cufflink listing shows 4.9/5 from 76 reviews and 5.0 product quality."
  }
);


// Premium timepiece and eyewear expansion.
REAL_SOURCING_CANDIDATES.push(
  {
    id:"bering-automatic-16743-307", supplierId:"bering", title:"BERING Automatic 16743-307",
    sourceUrl:"https://www.faire.com/product/p_x92dcb5m42", tier:"PREMIUM", world:"Watches", brand:"BERING",
    material:"Stainless steel case; sapphire crystal; Milanese bracelet", origin:"Japan", imageUrls:[],
    authenticityEvidence:"Faire wholesale listing identifies BERING and SKU 16743-307.",
    provenanceEvidence:"Current listing states Made in Japan and documents sapphire crystal and stainless construction.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["GLOBAL_SELECT"],
    reviewerNotes:"Excellent watch candidate: automatic movement, sapphire crystal and 5.0/5 supplier rating from 5 reviews. Review volume is small, so EAZY must verify authorised distribution, warranty, packaging and fulfilment."
  },
  {
    id:"glycine-combat-field-gl0585", supplierId:"ashford-wholesale", title:"Glycine Combat Field 40mm Automatic GL0585",
    sourceUrl:"https://www.faire.com/product/p_7276dhysjj", tier:"PREMIUM", world:"Watches", brand:"Glycine",
    material:"Stainless steel; sapphire crystal; automatic movement", origin:"Supplier/distributor; SKU origin and Swiss authenticity documentation required", imageUrls:[],
    authenticityEvidence:"Ashford Wholesale listing states 100% authentic and sourced through established brand/authorized distributor relationships.",
    provenanceEvidence:"Current wholesale listing documents sapphire crystal, 100m water resistance and automatic movement.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["GLOBAL_SELECT"],
    reviewerNotes:"High-potential premium timepiece: 5.0/5 Ashford rating from 12 reviews, 5.0 product quality and 4.9 fulfilment. Authorised distribution, warranty and Nigerian after-sales support are mandatory before House approval."
  },
  {
    id:"tissot-carson-automatic", supplierId:"ashford-wholesale", title:"Tissot Carson 40mm Automatic T1224072203300",
    sourceUrl:"https://www.faire.com/product/p_574juvw2xe", tier:"PREMIUM", world:"Watches", brand:"Tissot",
    material:"Stainless steel; sapphire crystal; automatic movement", origin:"Supplier/distributor; exact Swiss provenance and authorization require verification", imageUrls:[],
    authenticityEvidence:"Ashford Wholesale listing states 100% authentic and sourced through established brand/authorized distributor relationships.",
    provenanceEvidence:"Current listing documents sapphire crystal, automatic movement and model reference.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["GLOBAL_SELECT"],
    reviewerNotes:"Strong premium watch candidate: current Ashford result shows 5.0/5 rating from 7 reviews and 5.0 product quality/fulfilment. Need warranty, authorized-reseller proof and landed economics before approval."
  },
  {
    id:"orient-star-contemporary-green", supplierId:"ashford-wholesale", title:"Orient Star Contemporary 38mm Automatic RE-AV0138V00B",
    sourceUrl:"https://www.faire.com/product/p_6j7ynf55ug", tier:"PREMIUM", world:"Watches", brand:"Orient Star",
    material:"Stainless steel; sapphire crystal; automatic movement", origin:"Japan / exact distributor documentation required", imageUrls:[],
    authenticityEvidence:"Ashford Wholesale listing states 100% authentic and supplied through established brand/distributor relationships.",
    provenanceEvidence:"Current listing gives model reference, sapphire crystal, 100m water resistance and automatic movement.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["GLOBAL_SELECT"],
    reviewerNotes:"Excellent premium watch candidate with a distinctive green dial: 5.0/5 Ashford rating from 10 reviews and 5.0 product quality/fulfilment/communication. Authorization and warranty remain hard gates."
  },
  {
    id:"oakley-black-oo9081", supplierId:"ashford-wholesale", title:"Oakley Men's 50mm Black Sunglasses OO9081-26-203-28",
    sourceUrl:"https://www.faire.com/discover/oakley-sunglasses", tier:"STRONGER", world:"Eyewear", brand:"Oakley",
    material:"Brand eyewear; exact frame/lens specification and origin require SKU verification", origin:"Supplier/distributor; exact origin requires verification", imageUrls:[],
    authenticityEvidence:"Current Faire discovery listing identifies Oakley and Ashford Wholesale.",
    provenanceEvidence:"Wholesale discovery result places this model in Ashford Wholesale's current assortment.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["GLOBAL_SELECT"],
    reviewerNotes:"Potential high-trust branded eyewear candidate: current Faire results show Ashford Wholesale at 5.0/5 from 12 reviews. Authorised distribution and exact SKU specifications must be proven before listing."
  }
);

REAL_SUPPLIER_CANDIDATES.push(
  {
    id:"bering", name:"BERING", website:"https://www.faire.com/", country:"Denmark / supplier verification required",
    categories:["Automatic Watches","Timepieces"], manufacturingOrigin:"Japan for surfaced SKU",
    materials:["Stainless steel","Sapphire crystal"], wholesaleAvailable:true, privateLabel:false, sampleAvailable:false,
    imageRights:"Faire/supplier terms must be verified", authenticityEvidence:"Faire wholesale listing",
    notes:"Current surfaced automatic men's watch is 5.0/5 from 5 reviews with product-level positive reviews."
  },
  {
    id:"ashford-wholesale", name:"Ashford Wholesale", website:"https://www.faire.com/", country:"United States",
    categories:["Watches","Branded Eyewear"], manufacturingOrigin:"SKU-specific",
    materials:["Stainless steel","Sapphire crystal","Optical materials"], wholesaleAvailable:true, privateLabel:false, sampleAvailable:false,
    imageRights:"Faire/distributor terms must be verified", authenticityEvidence:"Current listings state 100% authenticity and established brand/authorized distributor relationships.",
    notes:"Current Faire watch/eyewear listings show 5.0/5 Ashford ratings across multiple product groups, but EAZY must verify authorisation, warranties and SKU provenance before approval."
  }
);


// Nigerian craft and executive-carry expansion.
REAL_SOURCING_CANDIDATES.push(
  {
    id:"beads-by-tricia-mens-premium", supplierId:"beads-by-tricia", title:"Beads by Tricia — Men's Handcrafted Premium Beaded Edit",
    sourceUrl:"https://beadsbytricia.com/", tier:"CULTURAL_HOUSE", world:"African Heritage", brand:"Beads by Tricia",
    material:"Handcrafted beads; exact stone/material varies by SKU", origin:"Nigeria", imageUrls:[],
    authenticityEvidence:"Official Beads by Tricia storefront with dedicated Men's Collection.",
    provenanceEvidence:"Official site states handcrafted-to-order premium beaded jewelry rooted in African heritage and offers men's collection, groom/Owambe sets and worldwide shipping.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["AFRICAN_HERITAGE","AFRICAN_GLOBAL_FUSION"],
    reviewerNotes:"High-fit African Heritage relationship candidate. The House should select only the most refined men's SKUs after material disclosure, craftsmanship review, pricing and reseller/fulfilment terms are agreed."
  },
  {
    id:"indulgence-royal-ember", supplierId:"the-indulgence", title:"Royal Ember — Traditional Red-Brown Bead Set with Bracelet",
    sourceUrl:"https://www.homeofindulgence.com/product/royal-ember-native-agbada-bead-set/", tier:"STRONGER", world:"Ceremony", brand:"The Indulgence",
    material:"Mixed natural/stone beads; exact materials require documentation", origin:"Surulere, Lagos, Nigeria", retail:190800, currency:"NGN", imageUrls:[],
    authenticityEvidence:"Official The Indulgence product page.",
    provenanceEvidence:"Official page states handmade in Surulere, Lagos and describes the four-layer necklace and matching bracelet set.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["AFRICAN_HERITAGE","LAGOS_MADE"],
    reviewerNotes:"Strong ceremonial statement candidate at ₦190,800. Designed for agbada, isi agu, senator and other native ceremonial dressing. Need exact stone/material documentation, current availability and commercial partnership terms."
  },
  {
    id:"indulgence-odenigbo-eagle-onyx", supplierId:"the-indulgence", title:"Odenigbo's Eagle Onyx Men's Neck Bead & Bracelet Set",
    sourceUrl:"https://www.homeofindulgence.com/product/odenigbos-eagle-onyx-mens-neck-bead-bracelet-set-the-indulgence/", tier:"STRONGER", world:"African Heritage", brand:"The Indulgence",
    material:"Onyx beads; metallic/gold-tone accents", origin:"Surulere, Lagos, Nigeria", retail:79350, currency:"NGN", imageUrls:[],
    authenticityEvidence:"Official The Indulgence product page.",
    provenanceEvidence:"Official page states handcrafted by master artisans in Surulere and describes onyx construction with eagle pendant.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["IGBO_HERITAGE","AFRICAN_HERITAGE","LAGOS_MADE"],
    reviewerNotes:"High-potential heritage piece at ₦79,350 with strong visual identity. Exact material authenticity, cultural naming/provenance, fulfilment and resale terms must be verified."
  },
  {
    id:"zachi-112-briefcase", supplierId:"zachi-leather", title:"112-Zachi Briefcase",
    sourceUrl:"https://zachileather.com/", tier:"STRONGER", world:"Leather", brand:"ZACHI LEATHER",
    material:"Leather; exact grade/details require SKU verification", origin:"Lagos, Nigeria", retail:150000, currency:"NGN", imageUrls:[],
    authenticityEvidence:"Official ZACHI LEATHER storefront.",
    provenanceEvidence:"Official site states handmade in Lagos and lists the 112-Zachi Briefcase among best sellers.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["LAGOS_MADE","AFRICAN_GLOBAL_FUSION"],
    reviewerNotes:"Strong executive-carry candidate at ₦150,000. The store also lists tech folios, office/work bags and Aso-oke backpack. Need exact leather grade, construction, warranty and commercial fulfilment agreement."
  },
  {
    id:"zachi-aso-oke-backpack", supplierId:"zachi-leather", title:"Aso-oke Backpack",
    sourceUrl:"https://zachileather.com/", tier:"ACCESSIBLE", world:"Leather", brand:"ZACHI LEATHER",
    material:"Aso-oke textile; leather construction/details require SKU verification", origin:"Lagos, Nigeria", retail:80625, currency:"NGN", imageUrls:[],
    authenticityEvidence:"Official ZACHI LEATHER storefront.",
    provenanceEvidence:"Official site lists an Aso-oke backpack and states the brand is proudly handmade in Lagos.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["LAGOS_MADE","AFRICAN_HERITAGE","AFRICAN_GLOBAL_FUSION"],
    reviewerNotes:"Strong African/global carry candidate at ₦80,625, especially for Objects/Travel/Leather. Verify construction, hardware, lining, load capacity, durability and EAZY commercial terms."
  },
  {
    id:"morin-o-emperor-briefcase", supplierId:"morin-o", title:"Emperor Briefcase",
    sourceUrl:"https://morin-o.com/", tier:"PREMIUM", world:"Leather", brand:"Morin.O Leather Goods",
    material:"Leather / exotic-skin craftsmanship; exact SKU material must be verified", origin:"Lagos, Nigeria", retail:442500, currency:"NGN", imageUrls:[],
    authenticityEvidence:"Official Morin.O storefront.",
    provenanceEvidence:"Official site states named leather works are handcrafted in its Lagos atelier and lists Emperor Briefcase for Men.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["LAGOS_MADE","AFRICAN_GLOBAL_FUSION"],
    reviewerNotes:"Premium executive-carry candidate at ₦442,500 from a Lagos leather atelier established in 2013. Strong fit for Premium/Objects, subject to exact leather specification, warranty, fulfilment and reseller partnership."
  },
  {
    id:"sochis-eclat-mens-custom-jewelry", supplierId:"sochis-eclat", title:"Sochi's Éclat — Men's Handcrafted / Custom Jewelry Edit",
    sourceUrl:"https://sochiseclat.com/", tier:"CULTURAL_HOUSE", world:"Jewellery", brand:"Sochi's Éclat",
    material:"Wire-work and beads; exact material varies by piece", origin:"Lagos, Nigeria", imageUrls:[],
    authenticityEvidence:"Official Sochi's Éclat site.",
    provenanceEvidence:"Official site states the brand is handcrafted in Lagos, offers a Men's Collection and Custom Jewelry, and ships nationwide and worldwide.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["LAGOS_MADE","AFRICAN_HERITAGE"],
    reviewerNotes:"Potential relationship for differentiated men's jewelry rather than commodity chains. Need a strict SKU-level selection and direct commercial terms before EAZY approval."
  }
);

REAL_SUPPLIER_CANDIDATES.push(
  {
    id:"beads-by-tricia", name:"Beads by Tricia", website:"https://beadsbytricia.com/", country:"Nigeria",
    categories:["Men's Jewelry","Beaded Accessories","Ceremony"], manufacturingOrigin:"Nigeria",
    materials:["Beads","Mixed natural stones"], wholesaleAvailable:false, privateLabel:false, sampleAvailable:false,
    imageRights:"Supplier terms must be verified", authenticityEvidence:"Official storefront",
    notes:"Official store has dedicated Men's Collection, groom/Owambe sets, handcrafted-to-order production and worldwide shipping."
  },
  {
    id:"the-indulgence", name:"The Indulgence", website:"https://www.homeofindulgence.com/", country:"Nigeria",
    categories:["Men's Beads","Ceremony","African Heritage Jewelry"], manufacturingOrigin:"Surulere, Lagos, Nigeria",
    materials:["Onyx","Jasper","Mixed beads","Metal accents"], wholesaleAvailable:false, privateLabel:false, sampleAvailable:false,
    imageRights:"Supplier terms must be verified", authenticityEvidence:"Official storefront",
    notes:"Current men's bead sets are presented as handcrafted by master artisans in Surulere, including the Royal Ember, Odenigbo's Eagle and other named cultural pieces."
  },
  {
    id:"zachi-leather", name:"ZACHI LEATHER", website:"https://zachileather.com/", country:"Nigeria",
    categories:["Briefcases","Office Bags","Tech Folios","Aso-oke Bags","Wallets"], manufacturingOrigin:"Lagos, Nigeria",
    materials:["Leather","Aso-oke"], wholesaleAvailable:false, privateLabel:false, sampleAvailable:false,
    imageRights:"Supplier terms must be verified", authenticityEvidence:"Official storefront",
    notes:"Official storefront states handmade in Lagos and currently lists 112-Zachi Briefcase and Aso-oke Backpack among its products."
  },
  {
    id:"morin-o", name:"Morin.O Leather Goods", website:"https://morin-o.com/", country:"Nigeria",
    categories:["Leather Briefcases","Leather Goods","Exotic Leather"], manufacturingOrigin:"Lagos, Nigeria",
    materials:["Leather","Exotic skins"], wholesaleAvailable:false, privateLabel:false, sampleAvailable:false,
    imageRights:"Supplier terms must be verified", authenticityEvidence:"Official storefront",
    notes:"Official site lists Emperor Briefcase for Men at ₦442,500 and states named leather works are handcrafted in its Lagos atelier since 2013."
  },
  {
    id:"sochis-eclat", name:"Sochi's Éclat", website:"https://sochiseclat.com/", country:"Nigeria",
    categories:["Men's Jewelry","Beads","Custom Jewelry"], manufacturingOrigin:"Lagos, Nigeria",
    materials:["Beads","Wire work","Mixed materials"], wholesaleAvailable:false, privateLabel:false, sampleAvailable:false,
    imageRights:"Supplier terms must be verified", authenticityEvidence:"Official storefront",
    notes:"Official site presents a 2026 collection, Men's Collection, custom jewelry and worldwide shipping from Lagos."
  }
);


// 2026-10-08: further best-of coverage from live supplier research.
REAL_SOURCING_CANDIDATES.push(
  {
    id:"kaftanlagos-black-penny-loafer", supplierId:"kaftan-lagos", title:"Black Leather Penny Loafers",
    sourceUrl:"https://www.kaftanlagos.com/products/black-leather-penny-loafers", tier:"STRONGER", world:"Footwear", brand:"Kaftan Lagos",
    material:"Leather", origin:"Lagos, Nigeria", retail:240000, currency:"NGN", imageUrls:[],
    authenticityEvidence:"Official Kaftan Lagos product page.",
    provenanceEvidence:"Official product page states handcrafted in Lagos, Nigeria using fine leather over several weeks.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["LAGOS_MADE","AFRICAN_GLOBAL_FUSION"],
    reviewerNotes:"Very strong formal-footwear candidate at ₦240,000 with sizes 40–46 and worldwide shipping. Made-to-order production and actual supplier relationship must be verified before EAZY resale."
  },
  {
    id:"leathergear-venice-penny-loafer", supplierId:"leathergear-venice", title:"VENICE Penny Loafer — Black",
    sourceUrl:"https://www.leathergearcompany.com/", tier:"STRONGER", world:"Footwear", brand:"LeatherGear",
    material:"Premium leather", origin:"Lagos, Nigeria", retail:145500, currency:"NGN", imageUrls:[],
    authenticityEvidence:"Official LeatherGear storefront.",
    provenanceEvidence:"Official site states handcrafted in Lagos, Nigeria and says it uses hand-selected premium leather.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["LAGOS_MADE","AFRICAN_GLOBAL_FUSION"],
    reviewerNotes:"Strong formalwear candidate with a clear Lagos craftsmanship story. Current storefront lists VENICE at ₦145,500 and TORINO/MILAN alternatives. Verify exact leather grade, construction, warranty, imagery and fulfilment partnership."
  },
  {
    id:"julzcraft-loafer-formal-edit", supplierId:"julz-craft", title:"Julz Craft — Premium Handcrafted Loafer / Formal Edit",
    sourceUrl:"https://www.julzcraft.com.ng/", tier:"ACCESSIBLE", world:"Footwear", brand:"Julz Craft",
    material:"Genuine leather", origin:"Lagos, Nigeria", imageUrls:[],
    authenticityEvidence:"Official Julz Craft storefront.",
    provenanceEvidence:"Official site states premium handcrafted footwear from Lagos and 100% genuine leather.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["LAGOS_MADE"],
    reviewerNotes:"Discovery candidate spanning loafers, formal shoes, boots and sandals. Keep only the strongest men's SKU after exact product-level QC and commercial terms are verified."
  },
  {
    id:"ciska-handmade-casual-loafer", supplierId:"ciska-stores", title:"Handmade Casual Loafers XP",
    sourceUrl:"https://ciska.com.ng/product/handmade-casual-loafers-xp/", tier:"ENTRY", world:"Footwear", brand:"CIska Stores",
    material:"Handmade leather construction; exact leather grade requires verification", origin:"Nigeria", retail:30000, currency:"NGN", imageUrls:[],
    authenticityEvidence:"Official CIska product page.",
    provenanceEvidence:"Official product page identifies the product as handmade and provides current customer reviews.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["LAGOS_MADE"],
    reviewerNotes:"Useful lower-tier market-proof candidate at ₦30,000: current page shows positive customer reviews citing intact delivery, neat finishing, solid quality and attractive design. EAZY's premium bar still requires material and construction verification."
  },
  {
    id:"custimikelo-argentinian-brown-belt", supplierId:"custi-mikelo", title:"Argentinian Brown Leather Belt",
    sourceUrl:"https://www.faire.com/product/p_kut7w2myvs", tier:"ACCESSIBLE", world:"Belts & Leather", brand:"Custi Mikelo: Made in Spain",
    material:"100% leather; metal buckle", origin:"Spain", imageUrls:[],
    authenticityEvidence:"Faire wholesale product listing.",
    provenanceEvidence:"Current listing states Made in Spain and 100% leather.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["GLOBAL_SELECT"],
    reviewerNotes:"Excellent belt candidate: 4.9/5 brand rating from 113 reviews, 4.9 product quality and fulfilment, with 7 product reviews. Adjustable screw construction helps fit range. Verify wholesale landed cost to Nigeria."
  },
  {
    id:"glove-story-cowhide-checkerboard-belt", supplierId:"glove-story", title:"Men's Cowhide Leather Belt — Checkerboard Effect CT059",
    sourceUrl:"https://www.faire.com/product/p_288vry73md", tier:"ACCESSIBLE", world:"Belts & Leather", brand:"Glove Story",
    material:"Premium cowhide leather; metal buckle", origin:"France", imageUrls:[],
    authenticityEvidence:"Faire wholesale product listing.",
    provenanceEvidence:"Current listing states Made in France and premium cowhide leather.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["GLOBAL_SELECT"],
    reviewerNotes:"Strong market-proof belt candidate: 4.9/5 brand rating from 21 reviews and 4.9 product quality/fulfilment. The textured finish differentiates it from plain belts."
  },
  {
    id:"renato-borzatta-italian-vegetable-tan-belt", supplierId:"renato-borzatta", title:"RB4028B Men's Belt — Italian Vegetable-Tanned Leather",
    sourceUrl:"https://www.faire.com/product/p_ybpb972gm7", tier:"STRONGER", world:"Belts & Leather", brand:"Kaili mood / RENATO BORZATTA",
    material:"Genuine vegetable-tanned leather; satin-silver buckle", origin:"Italy", imageUrls:[],
    authenticityEvidence:"Faire wholesale product listing.",
    provenanceEvidence:"Current listing states Made in Italy and genuine vegetable-tanned leather with handcrafted construction.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["GLOBAL_SELECT"],
    reviewerNotes:"High-end belt candidate with a more distinctive geometric woven/foil surface. Supplier brand currently shows 4.9/5 from 41 reviews. Strong fit for Premium Leather/Ceremony after SKU-level verification."
  },
  {
    id:"manready-leather-valet-tray-live", supplierId:"manready", title:"Leather Valet Tray — Catch All",
    sourceUrl:"https://www.faire.com/product/p_e7mtn9avma", tier:"ACCESSIBLE", world:"Objects", brand:"Manready Mercantile",
    material:"Leather", origin:"United States", imageUrls:[],
    authenticityEvidence:"Faire wholesale product listing.",
    provenanceEvidence:"Current listing identifies leather construction and U.S. production.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["GLOBAL_SELECT"],
    reviewerNotes:"Excellent desk/valet object with a strong B2B signal: current listing shows 5.0/5 brand rating from 54 reviews, 5.0 product quality and fulfilment. Verify current images, packaging and landed economics."
  }
);

REAL_SUPPLIER_CANDIDATES.push(
  {
    id:"kaftan-lagos", name:"Kaftan Lagos", website:"https://www.kaftanlagos.com/", country:"Nigeria",
    categories:["Men's Leather Loafers","Formal Footwear"], manufacturingOrigin:"Lagos, Nigeria",
    materials:["Leather"], wholesaleAvailable:false, privateLabel:false, sampleAvailable:false,
    imageRights:"Supplier terms must be verified", authenticityEvidence:"Official storefront",
    notes:"Official product page states handcrafted in Lagos, Nigeria using fine leather and current worldwide shipping."
  },
  {
    id:"leathergear-venice", name:"LeatherGear", website:"https://www.leathergearcompany.com/", country:"Nigeria",
    categories:["Men's Footwear","Leather Accessories"], manufacturingOrigin:"Lagos, Nigeria",
    materials:["Premium leather"], wholesaleAvailable:false, privateLabel:false, sampleAvailable:false,
    imageRights:"Supplier terms must be verified", authenticityEvidence:"Official storefront",
    notes:"Official site states handcrafted in Lagos with hand-selected premium leather; current men's footwear includes VENICE, TORINO TREK and MILAN."
  },
  {
    id:"julz-craft", name:"Julz Craft", website:"https://www.julzcraft.com.ng/", country:"Nigeria",
    categories:["Men's Footwear","Loafers","Formal Shoes","Boots","Sandals"], manufacturingOrigin:"Lagos, Nigeria",
    materials:["Genuine leather"], wholesaleAvailable:false, privateLabel:false, sampleAvailable:false,
    imageRights:"Supplier terms must be verified", authenticityEvidence:"Official storefront",
    notes:"Official site presents premium handcrafted footwear from Lagos and states 100% genuine leather."
  },
  {
    id:"ciska-stores", name:"CIska Stores", website:"https://ciska.com.ng/", country:"Nigeria",
    categories:["Men's Footwear","Handmade Loafers"], manufacturingOrigin:"Nigeria",
    materials:["Leather; exact grade to verify"], wholesaleAvailable:false, privateLabel:false, sampleAvailable:false,
    imageRights:"Supplier terms must be verified", authenticityEvidence:"Official storefront",
    notes:"Current Handmade Casual Loafers XP page is ₦30,000 and contains recent positive customer reviews."
  },
  {
    id:"custi-mikelo", name:"Custi Mikelo: Made in Spain", website:"https://www.faire.com/", country:"Spain",
    categories:["Men's Belts","Leather Accessories"], manufacturingOrigin:"Spain",
    materials:["100% leather","Metal"], wholesaleAvailable:true, privateLabel:false, sampleAvailable:false,
    imageRights:"Faire/supplier terms must be verified", authenticityEvidence:"Faire wholesale listing",
    notes:"Current belt listing shows 4.9/5 from 113 brand reviews and 4.9 product quality/fulfilment."
  },
  {
    id:"glove-story", name:"Glove Story", website:"https://www.faire.com/", country:"France",
    categories:["Men's Belts","Leather Accessories"], manufacturingOrigin:"France",
    materials:["Cowhide leather","Metal"], wholesaleAvailable:true, privateLabel:false, sampleAvailable:false,
    imageRights:"Faire/supplier terms must be verified", authenticityEvidence:"Faire wholesale listing",
    notes:"Current CT059 belt listing shows 4.9/5 from 21 brand reviews and 4.9 product quality/fulfilment."
  }
);


// Live research expansion: executive bags, wallets and Nigerian leathercraft.
REAL_SOURCING_CANDIDATES.push(
  {
    id:"detail-africa-signature-briefcase", supplierId:"detail-africa", title:"Detail Africa Signature Briefcase — Burnt Orange Detail",
    sourceUrl:"https://www.detailafrica.com/products/detail-africa-signature-briefcase-with-burnt-orange-detail", tier:"STRONGER", world:"Leather", brand:"Detail Africa",
    material:"100% genuine full-grain leather", origin:"Nigeria", retail:170000, currency:"NGN", imageUrls:[],
    authenticityEvidence:"Official Detail Africa product page.",
    provenanceEvidence:"Official page states handcrafted with 100% genuine full-grain leather and premium packaging; global tracked delivery is offered.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["AFRICAN_HERITAGE","LAGOS_MADE","AFRICAN_GLOBAL_FUSION"],
    reviewerNotes:"Excellent Nigerian executive-carry candidate at ₦170,000. Burnt-orange detail creates a distinctive EAZY pairing opportunity. Official page lists 1–2 business-day Lagos processing and worldwide delivery. Supplier relationship required before resale."
  },
  {
    id:"zachi-nomad-backpack", supplierId:"zachi-leather", title:"Nomad Backpack",
    sourceUrl:"https://zachileather.com/", tier:"STRONGER", world:"Objects", brand:"ZACHI LEATHER",
    material:"Leather; exact grade/details require SKU verification", origin:"Lagos, Nigeria", retail:145000, currency:"NGN", imageUrls:[],
    authenticityEvidence:"Official ZACHI LEATHER storefront.",
    provenanceEvidence:"Official site lists Nomad Backpack and states products are handmade in Lagos.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["LAGOS_MADE","AFRICAN_GLOBAL_FUSION"],
    reviewerNotes:"Strong modern travel/work candidate at ₦145,000. Pair with EAZY relaxed, travel and resort worlds. Exact leather, hardware, compartments and commercial fulfilment must be verified."
  },
  {
    id:"morin-o-emperor-briefcase-repeat", supplierId:"morin-o", title:"Emperor Briefcase",
    sourceUrl:"https://morin-o.com/", tier:"PREMIUM", world:"Objects", brand:"Morin.O Leather Goods",
    material:"Leather / exotic-skin craftsmanship; exact material must be verified", origin:"Lagos, Nigeria", retail:442500, currency:"NGN", imageUrls:[],
    authenticityEvidence:"Official Morin.O storefront.",
    provenanceEvidence:"Official site identifies Emperor Briefcase for Men and states named leather works are handcrafted in its Lagos atelier.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["LAGOS_MADE","AFRICAN_GLOBAL_FUSION"],
    reviewerNotes:"Premium anchor candidate for the executive Objects world. Current official price is ₦442,500. Verify exact leather, interior construction, warranty and reseller economics."
  },
  {
    id:"renato-borzatta-rfid-card-holder", supplierId:"renato-borzatta", title:"RB12016A Black Full-Grain Leather RFID Card Holder",
    sourceUrl:"https://www.faire.com/en-gb/product/p_vf28mnxcud", tier:"ENTRY", world:"Objects", brand:"Kaili mood / RENATO BORZATTA",
    material:"Genuine full-grain leather; RFID protection", origin:"Italy / SKU production verification required", imageUrls:[],
    authenticityEvidence:"Faire wholesale product listing identifies the supplier and SKU.",
    provenanceEvidence:"Current listing describes genuine full-grain leather, RFID protection and gift-box packaging.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["GLOBAL_SELECT"],
    reviewerNotes:"Strong small-object/gifting candidate from a 4.9/5 supplier with 41 reviews. The gift box and compact profile make it useful for EAZY gift sets. Verify current manufacturing location and landed economics before approval."
  },
  {
    id:"firenze-artegiani-azzano-card-wallet", supplierId:"firenze-artegiani", title:"Azzano Genuine Italian Leather Card Wallet",
    sourceUrl:"https://www.faire.com/product/p_cmhvp8gxq4", tier:"ACCESSIBLE", world:"Gifts", brand:"FIRENZE ARTEGIANI",
    material:"Genuine Italian Dollaro leather", origin:"Italy", imageUrls:[],
    authenticityEvidence:"Faire wholesale listing identifies FIRENZE ARTEGIANI.",
    provenanceEvidence:"Current listing states Made in Italy and genuine Italian leather with reinforced lacquered edges.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["GLOBAL_SELECT"],
    reviewerNotes:"Strong giftable leather-object candidate: current supplier rating 4.9/5, product quality 5.0/5 and communication 5.0/5 from 11 reviews. Need product-level reviews, fulfilment cost and reseller terms."
  },
  {
    id:"the-good-earth-italian-leather-backpack", supplierId:"the-good-earth", title:"Leather Backpack",
    sourceUrl:"https://www.faire.com/product/p_wbj72nn3e8", tier:"PREMIUM", world:"Objects", brand:"The Good Earth",
    material:"Leather", origin:"Italy", imageUrls:[],
    authenticityEvidence:"Faire wholesale product listing.",
    provenanceEvidence:"Current listing states Made in Italy and ethically sourced/fair-trade production.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["GLOBAL_SELECT"],
    reviewerNotes:"Strong travel object candidate: supplier 5.0/5 from 56 reviews and 4.9 product quality. Product has two reviews; one reports outstanding leather quality, craftsmanship and packaging on a related backpack. Confirm exact men's suitability and product presentation."
  }
);

REAL_SUPPLIER_CANDIDATES.push(
  {
    id:"detail-africa", name:"Detail Africa", website:"https://www.detailafrica.com/", country:"Nigeria",
    categories:["Leather Briefcases","Executive Gifts","Leather Accessories"], manufacturingOrigin:"Nigeria",
    materials:["Full-grain leather"], wholesaleAvailable:true, privateLabel:false, sampleAvailable:false,
    imageRights:"Supplier terms must be verified", authenticityEvidence:"Official storefront",
    notes:"Official Signature Briefcase is ₦170,000, made from 100% genuine full-grain leather, with premium dust bag/rigid gift box and worldwide tracked delivery."
  },
  {
    id:"firenze-artegiani", name:"FIRENZE ARTEGIANI", website:"https://www.faire.com/", country:"Italy",
    categories:["Leather Wallets","Card Holders","Gifts"], manufacturingOrigin:"Italy",
    materials:["Italian leather"], wholesaleAvailable:true, privateLabel:false, sampleAvailable:false,
    imageRights:"Faire/supplier terms must be verified", authenticityEvidence:"Faire wholesale listing",
    notes:"Azzano card wallet listing shows 4.9/5 brand rating from 11 reviews and 5.0 product quality."
  },
  {
    id:"the-good-earth", name:"The Good Earth", website:"https://www.faire.com/", country:"Italy / supplier verification required",
    categories:["Leather Backpacks","Travel Objects"], manufacturingOrigin:"Italy",
    materials:["Leather"], wholesaleAvailable:true, privateLabel:false, sampleAvailable:false,
    imageRights:"Faire/supplier terms must be verified", authenticityEvidence:"Faire wholesale listing",
    notes:"Current leather backpack listing shows 5.0/5 from 56 brand reviews and 4.9 product quality; listing states ethically sourced/fair-trade production."
  }
);


// 2026-10-08: heritage ceremony + Lagos accessory specialists.
REAL_SOURCING_CANDIDATES.push(
  {
    id:"jiro-g-mens-coral-beads", supplierId:"jiro-g-collections", title:"Groom / Men's Coral Bead Royal Edit",
    sourceUrl:"https://jirogcollections.com.ng/", tier:"CULTURAL_HOUSE", world:"Ceremony", brand:"Jiro-G Collections",
    material:"Coral beads / premium traditional beads; exact composition requires documentation", origin:"Nigeria", imageUrls:[],
    authenticityEvidence:"Official Jiro-G Collections storefront.",
    provenanceEvidence:"Official site presents groom/men beads, coral beads, bespoke accessories and worldwide delivery, with a focus on Nigerian traditional ceremonies.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["AFRICAN_HERITAGE"],
    reviewerNotes:"Strong ceremony relationship candidate for the African Heritage lane. Supplier testimonials emphasize quality and traditional-wedding use. Exact material authenticity, provenance, pricing, resale terms and fulfilment must be verified before approval."
  },
  {
    id:"adebisi-black-cowhide-wallet", supplierId:"adebisi-and-co", title:"Black Cowhide Wallet",
    sourceUrl:"https://www.adebisiandco.com/", tier:"ENTRY", world:"Objects", brand:"Adebisi & Co",
    material:"Cowhide leather", origin:"Lagos, Nigeria", imageUrls:[],
    authenticityEvidence:"Official Adebisi & Co storefront.",
    provenanceEvidence:"Official site identifies the wallet as black cowhide and states every piece is handcrafted in Lagos.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["LAGOS_MADE"],
    reviewerNotes:"Strong Lagos-made everyday-object candidate. Official site identifies it as a new wallet and presents customer feedback praising leather quality and gifting appeal. Exact SKU price, dimensions, packaging and commercial partnership required."
  },
  {
    id:"adebisi-sterling-executive-bag", supplierId:"adebisi-and-co", title:"Sterling Executive Bag",
    sourceUrl:"https://www.adebisiandco.com/", tier:"STRONGER", world:"Leather", brand:"Adebisi & Co",
    material:"Leather; exact grade requires SKU verification", origin:"Lagos, Nigeria", imageUrls:[],
    authenticityEvidence:"Official Adebisi & Co storefront.",
    provenanceEvidence:"Official site identifies Sterling as a refined leather laptop bag made in Lagos and finished with a signature wax-sealed envelope detail.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["LAGOS_MADE","AFRICAN_GLOBAL_FUSION"],
    reviewerNotes:"Strong executive-carry candidate with distinctive presentation. Exact leather grade, laptop dimensions, internal construction, current price and reseller fulfilment need verification."
  },
  {
    id:"adebisi-cufflinks-edit", supplierId:"adebisi-and-co", title:"Adebisi & Co Cufflinks — Black / Bronze / Silver / Gold Edit",
    sourceUrl:"https://www.adebisiandco.com/", tier:"ACCESSIBLE", world:"Ceremony", brand:"Adebisi & Co",
    material:"Metal; exact composition requires SKU verification", origin:"Lagos, Nigeria", imageUrls:[],
    authenticityEvidence:"Official Adebisi & Co storefront.",
    provenanceEvidence:"Official site presents a dedicated cufflinks collection and states products are handcrafted in Lagos.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["LAGOS_MADE","AFRICAN_HERITAGE"],
    reviewerNotes:"Potentially excellent Lagos-made formal finishing line. Select only the strongest SKUs after metal composition, plating/finish, packaging and commercial terms are documented."
  }
);

REAL_SUPPLIER_CANDIDATES.push(
  {
    id:"jiro-g-collections", name:"Jiro-G Collections", website:"https://jirogcollections.com.ng/", country:"Nigeria",
    categories:["Men's Coral Beads","Ceremony","Traditional Accessories"], manufacturingOrigin:"Nigeria",
    materials:["Coral beads","Traditional beads","Mixed ceremonial materials"], wholesaleAvailable:false, privateLabel:false, sampleAvailable:false,
    imageRights:"Supplier terms must be verified", authenticityEvidence:"Official storefront",
    notes:"Current site presents Groom/Men Beads, Coral Beads and bespoke traditional-ceremony accessories with worldwide shipping and sales/rental options."
  },
  {
    id:"adebisi-and-co", name:"Adebisi & Co", website:"https://www.adebisiandco.com/", country:"Nigeria",
    categories:["Wallets","Executive Bags","Cufflinks","Belts","Watch Boxes","Gifts"], manufacturingOrigin:"Lagos, Nigeria",
    materials:["Cowhide leather","Leather","Metal"], wholesaleAvailable:false, privateLabel:false, sampleAvailable:false,
    imageRights:"Supplier terms must be verified", authenticityEvidence:"Official storefront",
    notes:"Official site currently presents 69 handcrafted pieces spanning wallets, bags, cufflinks, watch boxes and belts, with specific new arrivals in the men's-object range. Customer testimonials repeatedly mention leather quality, gifting and craftsmanship."
  },
  {
    id:"joellani", name:"Joellani", website:"https://joellani.com/", country:"Nigeria",
    categories:["Leather Bags","Phone Pouches","Cases","Luxury Leather Accessories"], manufacturingOrigin:"Lagos, Nigeria",
    materials:["Cow leather","Snakeskin","Crocodile leather","Caiman leather"], wholesaleAvailable:false, privateLabel:false, sampleAvailable:false,
    imageRights:"Supplier terms must be verified", authenticityEvidence:"Official storefront",
    notes:"Official brand story states handmade leather accessories are handcrafted in Lagos using mainly locally sourced materials and homegrown artisans. Current catalogue is strongly women's-facing, so SLEEK EAZY should only pursue genuinely suitable men's/unisex objects, not force-fit women's bags."
  }
);


// 2026-10-08: Objects / travel / resort carry expansion.
REAL_SOURCING_CANDIDATES.push(
  {
    id:"american-leather-goods-dopp-kit", supplierId:"american-leather-goods", title:"Genuine Leather Dopp Kit — Croco Black",
    sourceUrl:"https://www.faire.com/product/p_e756c5yq3d", tier:"ACCESSIBLE", world:"Fragrance & Grooming", brand:"American Leather Goods",
    material:"Genuine leather", origin:"Turkey", imageUrls:[],
    authenticityEvidence:"Faire wholesale product listing identifies American Leather Goods and SKU.",
    provenanceEvidence:"Current listing states genuine leather and Made in Turkey.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["GLOBAL_SELECT"],
    reviewerNotes:"Excellent grooming/travel object candidate: current supplier rating 4.8/5 from 270+ reviews. Useful bridge between Grooming, Objects, Gifts and Travel. Verify exact lining, hardware, imagery and Nigerian fulfilment."
  },
  {
    id:"wp-standard-full-grain-duffle", supplierId:"wp-standard", title:"Full-Grain Leather Duffle Bag — Overnight & Travel",
    sourceUrl:"https://www.faire.com/product/p_f6d3ty389t", tier:"PREMIUM", world:"Resort", brand:"WP Standard",
    material:"Full-grain leather; solid brass hardware", origin:"Mexico", imageUrls:[],
    authenticityEvidence:"Faire wholesale listing identifies WP Standard.",
    provenanceEvidence:"Current listing states full-grain leather, solid brass hardware and Made in Mexico; lifetime repair guarantee is advertised.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["GLOBAL_SELECT"],
    reviewerNotes:"Premium travel anchor: 5.0/5 supplier rating from 73 reviews, 5.0 product quality/fulfilment/communication. Carry-on dimensions and lifetime repair promise are compelling. Verify current wholesale terms and international shipping."
  },
  {
    id:"dotch-leather-maynard-duffle", supplierId:"dotch-leather", title:"The Maynard Full-Grain Leather Duffle Bag — Weekender",
    sourceUrl:"https://www.faire.com/product/p_c5m71uo8oj", tier:"PREMIUM", world:"Resort", brand:"Dotch Leather",
    material:"Full-grain Indian buffalo leather", origin:"India", imageUrls:[],
    authenticityEvidence:"Faire wholesale listing identifies Dotch Leather.",
    provenanceEvidence:"Current listing states handcrafted from full-grain Indian buffalo leather.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["GLOBAL_SELECT"],
    reviewerNotes:"Strong resort/weekend bag candidate with 4.9/5 brand rating from 32 reviews. Verify product-level reviews, hardware, lining, carry-on suitability, packaging and landed cost."
  },
  {
    id:"hides-military-duffle", supplierId:"hides", title:"Military Leather Duffle Bag",
    sourceUrl:"https://www.faire.com/product/p_rmhmybb6hq", tier:"PREMIUM", world:"After Dark", brand:"Hides",
    material:"Vegetable-tanned full-grain leather; Italian brass hardware", origin:"SKU/manufacturing location requires verification", imageUrls:[],
    authenticityEvidence:"Faire wholesale product listing identifies Hides.",
    provenanceEvidence:"Current listing documents vegetable-tanned full-grain leather and Italian brass hardware.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["GLOBAL_SELECT"],
    reviewerNotes:"Strong rugged-luxury travel candidate with a 4.8/5 supplier rating from 16 reviews. The distressed finish fits the After Dark / travel worlds; verify exact production origin, durability and fulfilment."
  },
  {
    id:"kingsley-leather-hanging-toiletry", supplierId:"kingsley", title:"Leather Hanging Toiletry Bag",
    sourceUrl:"https://www.faire.com/discover/leather-toiletry-bag", tier:"ACCESSIBLE", world:"Fragrance & Grooming", brand:"Wholesale supplier candidate",
    material:"Leather; exact grade requires SKU verification", origin:"Supplier verification required", imageUrls:[],
    authenticityEvidence:"Current Faire leather-toiletry category listing.",
    provenanceEvidence:"Current wholesale category surfaces a leather hanging toiletry bag among men's travel-grooming options.",
    status:"EVIDENCE_REQUIRED",
    reviewerNotes:"Candidate for a high-quality travel grooming system. Product-level supplier, material, review and fulfilment data need verification before selection."
  }
);

REAL_SUPPLIER_CANDIDATES.push(
  {
    id:"wp-standard", name:"WP Standard", website:"https://www.faire.com/", country:"United States / production Mexico for surfaced SKU",
    categories:["Full-Grain Leather Duffle Bags","Travel","Gifts"], manufacturingOrigin:"Mexico",
    materials:["Full-grain leather","Solid brass hardware"], wholesaleAvailable:true, privateLabel:false, sampleAvailable:false,
    imageRights:"Faire/supplier terms must be verified", authenticityEvidence:"Faire wholesale listing",
    notes:"Current surfaced duffle shows 5.0/5 from 73 reviews with 5.0 product quality, fulfilment and communication; lifetime repair guarantee advertised."
  },
  {
    id:"dotch-leather", name:"Dotch Leather", website:"https://www.faire.com/", country:"India / supplier verification required",
    categories:["Leather Duffel Bags","Weekenders","Travel"], manufacturingOrigin:"India",
    materials:["Full-grain buffalo leather"], wholesaleAvailable:true, privateLabel:false, sampleAvailable:false,
    imageRights:"Faire/supplier terms must be verified", authenticityEvidence:"Faire wholesale listing",
    notes:"Current Maynard duffle shows 4.9/5 brand rating from 32 reviews."
  },
  {
    id:"hides", name:"Hides", website:"https://www.faire.com/", country:"Supplier verification required",
    categories:["Leather Duffels","Travel","After Dark"], manufacturingOrigin:"SKU verification required",
    materials:["Vegetable-tanned full-grain leather","Italian brass"], wholesaleAvailable:true, privateLabel:false, sampleAvailable:false,
    imageRights:"Faire/supplier terms must be verified", authenticityEvidence:"Faire wholesale listing",
    notes:"Current Military Leather Duffle shows 4.8/5 from 16 reviews."
  },
  {
    id:"kingsley", name:"Leather Travel Grooming Supplier — Kingsley candidate", website:"https://www.faire.com/", country:"Supplier verification required",
    categories:["Leather Toiletry Bags","Grooming Travel"], manufacturingOrigin:"SKU verification required",
    materials:["Leather"], wholesaleAvailable:true, privateLabel:false, sampleAvailable:false,
    imageRights:"Faire/supplier terms must be verified", authenticityEvidence:"Faire wholesale category discovery",
    notes:"Keep only a top-ranked men's toiletry SKU after supplier/product-level review."
  }
);


// 2026-10-08: further footwear candidates discovered during Nigerian luxury hunt.
REAL_SOURCING_CANDIDATES.push(
  {
    id:"jarikre-black-white-penny-loafer", supplierId:"jarikre", title:"Men's Black & White Penny Loafers",
    sourceUrl:"https://jarikre.com/product/mens-black-white-penny-loafers/", tier:"STRONGER", world:"Footwear", brand:"Jarikre",
    material:"Premium full-grain leather", origin:"Lagos, Nigeria", retail:65000, currency:"NGN", imageUrls:[],
    authenticityEvidence:"Official Jarikre product page.",
    provenanceEvidence:"Official page states premium full-grain leather and offers sizes 38–50 with fit options.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["LAGOS_MADE","AFRICAN_GLOBAL_FUSION"],
    reviewerNotes:"Strong versatile candidate with unusually broad sizing and leather choices. Current price ₦65,000–₦75,000. Need reseller/fulfilment agreement and deeper QC verification before approval."
  },
  {
    id:"jarikre-obsidian-horsebit", supplierId:"jarikre", title:"Obsidian Horsebit Mule",
    sourceUrl:"https://jarikre.com/product-category/jarikre-mens-leather-mules-collection/", tier:"ACCESSIBLE", world:"Footwear", brand:"Jarikre",
    material:"Premium full-grain leather", origin:"Nigeria", retail:55000, currency:"NGN", imageUrls:[],
    authenticityEvidence:"Official Jarikre storefront.",
    provenanceEvidence:"Official category page states handcrafted from premium full-grain leather and made in Nigeria.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["LAGOS_MADE","AFRICAN_GLOBAL_FUSION"],
    reviewerNotes:"Strong modern native/smart-casual crossover with gold-tone horsebit hardware. Current price ₦55,000–₦65,000. Verify finish, outsole and commercial terms."
  },
  {
    id:"fawoye-black-horsebit-loafer", supplierId:"fawoye", title:"Black Leather Horsebit Loafer",
    sourceUrl:"https://fawoye.com/product-category/leather/", tier:"ACCESSIBLE", world:"Footwear", brand:"FAWOYE",
    material:"Leather; exact grade requires product verification", origin:"Nigeria", retail:60000, currency:"NGN", imageUrls:[],
    authenticityEvidence:"Official FAWOYE category listing.",
    provenanceEvidence:"FAWOYE states its range is handcrafted and made to order in Nigeria.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["LAGOS_MADE"],
    reviewerNotes:"Current official catalogue price ₦60,000. The maker's 2026 buyer guide emphasizes material accuracy, fit, construction and finishing; customer-review signals include 5-star feedback on comfort and durability. Need product-level material documentation and reseller terms."
  },
  {
    id:"fawoye-odobwu-special-edition", supplierId:"fawoye", title:"Odogwu Special Edition",
    sourceUrl:"https://fawoye.com/product-category/leather/", tier:"CULTURAL_HOUSE", world:"African Heritage", brand:"FAWOYE",
    material:"Leather / material-specific variation", origin:"Nigeria", retail:60000, currency:"NGN", imageUrls:[],
    authenticityEvidence:"Official FAWOYE category listing.",
    provenanceEvidence:"Official catalogue labels Odogwu Special Edition within its handcrafted leather range.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["AFRICAN_HERITAGE","LAGOS_MADE"],
    reviewerNotes:"Cultural/statement candidate worth deeper SKU research rather than automatic approval. Current catalogue price ₦60,000; verify the exact design story, materials, limited nature (if claimed), production consistency and commercial terms."
  },
  {
    id:"fawoye-two-tone-monkstrap", supplierId:"fawoye", title:"Two-Toned Monkstrap",
    sourceUrl:"https://fawoye.com/what-shoes-to-wear-with-agbada/", tier:"CULTURAL_HOUSE", world:"Footwear", brand:"FAWOYE",
    material:"Leather / exact material variation requires SKU verification", origin:"Nigeria", retail:60000, currency:"NGN", imageUrls:[],
    authenticityEvidence:"FAWOYE official style guide identifies the design.",
    provenanceEvidence:"Official FAWOYE guide presents the two-toned monkstrap as a Nigerian handmade styling option for agbada and formal native wear.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["AFRICAN_HERITAGE","LAGOS_MADE"],
    reviewerNotes:"Excellent composition candidate because it can bridge EAZY native and SLEEK footwear. Need actual product page/SKU, material details, imagery rights and fulfilment agreement."
  }
);

REAL_SUPPLIER_CANDIDATES.push(
  {
    id:"jarikre", name:"Jarikre", website:"https://jarikre.com/", country:"Nigeria",
    categories:["Men's Footwear","Bags","Leather Accessories"], manufacturingOrigin:"Lagos, Nigeria",
    materials:["Full-grain leather","Suede","Croc/basket leather options"], wholesaleAvailable:false, privateLabel:false, sampleAvailable:false,
    imageRights:"Supplier terms must be verified", authenticityEvidence:"Official storefront",
    notes:"Official storefront states handmade in Lagos, global shipping and a 30-day warranty. Current men's range includes full-grain loafers, shoes, mules and slides."
  },
  {
    id:"fawoye", name:"FAWOYE", website:"https://fawoye.com/", country:"Nigeria",
    categories:["Men's Loafers","Oxfords","Brogues","Monk Straps","Boots","Slides"], manufacturingOrigin:"Nigeria",
    materials:["Leather","Suede","Woven textiles","Mixed materials"], wholesaleAvailable:false, privateLabel:false, sampleAvailable:false,
    imageRights:"Supplier terms must be verified", authenticityEvidence:"Official storefront",
    notes:"Official site states handmade and made-to-order. Current leather catalogue carries a 48-product range; recent 2026 buyer/review content emphasizes fit, finishing, comfort and durability."
  }
);


// Premium Shopify additions — sourced from the current Vincero Nigeria catalogue.
// Added to Shopify as ACTIVE sourcing candidates; House approval remains separate.
REAL_SOURCING_CANDIDATES.push(
  {
    id:"vincero-old-money-black-gold", supplierId:"vincero-collective", title:"Old Money Edition — Black Gold",
    sourceUrl:"https://vincerocollective.com/en-ng/collections/mens-watches/page/1",
    tier:"PREMIUM", world:"Watches", brand:"Vincero Collective",
    material:"316L stainless steel; sapphire crystal; Miyota 8215 automatic movement", origin:"Supplier origin / manufacturing provenance requires verification",
    retail:681100, currency:"NGN", imageUrls:["https://vincerocollective.com/cdn/shop/files/Kairos-Black-Gold_Frontal-_Hi-Res_-Padding_2480x.jpg?v=1762440372"],
    authenticityEvidence:"Official Vincero Collective Nigeria storefront and product page.",
    provenanceEvidence:"Current official listing states 41mm, sapphire crystal, Miyota 8215, 316L stainless steel and 999 individually numbered pieces.",
    status:"EVIDENCE_REQUIRED", edition:"LIMITED_EDITION",
    limitedEdition:{isGenuinelyLimited:true,editionSize:999,scarcityReason:"Official Vincero listing states a limited drop of 999 individually numbered pieces.",evidence:[{value:"LIMITED DROP - 999 individually numbered pieces",sourceUrl:"https://vincerocollective.com/collections/non-sale-items/products/old-money-edition-stealth",capturedAt:"2026-10-08",confidence:"HIGH"}]},
    reviewerNotes:"Premium anchor candidate with strong market proof: official page currently shows 6,417 reviews and 4.8/5. Product image URL is from Vincero CDN. Verify EAZY commercial rights, supply terms, warranty handling and final pricing before House approval."
  },
  {
    id:"vincero-livewire-collectors-bundle", supplierId:"vincero-collective", title:"Collectors Bundle — Livewire Edition",
    sourceUrl:"https://vincerocollective.com/products/collectors-bundle-livewire-edition",
    tier:"PREMIUM", world:"Watches", brand:"Vincero Collective",
    material:"316L stainless steel; sapphire-coated crystal; Seiko VK64 hybrid movement; Saffiano leather", origin:"Supplier origin / manufacturing provenance requires verification",
    retail:680000, currency:"NGN", imageUrls:["https://cdn.shopify.com/s/files/1/0627/5517/files/Livewire_OverlappingArc_Sandris.webp?v=1775499436"],
    authenticityEvidence:"Official Vincero Collective listing.",
    provenanceEvidence:"Current official listing states limited drop of 500 individually numbered pieces per colorway, 316L stainless steel and sapphire-coated crystal.",
    status:"EVIDENCE_REQUIRED", edition:"LIMITED_EDITION",
    limitedEdition:{isGenuinelyLimited:true,editionSize:500,scarcityReason:"Official listing states 500 individually numbered units per colorway.",evidence:[{value:"LIMITED DROP - 500 individually numbered pieces per colorway",sourceUrl:"https://vincerocollective.com/products/collectors-bundle-livewire-edition",capturedAt:"2026-10-08",confidence:"HIGH"}]},
    reviewerNotes:"Premium collector candidate. Current product page carries substantial overall brand review history. Verify current stock, Nigerian commercial terms and exact landed economics before House approval."
  },
  {
    id:"vincero-forged-carbon-fathers-blue", supplierId:"vincero-collective", title:"Forged Carbon Father's Edition — Blue Ember",
    sourceUrl:"https://vincerocollective.com/en-ng/collections/engraved-watches-for-him/products/icon-forged-carbon-blue",
    tier:"PREMIUM", world:"Watches", brand:"Vincero Collective",
    material:"Forged carbon; DLC-coated 316L stainless steel; sapphire crystal; Miyota 8215 automatic movement", origin:"Supplier origin / manufacturing provenance requires verification",
    retail:727100, currency:"NGN", imageUrls:["https://cdn.shopify.com/s/files/1/0627/5517/files/FrontHero.webp?v=1777496713"],
    authenticityEvidence:"Official Vincero Collective Nigeria listing.",
    provenanceEvidence:"Current official page states a 41mm automatic watch with forged-carbon dial, 316L DLC case, sapphire crystal and 500 individually numbered units.",
    status:"EVIDENCE_REQUIRED", edition:"LIMITED_EDITION",
    limitedEdition:{isGenuinelyLimited:true,editionSize:500,scarcityReason:"Official listing states a limited drop of 500 individually numbered units.",evidence:[{value:"LIMITED DROP - 500 individually numbered units",sourceUrl:"https://vincerocollective.com/en-ng/collections/engraved-watches-for-him/products/icon-forged-carbon-blue",capturedAt:"2026-10-08",confidence:"HIGH"}]},
    reviewerNotes:"High-impact premium watch candidate. The official page currently shows more than 6,000 reviews for the Forged Carbon family and lifetime warranty. Verify exact product availability and EAZY resale agreement."
  },
  {
    id:"vincero-lion-sterling-silver-set", supplierId:"vincero-collective", title:"Built Different: The Lion — Sterling Silver Set",
    sourceUrl:"https://vincerocollective.com/en-ng/collections/silver-watches-for-men/products/built-different-lion-set",
    tier:"PREMIUM", world:"Jewellery", brand:"Vincero Collective",
    material:"925 sterling silver; rhodium plating", origin:"Supplier origin / manufacturing provenance requires verification",
    retail:385600, currency:"NGN", imageUrls:["https://vincerocollective.com/cdn/shop/files/Built-Different-Lion-Set_4d7034f9-3606-4146-816c-91d38dfa4aa6_2134x.jpg?v=1762440621"],
    authenticityEvidence:"Official Vincero Collective product page.",
    provenanceEvidence:"Current page describes a 22mm 925 sterling silver lion pendant with two layered curb chains and lifetime warranty.",
    status:"EVIDENCE_REQUIRED", cultureLanes:["GLOBAL_SELECT","AFRICAN_GLOBAL_FUSION"],
    reviewerNotes:"Premium jewellery anchor with strong storytelling and presentation potential. Verify commercial rights, current stock and exact silver documentation before House approval."
  }
);


// Standard-band expansion — ₦20,000–₦200,000.
// These are sourcing candidates, not customer-facing EAZY approvals.
const STANDARD_BAND_EXPANSION = [
    { id:"classic-tassel-loafer-fawoye", supplier:"FAWOYE", title:"Classic Tassel Loafer — FAWOYE", world:"Footwear", retail:60000, currency:"NGN", sourceUrl:"https://fawoye.com/product-category/leather/", tier:"CORE", status:"EVIDENCE_REQUIRED", tags:["SLEEK_EAZY_CANDIDATE","sleek-standard","sleek-core","sleek-footwear"] },
  { id:"chelsea-boots-fawoye", supplier:"FAWOYE", title:"Chelsea Boots — FAWOYE", world:"Footwear", retail:65000, currency:"NGN", sourceUrl:"https://fawoye.com/product-category/leather/", tier:"CORE", status:"EVIDENCE_REQUIRED", tags:["SLEEK_EAZY_CANDIDATE","sleek-standard","sleek-core","sleek-footwear"] },
  { id:"derby-shoes-fawoye", supplier:"FAWOYE", title:"Derby Shoes — FAWOYE", world:"Footwear", retail:65000, currency:"NGN", sourceUrl:"https://fawoye.com/product-category/leather/", tier:"CORE", status:"EVIDENCE_REQUIRED", tags:["SLEEK_EAZY_CANDIDATE","sleek-standard","sleek-core","sleek-footwear"] },
  { id:"double-monk-strap-fawoye", supplier:"FAWOYE", title:"Double Monk Strap — FAWOYE", world:"Footwear", retail:60000, currency:"NGN", sourceUrl:"https://fawoye.com/product-category/leather/", tier:"CORE", status:"EVIDENCE_REQUIRED", tags:["SLEEK_EAZY_CANDIDATE","sleek-standard","sleek-core","sleek-footwear"] },
  { id:"kiltie-fringe-lug-loafer-fawoye", supplier:"FAWOYE", title:"Kiltie Fringe Lug Loafer — FAWOYE", world:"Footwear", retail:60000, currency:"NGN", sourceUrl:"https://fawoye.com/product-category/leather/", tier:"CORE", status:"EVIDENCE_REQUIRED", tags:["SLEEK_EAZY_CANDIDATE","sleek-standard","sleek-core","sleek-footwear"] },
  { id:"laced-up-oxford-shoes-fawoye", supplier:"FAWOYE", title:"Laced Up Oxford Shoes — FAWOYE", world:"Footwear", retail:65000, currency:"NGN", sourceUrl:"https://fawoye.com/product-category/leather/", tier:"CORE", status:"EVIDENCE_REQUIRED", tags:["SLEEK_EAZY_CANDIDATE","sleek-standard","sleek-core","sleek-footwear"] },
  { id:"horsebit-suede-loafers-fawoye", supplier:"FAWOYE", title:"Horsebit Suede Loafers — FAWOYE", world:"Footwear", retail:60000, currency:"NGN", sourceUrl:"https://fawoye.com/product-tag/handmade-shoes/", tier:"CORE", status:"EVIDENCE_REQUIRED", tags:["SLEEK_EAZY_CANDIDATE","sleek-standard","sleek-core","sleek-footwear"] },
  { id:"odogwu-special-edition-fawoye", supplier:"FAWOYE", title:"Odogwu Special Edition — FAWOYE", world:"Footwear", retail:60000, currency:"NGN", sourceUrl:"https://fawoye.com/product-category/leather/", tier:"CORE", status:"EVIDENCE_REQUIRED", tags:["SLEEK_EAZY_CANDIDATE","sleek-standard","sleek-core","sleek-footwear"] },
  { id:"initial-tag-pendant-silver", supplier:"Vincero Collective", title:"Initial Tag Pendant Silver", world:"Fine Jewellery", retail:38800, currency:"NGN", sourceUrl:"https://vincerocollective.com/en-ng/collections/silver-watches-for-men", tier:"CORE", status:"EVIDENCE_REQUIRED", tags:["SLEEK_EAZY_CANDIDATE","sleek-standard","sleek-core","sleek-fine-jewellery"] },
  { id:"birthstone-tag-pendant-silver", supplier:"Vincero Collective", title:"Birthstone Tag Pendant Silver", world:"Fine Jewellery", retail:58100, currency:"NGN", sourceUrl:"https://vincerocollective.com/en-ng/collections/silver-watches-for-men", tier:"CORE", status:"EVIDENCE_REQUIRED", tags:["SLEEK_EAZY_CANDIDATE","sleek-standard","sleek-core","sleek-fine-jewellery"] },
  { id:"birthstone-initial-tag-necklace-silver", supplier:"Vincero Collective", title:"Birthstone & Initial Tag Necklace Silver", world:"Fine Jewellery", retail:161400, currency:"NGN", sourceUrl:"https://vincerocollective.com/en-ng/collections/silver-watches-for-men", tier:"CORE", status:"EVIDENCE_REQUIRED", tags:["SLEEK_EAZY_CANDIDATE","sleek-standard","sleek-core","sleek-fine-jewellery"] },
  { id:"birthstone-tag-necklace-silver", supplier:"Vincero Collective", title:"Birthstone Tag Necklace Silver", world:"Fine Jewellery", retail:122600, currency:"NGN", sourceUrl:"https://vincerocollective.com/en-ng/collections/silver-watches-for-men", tier:"CORE", status:"EVIDENCE_REQUIRED", tags:["SLEEK_EAZY_CANDIDATE","sleek-standard","sleek-core","sleek-fine-jewellery"] },
  { id:"sterling-silver-box-chain-necklace-2mm", supplier:"Vincero Collective", title:"Sterling Silver Box Chain Necklace, 2MM", world:"Chains & Necklaces", retail:112400, currency:"NGN", sourceUrl:"https://vincerocollective.com/en-ng/collections/silver-watches-for-men", tier:"CORE", status:"EVIDENCE_REQUIRED", tags:["SLEEK_EAZY_CANDIDATE","sleek-standard","sleek-core","sleek-chains"] },
  { id:"memento-mori-pendant-sterling-silver", supplier:"Vincero Collective", title:"Memento Mori Pendant Sterling Silver", world:"Fine Jewellery", retail:192300, currency:"NGN", sourceUrl:"https://vincerocollective.com/en-ng/collections/silver-watches-for-men", tier:"CORE", status:"EVIDENCE_REQUIRED", tags:["SLEEK_EAZY_CANDIDATE","sleek-standard","sleek-core","sleek-fine-jewellery"] },
  { id:"sterling-silver-curb-chain-bracelet-3mm", supplier:"Vincero Collective", title:"Sterling Silver Curb Chain Bracelet, 3MM", world:"Chains & Bracelets", retail:166500, currency:"NGN", sourceUrl:"https://vincerocollective.com/en-ng/collections/silver-watches-for-men", tier:"CORE", status:"EVIDENCE_REQUIRED", tags:["SLEEK_EAZY_CANDIDATE","sleek-standard","sleek-core","sleek-chains"] },
  { id:"the-serpentine-bracelet-silver", supplier:"Vincero Collective", title:"The Serpentine Bracelet Silver", world:"Chains & Bracelets", retail:96800, currency:"NGN", sourceUrl:"https://vincerocollective.com/en-ng/collections/silver-watches-for-men", tier:"CORE", status:"EVIDENCE_REQUIRED", tags:["SLEEK_EAZY_CANDIDATE","sleek-standard","sleek-core","sleek-chains"] },
  { id:"sapphire-trio-bracelet-silver", supplier:"Vincero Collective", title:"Sapphire Trio Bracelet Silver", world:"Chains & Bracelets", retail:96800, currency:"NGN", sourceUrl:"https://vincerocollective.com/en-ng/collections/silver-watches-for-men", tier:"CORE", status:"EVIDENCE_REQUIRED", tags:["SLEEK_EAZY_CANDIDATE","sleek-standard","sleek-core","sleek-chains"] },
  { id:"micro-cuban-chain-necklace-2-2mm-silver", supplier:"Vincero Collective", title:"Micro Cuban Chain Necklace, 2.2MM Silver", world:"Chains & Necklaces", retail:166500, currency:"NGN", sourceUrl:"https://vincerocollective.com/en-ng/collections/silver-watches-for-men", tier:"CORE", status:"EVIDENCE_REQUIRED", tags:["SLEEK_EAZY_CANDIDATE","sleek-standard","sleek-core","sleek-chains"] },
  { id:"cuban-chain-bracelet-8mm-silver", supplier:"Vincero Collective", title:"Cuban Chain Bracelet, 8MM Silver", world:"Chains & Bracelets", retail:179400, currency:"NGN", sourceUrl:"https://vincerocollective.com/en-ng/collections/silver-watches-for-men", tier:"CORE", status:"EVIDENCE_REQUIRED", tags:["SLEEK_EAZY_CANDIDATE","sleek-standard","sleek-core","sleek-chains"] },
  { id:"the-chrono-s2-blue-brown", supplier:"Vincero Collective", title:"The Chrono S2 — Blue/Brown", world:"Watches", retail:168600, currency:"NGN", sourceUrl:"https://vincerocollective.com/en-ng/collections/mens-watches/products/the-chrono-s2-blue-brown", tier:"CORE", status:"EVIDENCE_REQUIRED", tags:["SLEEK_EAZY_CANDIDATE","sleek-standard","sleek-core","sleek-watches"] },
  { id:"the-chrono-s2-40mm-rose-gold", supplier:"Vincero Collective", title:"The Chrono S2 40MM — Rose Gold", world:"Watches", retail:168600, currency:"NGN", sourceUrl:"https://vincerocollective.com/en-ng/collections/mens-watches/products/the-chrono-s2-40mm-rose-gold", tier:"CORE", status:"EVIDENCE_REQUIRED", tags:["SLEEK_EAZY_CANDIDATE","sleek-standard","sleek-core","sleek-watches"] },
  { id:"the-altitude-gunmetal-walnut", supplier:"Vincero Collective", title:"The Altitude — Gunmetal/Walnut", world:"Watches", retail:168600, currency:"NGN", sourceUrl:"https://vincerocollective.com/en-ng/collections/mens-watches/products/the-altitude-gunmetal-walnut", tier:"CORE", status:"EVIDENCE_REQUIRED", tags:["SLEEK_EAZY_CANDIDATE","sleek-standard","sleek-core","sleek-watches"] }
];

export { STANDARD_BAND_EXPANSION };
