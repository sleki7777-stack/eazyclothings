export type FulfillmentStage =
  | "ORDER_CREATED" | "SUPPLIER_PROCUREMENT" | "INBOUND_TO_EAZY" | "RECEIVED"
  | "EAZY_QC" | "GARMENT_PRODUCTION" | "GARMENT_QC" | "AWAITING_CONSOLIDATION"
  | "COMPOSITION_ASSEMBLY" | "MASTER_SEAL" | "PACKAGED" | "FINAL_SHIPMENT" | "DELIVERED";

export type QualityStatus = "PENDING" | "PASSED" | "FAILED" | "REPLACEMENT_REQUIRED";

export type FulfillmentComponent = {
  id: string; orderId: string;
  kind: "EAZY_GARMENT" | "SLEEK_EAZY";
  name: string; sku: string; supplier?: string; quantity: number;
  inboundStatus: "NOT_REQUIRED" | "ORDERED" | "IN_TRANSIT" | "RECEIVED";
  qualityStatus: QualityStatus; receivedAt?: string;
};

export type EazyFulfillmentOrder = {
  id: string; shopifyOrderId?: string; stage: FulfillmentStage;
  customer: { name: string; email: string; shippingAddress: Record<string,string> };
  eazyReceivingAddress: {
    name: string; address1: string; address2?: string; city: string;
    state?: string; country: string; postalCode?: string; phone?: string;
  };
  components: FulfillmentComponent[]; notes: string[];
};

export const EAZY_RECEIVING_ADDRESS = {
  name: process.env.EAZY_RECEIVING_NAME || "EAZY Fulfillment / Receiving",
  address1: process.env.EAZY_RECEIVING_ADDRESS1 || "CONFIGURE_EAZY_RECEIVING_ADDRESS",
  address2: process.env.EAZY_RECEIVING_ADDRESS2 || "",
  city: process.env.EAZY_RECEIVING_CITY || "Lagos",
  state: process.env.EAZY_RECEIVING_STATE || "Lagos",
  country: process.env.EAZY_RECEIVING_COUNTRY || "Nigeria",
  postalCode: process.env.EAZY_RECEIVING_POSTAL_CODE || "",
  phone: process.env.EAZY_RECEIVING_PHONE || "",
};

export function canReleaseComposition(order: EazyFulfillmentOrder) {
  return order.components.every(c =>
    c.qualityStatus === "PASSED" &&
    (c.kind === "EAZY_GARMENT" || c.inboundStatus === "RECEIVED")
  );
}

export function buildSupplierInstruction(order: EazyFulfillmentOrder, component: FulfillmentComponent) {
  return {
    reference: `${order.id}-${component.id}`,
    supplier: component.supplier || "SLEEK EAZY SUPPLIER",
    sku: component.sku, product: component.name, quantity: component.quantity,
    shipTo: order.eazyReceivingAddress,
    instruction: "SHIP TO EAZY RECEIVING ONLY. DO NOT SHIP DIRECTLY TO THE CUSTOMER. Include the order/component reference on the parcel.",
  };
}
