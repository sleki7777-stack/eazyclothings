# EAZY COMMERCE ARCHITECTURE

## Routes

Core commerce/intelligence routes established:

- /collections
- /sleek-eazy
- /sleek-eazy/house-review
- /sleek-eazy/investigate
- /intelligence
- /intelligence/sleek-eazy
- /composition
- /products/[handle]

## Shopify role

Shopify is the commerce system for SLEEK EAZY accessories.

The integration must preserve:

- exact product identity
- exact variants
- retail prices
- source/product evidence
- product media
- availability
- EAZY verification metadata

Products receive EAZY/SLEEK EAZY tags and relevant collection tags.

## Publishing

The product publishing flow creates product options and bulk variants and attaches variant-specific media.

Variant-level EAZY metadata includes supplier price/currency and exact-image/image-rights verification signals.

## Catalogue

The catalogue API reads active Shopify products and reconstructs the EAZY verification state.

A product becomes purchase-ready only when:

- approved
- market-proof
- exact image match
- image rights verified
- required transparency evidence exists
- every explicit variant is verified
- an actual purchasable image exists
- at least one variant is available

## Composition

Composition is the bridge between:

**EAZY garment + SLEEK EAZY completion pieces**

The customer can select exact accessories and proceed toward Shopify checkout.

The current implementation sends selected SLEEK EAZY Shopify variants to the Shopify cart URL and carries composition attributes.

## Important architecture gap

The current checkout path does not yet place an EAZY garment Shopify variant into the same Shopify checkout line-item set. The garment/commissioning flow must be integrated before claiming the complete two-store composition checkout is finished.

## Security gap

The current composition approval flag is client-supplied. A production-grade implementation must move approval/lock verification to a server-trusted state or signed/session-backed composition record.

## Frontend truth

Commerce-facing pages should never use placeholder/editorial imagery where the customer could reasonably interpret it as actual inventory.

## Collection source of truth

Collections should be derived from verified Shopify products and collection tags rather than hard-coded fake inventory imagery.
