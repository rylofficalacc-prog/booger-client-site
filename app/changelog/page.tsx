import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import news from "../../public/news.json";

export const metadata: Metadata = { title: "Changelog", description: "Every Booger Client update." };

type Entry = { version?: string; title: string; tag: string; color: string; date: string; text: string; changes?: string[] };
const COLORS: Record<string, string> = { green: "#7dff67", pink: "#ff7ad9", blue: "#26bdf2", gold: "#ffd84a", red: "#ff5c6c" };

export default function ChangelogPage() {
  const items = news.items as Entry[];
  return (
    <>
      <PageHeader eyebrow="Changelog" title="Updates" sub="The same updates show on the Booger Client launcher's home screen." />
      <section className="section tight">
        <div className="timeline">
          {items.map((n) => (
            <article className="entry" key={(n.version ?? "") + n.title} style={{ ["--c" as string]: COLORS[n.color] ?? COLORS.green }}>
              <div className="entryMeta">
                {n.version && <strong>{n.version}</strong>}
                <time dateTime={n.date}>{new Date(n.date + "T12:00:00Z").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</time>
              </div>
              <div className="entryBody">
                <span className="entryTag">{n.tag}</span>
                <h3>{n.title}</h3>
                <p>{n.text}</p>
                {n.changes && <ul>{n.changes.map((c) => <li key={c}>{c}</li>)}</ul>}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
