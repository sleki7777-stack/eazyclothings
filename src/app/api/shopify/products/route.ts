import { NextResponse } from "next/server";
import { isShopifyConfigured, shopifyAdminGraphql } from "@/lib/shopify";

const QUERY = `#graphql
query SleekEazyCatalogue($cursor: String) {
  products(first: 100, after: $cursor, query: "status:active") {
    pageInfo { hasNextPage endCursor }
    nodes {
      id
      title
      handle
      vendor
      productType
      tags
      metafields(first: 20, namespace: "eazy") { nodes { key value } }
      featuredImage { url altText }
      images(first: 5) { nodes { url altText } }
      variants(first: 20) {
        nodes {
          id
          title
          sku
          price
          compareAtPrice
          availableForSale
          inventoryQuantity
        }
      }
    }
  }
}`;


type ShopifyCatalogue = {
  products: {
    pageInfo: { hasNextPage: boolean; endCursor: string | null };
    nodes: Array<{
      id: string; title: string; handle: string; vendor: string;
      productType: string; tags: string[];
      metafields: { nodes: Array<{ key: string; value: string }> };
      featuredImage?: { url: string; altText?: string | null } | null;
      images: { nodes: Array<{ url: string; altText?: string | null }> };
      variants: { nodes: Array<{ id: string; title: string; sku?: string | null; price: string; compareAtPrice?: string | null; availableForSale: boolean; inventoryQuantity?: number | null }> };
    }>;
  };
};

export async function GET() {
  if (!isShopifyConfigured()) {
    return NextResponse.json({ ok: true, configured: false, products: [], message: "Shopify catalogue is not configured yet." });
  }

  try {
    const allNodes: ShopifyCatalogue["products"]["nodes"] = [];
    let cursor: string | null = null;
    for (let page = 0; page < 20; page += 1) {
      const data: ShopifyCatalogue = await shopifyAdminGraphql<ShopifyCatalogue>(QUERY, { cursor });
      allNodes.push(...data.products.nodes);
      if (!data.products.pageInfo.hasNextPage || !data.products.pageInfo.endCursor) break;
      cursor = data.products.pageInfo.endCursor;
    }

    const products = allNodes.filter((product) => product.tags.some((tag) => tag.toUpperCase() === "SLEEK_EAZY") || product.productType.toUpperCase().includes("SLEEK EAZY") || product.vendor.toUpperCase().includes("SLEEK EAZY")).map((product) => {
      const meta = Object.fromEntries(product.metafields.nodes.map((field) => [field.key.toLowerCase(), field.value]));
      const tagValue = (prefix: string) => product.tags.find((tag) => tag.toUpperCase().startsWith(prefix))?.slice(prefix.length).trim() || "";
      const sourceType = meta.source_type || tagValue("SOURCE:");
      const origin = meta.origin || tagValue("ORIGIN:");
      const material = meta.material || tagValue("MATERIAL:");
      const qualityCheck = meta.quality_check || tagValue("QC:");
      const provenance = meta.provenance || tagValue("PROVENANCE:");
      const approved = product.tags.some((tag) => tag.toUpperCase() === "EAZY_APPROVED");
      const edition = (meta.edition || "CORE").toUpperCase();
      const limitedEdition = meta.limited_edition ? (() => { try { return JSON.parse(meta.limited_edition); } catch { return undefined; } })() : undefined;
      const firstVariant = product.variants.nodes[0];
      const purchaseReady = Boolean(approved && product.tags.some((tag) => tag.toUpperCase() === "MARKET-PROOF") && (product.featuredImage?.url || product.images.nodes[0]?.url) && firstVariant?.availableForSale);
      const transparencyReady = Boolean(sourceType && origin && material && qualityCheck && provenance && approved);
      return {
      id: product.id,
      title: product.title,
      handle: product.handle,
      vendor: product.vendor,
      productType: product.productType,
      tags: product.tags,
      sourceType,
      origin,
      transparencyReady,
      purchaseReady,
      transparency: { material, qualityCheck, provenance, approved },
      image: product.featuredImage?.url || product.images.nodes[0]?.url || null,
      alt: product.featuredImage?.altText || product.title,
      variants: product.variants.nodes.map((variant) => ({
        id: variant.id,
        title: variant.title,
        sku: variant.sku,
        price: variant.price,
        compareAtPrice: variant.compareAtPrice,
        availableForSale: variant.availableForSale,
        inventoryQuantity: variant.inventoryQuantity,
      })),
      };
    });
    return NextResponse.json({ ok: true, configured: true, products });
  } catch (error) {
    return NextResponse.json(
      { ok: false, configured: true, products: [], error: error instanceof Error ? error.message : "Unable to load Shopify catalogue." },
      { status: 502 },
    );
  }
}
