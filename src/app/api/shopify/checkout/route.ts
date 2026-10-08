import { NextResponse } from "next/server";
import { isShopifyConfigured } from "@/lib/shopify";

type CheckoutItem = { variantId?: unknown; quantity?: unknown };
type CheckoutBody = {
  items?: CheckoutItem[];
  approved?: unknown;
  compositionLocked?: unknown;
  composition?: Record<string,string|undefined>;
};

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

    const body = (await request.json()) as CheckoutBody;
    if (body.approved !== true || body.compositionLocked !== true) {
      return NextResponse.json(
        { ok: false, error: "The approved EAZY composition must be locked before checkout." },
        { status: 409 },
      );
    }

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

    const domain = process.env.SHOPIFY_STORE_DOMAIN?.trim().replace(/^https?:\/\//, "").replace(/\/$/, "");
    if (!domain) return NextResponse.json({ ok:false, error:"Shopify store domain is not configured." }, { status:503 });
    const cart = lines.map((line) => `${line.variantId}:${line.quantity}`).join(",");
    const c=body.composition||{};
    const attrs=[
      ["EAZY Composition","WORK 001 · LAGOS SOIL"],
      ["EAZY Composition Status","APPROVED · LOCKED"],
      ["EAZY Garment",c.garment||"Modern Native / Senator"],
      ["EAZY Textile",c.textile||"Lagos Earth"],
      ["EAZY Collar",c.collar||"Band Collar"],
      ["EAZY Sleeve",c.sleeve||"Long"],
      ["EAZY Fit",c.fit||"L"],
      ["EAZY Finish",c.finish||"Hand Finish"],
      ["EAZY Edition",c.edition||"07 of 24"],
      ["EAZY Designer Notes",c.designerNotes||""]
    ];
    const query=attrs.map(([k,v])=>`attributes[${encodeURIComponent(k)}]=${encodeURIComponent(String(v).slice(0,180))}`).join("&");
    return NextResponse.json({
      ok: true,
      checkoutUrl: `https://${domain}/cart/${cart}?${query}`,
      itemCount: lines.reduce((sum, line) => sum + line.quantity, 0),\n      compositionLocked: true,
    });
  } catch {
    return NextResponse.json({ ok: false, error: "Unable to prepare Shopify checkout." }, { status: 500 });
  }
}
