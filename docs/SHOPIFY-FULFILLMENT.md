# EAZY Shopify Fulfillment Architecture

## Locked rule

For an EAZY Composition: Supplier → EAZY Receiving → EAZY QC → Composition Assembly → Customer.

The customer's Shopify shipping address remains attached to the master order. It is never replaced.

SLEEK EAZY suppliers receive only the EAZY receiving destination plus a component/order reference.

## Shopify Admin API

The app now contains a server-side Shopify Admin GraphQL client in `src/lib/shopify.ts`.

It uses:

- `SHOPIFY_STORE_DOMAIN`
- `SHOPIFY_ADMIN_ACCESS_TOKEN`
- `SHOPIFY_API_VERSION` (default `2026-10`)
- `SHOPIFY_WEBHOOK_SECRET` for signed Shopify event handling

The access token is server-only and must never be exposed to the browser.

The fulfillment API can query an authoritative Shopify order using its Admin GraphQL ID.

## Required Shopify app permissions

For the EAZY fulfillment/order-management model, Shopify documents fulfillment-order access through scopes such as:

- `read_merchant_managed_fulfillment_orders`
- `write_merchant_managed_fulfillment_orders`
- `read_third_party_fulfillment_orders`
- `write_third_party_fulfillment_orders`

The exact scopes should match whether the app acts as an order-management app, fulfillment service, or both.

## Webhooks

Production must subscribe the Shopify app to order and fulfillment-order events needed by the orchestration layer, then verify every webhook signature before processing it.

At minimum, the production design needs order creation/updates and fulfillment-order state/request events.

## Consolidation gate

Final customer shipment cannot be released until all required components are present, all SLEEK EAZY components pass EAZY QC, the garment passes garment QC, the approved design is locked, the Master Seal/provenance record is created, and the EAZY package is assembled.

## Shopify boundary

Shopify is the commerce/order/payment source of truth.

EAZY fulfillment owns supplier procurement instructions, inbound receiving, QC, consolidation, Master Seal readiness and final release.

Final fulfillment/tracking must be written back to Shopify only after the EAZY consolidation gate passes.

## Privacy rule

The supplier does not receive the customer's final address for a consolidated Composition. The customer's address stays in the Shopify/EAZY order record and is used only for the final EAZY shipment.

## Standalone SLEEK EAZY

A SLEEK EAZY purchase that is not part of an EAZY Composition may use a separate standalone fulfillment policy. The consolidation rule applies to items explicitly included in an EAZY Composition.
