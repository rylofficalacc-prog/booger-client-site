import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = { title: "FAQ" };

const faqs = [
  ["When does Booger Client release?", "Friday, October 2, on the Download page and in the Discord."],
  ["What version?", "Minecraft Java Edition 1.21.11. The launcher sets it all up for you."],
  ["Is it a cheat client?", "No. HUD tools, visuals, cosmetics, emotes and performance. Reach Display only shows distance - it never changes it."],
  ["Windows says \"Windows protected your PC\"", "That's because the installer isn't code-signed yet (it costs money and takes time). Click More info, then Run anyway. We're getting it signed after launch."],
  ["Can other players see my cosmetics?", "Other Booger players see the Booger logo and your badge next to your name. Seeing each other's cosmetics and emotes is coming next."],
  ["Is my account safe?", "Sign-in goes through Microsoft's own page. Booger never sees your password, and your sign-in token only ever goes to Microsoft and Mojang."],
  ["Something broke. What do I do?", "In the launcher: Settings, Copy latest log, then send it in the Discord. The Repair button fixes most download problems."],
];

export default function FaqPage() {
  return (
    <>
      <PageHeader eyebrow="FAQ" title="Simple Answers" />
      <section className="section tight faq">
        <div className="faqGrid">
          {faqs.map(([q, a]) => <article key={q}><h3>{q}</h3><p>{a}</p></article>)}
        </div>
      </section>
    </>
  );
}
