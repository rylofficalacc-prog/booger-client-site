import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import { emotes } from "../data";

export const metadata: Metadata = { title: "Emotes" };

export default function EmotesPage() {
  return (
    <>
      <PageHeader eyebrow="Emotes" title={`${emotes.length} Emotes`}
        sub={<>Press <kbd>B</kbd> for the emote wheel. Emotes blend in smoothly, and some move your whole body - jumps, spins and a full backflip.</>} />
      <section className="section tight">
        <p className="releaseNotice">Try simple Wave, T-Pose and Spin studies in the <a href="/cosmetics#studio">interactive player studio →</a></p>
        <div className="emoteGrid">
          {emotes.map((e) => <span className="emote" key={e}>{e}</span>)}
        </div>
        <div className="howTo">
          <article><b>1</b><h3>Press B</h3><p>The emote wheel opens with 8 emotes per page.</p></article>
          <article><b>2</b><h3>Pick one</h3><p>Click it, or press 1-8. Scroll or use the arrow keys for more pages.</p></article>
          <article><b>3</b><h3>Move to stop</h3><p>Loops play until you move. One-shots like Backflip finish on their own.</p></article>
        </div>
      </section>
    </>
  );
}
