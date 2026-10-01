import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import CosmeticStudio from "../components/CosmeticStudio";
import CosmeticsExplorer from "../components/CosmeticsExplorer";
import { looks } from "../data";

export const metadata: Metadata = { title: "Cosmetics" };

export default function CosmeticsPage() {
  return (
    <>
      <PageHeader eyebrow="Cosmetics" title="Real 3D Cosmetics" sub="80 cosmetics: 30 capes, 17 trails, 23 accessories, wings, pets and more. All free. Screenshots below are taken in game." />
      <div className="pageQuickLinks"><a href="#studio">Try your skin →</a><a href="#catalog">Browse the showcase →</a></div>
      <CosmeticStudio />
      <section className="section tight"><CosmeticsExplorer /></section>
      <section className="section">
        <div className="sectionHead">
          <p>Showcase</p>
          <h2>Featured Looks</h2>
        </div>
        <div className="lookGrid">
          {looks.map((look) => (
            <article className="look" key={look.name}>
              <img src={look.image} alt={`${look.name} cosmetic render`} />
              <div>
                <h3>{look.name}</h3>
                <p>{look.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
