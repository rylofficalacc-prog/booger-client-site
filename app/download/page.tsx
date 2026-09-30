import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import { DISCORD, launcherDownload } from "../data";

export const metadata: Metadata = { title: "Download", description: "Download the Booger Client launcher." };

export default function DownloadPage() {
  const d = launcherDownload;
  return (
    <>
      <PageHeader eyebrow="Download" title="Booger Client Launcher"
        sub={d.ready ? `Version ${d.version} for Windows 10 and 11.` : <>Releasing <b className="testing">{d.releaseDate}</b>. The download appears here and in the Discord.</>} />
      <section className="section tight launcherSection">
        <p className="releaseNotice">Early access begins Friday, October 2. <Link href="/support#bug-report">Report a bug</Link> · <Link href="/get-started">Setup instructions</Link></p>
        <div className="downloadBox">
          {d.ready ? (
            <>
              <a className="bigButton downloadBtn" href={d.url}>Download for Windows</a>
              <span className="downloadMeta">Version {d.version}{d.size && ` · ${d.size}`} · Windows 10/11 (64-bit) · Needs Minecraft: Java Edition</span>
              <span className="downloadMeta">Download only from this official page. If Windows blocks the installer, check the file source and contact support. <Link href="/get-started">Full install steps</Link></span>
            </>
          ) : (
            <>
              <span className="bigButton downloadBtn disabled" aria-disabled="true">Coming Soon</span>
              <span className="downloadMeta">Join the <a href={DISCORD}>Discord</a> to get pinged on release day.</span>
            </>
          )}
        </div>
        <div className="launcherBox">
          <div className="launcherText">
            <h2>One Click To Play</h2>
            <ul>
              <li>One installer: Java, Minecraft 1.21.11 and Booger Client are set up for you</li>
              <li>Updates itself and Booger Client automatically</li>
              <li>Official Microsoft sign-in - your password never touches the launcher</li>
              <li>Turn mods on or off before you launch</li>
              <li>3D skin viewer that shows your cosmetics</li>
              <li>Multiple accounts, skins, server list and screenshots</li>
            </ul>
            <p className="smallNote">See our <Link href="/privacy">privacy page</Link> for exactly what the launcher stores.</p>
          </div>
          <div className="launcherShots">
            <img className="shotMain" src="/images/launcher-home.png" alt="Booger Client launcher home screen" />
            <img className="shotSide" src="/images/launcher-mods.png" alt="Booger Client launcher mods page" />
          </div>
        </div>
      </section>
    </>
  );
}
