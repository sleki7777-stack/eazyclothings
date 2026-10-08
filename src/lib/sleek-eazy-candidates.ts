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
    id:"handmade-ng", name:"Handmade NG", website:"https://www.handmadeng.com/", country:"Nigeria", categories:["African Heritage","Aso-oke","Handmade Bags","Leather"], manufacturingOrigin:"Nigeria",
    materials:["Aso-oke","Leather","Ankara"], wholesaleAvailable:false, privateLabel:false, sampleAvailable:false,
    imageRights:"Supplier terms must be verified", authenticityEvidence:"Official vendor storefront",
    notes:"Supplier rating 4.88/5 from 17 customer ratings on surfaced products. Commercial resale/fulfilment terms are not publicly established.", rating:4.88
  },
];
