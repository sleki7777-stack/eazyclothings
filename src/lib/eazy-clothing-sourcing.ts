export type EazyClothingSourceType = "TEXTILE" | "MADE_TO_MEASURE_PARTNER" | "REFERENCE_HOUSE";
export type EazyClothingWorld =
  | "NATIVE"
  | "TAILORING"
  | "SHIRTING"
  | "KNITWEAR"
  | "OUTERWEAR"
  | "RELAXED"
  | "RESORT"
  | "DENIM"
  | "ACTIVE"
  | "LOUNGE"
  | "AFRICAN_DIRECTIONS"
  | "LAGOS_DESIGN_LANGUAGES"
  | "ESSENTIALS";

export type EazyClothingSource = {
  id:string;
  name:string;
  url:string;
  type:EazyClothingSourceType;
  worlds:EazyClothingWorld[];
  origin:string;
  materials:string[];
  evidence:string[];
  status:"DISCOVERY"|"VERIFY"|"HOUSE_SHORTLIST";
  notes:string;
};

/**
 * EAZY Clothing is not a third-party catalogue.
 * These records are production-input / capability sources for EAZY's own House works.
 * No third-party finished garment becomes an EAZY product merely because it appears here.
 */
export const EAZY_CLOTHING_SOURCES: EazyClothingSource[] = [
  {
    id:"wellborn-premium-swiss-cotton",
    name:"Wellborn Fabrics — Premium Exotic Swiss Cotton for Men",
    url:"https://wellbornfabrics.com.ng/product/premium-exotic-swiss-cotton-fabric-for-men-senator-material/",
    type:"TEXTILE",
    worlds:["NATIVE","SHIRTING","ESSENTIALS","LAGOS_DESIGN_LANGUAGES"],
    origin:"Lagos, Nigeria",
    materials:["Swiss cotton"],
    evidence:[
      "Current product listing describes premium Swiss cotton for men's senator wear.",
      "Listing offers 5-yard pieces in multiple rich colours.",
      "Seller states Lagos delivery and worldwide shipping."
    ],
    status:"VERIFY",
    notes:"Candidate textile source for breathable native and shirt programmes. EAZY must verify exact fibre composition, weight, colourfastness, shrinkage and batch consistency before House adoption."
  },
  {
    id:"wellborn-swiss-voile-linen-cotton",
    name:"Wellborn Fabrics — Swiss Voile Linen Pure Cotton",
    url:"https://wellbornfabrics.com.ng/product/swiss-voile-linen-pure-cotton-mens-fabric-7-colours/",
    type:"TEXTILE",
    worlds:["SHIRTING","RESORT","RELAXED","LOUNGE"],
    origin:"Lagos, Nigeria",
    materials:["Pure cotton voile / linen-style weave"],
    evidence:[
      "Current men's textile listing states lightweight, breathable construction.",
      "Seven colour options are listed.",
      "Seller states it is structured enough for tailoring and ships worldwide."
    ],
    status:"VERIFY",
    notes:"Potential House shirting/resort foundation. Verify fibre content exactly, weave, opacity, colourfastness, wash behaviour and cut performance before adoption."
  },
  {
    id:"wellborn-superfine-merino-wool",
    name:"Wellborn Fabrics — Blended Superfine Merino Wool",
    url:"https://wellbornfabrics.com.ng/",
    type:"TEXTILE",
    worlds:["TAILORING","NATIVE","OUTERWEAR","LAGOS_DESIGN_LANGUAGES"],
    origin:"Lagos, Nigeria",
    materials:["Superfine merino wool blend"],
    evidence:[
      "Current men's-fabric catalogue lists a superfine merino wool blend in multiple patterns.",
      "Catalogue positions it for premium men's formal/native work."
    ],
    status:"VERIFY",
    notes:"Promising tailoring/native fabric source. Exact merino percentage, GSM, mill origin, construction and heat performance must be verified."
  },
  {
    id:"aso-oke-fabrics-wholesale",
    name:"Aso Oke Fabrics / Popular Wellborn Fabrics",
    url:"https://asookefabrics.com.ng/about-us/",
    type:"TEXTILE",
    worlds:["NATIVE","AFRICAN_DIRECTIONS","LAGOS_DESIGN_LANGUAGES"],
    origin:"South-West Nigeria",
    materials:["Aso-Oke","Onjawu","Etu","Sanyan","Alaari","Eya","Popo"],
    evidence:[
      "Brand states it curates authentic high-quality Aso-Oke sourced from experienced local craftsmen.",
      "Wholesale supply is explicitly offered.",
      "Current catalogue includes contemporary colour and stripe directions."
    ],
    status:"HOUSE_SHORTLIST",
    notes:"Strong heritage-textile source for EAZY's Native and African Directions worlds. Verify individual weaver identity, yarn/fibre composition, loom width, repeat consistency, dye fastness and continuity."
  },
  {
    id:"wasat-asooke",
    name:"Wasat Asooke and Products",
    url:"https://www.wasatasooke.com.ng/",
    type:"TEXTILE",
    worlds:["NATIVE","AFRICAN_DIRECTIONS","RESORT"],
    origin:"Iseyin, Nigeria",
    materials:["Aso-Oke","Handwoven traditional textiles"],
    evidence:[
      "Current site describes premium handwoven Aso-Oke and modern finishes.",
      "Site states more than 20 years of experience.",
      "Worldwide delivery is offered."
    ],
    status:"VERIFY",
    notes:"Useful second-source heritage weaving relationship to avoid dependence on one fabric source. Verify actual loom/fibre specifications and repeatability."
  },
  {
    id:"aso-oke-house",
    name:"Aso-Oke House",
    url:"https://www.delidowaso-oke.com/",
    type:"TEXTILE",
    worlds:["NATIVE","AFRICAN_DIRECTIONS"],
    origin:"Lagos, Nigeria",
    materials:["Handcrafted Aso-Oke"],
    evidence:[
      "Current site presents handwoven Aso-Oke in several colour directions.",
      "Site emphasizes traditional loom production and durability.",
      "Custom orders and Lagos location are stated."
    ],
    status:"VERIFY",
    notes:"Potential source for selected House ceremonial textiles. Verify actual weaving provenance, yarn/fibre, width and custom development capability."
  },
  {
    id:"atelier-noir-tailoring-reference",
    name:"Atelier Noir",
    url:"https://ateliernoir-nigeria.online/about",
    type:"REFERENCE_HOUSE",
    worlds:["TAILORING","SHIRTING","ESSENTIALS"],
    origin:"Ikoyi, Lagos, Nigeria",
    materials:["Italian wool from Biella","Premium shirtings"],
    evidence:[
      "Current site describes hand-cut, hand-finished tailoring in Lagos.",
      "Site states cloth is sourced in Biella.",
      "Bespoke process uses extensive measurements and made-to-order production."
    ],
    status:"DISCOVERY",
    notes:"Reference/capability benchmark only, not an EAZY finished-garment source. Useful for benchmarking tailoring discipline, measurement workflow, hand finishing and service."
  },
  {
    id:"kenny-jones-bespoke",
    name:"Kenny Jones Designs",
    url:"https://www.kennyjonesdesigns.com/bespoke",
    type:"MADE_TO_MEASURE_PARTNER",
    worlds:["NATIVE","TAILORING","AFRICAN_DIRECTIONS"],
    origin:"Lagos, Nigeria",
    materials:["Aso-Oke","Italian Damask silk-blend","Belgian linen","Crushed velvet","English wool","Nigerian brocade"],
    evidence:[
      "Bespoke page lists premium Aso-Oke, Italian Damask, Belgian linen, English wool and Nigerian brocade.",
      "Site states pieces are cut and sewn by hand in its Lagos atelier.",
      "Fit guarantee and written lead times are stated."
    ],
    status:"DISCOVERY",
    notes:"Potential production capability/reference for selected EAZY House development. Any partnership must preserve EAZY design ownership, construction standards and QC control."
  },
  {
    id:"fujah-heritage-reference",
    name:"Fujah Brand",
    url:"https://fujahbrand.com/",
    type:"REFERENCE_HOUSE",
    worlds:["NATIVE","AFRICAN_DIRECTIONS","ESSENTIALS"],
    origin:"Lagos, Nigeria",
    materials:["African traditional fabrics","Italian wool"],
    evidence:[
      "Current Autumn 2026 store includes Agbada, Kaftans, Pants, Caps and men's collections.",
      "Agbada collection states garments are handcrafted to order.",
      "Current product pages show made-to-order dispatch workflow and international shipping."
    ],
    status:"DISCOVERY",
    notes:"Reference House for studying contemporary African menswear presentation and fulfilment; do not copy designs and do not represent Fujah garments as EAZY products."
  },
  {
    id:"ibere-aso-oke-made-to-order",
    name:"ÌBẸ̀RẸ̀",
    url:"https://ibere.ng/",
    type:"REFERENCE_HOUSE",
    worlds:["NATIVE","RELAXED","AFRICAN_DIRECTIONS"],
    origin:"Lagos, Nigeria",
    materials:["Aso-Oke","Cotton"],
    evidence:[
      "Current site describes made-to-order pieces handwoven in Lagos.",
      "Current debut includes an Aso-Oke kimono and cotton hand-finished shirt.",
      "Made-to-measure and worldwide shipping are stated."
    ],
    status:"DISCOVERY",
    notes:"Useful reference for modern Aso-Oke silhouettes, made-to-order workflow and global presentation. EAZY product design remains original and House-owned."
  }
];
