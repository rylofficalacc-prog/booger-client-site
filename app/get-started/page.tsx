import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { keybinds, launcherDownload } from "../data";

export const metadata: Metadata = { title: "Get Started", description: "Install Booger Client on Minecraft 1.21.11 Fabric and learn the keybinds." };

const steps = [
  { title: "Download", body: <>Get <b>BoogerInstaller.exe</b> from the <Link href="/download">Download page</Link>.</> },
  { title: "Install", body: <>Run the official installer and follow its prompts. If Windows blocks it, keep your security protections enabled and <Link href="/support">contact support</Link> with the warning.</> },
  { title: "Sign in", body: <>Open Booger Client from your Desktop, click <b>Sign in</b> and enter the code on Microsoft&apos;s page. Booger never sees your password.</> },
  { title: "Play", body: <>Press <b>Play</b>. The first launch downloads Minecraft and Java, so give it a few minutes. Later launches reuse the downloaded files.</> },
  { title: "Open the menu", body: <>In game, press <kbd>Right Shift</kbd> for modules, cosmetics and settings.</> },
];

export default function GetStartedPage() {
  return (
    <>
      <PageHeader eyebrow="Get Started" title="Get Playing In 5 Steps" sub="No Fabric installer, no mods folder, no Java setup. The launcher handles all of it." />
      <section className="section tight">
        {!launcherDownload.ready && <p className="releaseNotice"><b>Early access begins Friday, October 2.</b> These steps are for release day. The installer is not available yet; check the <Link href="/download">Download page</Link> for its status.</p>}
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title}>
              <b>{i + 1}</b>
              <div><h3>{s.title}</h3><p>{s.body}</p></div>
            </li>
          ))}
        </ol>
      </section>
      <section className="section"><div className="toolActions"><Link href="/performance">Compare performance settings →</Link><Link href="/support#bug-report">Trouble launching? Report a bug →</Link></div>
        <div className="sectionHead">
          <p>Cheat Sheet</p>
          <h2>Default Keybinds</h2>
          <span>Change any of them in the menu: open a module&apos;s ⚙ settings, then click its keybind.</span>
        </div>
        <div className="keyTable">
          {keybinds.map((k) => (
            <div className="keyRow" key={k.key}><kbd>{k.key}</kbd><span>{k.action}</span></div>
          ))}
        </div>
      </section>
    </>
  );
}
