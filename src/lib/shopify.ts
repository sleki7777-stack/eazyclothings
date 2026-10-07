import { createHmac, timingSafeEqual } from "node:crypto";

const API_VERSION = process.env.SHOPIFY_API_VERSION || "2026-10";

function getShopifyConfig() {
  const domain = process.env.SHOPIFY_STORE_DOMAIN?.trim();
  const token = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN?.trim();
  if (!domain || !token) return null;
  return { domain: domain.replace(/^https?:\/\//, "").replace(/\/$/, ""), token };
}

export function isShopifyConfigured() {
  return Boolean(getShopifyConfig());
}

export async function shopifyAdminGraphql<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const config = getShopifyConfig();
  if (!config) throw new Error("Shopify credentials are not configured");

  const response = await fetch(
    \`https://\${config.domain}/admin/api/\${API_VERSION}/graphql.json\`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Shopify-Access-Token": config.token },
      body: JSON.stringify({ query, variables }),
      cache: "no-store",
    },
  );

  const payload = (await response.json()) as { data?: T; errors?: Array<{ message: string }> };
  if (!response.ok || payload.errors?.length) {
    throw new Error(payload.errors?.map(error => error.message).join("; ") || \`Shopify Admin API returned HTTP \${response.status}\`);
  }
  if (!payload.data) throw new Error("Shopify Admin API returned no data");
  return payload.data;
}

export function verifyShopifyWebhook(rawBody: string, receivedHmac: string | null) {
  const secret = process.env.SHOPIFY_WEBHOOK_SECRET?.trim();
  if (!secret || !receivedHmac) return false;
  const digest = createHmac("sha256", secret).update(rawBody, "utf8").digest("base64");
  const expected = Buffer.from(digest, "utf8");
  const received = Buffer.from(receivedHmac, "utf8");
  return expected.length === received.length && timingSafeEqual(expected, received);
}

export const SHOPIFY_ORDER_QUERY = \`#graphql
query GetOrder(\$id: ID!) {
  order(id: \$id) {
    id
    name
    email
    createdAt
    displayFinancialStatus
    displayFulfillmentStatus
    shippingAddress { name address1 address2 city province country zip phone }
    lineItems(first: 100) {
      nodes { id name quantity sku variant { id title sku } product { id title } }
    }
    fulfillmentOrders(first: 100) {
      nodes {
        id status requestStatus
        assignedLocation { location { id name } }
        lineItems(first: 100) { nodes { id remainingQuantity lineItem { id name sku } } }
      }
    }
  }
}\`;

export type ShopifyOrderSnapshot = {
  order: {
    id: string;
    name: string;
    email?: string | null;
    createdAt: string;
    displayFinancialStatus: string;
    displayFulfillmentStatus: string;
    shippingAddress?: Record<string, string | null> | null;
    lineItems: { nodes: Array<Record<string, unknown>> };
    fulfillmentOrders: { nodes: Array<Record<string, unknown>> };
  } | null;
};

export async function getShopifyOrder(id: string) {
  return shopifyAdminGraphql<ShopifyOrderSnapshot>(SHOPIFY_ORDER_QUERY, { id });
}
