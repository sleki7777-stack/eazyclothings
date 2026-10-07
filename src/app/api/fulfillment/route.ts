import { NextResponse } from "next/server";
import {
  EAZY_RECEIVING_ADDRESS,
  buildSupplierInstruction,
  isReceivingAddressConfigured,
  type EazyFulfillmentOrder,
} from "@/lib/fulfillment";

export async function GET() {
  return NextResponse.json({
    ok: true,
    receivingAddressConfigured: isReceivingAddressConfigured(),
    policy:
      "SLEEK EAZY composition components ship to EAZY first. EAZY receives, QC-checks, consolidates and sends one final package to the customer.",
  });
}

export async function POST(request: Request) {
  const secret = process.env.EAZY_FULFILLMENT_WEBHOOK_SECRET;

  // Fail closed when a production secret has been configured.
  if (secret && request.headers.get("x-eazy-fulfillment-secret") !== secret) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as EazyFulfillmentOrder;

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

  // The receiving address is always server-owned. Never trust a value from the client/webhook body.
  const order: EazyFulfillmentOrder = {
    ...body,
    eazyReceivingAddress: EAZY_RECEIVING_ADDRESS,
  };

  const supplierInstructions = order.components
    .filter(component => component.kind === "SLEEK_EAZY")
    .map(component => buildSupplierInstruction(order, component));

  return NextResponse.json({
    ok: true,
    orderId: order.id,
    customerDestination: order.customer.shippingAddress,
    eazyReceivingDestination: EAZY_RECEIVING_ADDRESS,
    supplierInstructions,
    rule: "SUPPLIER → EAZY → CUSTOMER",
  });
}
