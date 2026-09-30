import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import CosmeticStudio from "../components/CosmeticStudio";
import { cosmetics, looks } from "../data";

export const metadata: Metadata = { title: "Cosmetics" };

export default function CosmeticsPage() {
  return (
    <>
      <PageHeader eyebrow="Cosmetics" title="Real 3D Cosmetics" sub="Animated 3D models on your player, not particles. All screenshots are taken in game." />
      <CosmeticStudio />
      <section className="section tight">
        <div className="cosPhotoGrid">
          {cosmetics.map((c) => (
            <article className="cosPhoto" key={c.name} style={{ ["--c" as string]: c.color }}>
              {c.image
                ? <img src={c.image} alt={`${c.name} cosmetic in game`} loading="lazy" />
                : <div className="cosPhotoIcon"><img className="ico" src={`/icons/${c.icon}.svg`} alt="" /></div>}
              <div className="cosPhotoText">
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
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
