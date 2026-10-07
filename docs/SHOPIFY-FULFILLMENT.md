# EAZY Shopify Fulfillment Architecture

## Locked rule

For an EAZY Composition: Supplier → EAZY Receiving → EAZY QC → Composition Assembly → Customer.

The customer's Shopify shipping address remains attached to the master order. It is never replaced.

SLEEK EAZY suppliers receive only the EAZY receiving destination plus a component/order reference.

## Order model

A Shopify order may contain EAZY garments and SLEEK EAZY components. The EAZY fulfillment layer creates inbound supplier instructions for SLEEK EAZY components.

Each supplier instruction contains supplier, SKU, product, quantity, component/order reference, EAZY receiving address, and an explicit instruction not to ship to the customer.

## Consolidation gate

Final customer shipment cannot be released until all required components are present, all SLEEK EAZY components pass EAZY QC, the garment passes garment QC, the approved design is locked, the Master Seal/provenance record is created, and the EAZY package is assembled.

## Shopify boundary

Shopify is the commerce/order/payment source of truth.

EAZY fulfillment owns supplier procurement instructions, inbound receiving, QC, consolidation, Master Seal readiness and final release.

Production should use Shopify Admin APIs/webhooks to ingest order and fulfillment events and write final fulfillment/tracking updates back to Shopify.

## Environment configuration

EAZY_RECEIVING_NAME
EAZY_RECEIVING_ADDRESS1
EAZY_RECEIVING_ADDRESS2
EAZY_RECEIVING_CITY
EAZY_RECEIVING_STATE
EAZY_RECEIVING_COUNTRY
EAZY_RECEIVING_POSTAL_CODE
EAZY_RECEIVING_PHONE
EAZY_FULFILLMENT_WEBHOOK_SECRET

Never commit Shopify credentials or webhook secrets.

## Privacy rule

The supplier does not need the customer's final address for a consolidated Composition. The customer's address stays in the Shopify/EAZY order record and is used only for the final EAZY shipment.

## Standalone SLEEK EAZY

A SLEEK EAZY purchase that is not part of an EAZY Composition may use a separate standalone fulfillment policy. The consolidation rule applies to items explicitly included in an EAZY Composition.
