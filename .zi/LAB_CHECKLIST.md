# EAZY POWERSELL LAB CHECKLIST

## Current rule

Do not deploy yet.

The next phase is local PowerShell laboratory verification.

## 1. Get the current project

Recommended working directory:

C:\EAZY\eazyclothings

Use the latest GitHub main branch after the ZI consolidation commit.

## 2. Environment

Create local environment variables in .env.local.

Never paste the real OpenRouter key into chat.
Never commit secrets.

Minimum AI variables:

OPENROUTER_API_KEY=
EAZY_AI_MODEL=
EAZY_APP_URL=http://localhost:3000

Shopify variables should be supplied only when testing the real Shopify connection.

WhatsApp variables should be supplied only when testing WhatsApp.

## 3. Install

PowerShell:

npm install

## 4. Static checks

Run:

npx tsc --noEmit

Then:

npm run build

If the project uses Vinext tooling in the current branch, also run the applicable Vinext check command already configured by the project.

## 5. Run locally

npm run dev

Open:

http://localhost:3000

## 6. Commerce smoke test

Check:

- /collections
- /sleek-eazy
- /products/[verified-handle]
- /composition
- /sleek-eazy/house-review
- /sleek-eazy/investigate

Confirm:

- no runtime errors
- real product images only
- exact variant image changes
- exact variant price changes
- unavailable variants cannot be purchased
- collection imagery comes from verified products
- pending states are honest
- product detail works
- composition receives the selected exact variant
- Shopify checkout URL is correctly formed when configured

## 7. AI smoke test

With OpenRouter configured:

- open /intelligence
- send a simple owner message
- verify server response
- verify model response is returned
- verify no secret is exposed in browser output
- verify missing key produces a controlled error
- verify the owner route rejects malformed messages

## 8. Shopify lab

Only with a test/controlled store:

- verify catalogue fetch
- verify exact variants
- verify variant-specific media
- verify prices
- verify tags
- verify EAZY metafields
- verify collection tags
- verify product availability
- verify cart URL

Do not publish unverified inventory.

## 9. Known issues to test/fix

1. Product detail should default to the first AVAILABLE variant, not merely the first variant.
2. Composition checkout approval must eventually become server-trusted rather than trusting client booleans.
3. Complete EAZY garment + SLEEK EAZY combined checkout still needs a real garment line-item/commissioning architecture.
4. Remove or clearly segregate any commerce-facing Unsplash/editorial fallback that could violate the exact-product rule.
5. Confirm .gitignore protects .env.local before adding secrets locally.
6. Verify the current OpenRouter model ID against the provider before treating it as production-ready.

## 10. Acceptance gate

No “100% ready” claim until:

- local install succeeds
- TypeScript succeeds
- production build succeeds
- runtime pages are tested
- real Shopify connection is tested where applicable
- variant/media truth is verified
- checkout is tested
- AI request is tested
- no secrets are committed
- known blockers are resolved or explicitly accepted by the owner

## Deployment comes later

Only after the lab passes do we move to final live deployment and main-domain linking through the chosen Cloudflare/hosting path.
