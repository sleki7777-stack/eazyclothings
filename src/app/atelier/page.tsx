"use client";

import { useMemo, useState } from "react";

const sizes = ["XS","S","M","L","XL","XXL","3XL"];
const garmentTypes = ["Native / Senator","Tailoring","Shirting","Resort","Relaxed","Outerwear"];

export default function Atelier() {
  const [photo, setPhoto] = useState<string | null>(null);
  const [size, setSize] = useState("L");
  const [garment, setGarment] = useState("Native / Senator");
  const [measurements, setMeasurements] = useState(false);
  const [designerOpen, setDesignerOpen] = useState(false);\n  const [designerMessage, setDesignerMessage] = useState("");\n  const [designerReply, setDesignerReply] = useState("");
  const [approved, setApproved] = useState(false);
  const [measureValues, setMeasureValues] = useState<Record<string,string>>({});

  const reference = useMemo(() => ({
    work: "WORK 001",
    name: "Lagos Soil",
    edition: "EDITION 07 OF 24",
    fit: size,
    textile: "Lagos Earth / House Textile",
  }), [size]);

  function saveState(next: Record<string, unknown>) { if (typeof window !== "undefined") localStorage.setItem("eazy-atelier", JSON.stringify(next)); }

  function handlePhoto(file: File | undefined) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => { const value = String(reader.result); setPhoto(value); saveState({photo:value,size,garment,measurements,measureValues,approved}); };
    reader.readAsDataURL(file);
  }

  return (
    <main className="atelier-page">
      <header className="atelier-nav">
        <a href="/" className="atelier-brand">EAZY</a>
        <span>DIGITAL ATELIER</span>
        <a href="/composition">Composition ↗</a>
      </header>

      <section className="atelier-intro">
        <p className="eyebrow">YOUR EAZY DESIGNER</p>
        <h1>Imagine it.<br/><em>We bring it to life.</em></h1>
        <p>
          Start with a picture of yourself. You do not need to know your measurements.
          Choose the size you normally wear and let your designer guide the fit.
        </p>
      </section>

      <section className="atelier-flow">
        <div className="atelier-step">
          <span className="atelier-stepno">01</span>
          <div>
            <p className="eyebrow">YOUR IMAGE</p>
            <h2>Show us who<br/><em>we're designing for.</em></h2>
            <p className="stepcopy">
              A clear full-body photo gives your designer useful visual context for fit,
              proportion and the final design presentation.
            </p>
            <label className="upload-card">
              {photo ? (
                <img src={photo} alt="Your uploaded design reference" />
              ) : (
                <span>
                  <strong>UPLOAD YOUR IMAGE</strong>
                  <small>Full-body photo · clear lighting · front view preferred</small>
                </span>
              )}
              <input type="file" accept="image/*" onChange={(e) => handlePhoto(e.target.files?.[0])} />
            </label>
            {photo && <button className="text-action" onClick={() => setPhoto(null)}>Replace image</button>}
          </div>
        </div>

        <div className="atelier-step">
          <span className="atelier-stepno">02</span>
          <div>
            <p className="eyebrow">YOUR USUAL FIT</p>
            <h2>Keep it<br/><em>simple.</em></h2>
            <p className="stepcopy">
              Most people know the size they normally wear. That is enough to begin.
              Your designer can refine the fit from there.
            </p>
            <div className="size-row">
              {sizes.map((item) => (
                <button key={item} className={size === item ? "selected" : ""} onClick={() => { setSize(item); saveState({photo,size:item,garment,measurements,measureValues,approved}); }}>
                  {item}
                </button>
              ))}
            </div>
            <button className="optional-measurements" onClick={() => setMeasurements(!measurements)}>
              {measurements ? "Hide measurements" : "I know my measurements — add them"} <span>↗</span>
            </button>
            {measurements && (
              <div className="measurement-panel">
                <p className="eyebrow">OPTIONAL FIT PROFILE</p>
                <p>Measurements can refine the fit, but they are never required to start.</p>
                <div className="measurement-grid">
                  {["Chest","Waist","Shoulder","Sleeve","Neck","Trouser length"].map((label) => (
                    <label key={label}>{label}<input placeholder="cm" inputMode="decimal" value={measureValues[label] || ""} onChange={(e) => { const next={...measureValues,[label]:e.target.value}; setMeasureValues(next); saveState({photo,size,garment,measurements,measureValues:next,approved}); }} /></label>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="atelier-step">
          <span className="atelier-stepno">03</span>
          <div>
            <p className="eyebrow">TALK TO YOUR DESIGNER</p>
            <h2>Tell them<br/><em>what you imagine.</em></h2>
            <p className="stepcopy">
              Your designer stays with you through the journey. They can suggest, explain,
              refine and help you move through your wardrobe — but you make the decisions.
            </p>
            <button className="designer-button" onClick={() => setDesignerOpen(true)}>
              Talk to your designer <span>↗</span>
            </button>
          </div>
        </div>

        <div className="atelier-step">
          <span className="atelier-stepno">04</span>
          <div>
            <p className="eyebrow">CHOOSE YOUR WORLD</p>
            <h2>What are we<br/><em>making today?</em></h2>
            <div className="garment-grid">
              {garmentTypes.map((item) => (
                <button key={item} className={garment === item ? "selected" : ""} onClick={() => { setGarment(item); saveState({photo,size,garment:item,measurements,measureValues,approved}); }}>
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="atelier-preview">
        <div className="preview-image">
          {photo ? <img src={photo} alt="Customer reference" /> : <div className="preview-empty">YOUR IMAGE<br/><span>APPEARS HERE</span></div>}
        </div>
        <div className="preview-copy">
          <p className="eyebrow">YOUR DESIGN REFERENCE</p>
          <h2>{reference.name}<br/><em>— {garment}</em></h2>
          <div className="reference-list">
            <div><span>FIT</span><strong>{reference.fit}</strong></div>
            <div><span>TEXTILE</span><strong>{reference.textile}</strong></div>
            <div><span>WORK</span><strong>{reference.work}</strong></div>
            <div><span>EDITION</span><strong>{reference.edition}</strong></div>
          </div>
          <p className="preview-note">
            This is the design reference you will approve before EAZY produces the physical garment.
            The approved reference becomes part of its provenance.
          </p>
          <button className="primary atelier-approve" onClick={() => { setApproved(true); saveState({photo,size,garment,measurements,measureValues,approved:true}); }}>
            {approved ? "Design reference locked ✓" : "Approve this direction ↗"}
          </button>
        </div>
      </section>

      <section className="package-proof">
        <div>
          <p className="eyebrow">THE JOURNEY DOESN'T END AT DELIVERY</p>
          <h2>Your package<br/><em>knows your work.</em></h2>
          <p>
            Before you open the package, the printed design reference and secure QR verification
            let you confirm that the package belongs to your EAZY order.
          </p>
        </div>
        <div className="package-card">
          <div className="package-art">
            {photo ? <img src={photo} alt="Approved customer reference" /> : <div>APPROVED<br/>DESIGN</div>}
          </div>
          <div className="package-info">
            <span>EAZY MASTER SEAL · {reference.work}</span>
            <strong>{reference.name}</strong>
            <small>SCAN TO VERIFY BEFORE OPENING</small>
          </div>
          <div className="qr-placeholder" aria-label="QR verification preview">
            <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
            <b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b>
            <em></em>
          </div>
        </div>
      </section>

      <section className="atelier-law">
        <p className="eyebrow">THE EAZY PROMISE</p>
        <h2>You imagine it.<br/><em>You decide it.</em><br/>EAZY brings it to life.</h2>
        <a href="/composition" className="primary">Continue to Composition ↗</a>
      </section>

      {designerOpen && (
        <div className="designer-overlay">
          <div className="designer-panel">
            <button className="designer-close" onClick={() => setDesignerOpen(false)}>×</button>
            <p className="eyebrow">YOUR DESIGNER</p>
            <h2>What are you imagining?</h2>
            <p>
              Start naturally. Tell your designer the occasion, the mood, the garment,
              or simply what you would like to look like.
            </p>
            <div className="designer-prompts">
              <button>“I want a Senator for a wedding.”</button>
              <button>“Make this more relaxed.”</button>
              <button>“What would work with my wardrobe?”</button>
              <button>“I have an idea — let me explain.”</button>
            </div>
            <textarea className="designer-input" value={designerMessage} onChange={(e) => setDesignerMessage(e.target.value)} placeholder="Tell your designer what you are imagining..." />\n            <button className="primary designer-send" onClick={() => setDesignerReply(designerMessage ? "I’ve captured that direction. Let’s shape the silhouette, textile and occasion around your idea." : "Start with an occasion, garment, mood or reference.")}>Send to your designer ↗</button>\n            {designerReply && <p className="designer-reply">{designerReply}</p>}
            <small>Your designer advises. You decide.</small>
          </div>
        </div>
      )}
    </main>
  );
}
