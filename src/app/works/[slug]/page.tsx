import { notFound } from "next/navigation";
import { allEazyWorks, eazyCollections } from "@/lib/eazy-collections";

export function generateStaticParams() {
  return allEazyWorks.map((work) => ({ slug: work.code.toLowerCase().replace(/\s+/g, "-") }));
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = allEazyWorks.find((item) => item.code.toLowerCase().replace(/\s+/g, "-") === slug);
  if (!work) notFound();

  const collection = eazyCollections.find((item) => item.slug === work.slug);
  const related = collection?.works.filter((item) => item.code !== work.code).slice(0, 3) ?? [];

  return (
    <main className="work-detail-page">
      <header className="work-detail-nav">
        <a href="/collections">← COLLECTIONS</a><span>{work.code}</span><a href="/atelier">ENTER ATELIER ↗</a>
      </header>
      <section className="work-detail-hero">
        <div className="work-detail-image"><img src={work.image} alt={work.name} /><span>{work.code}</span></div>
        <div className="work-detail-copy">
          <p className="eyebrow">{collection?.eyebrow}</p><h1>{work.name}</h1>
          <p className="work-detail-lede">{work.direction}</p>
          <p>A study in EAZY proportion, material and Lagos perspective. This work belongs to the {collection?.title.toLowerCase()} world and is intended to be explored, configured and refined with your designer.</p>
          <div className="work-detail-actions"><a className="primary" href="/atelier">ENTER ATELIER <span>↗</span></a><a className="secondary" href="/composition">COMPLETE THE COMPOSITION</a></div>
        </div>
      </section>
      <section className="work-detail-spec">
        <div><p className="eyebrow">THE WORK</p><h2>{work.form}</h2></div>
        <div className="work-detail-facts">
          <p><span>WORK</span>{work.code}</p><p><span>DIRECTION</span>{work.direction}</p><p><span>WORLD</span>{collection?.title}</p><p><span>STATUS</span>DESIGN STUDY · ATELIER READY</p>
        </div>
      </section>
      <section className="work-detail-story">
        <p className="eyebrow">WHY THIS WORK EXISTS</p><h2>Designed in Lagos.<br /><em>Open to everywhere.</em></h2>
        <p>EAZY begins with the reality of Lagos — its movement, heat, ceremony, concrete, water, ambition and contradictions — then translates that energy into contemporary menswear. The work is not a costume or a reproduction. It is a House interpretation.</p>
      </section>
      {related.length > 0 && <section className="work-detail-related">
        <div className="sectionhead"><div><p className="eyebrow">FROM THE SAME WORLD</p><h2>Continue the <em>study.</em></h2></div><a href="/collections">VIEW COLLECTION ↗</a></div>
        <div className="work-related-grid">{related.map((item) => <a key={item.code} href={"/works/" + item.code.toLowerCase().replace(/\s+/g, "-")}><img src={item.image} alt={item.name} /><p>{item.code}</p><h3>{item.name}</h3></a>)}</div>
      </section>}
    </main>
  );
}
