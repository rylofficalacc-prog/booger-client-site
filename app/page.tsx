"use client";

import { useState } from "react";

type Module = {
  name: string;
  icon: string;
  desc: string;
  tag: string;
};

const DISCORD = "https://discord.gg/5HxHgKdfMu";

const modules: Module[] = [
  { name: "Fullbright", icon: "☀", tag: "Visual", desc: "Brightens dark areas so caves, bases, and builds stay easy to see." },
  { name: "CPS Counter", icon: "◉", tag: "HUD", desc: "Shows left and right click speed while you practice or PvP." },
  { name: "Keystrokes", icon: "⌨", tag: "HUD", desc: "Displays WASD, mouse buttons, and spacebar in a clean overlay." },
  { name: "Coordinates HUD", icon: "⌖", tag: "HUD", desc: "Shows your XYZ position without needing to open F3." },
  { name: "Armor HUD", icon: "▣", tag: "HUD", desc: "Keeps armor durability and gear status visible while playing." },
  { name: "Zoom", icon: "⌕", tag: "Utility", desc: "A simple zoom tool for screenshots, scouting, and gameplay." },
];

const looks = [
  { name: "Golden Goose", image: "/images/render-goose-cut.png", desc: "Chaotic, bright, and impossible to ignore." },
  { name: "Midnight", image: "/images/render-midnight-cut.png", desc: "Clean black fit with a sharp diamond look." },
  { name: "Bloom", image: "/images/render-bloom-cut.png", desc: "Dark skin, icy glow, and quiet menace." },
  { name: "Crown Set", image: "/images/render-purple-cut.png", desc: "Royal purple cosmetic showcase." },
];

export default function Page() {
  const [hoveredModule, setHoveredModule] = useState<Module>(modules[0]);

  return (
    <main className="page">
      <nav className="navbar">
        <a className="brand" href="#top" aria-label="Booger Client home">
          <img src="/images/booger-logo-icon.png" alt="" />
          <span>Booger <b>Client</b></span>
        </a>

        <div className="navlinks" aria-label="Main navigation">
          <a className="active" href="#client">Client</a>
          <a href="#modules">Modules</a>
          <a href="#cosmetics">Cosmetics</a>
          <a href="#release">Release</a>
          <a href="#faq">FAQ</a>
        </div>

        <div className="navActions">
          <a className="discord" href={DISCORD}>Discord</a>
          <a className="join" href={DISCORD}>Join Beta</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="heroBg" />
        <div className="shade" />
        <div className="orb orbOne" />
        <div className="orb orbTwo" />

        <img className="heroRender heroLeft" src="/images/render-goose-cut.png" alt="Golden goose Minecraft render" />
        <img className="heroRender heroRightTop" src="/images/render-king-cut.png" alt="Booger Client crown render" />
        <img className="heroRender heroRightBottom" src="/images/render-purple-cut.png" alt="Purple cosmetic Minecraft render" />
        <img className="heroRender heroTiny" src="/images/render-bloom-cut.png" alt="Dark Minecraft render" />

        <div className="heroCenter" id="client">
          <img className="heroLogo" src="/images/booger-logo-icon.png" alt="Booger Client slime logo" />
          <h1><span>Booger</span> Client</h1>
          <p>A cleaner Minecraft Fabric client built for smoother gameplay.</p>

          <div className="heroTags">
            <span>Lightweight Client Base</span>
            <i />
            <span>Integrated Modules</span>
            <i />
            <span>1.21.11 Fabric</span>
          </div>

          <div className="heroButtons">
            <a className="bigButton" href={DISCORD}>Join Beta</a>
            <a className="bigButton dark" href="#modules">View Modules</a>
          </div>
        </div>

        <section className="featureRow" aria-label="Client highlights">
          <article className="featureCard performance">
            <div className="featureIcon">ϟ</div>
            <h3>Optimized Performance</h3>
            <p>Built around clean local features first, then polished into a real Christmas beta.</p>
            <div className="bars">
              <span className="bar hot" />
              <span className="bar medium" />
              <span className="bar small" />
            </div>
          </article>

          <article className="featureCard moduleCard" id="modules">
            <div className="featureIcon cube">◇</div>
            <h3>Fully Integrated Modules</h3>
            <p>Hover a module to preview what it does.</p>

            <div className="moduleGrid">
              {modules.map((mod) => (
                <button
                  key={mod.name}
                  type="button"
                  onMouseEnter={() => setHoveredModule(mod)}
                  onFocus={() => setHoveredModule(mod)}
                  className={hoveredModule.name === mod.name ? "moduleIcon active" : "moduleIcon"}
                  aria-label={`${mod.name}: ${mod.desc}`}
                >
                  {mod.icon}
                </button>
              ))}
            </div>

            <div className="modulePreview">
              <strong>{hoveredModule.name}</strong>
              <span>{hoveredModule.tag}</span>
              <p>{hoveredModule.desc}</p>
            </div>
          </article>

          <article className="featureCard version">
            <div className="featureIcon cube">▣</div>
            <h3>Version Support</h3>
            <h2>1.21.11<br />Fabric</h2>
            <p>Focused on one version first so the client can actually become stable.</p>
          </article>
        </section>
      </section>

      <section className="section cosmetics" id="cosmetics">
        <div className="sectionHead">
          <p>Cosmetics</p>
          <h2>Featured Looks</h2>
          <span>Use your renders to make the site feel like an actual client brand.</span>
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

      <section className="section release" id="release">
        <div className="releaseBox">
          <div>
            <p>Release Window</p>
            <h2>Christmas Beta</h2>
            <span>We chose Christmas so the client can be cleaned up, tested, and released without feeling rushed.</span>
          </div>
          <a className="bigButton" href={DISCORD}>Join the Discord</a>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="sectionHead">
          <p>FAQ</p>
          <h2>Simple answers</h2>
        </div>
        <div className="faqGrid">
          <article><h3>Is Booger Client released?</h3><p>Not yet. The goal is a Christmas beta release.</p></article>
          <article><h3>What version?</h3><p>Minecraft Java Fabric 1.21.11.</p></article>
          <article><h3>Is it a cheat client?</h3><p>No. The focus is HUD tools, visuals, cosmetics, profiles, and customization.</p></article>
        </div>
      </section>
    </main>
  );
}
