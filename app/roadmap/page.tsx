import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import { roadmap } from "../data";

export const metadata: Metadata = { title: "Roadmap", description: "What's done and what's coming for Booger Client." };

export default function RoadmapPage() {
  return (
    <>
      <PageHeader eyebrow="Roadmap" title="What's Next" sub="Planned items aren't promises or dates - they're what we're working toward. Follow progress in the Discord." />
      <section className="section tight">
        <p className="releaseNotice">Have an idea? <a href="/support#feedback">Suggest a feature and vote →</a></p>
        <div className="roadmap">
          {roadmap.map((col) => (
            <div className="roadCol" key={col.status} style={{ ["--c" as string]: col.color }}>
              <h2><i />{col.status}<em>{col.items.length}</em></h2>
              {col.items.map((it) => (
                <article className="roadCard" key={it.title}>
                  <h3>{it.title}</h3>
                  <p>{it.desc}</p>
                </article>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
