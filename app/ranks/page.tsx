import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import { team } from "../data";

export const metadata: Metadata = { title: "Ranks" };

export default function RanksPage() {
  return (
    <>
      <PageHeader eyebrow="Ranks" title="The Team" sub="The people behind Booger Client." />
      <section className="section tight">
        <div className="teamGrid">
          {team.map((t) => (
            <article className="teamCard" key={t.name} style={{ ["--c" as string]: t.color }}>
              <div className="teamAvatar">{t.name[0].toUpperCase()}</div>
              <span className="teamRole">{t.role}</span>
              <h3>{t.name}</h3>
              <p>{t.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
