"use client";

import { useEffect, useState } from "react";

type ThreadState = {
  approved?: boolean;
  garment?: string;
  textile?: string;
};

const stages = [
  { key: "work", label: "WORK", href: "/collections" },
  { key: "atelier", label: "ATELIER", href: "/atelier" },
  { key: "composition", label: "COMPOSITION", href: "/composition" },
  { key: "seal", label: "MASTER SEAL", href: "#master-seal" },
];

export default function EazyThread({ current = "atelier" }: { current?: string }) {
  const [state, setState] = useState<ThreadState>({});
  useEffect(() => {
    try { setState(JSON.parse(localStorage.getItem("eazy-atelier") || "{}")); } catch {}
  }, []);

  return (
    <div className="eazy-thread" aria-label="EAZY Thread">
      <div className="eazy-thread-line" />
      <div className="eazy-thread-head">
        <span>THE EAZY THREAD</span>
        <small>{state.approved ? "REFERENCE LOCKED" : "DESIGN IN MOTION"}</small>
      </div>
      <div className="eazy-thread-stages">
        {stages.map((stage, index) => {
          const active = stage.key === current;
          const complete = stage.key === "work" || (stage.key === "atelier" && !!state.garment) || (stage.key === "composition" && !!state.approved);
          return (
            <a className={active ? "thread-stage active" : complete ? "thread-stage complete" : "thread-stage"} href={stage.href} key={stage.key}>
              <span className="thread-node"><i /></span>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <strong>{stage.label}</strong>
            </a>
          );
        })}
      </div>
      <p className="eazy-thread-note">
        {state.approved ? state.garment + " · " + (state.textile || "House textile") + " · approved direction" : "Work becomes design. Design becomes composition. Composition becomes provenance."}
      </p>
    </div>
  );
}
