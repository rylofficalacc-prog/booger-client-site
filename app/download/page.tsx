import type { Metadata } from "next";
import { DISCORD, launcherDownload } from "../data";

export const metadata: Metadata = { title: "Download", description: "Download the Booger Client launcher for Windows." };

export default function DownloadPage() {
  const d = launcherDownload;
  return (
    <section className="hauntDownload" aria-labelledby="download-title">
      <div className="hauntDownloadCopy">
        <p className="hauntSeason">Your next session starts here</p>
        <h1 id="download-title">LET’S PLAY<span>MINECRAFT.</span></h1>
        <p className="hauntDescription">Install the Booger Client launcher, sign in with Microsoft, and make yourself at home.</p>
        {d.ready ? <a className="hauntButton hauntPrimary" href={d.url}>Download for Windows <span aria-hidden="true">↓</span></a> : <p className="hauntDescription">The installer is coming soon. Join Discord for availability.</p>}
        <p className="hauntCompatibility">{d.ready && <>Launcher {d.version}{d.size && ` · ${d.size}`}<br /></>}Windows 10 / 11 (64-bit) · Minecraft: Java Edition required</p>
        <ol className="hauntSteps">
          <li><span>01</span>Download and open the installer.</li>
          <li><span>02</span>Sign in with your Microsoft account.</li>
          <li><span>03</span>Launch Booger Client and play.</li>
        </ol>
        <p className="hauntHelp">Need a hand? <a href={DISCORD}>Ask us on Discord ↗</a></p>
      </div>
      <figure className="hauntLauncher"><img src="/images/launcher-home.png" alt="Booger Client launcher home screen" fetchPriority="high" /><figcaption>The Booger Client launcher</figcaption></figure>
    </section>
  );
}
