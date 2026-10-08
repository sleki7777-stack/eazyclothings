export type SleekEazyCultureLane =
  | "AFRICAN_HERITAGE"
  | "LAGOS_MADE"
  | "CONTEMPORARY_AFRICAN"
  | "GLOBAL_SELECT"
  | "AFRICAN_GLOBAL_FUSION";

export const SLEEK_EAZY_CULTURE_LANES = [
  {
    key: "AFRICAN_HERITAGE" as const,
    name: "African Heritage",
    description: "Traditional beads · craft · ceremony · objects",
    tags: ["sleek-african-heritage", "sleek-cultural"]
  },
  {
    key: "LAGOS_MADE" as const,
    name: "Lagos Made",
    description: "Made in Lagos · Nigerian makers · local craft",
    tags: ["sleek-lagos-made", "sleek-nigeria"]
  },
  {
    key: "CONTEMPORARY_AFRICAN" as const,
    name: "Contemporary Africa",
    description: "Modern African design · new craft · new expression",
    tags: ["sleek-contemporary-african", "sleek-africa"]
  },
  {
    key: "GLOBAL_SELECT" as const,
    name: "Global Select",
    description: "International pieces selected to Eazy standard",
    tags: ["sleek-global-select", "sleek-international"]
  },
  {
    key: "AFRICAN_GLOBAL_FUSION" as const,
    name: "African × Global",
    description: "Pieces where African identity meets global design",
    tags: ["sleek-african-global", "sleek-fusion"]
  }
] as const;

export const SLEEK_EAZY_CULTURAL_CATEGORIES = [
  { key: "BEADS", name: "Traditional Beads", tags: ["sleek-beads", "sleek-cultural"] },
  { key: "NATIVE_HEADWEAR", name: "Native Headwear", tags: ["sleek-native-headwear", "sleek-cultural"] },
  { key: "AFRICAN_JEWELLERY", name: "African Jewellery", tags: ["sleek-african-jewellery", "sleek-cultural"] },
  { key: "AFRICAN_LEATHER", name: "African Leathercraft", tags: ["sleek-african-leather", "sleek-craft"] },
  { key: "TRADITIONAL_ARTS", name: "Traditional Arts & Objects", tags: ["sleek-traditional-arts", "sleek-cultural"] },
  { key: "ARTISAN_CRAFT", name: "Artisan Craft", tags: ["sleek-artisan", "sleek-craft"] },
  { key: "CEREMONY_CULTURE", name: "Ceremony & Culture", tags: ["sleek-ceremony-culture", "sleek-cultural"] }
] as const;

export const SLEEK_EAZY_PRODUCT_TAGS = {
  managed: "SLEEK_EAZY",
  candidate: "SLEEK_EAZY_CANDIDATE",
  approved: "EAZY_APPROVED",
  verificationRequired: "EAZY_VERIFICATION_REQUIRED",
  artisan: "SLEEK_ARTISAN",
  african: "SLEEK_AFRICAN",
  nigeria: "SLEEK_NIGERIA",
  lagos: "SLEEK_LAGOS"
} as const;

export const SLEEK_EAZY_MAKER_PROMISE = [
  "No listing fee for approved African makers and artisans",
  "Eazy handles premium presentation and customer-facing discovery",
  "Every maker and product still passes Eazy verification and quality review",
  "Commercial terms are agreed transparently before a product is approved",
  "Cultural provenance is preserved rather than stripped away for presentation"
] as const;
