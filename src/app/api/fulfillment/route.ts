import { NextResponse } from "next/server";
import {
  EAZY_RECEIVING_ADDRESS,
  buildSupplierInstruction,
  evaluateBrandProtection,
  evaluateSupplierReturn,
  isReceivingAddressConfigured,
  type EazyFulfillmentOrder,
  type SupplierReturnTerms,
  type FulfillmentStage,
  canTransitionFulfillment,
  FULFILLMENT_STAGES,
} from "@/lib/fulfillment";

export async function GET() {
  return NextResponse.json({
    ok: true,
    receivingAddressConfigured: isReceivingAddressConfigured(),
    qualityFirst: true,
    policy:
      "SLEEK EAZY products ship to EAZY first. EAZY receives, QC-checks and either approves for fulfillment or holds the product for supplier recovery.",
  });
}

export async function POST(request: Request) {
  const secret = process.env.EAZY_FULFILLMENT_WEBHOOK_SECRET;

  if (secret && request.headers.get("x-eazy-fulfillment-secret") !== secret) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as EazyFulfillmentOrder & {
    supplierReturnTerms?: Record<string, SupplierReturnTerms>;
  };

  if (!body?.id || !body.customer?.shippingAddress || !Array.isArray(body.components)) {
    return NextResponse.json(
      { ok: false, error: "Invalid fulfillment order payload" },
      { status: 400 },
    );
  }

  if (!isReceivingAddressConfigured()) {
    return NextResponse.json(
      { ok: false, error: "EAZY receiving address is not configured" },
      { status: 503 },
    );
  }

  const order: EazyFulfillmentOrder = {
    ...body,
    eazyReceivingAddress: EAZY_RECEIVING_ADDRESS,
  };

  const brandProtection = evaluateBrandProtection(order);

  const supplierInstructions = order.components
    .filter(component => component.kind === "SLEEK_EAZY")
    .map(component => buildSupplierInstruction(order, component));

  const supplierRecovery = order.components
    .filter(component => component.kind === "SLEEK_EAZY")
    .filter(component => component.qualityStatus === "FAILED" || component.qualityStatus === "REPLACEMENT_REQUIRED")
    .map(component => {
      const terms = body.supplierReturnTerms?.[component.id] ?? {
        supplier: component.supplier || "UNKNOWN_SUPPLIER",
        returnShippingPaidBy: "UNKNOWN" as const,
        fullProductRefund: "UNKNOWN" as const,
        shippingRefunded: "UNKNOWN" as const,
        qualityFailureCovered: "UNKNOWN" as const,
      };
      return evaluateSupplierReturn(component, terms);
    });

  const recoveryRequired = supplierRecovery.length > 0;

  return NextResponse.json({
    ok: true,
    orderId: order.id,
    customerDestination: order.customer.shippingAddress,
    eazyReceivingDestination: EAZY_RECEIVING_ADDRESS,
    supplierInstructions,
    supplierRecovery,
    recoveryRequired,
    rule: "SUPPLIER → EAZY → QC → APPROVE OR RECOVER → CUSTOMER",
    universalReceiving: true,
    qualityFirst: true,
    receivingLaw: "Every SLEEK EAZY product is received by EAZY first and QC-checked before final customer fulfillment.",
    qualityLaw: "QUALITY FIRST. ALWAYS. A product that fails EAZY QC must not reach the customer.",
    returnLaw: "Failed products are held at EAZY and returned, replaced, credited or refunded according to verified supplier terms.",
    brandProtection,
    customerRefundRequired: brandProtection.decision === "REFUND_CUSTOMER",
  });
}


export async function PATCH(request: Request) {
  const secret = process.env.EAZY_FULFILLMENT_WEBHOOK_SECRET;
  if (secret && request.headers.get("x-eazy-fulfillment-secret") !== secret) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as {
    shopifyOrderId?: string;
    stage?: FulfillmentStage;
  };

  if (!body.shopifyOrderId || !body.stage || !FULFILLMENT_STAGES.includes(body.stage)) {
    return NextResponse.json({ ok: false, error: "shopifyOrderId and a valid stage are required." }, { status: 400 });
  }

  try {
    const { getEazyFulfillmentFromOrder, persistEazyFulfillmentOnOrder } = await import("@/lib/shopify");
    const existing = await getEazyFulfillmentFromOrder(body.shopifyOrderId);
    if (!existing) {
      return NextResponse.json({ ok: false, error: "No EAZY fulfillment record exists for this Shopify order." }, { status: 404 });
    }

    const currentStage = String(existing.stage || "ORDER_CREATED") as FulfillmentStage;
    if (!canTransitionFulfillment(currentStage, body.stage)) {
      return NextResponse.json({
        ok: false,
        error: `Invalid fulfillment transition: ${currentStage} → ${body.stage}`,
        currentStage,
        requestedStage: body.stage,
      }, { status: 409 });
    }

    const updated = { ...existing, stage: body.stage, updatedAt: new Date().toISOString() };
    await persistEazyFulfillmentOnOrder(body.shopifyOrderId, updated);

    return NextResponse.json({ ok: true, shopifyOrderId: body.shopifyOrderId, stage: body.stage, fulfillment: updated });
  } catch {
    return NextResponse.json({ ok: false, error: "Unable to transition fulfillment state." }, { status: 500 });
  }
}
