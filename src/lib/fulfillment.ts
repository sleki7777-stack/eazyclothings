export type FulfillmentStage =
  | "ORDER_CREATED"
  | "SUPPLIER_PROCUREMENT"
  | "INBOUND_TO_EAZY"
  | "RECEIVED"
  | "EAZY_QC"
  | "GARMENT_PRODUCTION"
  | "GARMENT_QC"
  | "AWAITING_CONSOLIDATION"
  | "COMPOSITION_ASSEMBLY"
  | "MASTER_SEAL"
  | "PACKAGED"
  | "FINAL_SHIPMENT"
  | "DELIVERED";

export type QualityStatus = "PENDING" | "PASSED" | "FAILED" | "REPLACEMENT_REQUIRED";
export type BrandProtectionDecision = "RELEASE" | "HOLD" | "REFUND_CUSTOMER" | "REPLACE_COMPONENT";

export type FulfillmentComponent = {
  id: string;
  orderId: string;
  kind: "EAZY_GARMENT" | "SLEEK_EAZY";
  name: string;
  sku: string;
  supplier?: string;
  quantity: number;
  inboundStatus: "NOT_REQUIRED" | "ORDERED" | "IN_TRANSIT" | "RECEIVED";
  qualityStatus: QualityStatus;
  receivedAt?: string;
};

export type EazyFulfillmentOrder = {
  id: string;
  shopifyOrderId?: string;
  stage: FulfillmentStage;
  customer: {
    name: string;
    email: string;
    shippingAddress: Record<string, string>;
  };
  // This is server-owned. Never accept a customer-supplied receiving address.
  eazyReceivingAddress?: {
    name: string;
    address1: string;
    address2?: string;
    city: string;
    state?: string;
    country: string;
    postalCode?: string;
    phone?: string;
  };
  components: FulfillmentComponent[];
  notes: string[];
  designLocked?: boolean;
  masterSealReady?: boolean;
  compositionAssembled?: boolean;
  packageReady?: boolean;
  brandProtection?: {
    decision: BrandProtectionDecision;
    reason?: string;
    decidedAt?: string;
  };
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

export function isReceivingAddressConfigured() {
  return EAZY_RECEIVING_ADDRESS.address1 !== "CONFIGURE_EAZY_RECEIVING_ADDRESS";
}

export function shouldRefundForBrandProtection(order: EazyFulfillmentOrder) {
  return order.brandProtection?.decision === "REFUND_CUSTOMER";
}

export function evaluateBrandProtection(order: EazyFulfillmentOrder) {
  const failedSleekProduct = order.components.some(
    component => component.kind === "SLEEK_EAZY" &&
      (component.qualityStatus === "FAILED" || component.qualityStatus === "REPLACEMENT_REQUIRED")
  );

  if (failedSleekProduct) {
    return {
      decision: "REFUND_CUSTOMER" as const,
      reason: "A SLEEK EAZY component failed EAZY quality standards and must not be released under the EAZY name.",
    };
  }

  return {
    decision: "RELEASE" as const,
    reason: "All received SLEEK EAZY components meet the EAZY quality gate.",
  };
}

export function canReleaseComposition(order: EazyFulfillmentOrder) {
  const everyComponentReady = order.components.length > 0 && order.components.every(component =>
    component.qualityStatus === "PASSED" &&
    (component.kind === "EAZY_GARMENT" || component.inboundStatus === "RECEIVED")
  );

  return (
    everyComponentReady &&
    order.stage === "PACKAGED" &&
    order.designLocked === true &&
    order.masterSealReady === true &&
    order.compositionAssembled === true &&
    order.packageReady === true
  );
}

export const SLEEK_EAZY_FULFILLMENT_LAW = "ALL SLEEK EAZY PRODUCTS ARE RECEIVED BY EAZY FIRST, QC-CHECKED, THEN FULFILLED TO THE CUSTOMER.";

export function requiresEazyReceiving(component: FulfillmentComponent) {
  return component.kind === "SLEEK_EAZY";
}

export function buildSupplierInstruction(
  order: EazyFulfillmentOrder,
  component: FulfillmentComponent,
) {
  return {
    reference: `${order.id}-${component.id}`,
    supplier: component.supplier || "SLEEK EAZY SUPPLIER",
    sku: component.sku,
    product: component.name,
    quantity: component.quantity,
    shipTo: EAZY_RECEIVING_ADDRESS,
    instruction:
      "SHIP TO EAZY RECEIVING ONLY. DO NOT SHIP DIRECTLY TO THE CUSTOMER. EAZY must receive and QC-check the product before customer fulfillment. Include the order/component reference on the parcel.",
  };
}


export type SupplierReturnOutcome = "REFUND" | "REPLACEMENT" | "CREDIT" | "PENDING_SUPPLIER_DECISION";
export type SupplierReturnStatus = "NOT_REQUIRED" | "ELIGIBLE" | "REQUESTED" | "AUTHORIZED" | "IN_TRANSIT" | "REFUNDED" | "REPLACED" | "CREDITED" | "DISPUTED";

export type SupplierReturnTerms = {
  supplier: string;
  returnWindowDays?: number;
  returnShippingPaidBy: "EAZY" | "SUPPLIER" | "SHARED" | "UNKNOWN";
  fullProductRefund: boolean | "UNKNOWN";
  shippingRefunded: boolean | "UNKNOWN";
  restockingFeePercent?: number;
  qualityFailureCovered: boolean | "UNKNOWN";
};

export type SupplierReturn = {
  componentId: string;
  supplier: string;
  reason: string;
  requestedOutcome: SupplierReturnOutcome;
  status: SupplierReturnStatus;
  returnShippingPaidBy: "EAZY" | "SUPPLIER" | "SHARED" | "UNKNOWN";
  refundAmount?: number;
  returnAuthorization?: string;
  requestedAt?: string;
  resolvedAt?: string;
};

export const SLEEK_EAZY_QUALITY_LAW = "QUALITY FIRST. ALWAYS. A PRODUCT THAT FAILS EAZY QC MUST NOT REACH THE CUSTOMER.";
export const SLEEK_EAZY_RETURN_LAW = "FAILED PRODUCTS ARE HELD AT EAZY AND RETURNED, REPLACED, CREDITED OR REFUNDED ACCORDING TO VERIFIED SUPPLIER TERMS.";

export function evaluateSupplierReturn(component: FulfillmentComponent, terms: SupplierReturnTerms): SupplierReturn {
  const supplier = component.supplier || terms.supplier;
  const failed = component.qualityStatus === "FAILED" || component.qualityStatus === "REPLACEMENT_REQUIRED";
  if (!failed) return {
    componentId: component.id, supplier,
    reason: "No EAZY quality failure requiring supplier recovery.",
    requestedOutcome: "PENDING_SUPPLIER_DECISION",
    status: "NOT_REQUIRED",
    returnShippingPaidBy: terms.returnShippingPaidBy,
  };

  const requestedOutcome: SupplierReturnOutcome =
    terms.qualityFailureCovered === true && terms.fullProductRefund === true
      ? "REFUND"
      : terms.qualityFailureCovered === true
        ? "REPLACEMENT"
        : "PENDING_SUPPLIER_DECISION";

  return {
    componentId: component.id,
    supplier,
    reason: "EAZY QC failed the product. Hold it and recover the supplier cost before any customer fulfillment.",
    requestedOutcome,
    status: terms.qualityFailureCovered === true ? "ELIGIBLE" : "DISPUTED",
    returnShippingPaidBy: terms.returnShippingPaidBy,
    requestedAt: new Date().toISOString(),
  };
}
