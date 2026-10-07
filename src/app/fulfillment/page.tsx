"use client";

import { useState } from "react";

const stages = [
  ["01", "ORDER CREATED", "Shopify holds the master customer order and final customer shipping address."],
  ["02", "SUPPLIER PROCUREMENT", "Each SLEEK EAZY component receives an EAZY-only inbound destination."],
  ["03", "INBOUND TO EAZY", "Suppliers ship selected objects to EAZY receiving, never directly to the customer."],
  ["04", "RECEIVING + QC", "EAZY identifies, inspects and accepts or rejects every inbound component."],
  ["05", "GARMENT + QC", "The commissioned EAZY garment completes production and passes garment QC."],
  ["06", "CONSOLIDATION", "Only when every component is present and approved can the Composition be assembled."],
  ["07", "MASTER SEAL", "The approved design, Work and provenance are locked to the final order."],
  ["08", "ONE FINAL SHIPMENT", "EAZY packs everything together and ships the complete Composition to the customer."],
];

const recoveryRules = [
  ["FAIL", "QUALITY FAILURE", "Product is held at EAZY and cannot reach the customer."],
  ["RECOVER", "SUPPLIER RECOVERY", "Return, replacement, credit or refund follows verified supplier terms."],
  ["PROTECT", "BRAND PROTECTION", "EAZY can hold or refund rather than release a product below House standard."],
];

export default function Fulfillment() {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState("07");

  return (
    <main className="fulfillment-page">
      <header className="fulfillment-nav">
        <a href="/">EAZY</a>
        <span>FULFILLMENT CONTROL</span>
        <a href="/composition">Composition ↗</a>
      </header>

      <section className="fulfillment-hero">
        <p className="eyebrow">EAZY FULFILLMENT ORCHESTRATION</p>
        <h1>One composition.<br /><em>One final delivery.</em></h1>
        <p>Shopify remains the commerce source of truth. EAZY controls the physical consolidation layer between suppliers and the customer.</p>
      </section>

      <section className="fulfillment-rule">
        <div><span>INBOUND</span><strong>SUPPLIER → EAZY</strong></div>
        <div><span>CONTROL</span><strong>RECEIVE → QC → CONSOLIDATE</strong></div>
        <div><span>OUTBOUND</span><strong>EAZY → CUSTOMER</strong></div>
      </section>

      <section className="fulfillment-flow">
        {stages.map(([no, title, copy]) => (
          <article key={no} onClick={() => setSelected(no)} data-active={selected === no}>
            <span>{no}</span>
            <div><strong>{title}</strong><p>{copy}</p></div>
          </article>
        ))}
      </section>

      <section className="fulfillment-recovery">
        <p className="eyebrow">SLEEK EAZY QUALITY RECOVERY</p>
        <h2>Quality failure is a <em>stop signal.</em></h2>
        <p>Every SLEEK EAZY product is received and QC-checked by EAZY. If it fails, the system holds it and activates supplier recovery instead of allowing a weak product into the customer order.</p>
        <div className="fulfillment-recovery-grid">
          {recoveryRules.map(([label, title, copy]) => (
            <article key={label}>
              <span>{label}</span>
              <strong>{title}</strong>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <div className="fulfillment-recovery-law">
          <strong>QUALITY FIRST. ALWAYS.</strong>
          <span>FAILED PRODUCTS ARE HELD AT EAZY.</span>
        </div>
      </section>

      <section className="fulfillment-address">
        <p className="eyebrow">EAZY RECEIVING DESTINATION</p>
        <h2>The supplier gets<br /><em>EAZY&apos;s address.</em></h2>
        <p>The customer&apos;s final shipping address is never used as the supplier&apos;s inbound destination for a consolidated Composition.</p>
        <button onClick={() => setShow(!show)}>{show ? "Hide configuration" : "View receiving configuration"}</button>
        {show && (
          <pre>{JSON.stringify({
            name: "EAZY Fulfillment / Receiving",
            address: "CONFIGURE_EAZY_RECEIVING_ADDRESS",
            note: "Set the real receiving address in deployment environment variables before production.",
          }, null, 2)}</pre>
        )}
      </section>

      <section className="fulfillment-law">
        <p className="eyebrow">HOUSE LOGISTICS LAW</p>
        <h2>Nothing leaves for the customer until the complete EAZY Composition is ready.</h2>
        <p>A late supplier can delay final dispatch, but it cannot cause fragmented customer deliveries unless EAZY explicitly overrides the rule.</p>
      </section>
    </main>
  );
}
