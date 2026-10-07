export type TrendSignal={id:string;season:string;category:string;signal:string;direction:string;confidence:"HIGH"|"MEDIUM"|"LOW";eazyTreatment:string};
export const trendSignals:TrendSignal[]=[
{id:"SIG-026",season:"AW26",category:"TAILORING",signal:"Relaxed precision",direction:"Soft shoulders, roomier trousers, fluid jackets",confidence:"HIGH",eazyTreatment:"Translate into Lagos Heat tailoring with controlled proportions and house finishing."},
{id:"SIG-027",season:"AW26",category:"KNITWEAR",signal:"Heritage knit revival",direction:"Cable, textured, quarter-zip and expressive vintage knit structures",confidence:"HIGH",eazyTreatment:"Develop refined EAZY knit structures with Lagos colour and material language."},
{id:"SIG-028",season:"AW26",category:"OUTERWEAR",signal:"Longer power outerwear",direction:"Long coats, broad shoulders and protective silhouettes",confidence:"HIGH",eazyTreatment:"Translate into Lagos Concrete / After Dark outerwear with breathable construction."},
{id:"SIG-029",season:"SS26",category:"UTILITY",signal:"Elevated utility",direction:"Relaxed cargo proportions, intentional pockets and workwear construction",confidence:"HIGH",eazyTreatment:"Build functional Lagos Movement pieces without costume or excess."},
{id:"SIG-030",season:"SS26",category:"SHIRTING",signal:"Reworked classics",direction:"Short-sleeve shirts, refined prints and co-ordinated separates",confidence:"MEDIUM",eazyTreatment:"Use EAZY textile treatments and Lagos visual vocabulary rather than copying source prints."},
{id:"SIG-031",season:"AW26",category:"DENIM",signal:"Dark premium denim",direction:"Deep indigo, relaxed/slouchy silhouettes and utility detailing",confidence:"MEDIUM",eazyTreatment:"Create EAZY denim around Lagos Concrete and Night tonal language."},
{id:"SIG-032",season:"AW26",category:"NATIVE",signal:"Traditional codes, modern proportion",direction:"Heritage references integrated into contemporary menswear",confidence:"HIGH",eazyTreatment:"Reinterpret Senator, Native two-piece and ceremonial forms through EAZY House Code."}
];

export const designRules=[
"AI proposes; EAZY decides.",
"Extract silhouette, proportion, material, construction, colour and styling—not logos or protected designs.",
"Every trend signal becomes an EAZY interpretation before it can become a work.",
"Native and African references must be identified honestly and treated as design directions, not invented historical claims.",
"Approved works become versioned EAZY Archive records; rejected concepts remain research history.",
"Real textile, production and edition constraints remain authoritative."
];