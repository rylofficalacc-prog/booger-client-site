import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import ModulesExplorer from "../components/ModulesExplorer";
import MenuGallery from "../components/MenuGallery";
import { clientFeatures, modules } from "../data";

export const metadata: Metadata = { title: "Modules" };

export default function ModulesPage() {
  return (
    <>
      <PageHeader eyebrow="Modules" title={`${modules.length} Built-In Modules`} sub="HUD tools, visuals and quality of life. No cheats." />
      <section className="section tight">
        <ModulesExplorer />
      </section>
      <section className="section">
        <div className="sectionHead">
          <p>The Client</p>
          <h2>Everything In One Menu</h2>
          <span>Press Right Shift in game. Escape or Right Shift closes it again.</span>
        </div>
        <div className="clientGrid">
          {clientFeatures.map((f) => (
            <article className="clientCard" key={f.title}>
              <div className="featureIcon"><img className="ico" src={`/icons/${f.icon}.svg`} alt="" /></div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>
        <MenuGallery />
      </section>
    </>
  );
}
