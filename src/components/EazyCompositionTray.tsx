"use client";

import { useEffect, useState } from "react";

type TrayState = { garment?: string; size?: string; approved?: boolean; photo?: string | null; textile?: string; collar?: string; sleeve?: string; fit?: string; finish?: string };

export default function EazyCompositionTray() {
  const [open, setOpen] = useState(false);
  const [atelier, setAtelier] = useState<TrayState>({});
  const [objects, setObjects] = useState<unknown[]>([]);

  useEffect(() => {
    const read = () => {
      try {
        setAtelier(JSON.parse(localStorage.getItem("eazy-atelier") || "{}"));
        setObjects(JSON.parse(localStorage.getItem("eazy-sleek-bag") || "[]"));
      } catch {}
    };
    read(); window.addEventListener("storage", read);
    return () => window.removeEventListener("storage", read);
  }, []);

  const count = (atelier.garment ? 1 : 0) + objects.length;
  return (
    <div className={open ? "composition-tray open" : "composition-tray"}>
      <button className="composition-tray-bar" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span><i></i> YOUR COMPOSITION</span><strong>{count ? String(count).padStart(2, "0") + " PIECES" : "BEGIN"}</strong><b>{open ? "−" : "+"}</b>
      </button>
      {open && <div className="composition-tray-panel">
        <div><p className="eyebrow">THE EAZY COMPOSITION</p><h2>Build the look.<br /><em>Then make it real.</em></h2><p>Garments live in EAZY. Objects live in SLEEK EAZY. Your composition brings them together before production.</p></div>
        <div className="composition-tray-items">
          <div><span>01</span><div><small>GARMENT</small><strong>{atelier.garment || "No garment selected"}</strong><em>{atelier.approved ? "LOCKED · " + (atelier.textile || "TEXTILE") : atelier.size ? "SIZE " + atelier.size + " · AWAITING APPROVAL" : "Enter Atelier to begin"}</em></div></div>
          <div><span>02</span><div><small>SLEEK EAZY OBJECTS</small><strong>{objects.length ? objects.length + " selected object" + (objects.length > 1 ? "s" : "") : "No objects selected"}</strong><em>Complete the world around the garment</em></div></div>
        </div>
        <div className="composition-tray-spec"><span>{atelier.textile || "TEXTILE"} · {atelier.collar || "COLLAR"} · {atelier.sleeve || "SLEEVE"}</span><span>{atelier.fit || "FIT"} · {atelier.finish || "FINISH"}</span></div><div className="composition-tray-actions"><a href="/atelier">ENTER ATELIER ↗</a><a href="/sleek-eazy">EXPLORE SLEEK EAZY ↗</a><a className="primary" href="/composition">OPEN COMPOSITION <span>↗</span></a></div>
      </div>}
    </div>
  );
}