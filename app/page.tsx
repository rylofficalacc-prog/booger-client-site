"use client";

import { useState } from "react";

type Category = "HUD" | "Visual" | "Utility" | "Player";
type Module = { name: string; icon: string; tag: Category; desc: string; key?: string };

const DISCORD = "https://discord.gg/5HxHgKdfMu";

const modules: Module[] = [
  { name: "Fullbright", icon: "☀", tag: "Visual", key: "G", desc: "See clearly in caves, the Nether and at night without touching your gamma setting." },
  { name: "Zoom", icon: "⌕", tag: "Utility", key: "C", desc: "Hold to zoom with a smooth animation. Scroll while zooming to adjust." },
  { name: "Toggle Sprint", icon: "»", tag: "Player", key: "V", desc: "Keeps you sprinting while moving forward, following normal sprint rules." },
  { name: "Freelook", icon: "◐", tag: "Utility", key: "Alt", desc: "Hold Left Alt to look around in third person while you keep walking straight." },
  { name: "Crosshair", icon: "✛", tag: "Visual", desc: "Cross, T-shape, dot or circle. Size, gap, thickness, color, outline, live preview." },
  { name: "FPS Counter", icon: "▤", tag: "HUD", desc: "Your live frame rate in a clean, movable overlay." },
  { name: "CPS Counter", icon: "◉", tag: "HUD", desc: "Left and right clicks per second over a rolling one-second window." },
  { name: "Keystrokes", icon: "⌨", tag: "HUD", desc: "WASD, Space and mouse buttons light up as you press them. Three styles." },
  { name: "Coordinates", icon: "⌖", tag: "HUD", desc: "Live X / Y / Z in compact or detailed layout." },
  { name: "Direction HUD", icon: "⇧", tag: "HUD", desc: "The way you're facing: North-East, South and so on, with axis and yaw." },
  { name: "Armor HUD", icon: "▣", tag: "HUD", desc: "Your armor icons with live durability." },
  { name: "Potion Effects", icon: "⚗", tag: "HUD", desc: "Active effects with their real icons, level and time left." },
  { name: "Combo Counter", icon: "✦", tag: "HUD", desc: "Counts hits you land in a row. Resets when you get hit." },
  { name: "Reach Display", icon: "↔", tag: "HUD", desc: "Shows how far away your last hit was. Display only - it never changes reach." },
  { name: "Playtime", icon: "◷", tag: "HUD", desc: "How long this session has been running." },
  { name: "Stopwatch", icon: "⏱", tag: "HUD", desc: "Start, pause, resume and reset from the menu or your own keybinds." },
  { name: "Auto Respawn", icon: "↻", tag: "Player", desc: "Presses the normal Respawn button for you after a short delay." },
];

const cosmetics = [
  { name: "Neon Slime Wings", color: "#7dff67", icon: "❦", desc: "Glowing, translucent 3D wings that flap as you walk and tuck in when you sneak." },
  { name: "Slime Halo", color: "#7dff67", icon: "◯", desc: "A glowing ring above your head with orbiting sparkles." },
  { name: "Slime Crown", color: "#ffd84a", icon: "♛", desc: "A crown with glowing slime gems. Pick the metal and gem colors." },
  { name: "Shoulder Slime", color: "#7dff67", icon: "●", desc: "A tiny slime pet on your shoulder that hops, squishes and blinks." },
  { name: "Booger Cape", color: "#26bdf2", icon: "▼", desc: "A cape with the slime logo that swings as you run." },
  { name: "Bunny Ears", color: "#ff7ad9", icon: "∩", desc: "Floppy ears that bounce while you walk." },
  { name: "Player Pet", color: "#26bdf2", icon: "☺", desc: "A mini player walks beside you. Your skin, or type any username to wear theirs." },
  { name: "Pet Morph", color: "#ffd84a", icon: "🐾", desc: "Turn into a pig, wolf, cat, fox, frog and more - it walks and turns with you." },
];

const emotes = [
  "Twerk", "Wave", "Dab", "T-Pose", "Floss", "Clap", "Salute", "Zombie", "Backflip", "Spin",
  "Jumping Jacks", "Bow", "Headbang", "Cheer", "Sit", "Facepalm", "Robot", "Shrug", "Groove",
];

const looks = [
  { name: "Golden Goose", image: "/images/render-goose-cut.png", desc: "Chaotic, bright, and impossible to ignore." },
  { name: "Midnight", image: "/images/render-midnight-cut.png", desc: "Clean black fit with a sharp diamond look." },
  { name: "Bloom", image: "/images/render-bloom-cut.png", desc: "Dark skin, icy glow, and quiet menace." },
  { name: "Crown Set", image: "/images/render-purple-cut.png", desc: "Royal purple cosmetic showcase." },
];

const clientFeatures = [
  { icon: "⇧", title: "Right Shift Menu", desc: "Mods, HUD, Cosmetics, Profiles and Settings in one clean menu with search and categories." },
  { icon: "▦", title: "HUD Editor", desc: "Drag every HUD element where you want it, scroll to resize, snap to edges. Saved automatically." },
  { icon: "⧉", title: "Profiles", desc: "Separate setups for PvP, Survival or Recording - modules, keybinds, HUD layout and cosmetics." },
  { icon: "⌘", title: "Custom Keybinds", desc: "Bind any module to any key. What the menu shows is exactly what the game uses." },
];

const CATEGORIES: ("All" | Category)[] = ["All", "HUD", "Visual", "Utility", "Player"];

export default function Page() {
  const [hoveredModule, setHoveredModule] = useState<Module>(modules[0]);
  const [filter, setFilter] = useState<"All" | Category>("All");
  const shown = filter === "All" ? modules : modules.filter((m) => m.tag === filter);
  const heroModules = modules.slice(0, 9);

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
          <a href="#emotes">Emotes</a>
          <a href="#launcher">Launcher</a>
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
          <p>A cleaner Minecraft Fabric client with 17 modules, 8 cosmetics, 19 emotes and its own launcher.</p>

          <div className="heroTags">
            <span>17 Modules</span>
            <i />
            <span>3D Cosmetics</span>
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
            <h3>Built To Actually Work</h3>
            <p>Every button, toggle and slider does something real. Settings, keybinds and HUD layouts save automatically.</p>
            <div className="bars">
              <span className="bar hot" />
              <span className="bar medium" />
              <span className="bar small" />
            </div>
          </article>

          <article className="featureCard moduleCard">
            <div className="featureIcon cube">◇</div>
            <h3>Fully Integrated Modules</h3>
            <p>Hover a module to preview what it does.</p>

            <div className="moduleGrid">
              {heroModules.map((mod) => (
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
              <span>{hoveredModule.tag}{hoveredModule.key ? ` · Key ${hoveredModule.key}` : ""}</span>
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

      <section className="section" id="features">
        <div className="sectionHead">
          <p>The Client</p>
          <h2>Everything In One Menu</h2>
          <span>Press Right Shift in game. Escape or Right Shift closes it again.</span>
        </div>
        <div className="clientGrid">
          {clientFeatures.map((f) => (
            <article className="clientCard" key={f.title}>
              <div className="featureIcon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section modulesSection" id="modules">
        <div className="sectionHead">
          <p>Modules</p>
          <h2>17 Built-In Modules</h2>
          <span>HUD tools, visuals and quality of life. No cheats.</span>
        </div>
        <div className="chips" role="tablist" aria-label="Filter modules">
          {CATEGORIES.map((c) => (
            <button key={c} type="button" className={filter === c ? "chip active" : "chip"} onClick={() => setFilter(c)}>{c}</button>
          ))}
        </div>
        <div className="modGrid">
          {shown.map((m) => (
            <article className="modCard" key={m.name}>
              <div className="modIcon">{m.icon}</div>
              <div>
                <h3>{m.name}{m.key && <kbd>{m.key}</kbd>}</h3>
                <span>{m.tag}</span>
                <p>{m.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section cosmetics" id="cosmetics">
        <div className="sectionHead">
          <p>Cosmetics</p>
          <h2>Real 3D Cosmetics</h2>
          <span>Animated models on your player, not particles. Equip them from the in-game menu or the launcher.</span>
        </div>

        <div className="cosLayout">
          <figure className="cosPreview">
            <img src="/images/render-king-cut.png" alt="Launcher 3D preview of a player wearing Neon Slime Wings, Slime Halo, Slime Crown and Shoulder Slime" />
            <figcaption>Live 3D preview from the Booger Client launcher</figcaption>
          </figure>
          <div className="cosGrid">
            {cosmetics.map((c) => (
              <article className="cosCard" key={c.name} style={{ ["--c" as string]: c.color }}>
                <div className="cosIcon">{c.icon}</div>
                <div>
                  <h3>{c.name}</h3>
                  <p>{c.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="sectionHead subHead">
          <h2>Featured Looks</h2>
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

      <section className="section emotesSection" id="emotes">
        <div className="sectionHead">
          <p>Emotes</p>
          <h2>19 Emotes</h2>
          <span>Press <kbd>B</kbd> for the emote wheel. Emotes blend in smoothly, and some move your whole body - jumps, spins and a full backflip.</span>
        </div>
        <div className="emoteGrid">
          {emotes.map((e) => (
            <span className="emote" key={e}>{e}</span>
          ))}
        </div>
      </section>

      <section className="section launcherSection" id="launcher">
        <div className="launcherBox">
          <div className="launcherText">
            <p className="eyebrow">Booger Client Launcher <em>In testing</em></p>
            <h2>One Click To Play</h2>
            <ul>
              <li>Installs Java, Minecraft 1.21.11, Fabric and Booger Client for you</li>
              <li>Official Microsoft sign-in - your password never touches the launcher</li>
              <li>Turn mods on or off before you launch</li>
              <li>3D skin viewer that shows your cosmetics</li>
              <li>Multiple accounts and automatic updates</li>
            </ul>
          </div>
          <div className="launcherShots">
            <img className="shotMain" src="/images/hero-bg.png" alt="Booger Client launcher home screen" />
            <img className="shotSide" src="/images/render-purple-cut.png" alt="Booger Client launcher mods page" />
          </div>
        </div>
      </section>

      <section className="section release" id="release">
        <div className="releaseBox">
          <div>
            <p>Release Window</p>
            <h2>Christmas Beta</h2>
            <span>We chose Christmas so the client can be cleaned up, tested, and released without feeling rushed. Join the Discord to follow development.</span>
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
          <article><h3>What version?</h3><p>Minecraft Java Edition 1.21.11 on Fabric.</p></article>
          <article><h3>Is it a cheat client?</h3><p>No. HUD tools, visuals, cosmetics, emotes and customization. Reach Display only shows distance - it never changes it.</p></article>
          <article><h3>Can other players see my cosmetics?</h3><p>Right now cosmetics, emotes and morphs show on your own screen. Seeing other Booger Client players&apos; cosmetics is planned.</p></article>
          <article><h3>Do I need the launcher?</h3><p>No. The launcher makes setup one click, but Booger Client also works as a normal Fabric mod with Fabric API.</p></article>
          <article><h3>Is my account safe?</h3><p>Sign-in goes through Microsoft&apos;s own page. The launcher never sees your password and stores its sign-in encrypted on your PC.</p></article>
        </div>
      </section>

      <footer className="footer">
        <img src="/images/booger-logo-icon.png" alt="" />
        <span>Booger Client · Not affiliated with Mojang or Microsoft.</span>
        <a href={DISCORD}>Discord</a>
      </footer>
    </main>
  );
}
