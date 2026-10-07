"use client";
import { useState } from "react";

const stages = [
["01","ORDER CREATED","Shopify holds the master customer order and final customer shipping address."],
["02","SUPPLIER PROCUREMENT","Each SLEEK EAZY component receives an EAZY-only inbound destination."],
["03","INBOUND TO EAZY","Suppliers ship selected objects to EAZY receiving, never directly to the customer."],
["04","RECEIVING + QC","EAZY identifies, inspects and accepts or rejects every inbound component."],
["05","GARMENT + QC","The commissioned EAZY garment completes production and passes garment QC."],
["06","CONSOLIDATION","Only when every component is present and approved can the Composition be assembled."],
["07","MASTER SEAL","The approved design, Work and provenance are locked to the final order."],
["08","ONE FINAL SHIPMENT","EAZY packs everything together and ships the complete Composition to the customer."]
];

export default function Fulfillment() {
 const [show,setShow]=useState(false);
 return <main className="fulfillment-page">
  <header className="fulfillment-nav"><a href="/">EAZY</a><span>FULFILLMENT CONTROL</span><a href="/composition">Composition ↗</a></header>
  <section className="fulfillment-hero"><p className="eyebrow">EAZY FULFILLMENT ORCHESTRATION</p><h1>One composition.<br/><em>One final delivery.</em></h1><p>Shopify remains the commerce source of truth. EAZY controls the physical consolidation layer between suppliers and the customer.</p></section>
  <section className="fulfillment-rule"><div><span>INBOUND</span><strong>SUPPLIER → EAZY</strong></div><div><span>CONTROL</span><strong>RECEIVE → QC → CONSOLIDATE</strong></div><div><span>OUTBOUND</span><strong>EAZY → CUSTOMER</strong></div></section>
  <section className="fulfillment-flow">{stages.map(([no,title,copy])=><article key={no}><span>{no}</span><div><strong>{title}</strong><p>{copy}</p></div></article>)}</section>
  <section className="fulfillment-address"><p className="eyebrow">EAZY RECEIVING DESTINATION</p><h2>The supplier gets<br/><em>EAZY's address.</em></h2><p>The customer's final shipping address is never used as the supplier's inbound destination for a consolidated Composition.</p><button onClick={()=>setShow(!show)}>{show?"Hide configuration":"View receiving configuration"}</button>{show&&<pre>{JSON.stringify({name:"EAZY Fulfillment / Receiving",address:"CONFIGURE_EAZY_RECEIVING_ADDRESS",note:"Set the real receiving address in deployment environment variables before production."},null,2)}</pre>}</section>
  <section className="fulfillment-law"><p className="eyebrow">HOUSE LOGISTICS LAW</p><h2>Nothing leaves for the customer until the complete EAZY Composition is ready.</h2><p>A late supplier can delay final dispatch, but it cannot cause fragmented customer deliveries unless EAZY explicitly overrides the rule.</p></section>
 </main>;
}
