import { createHmac, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import { isShopifyConfigured, shopifyAdminGraphql } from "@/lib/shopify";

function setupAuthorized(request: Request) {
  const secret = process.env.EAZY_WEBHOOK_SETUP_SECRET?.trim();
  const received = request.headers.get("x-eazy-setup-secret")?.trim();
  if (!secret || !received) return false;
  const a = Buffer.from(secret, "utf8");
  const b = Buffer.from(received, "utf8");
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function POST(request: Request) {
  if (!setupAuthorized(request)) {
    return NextResponse.json({ ok: false, error: "Unauthorized webhook setup request." }, { status: 401 });
  }

  if (!isShopifyConfigured()) {
    return NextResponse.json({ ok: false, error: "Shopify is not configured." }, { status: 503 });
  }

  const publicUrl = process.env.EAZY_PUBLIC_APP_URL?.trim().replace(/\/+$/, "");
  if (!publicUrl || !/^https:\/\//i.test(publicUrl)) {
    return NextResponse.json({
      ok: false,
      error: "EAZY_PUBLIC_APP_URL must be configured as an HTTPS public app URL before Shopify webhooks can be registered."
    }, { status: 503 });
  }

  const uri = `${publicUrl}/api/shopify/webhooks/orders/create`;

  try {
    const existing = await shopifyAdminGraphql<{
      webhookSubscriptions: { nodes: Array<{ id:string; topic:string; format:string; uri:string }> }
    }>(`#graphql
query ExistingOrdersWebhook($topic: WebhookSubscriptionTopic!, $uri: String!) {
  webhookSubscriptions(first: 10, topics: [$topic], uri: $uri) {
    nodes { id topic format uri }
  }
}`, { topic:"ORDERS_CREATE", uri });

    if (existing.webhookSubscriptions.nodes.length) {
      return NextResponse.json({
        ok:true,
        created:false,
        alreadyConfigured:true,
        subscription:existing.webhookSubscriptions.nodes[0],
      });
    }

    const created = await shopifyAdminGraphql<{
      webhookSubscriptionCreate: {
        webhookSubscription?: { id:string; topic:string; format:string; uri:string } | null;
        userErrors: Array<{ field?:string[] | null; message:string }>;
      }
    }>(`#graphql
mutation RegisterOrdersCreateWebhook($topic: WebhookSubscriptionTopic!, $webhookSubscription: WebhookSubscriptionInput!) {
  webhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
    webhookSubscription { id topic format uri }
    userErrors { field message }
  }
}`, {
      topic:"ORDERS_CREATE",
      webhookSubscription:{
        uri,
        format:"JSON",
        metafieldNamespaces:["eazy"],
      }
    });

    const errors=created.webhookSubscriptionCreate.userErrors||[];
    if (errors.length) {
      return NextResponse.json({ ok:false, error:errors.map(e=>e.message).join("; ") }, { status:422 });
    }

    return NextResponse.json({
      ok:true,
      created:true,
      subscription:created.webhookSubscriptionCreate.webhookSubscription,
      endpoint:uri,
      message:"Shopify ORDERS_CREATE webhook is registered for EAZY fulfillment."
    });
  } catch (error) {
    return NextResponse.json({
      ok:false,
      error:error instanceof Error ? error.message : "Unable to register Shopify webhook."
    }, { status:502 });
  }
}
