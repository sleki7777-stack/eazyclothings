import { NextResponse } from "next/server";
import { EAZY_RECEIVING_ADDRESS, buildSupplierInstruction, type EazyFulfillmentOrder } from "@/lib/fulfillment";

export async function GET() {
  return NextResponse.json({
    ok: true,
    receivingAddressConfigured: EAZY_RECEIVING_ADDRESS.address1 !== "CONFIGURE_EAZY_RECEIVING_ADDRESS",
    receivingAddress: EAZY_RECEIVING_ADDRESS,
    policy: "SLEEK EAZY composition components ship to EAZY first. EAZY receives, QC-checks, consolidates and sends one final package to the customer.",
  });
}

export async function POST(request: Request) {
  const secret = process.env.EAZY_FULFILLMENT_WEBHOOK_SECRET;
  if (secret && request.headers.get("x-eazy-fulfillment-secret") !== secret)
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });

  const order = await request.json() as EazyFulfillmentOrder;
  const supplierInstructions = order.components
    .filter(c => c.kind === "SLEEK_EAZY")
    .map(c => buildSupplierInstruction(order, c));

  return NextResponse.json({
    ok: true, orderId: order.id,
    customerDestination: order.customer.shippingAddress,
    eazyReceivingDestination: order.eazyReceivingAddress,
    supplierInstructions,
    rule: "SUPPLIER → EAZY → CUSTOMER",
  });
}
