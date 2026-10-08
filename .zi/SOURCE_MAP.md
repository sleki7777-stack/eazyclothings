# EAZY ZI SOURCE MAP

## Active implementation

### Intelligence
- src/app/intelligence/page.tsx
- src/app/api/owner/chat/route.ts
- src/lib/eazy-owner-ai.ts
- src/lib/eazy-owner-control.ts
- src/lib/eazy-whatsapp.ts
- src/app/api/owner/whatsapp/webhook/route.ts

### SLEEK EAZY intelligence
- src/lib/sleek-eazy-intelligence.ts
- src/app/api/shopify/products/publish/route.ts
- src/app/api/shopify/products/route.ts

### Commerce
- src/app/sleek-eazy/page.tsx
- src/app/collections/page.tsx
- src/app/products/[handle]/page.tsx
- src/app/composition/page.tsx
- src/app/api/shopify/checkout/route.ts
- src/lib/shopify.ts

### EAZY collections/design studies
- src/lib/eazy-collections.ts
- src/app/works/[slug]/page.tsx

### CI
- .github/workflows/eazy-ci.yml

### Configuration
- package.json
- .env.example
- .gitignore must be verified locally before secrets are used.

## Important implementation facts

Variant records carry independent supplier price, retail price, currencies, images, availability and exact-image/image-rights evidence.

Shopify publishing maps verified variant data into Shopify variants and variant-specific media.

The catalogue API reconstructs verification state from Shopify tags/metafields.

Commerce collection imagery is generated from actual verified products assigned to the collection.

The product detail route selects an exact variant and displays its corresponding image and price.

Composition stores selected SLEEK EAZY variants locally and prepares a Shopify cart URL.

The owner AI currently uses Vercel AI SDK with an OpenRouter-compatible provider.

WhatsApp is currently a foundation for owner-only inbound verification and AI replies.

## Historical source

Earlier source-of-truth commit:

175ebf71cdbe946ef2a12fe3b72dd22ee9583436

Collection/sourcing work was also preserved around:

39b5782474ffcef36c54e4d798a73f7
