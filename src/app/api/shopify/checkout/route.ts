import { NextResponse } from "next/server";
import { isShopifyConfigured } from "@/lib/shopify";

type CheckoutItem = { variantId?: unknown; quantity?: unknown };

function numericVariantId(value: unknown) {
  if (typeof value !== "string") return null;
  const match = value.match(/ProductVariant\/(\d+)$/);
  if (match) return match[1];
  if (/^\d+$/.test(value)) return value;
  return null;
}

export async function POST(request: Request) {
  try {
    if (!isShopifyConfigured()) {
      return NextResponse.json({ ok: false, error: "Shopify is not configured." }, { status: 503 });
    }

    const body = (await request.json()) as { items?: CheckoutItem[] };
    const items = Array.isArray(body.items) ? body.items : [];
    const lines = items
      .map((item) => ({
        variantId: numericVariantId(item.variantId),
        quantity: Math.max(1, Math.min(20, Number(item.quantity) || 1)),
      }))
      .filter((item): item is { variantId: string; quantity: number } => Boolean(item.variantId));

    if (!lines.length) {
      return NextResponse.json({ ok: false, error: "No Shopify variants were selected." }, { status: 400 });
    }

    const domain = process.env.SHOPIFY_STORE_DOMAIN!.trim().replace(/^https?:\/\//, "").replace(/\/$/, "");
    const cart = lines.map((line) => `${line.variantId}:${line.quantity}`).join(",");
    return NextResponse.json({
      ok: true,
      checkoutUrl: `https://${domain}/cart/${cart}`,
      itemCount: lines.reduce((sum, line) => sum + line.quantity, 0),
    });
  } catch {
    return NextResponse.json({ ok: false, error: "Unable to prepare Shopify checkout." }, { status: 500 });
  }
}
