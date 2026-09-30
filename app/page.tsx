import Link from "next/link";
import ModulePreviewCard from "./components/ModulePreviewCard";
import { DISCORD, cosmetics, emotes, modules } from "./data";

const pages = [
  { href: "/modules", title: "Modules", icon: "◇", desc: `${modules.length} built-in modules: HUD, zoom, freelook, crosshair and more.`, image: "/images/shots/menu-hud.jpg" },
  { href: "/cosmetics", title: "Cosmetics", icon: "❦", desc: `${cosmetics.length} real 3D cosmetics: wings, capes, pets, hats and more.`, image: "/images/shots/wings.jpg" },
  { href: "/emotes", title: "Emotes", icon: "✦", desc: `${emotes.length} animated emotes, from Twerk to a full Backflip.`, image: "" },
  { href: "/download", title: "Launcher", icon: "▶", desc: "One click installs everything and launches the game.", image: "/images/launcher-home.png" },
];

export default function Home() {
  return (
    <>
      <section className="hero" id="top">
        <div className="heroBg" />
        <div className="shade" />
        <div className="orb orbOne" />
        <div className="orb orbTwo" />

        <img className="heroRender heroLeft" src="/images/render-goose-cut.png" alt="Golden goose Minecraft render" />
        <img className="heroRender heroRightTop" src="/images/render-king-cut.png" alt="Booger Client crown render" />
        <img className="heroRender heroRightBottom" src="/images/render-purple-cut.png" alt="Purple cosmetic Minecraft render" />
        <img className="heroRender heroTiny" src="/images/render-bloom-cut.png" alt="Dark Minecraft render" />

        <div className="heroCenter">
          <img className="heroLogo" src="/images/booger-logo.png" alt="Booger Client slime logo" />
          <h1><span>Booger</span> Client</h1>
          <p>A cleaner Minecraft Fabric client with {modules.length} modules, {cosmetics.length} cosmetics, {emotes.length} emotes and its own launcher.</p>
          <div className="heroTags">
            <span>{modules.length} Modules</span>
            <i />
            <span>3D Cosmetics</span>
            <i />
            <span>1.21.11 Fabric</span>
          </div>
          <div className="heroButtons">
            <a className="bigButton" href={DISCORD}>Join Beta</a>
            <Link className="bigButton dark" href="/get-started">Get Started</Link>
          </div>
        </div>

        <section className="featureRow" aria-label="Client highlights">
          <article className="featureCard performance">
            <div className="featureIcon"><img className="ico" src="/icons/zap.svg" alt="" /></div>
            <h3>Built To Actually Work</h3>
            <p>Every button, toggle and slider does something real. Settings, keybinds and HUD layouts save automatically.</p>
            <div className="bars">
              <span className="bar hot" />
              <span className="bar medium" />
              <span className="bar small" />
            </div>
          </article>
          <ModulePreviewCard />
          <article className="featureCard version">
            <div className="featureIcon cube"><img className="ico" src="/icons/monitor.svg" alt="" /></div>
            <h3>Version Support</h3>
            <h2>1.21.11<br />Fabric</h2>
            <p>Focused on one version first so the client can actually become stable.</p>
          </article>
        </section>
      </section>

      <section className="section">
        <div className="sectionHead">
          <p>Explore</p>
          <h2>What&apos;s Inside</h2>
        </div>
        <div className="exploreGrid">
          {pages.map((p) => (
            <Link className="exploreCard" href={p.href} key={p.href}>
              {p.image ? <img src={p.image} alt="" /> : <div className="exploreTile">{emotes.slice(0, 6).map((e) => <span key={e}>{e}</span>)}</div>}
              <div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <em>Open {p.title} →</em>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section release">
        <div className="releaseBox">
          <div>
            <p>Release Window</p>
            <h2>Releasing Friday, October 2</h2>
            <span>One installer, sign in with Microsoft, press Play. Join the Discord to get pinged the moment it&apos;s out.</span>
          </div>
          <a className="bigButton" href={DISCORD}>Join the Discord</a>
        </div>
      </section>
    </>
  );
}
