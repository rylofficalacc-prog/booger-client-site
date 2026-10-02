import Link from "next/link";
import { DISCORD, modules, emotes, COSMETIC_COUNT, launcherDownload } from "./data";
import news from "../public/news.json";

export default function Home() {
  return <div className="homeV9 minecraftHome">
    <section className="launchHero">
      <div className="launchCopy">
        <span className="launchLabel"><i /> V27 · Early access · October 2, 2026</span>
        <h1>YOUR GAME.<br /><span>UPGRADED.</span></h1>
        <p>Booger Client for Minecraft Java. A customizable HUD, cosmetics, emotes, and a dedicated launcher. Build your setup. Make it yours.</p>
        <div className="launchButtons">
          <Link className="bigButton" href="/download">{launcherDownload.ready ? "Download for Windows" : "View Windows download"} <span aria-hidden="true">↗</span></Link>
          <Link className="textButton" href="/cosmetics#studio">Build your look <span aria-hidden="true">→</span></Link>
        </div>
        <div className="launchCompatibility"><img src="/icons/boxes.svg" alt="" /> Minecraft Java · 1.21.11 Fabric · Windows launcher</div>
      </div>
      <div className="clientHeroPreview">
        <div className="previewTitle"><span><i /> BOOGER CLIENT</span><span>IN-GAME PREVIEW</span></div>
        <img className="heroClientShot" src="/images/shots/menu-hud.jpg" alt="In-game Booger Client HUD menu with configurable modules" fetchPriority="high" />
        <div className="previewBar"><span>MINECRAFT 1.21.11 · FABRIC</span><Link href="/modules">Explore modules →</Link></div>
        <div className="previewItem"><img src="/images/render-purple-cut.png" alt="Minecraft player wearing purple cosmetics" /><div><strong>YOUR SKIN. YOUR STYLE.</strong><Link href="/cosmetics#studio">Try the cosmetic studio →</Link></div></div>
      </div>
    </section>
    <section className="launchStats" aria-label="Client highlights">
      <div><strong>{modules.length}</strong><span>built-in modules</span></div>
      <div><strong>{COSMETIC_COUNT}</strong><span>cosmetics in the client</span></div>
      <div><strong>{emotes.length}</strong><span>emotes to express yourself</span></div>
      <div><strong>100%</strong><span>free cosmetics</span></div>
    </section>
    <section className="homeSection">
      <div className="homeHeading"><div><p>PLAY YOUR WAY</p><h2>Built for your next session.</h2></div><Link href="/modules">Explore all modules ↗</Link></div>
      <div className="homeBento">
        <Link href="/modules" className="bentoCard bentoHud"><div><span className="microLabel">01 / YOUR SETUP</span><h3>Less clutter.<br />More control.</h3><p>Move your HUD, customize keybinds, and build a setup for the way you play.</p></div><img src="/images/shots/menu-hud.jpg" alt="Booger Client HUD module menu" loading="lazy" /><span className="bentoArrow" aria-hidden="true">↗</span></Link>
        <Link href="/cosmetics#studio" className="bentoCard bentoStyle"><div><span className="microLabel">02 / YOUR STYLE</span><h3>Find your signature look.</h3><p>Upload your skin and mix accessories in our interactive website studio.</p></div><img src="/images/render-purple-cut.png" alt="Purple Minecraft cosmetic look" loading="lazy" /><span className="bentoArrow" aria-hidden="true">↗</span></Link>
        <Link href="/performance" className="bentoCard bentoPerformance"><img src="/icons/gauge.svg" alt="" /><span className="microLabel">03 / YOUR PACE</span><h3>Find your balance.</h3><p>Compare Low-End, Balanced, and Visual Quality settings before your next session.</p><span className="bentoArrow" aria-hidden="true">↗</span></Link>
      </div>
    </section>
    <section className="homeSection launcherSpotlight"><div><p className="microLabel">ONE PLACE TO START</p><h2>FROM DESKTOP<br /><span>TO YOUR WORLD.</span></h2><p>Sign in through Microsoft, manage your setup, and get into the game. Download the Windows launcher and follow the setup guide to get started.</p><Link className="textButton" href="/get-started">See the setup guide →</Link></div><Link href="/download"><img src="/images/launcher-home.png" alt="Booger Client launcher home screen" loading="lazy" /></Link></section>
    <section className="homeSection">
      <div className="homeHeading"><div><p>FRESH FROM DEVELOPMENT</p><h2>What&apos;s new?</h2></div><Link href="/changelog">Full changelog ↗</Link></div>
      <div className="latestGrid">{news.items.slice(0,3).map(n=><Link href="/changelog" className="latestCard" key={n.version}><div><span>{n.tag}</span><time dateTime={n.date}>{new Date(n.date+"T12:00:00Z").toLocaleDateString("en-US",{month:"short",day:"numeric",timeZone:"UTC"})}</time></div><strong>{n.version}</strong><h3>{n.title}</h3><p>{n.text}</p><span className="latestArrow">Read update →</span></Link>)}</div>
    </section>
    <section className="homeSection"><div className="donationBanner"><div className="donationBlock" aria-hidden="true">◆</div><div><p className="microLabel">SUPPORT DEVELOPMENT</p><h2>Help build the next update.</h2><p>Enjoy what we&apos;re building? An optional donation is one way to support Booger Client.</p></div><Link className="bigButton" href="/donate">Support Booger Client →</Link></div></section>
    <section className="homeSection"><div className="communityBand"><div><p className="microLabel">BUILDING THIS TOGETHER</p><h2>Be here for the first drop.</h2><p>Early access is available now. Download the Windows launcher, join the community, and help shape what comes next.</p></div><div className="communityActions"><a className="bigButton" href={DISCORD}>Join the Discord ↗</a><Link href="/roadmap">See what&apos;s next →</Link><Link href="/partners">Apply for a partnership →</Link><Link href="/support">Report a bug or suggest a feature →</Link></div></div></section>
  </div>;
}

