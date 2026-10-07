import { createHmac, timingSafeEqual } from "crypto";
import { NextRequest, NextResponse } from "next/server";

const SHOPIFY_WEBHOOK_SECRET =
  process.env.SHOPIFY_WEBHOOK_SECRET || process.env.EAZY_FULFILLMENT_WEBHOOK_SECRET || "";

function verifyShopifyHmac(rawBody: string, header: string | null) {
  if (!SHOPIFY_WEBHOOK_SECRET || !header) return false;
  const expected = createHmac("sha256", SHOPIFY_WEBHOOK_SECRET)
    .update(rawBody, "utf8")
    .digest("base64");

  const a = Buffer.from(expected);
  const b = Buffer.from(header);
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function POST(request: NextRequest) {
  const rawBody = await request.text();

  if (!verifyShopifyHmac(rawBody, request.headers.get("x-shopify-hmac-sha256"))) {
    return NextResponse.json({ ok: false, error: "Invalid Shopify webhook signature." }, { status: 401 });
  }

  let payload: Record<string, any>;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON payload." }, { status: 400 });
  }

  const shopDomain = request.headers.get("x-shopify-shop-domain");
  const webhookId = request.headers.get("x-shopify-webhook-id");
  const orderId = payload?.id ? String(payload.id) : null;

  if (!orderId) {
    return NextResponse.json({ ok: false, error: "Webhook contains no Shopify order id." }, { status: 400 });
  }

  // Idempotency key: Shopify webhook ID. Persist this key in the production
  // fulfillment datastore before creating a fulfillment record.
  const sleekComponents = Array.isArray(payload.line_items)
    ? payload.line_items
        .filter((item: any) =>
          Array.isArray(item.tags)
            ? item.tags.includes("SLEEK_EAZY")
            : String(item.vendor || "").toUpperCase().includes("SLEEK EAZY") ||
              String(item.product_type || "").toUpperCase().includes("SLEEK EAZY")
        )
        .map((item: any) => ({
          id: String(item.id),
          orderId,
          kind: "SLEEK_EAZY",
          name: item.title || "SLEEK EAZY component",
          sku: item.sku || "",
          supplier: item.vendor || undefined,
          quantity: Number(item.quantity || 1),
          inboundStatus: "ORDERED",
          qualityStatus: "PENDING",
        }))
    : [];

  return NextResponse.json({
    ok: true,
    received: true,
    webhookId,
    shopDomain,
    shopifyOrderId: orderId,
    fulfillment: {
      stage: "ORDER_CREATED",
      customer: {
        name: [payload.shipping_address?.first_name, payload.shipping_address?.last_name].filter(Boolean).join(" "),
        email: payload.email || payload.contact_email || "",
        shippingAddress: payload.shipping_address || {},
      },
      components: sleekComponents,
      qualityFirst: true,
      universalReceiving: true,
      rule: "SHOPIFY ORDER → EAZY FULFILLMENT → SUPPLIER → EAZY QC → CUSTOMER",
    },
  });
}
