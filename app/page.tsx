"use client";

import { useState } from "react";

const DISCORD = "https://discord.gg/5HxHgKdfMu";

const modules = [
  { name: "Fullbright", icon: "☀", desc: "Brightens caves and dark builds without server-side changes." },
  { name: "CPS Counter", icon: "◉", desc: "Shows live left and right click speed while you play." },
  { name: "Keystrokes", icon: "⌨", desc: "Displays WASD, mouse buttons, and spacebar input." },
  { name: "Armor HUD", icon: "⬟", desc: "Keeps armor durability visible without opening inventory." },
  { name: "Coordinates HUD", icon: "⌖", desc: "Shows clean XYZ coordinates without opening F3." },
  { name: "Zoom", icon: "⌕", desc: "Smooth zoom for screenshots, builds, and clean gameplay." },
  { name: "FPS Display", icon: "▥", desc: "Displays live performance in a clean corner HUD." },
  { name: "Potion HUD", icon: "✦", desc: "Shows active potion effects in a better-looking list." },
  { name: "Profiles", icon: "▣", desc: "Switch between saved layouts and module setups." }
];

const looks = [
  { name: "Golden Goose", image: "/golden-goose.png", text: "Chaotic, loud, and impossible to miss." },
  { name: "Midnight", image: "/midnight.png", text: "Clean black-and-pink client look." },
  { name: "Bloom", image: "/bloom.png", text: "Dark skin with a bright icy glow." }
];

export default function Page() {
  const [hovered, setHovered] = useState(modules[0]);

  return (
    <main className="site">
      <nav className="nav">
        <a className="brand" href="#home" aria-label="Booger Client home">
          <img src="/booger-logo.png" alt="Booger Client logo" />
          <span>Booger <b>Client</b></span>
        </a>

        <div className="links">
          <a className="active" href="#home">Client</a>
          <a href="#modules">Modules</a>
          <a href="#cosmetics">Cosmetics</a>
          <a href="#release">Release</a>
          <a href="#faq">FAQ</a>
        </div>

        <div className="navActions">
          <a className="discord" href={DISCORD}>Discord</a>
          <a className="login" href={DISCORD}>Join Beta</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <img className="heroBg" src="/hero-bg.png" alt="Minecraft forest background" />
        <div className="shade" />

        <img className="render renderLeft" src="/golden-goose.png" alt="Golden Goose player render" />
        <img className="render renderRight" src="/midnight.png" alt="Midnight player render" />

        <div className="heroCenter">
          <img className="heroLogo" src="/booger-logo.png" alt="Booger Client icon" />
          <h1>BOOGER CLIENT</h1>
          <p className="tagline">A cleaner Minecraft Fabric client built for smoother gameplay.</p>
          <p className="miniLine">RIGHT SHIFT MENU • HUD TOOLS • COSMETICS • CHRISTMAS BETA</p>
          <a className="download" href={DISCORD}>JOIN THE BETA</a>
          <span className="available">Available for Minecraft Fabric 1.21.11</span>
        </div>

        <div className="heroCards">
          <article className="heroCard fpsCard">
            <h3>LIGHTWEIGHT CLIENT BASE</h3>
            <div className="bars" aria-hidden="true">
              <span className="bar big" />
              <span className="bar mid" />
              <span className="bar low" />
            </div>
            <p>Built around clean local features first, then polished into a real Christmas beta.</p>
          </article>

          <article id="modules" className="heroCard moduleCard">
            <h3>FULLY INTEGRATED MODULES</h3>
            <div className="moduleIcons">
              {modules.map((mod) => (
                <button
                  key={mod.name}
                  onMouseEnter={() => setHovered(mod)}
                  onFocus={() => setHovered(mod)}
                  aria-label={mod.name}
                >
                  {mod.icon}
                </button>
              ))}
            </div>
            <div className="hoverBox">
              <b>{hovered.name}</b>
              <span>{hovered.desc}</span>
            </div>
          </article>

          <article className="heroCard versionCard">
            <h3>VERSION SUPPORT</h3>
            <div className="versions">
              <b>1.21.11</b>
              <b>Fabric</b>
            </div>
            <p>Focused on one version first so the client can actually become stable.</p>
          </article>
        </div>
      </section>

      <section id="cosmetics" className="section cosmetics">
        <div className="sectionHead">
          <span>Featured Looks</span>
          <h2>Cosmetics that match the client.</h2>
          <p>No random filler. Just clean skins, slime-themed cosmetics, and a better visual identity.</p>
        </div>

        <div className="lookGrid">
          {looks.map((look) => (
            <article className="look" key={look.name}>
              <img src={look.image} alt={`${look.name} cosmetic render`} />
              <div>
                <h3>{look.name}</h3>
                <p>{look.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="release" className="releaseBand">
        <div>
          <span>Christmas Beta</span>
          <h2>Coming this Christmas.</h2>
          <p>The release window gives us time to clean up the menu, fix real modules, and stop dropping placeholder builds.</p>
        </div>
        <a className="download small" href={DISCORD}>Join Discord</a>
      </section>

      <section id="faq" className="faq">
        <article>
          <h3>Is it released?</h3>
          <p>Not yet. The goal is a Christmas beta.</p>
        </article>
        <article>
          <h3>What version?</h3>
          <p>Minecraft Fabric 1.21.11 first.</p>
        </article>
        <article>
          <h3>Is it a cheat client?</h3>
          <p>No. It is focused on clean HUD tools, visuals, cosmetics, and customization.</p>
        </article>
      </section>

      <footer>
        <div className="brand footBrand">
          <img src="/booger-logo.png" alt="Booger Client logo" />
          <span>Booger <b>Client</b></span>
        </div>
        <p>Same Minecraft. Cleaner client.</p>
      </footer>
    </main>
  );
}
