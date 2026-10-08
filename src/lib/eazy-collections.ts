export type EazyCollection = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  promoImage: string;
  promoAlt: string;
  works: { code: string; name: string; form: string; image: string; direction: string }[];
};

const images = [
  "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1400&q=88",
  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1400&q=88",
  "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=1400&q=88",
  "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?auto=format&fit=crop&w=1400&q=88",
  "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1400&q=88",
  "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1400&q=88",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=88",
  "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1400&q=88"
];

const work = (base: number, names: [string,string,string,string], forms: [string,string,string,string], direction: string) =>
  names.map((name, i) => ({
    code: `WORK ${String(base + i).padStart(3, "0")}`,
    name,
    form: forms[i],
    image: images[(base + i) % images.length],
    direction,
  }));

export const eazyCollections: EazyCollection[] = [
  { slug:"native", promoImage:"https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1800&q=90", promoAlt:"Premium native tailoring — promotional editorial", title:"Native", eyebrow:"THE NATIVE WORLD", description:"Senator, two-piece, kaftan, agbada and contemporary native forms — treated as a complete modern wardrobe, not a side category.", works:work(1,["Lagos Soil","Oyo Line","Ceremony Study","Quiet Senator"],["Senator","Native two-piece","Kaftan","Senator shirt"],"Lagos / Yoruba-informed design language") },
  { slug:"tailoring", promoImage:"https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1800&q=90", promoAlt:"Contemporary mens tailoring — promotional editorial", title:"Tailoring", eyebrow:"THE TAILORING WORLD", description:"Sharp proportion, African tailoring and contemporary formalwear for ceremony, boardroom, evening and everywhere between.", works:work(11,["After Dark","House Cut","Black Meridian","Lagos Formal"],["Evening suit","African suit","Tailored jacket","Three-piece"],"Contemporary African tailoring") },
  { slug:"shirting", promoImage:"https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=1800&q=90", promoAlt:"Premium shirting — promotional editorial", title:"Shirting", eyebrow:"THE SHIRTING WORLD", description:"Dress shirts, relaxed shirts, overshirts, polos and resort forms built around EAZY proportion and textile language.", works:work(21,["Waterline","White Heat","House Shirt","Open Collar"],["Resort shirt","Dress shirt","Overshirt","Relaxed shirt"],"Lagos Water / Lagos Heat") },
  { slug:"knitwear", promoImage:"https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?auto=format&fit=crop&w=1800&q=90", promoAlt:"Fine knitwear — promotional editorial", title:"Knitwear", eyebrow:"THE KNIT WORLD", description:"Knit polos, sweaters, cardigans and fine layers that bring softness, texture and quiet luxury into the EAZY wardrobe.", works:work(31,["House Quarter","Fine Lagos","Soft Concrete","Night Knit"],["Knit polo","Fine sweater","Cardigan","Evening knit"],"Material-first house language") },
  { slug:"outerwear", promoImage:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=90", promoAlt:"Premium outerwear — promotional editorial", title:"Outerwear", eyebrow:"THE OUTERWEAR WORLD", description:"Coats, bombers, jackets and transitional layers designed for movement through the city and beyond.", works:work(41,["Concrete Shell","Night Bomber","Transit Coat","Rain Study"],["Utility jacket","Bomber","Long coat","Light shell"],"Lagos Concrete / Movement") },
  { slug:"relaxed", promoImage:"https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1800&q=90", promoAlt:"Refined relaxed menswear — promotional editorial", title:"Relaxed & Street", eyebrow:"THE RELAXED WORLD", description:"Hoodies, sweatshirts, cargos, relaxed trousers and contemporary street forms without losing the discipline of the House.", works:work(51,["Concrete","Movement 01","After Hours","Street Study"],["Relaxed set","Cargo trouser","Hooded layer","Oversized shirt"],"Lagos Movement") },
  { slug:"resort", promoImage:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=90", promoAlt:"Resort world — promotional editorial", title:"Resort", eyebrow:"THE RESORT WORLD", description:"Lightweight tailoring, matching sets, open shirting, shorts and swim for heat, water and escape.", works:work(61,["Blue Hour","Palm Line","Coastal Heat","Water Set"],["Resort set","Open shirt","Short","Swim"],"Lagos Water / Heat") },
  { slug:"denim", promoImage:"https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1800&q=90", promoAlt:"Premium denim — promotional editorial", title:"Denim", eyebrow:"THE DENIM WORLD", description:"Denim jackets, jeans, overshirts and coordinated sets with a workwear-to-luxury attitude.", works:work(71,["Indigo Night","Raw Lagos","Washed Concrete","Denim House"],["Jean","Denim jacket","Overshirt","Denim set"],"Indigo / Concrete") },
  { slug:"active", promoImage:"https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1800&q=90", promoAlt:"Active and swim — promotional editorial", title:"Active & Swim", eyebrow:"THE ACTIVE WORLD", description:"Performance-minded layers, training forms, travel pieces and swimwear for movement beyond the studio.", works:work(81,["Motion 01","Heat Run","Water Motion","Travel Form"],["Performance top","Track layer","Swim short","Travel set"],"Movement / Heat / Water") },
  { slug:"lounge", promoImage:"https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1800&q=90", promoAlt:"After-dark menswear — promotional editorial", title:"Lounge & Night", eyebrow:"THE AFTER HOURS WORLD", description:"Quiet garments for home, travel and night — soft construction with an unmistakable House point of view.", works:work(91,["After Hours","Midnight Lounge","Quiet Set","Night Silk"],["Lounge set","Night shirt","Relaxed trouser","Evening layer"],"Lagos After Dark") },
  { slug:"african", promoImage:"https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1800&q=90", promoAlt:"African design direction — promotional editorial", title:"African Directions", eyebrow:"THE CULTURAL WORLD", description:"Curated design directions across Nigerian and wider African visual languages, interpreted respectfully rather than presented as costume or unverified historical authenticity.", works:work(101,["Oyo Study","Benin Line","Igbo Geometry","Sahel Form"],["Tailored native","Structured jacket","Native set","Longline shirt"],"Research-led African design directions") },
  { slug:"lagos", promoImage:"https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1800&q=90", promoAlt:"Lagos design language — promotional editorial", title:"Lagos Design Languages", eyebrow:"THE LAGOS WORLD", description:"The House vocabulary: movement, heat, night, concrete, water, earth, ceremony and after dark translated into contemporary menswear.", works:work(111,["Lagos Movement","Lagos Heat","Lagos Night","Lagos Earth"],["Relaxed tailoring","Resort form","Evening tailoring","Textured native"],"EAZY Lagos Design Vocabulary") },
  { slug:"essentials", promoImage:"https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=1800&q=90", promoAlt:"EAZY essentials — promotional editorial", title:"EAZY Essentials", eyebrow:"THE ESSENTIAL WORLD", description:"The permanent foundation of the wardrobe: refined, repeatable pieces designed to live beyond a season.", works:work(121,["House Tee","Signature Polo","Everyday Trouser","Essential Overshirt"],["T-shirt","Polo","Trouser","Overshirt"],"EAZY House Code") },
];

export const allEazyWorks = eazyCollections.flatMap((collection) =>
  collection.works.map((item) => ({ ...item, collection: collection.title, slug: collection.slug }))
);
