"use client";

import { useMemo, useState } from "react";

type TabKey =
  | "home"
  | "download"
  | "features"
  | "modules"
  | "cosmetics"
  | "owner"
  | "devlog"
  | "screenshots"
  | "faq"
  | "credits"
  | "discord";

type Tab = {
  key: TabKey;
  label: string;
  icon: string;
};

type ModuleItem = {
  name: string;
  status: "Working" | "In progress" | "Planned";
  desc: string;
  tag: string;
};

const DISCORD = "https://discord.gg/5HxHgKdfMu";

const tabs: Tab[] = [
  { key: "home", label: "Home", icon: "⌂" },
  { key: "download", label: "Download", icon: "⇩" },
  { key: "features", label: "Features", icon: "✦" },
  { key: "modules", label: "Modules", icon: "▣" },
  { key: "cosmetics", label: "Cosmetics", icon: "★" },
  { key: "owner", label: "Owner Panel", icon: "♛" },
  { key: "devlog", label: "Devlog", icon: "☰" },
  { key: "screenshots", label: "Screenshots", icon: "▤" },
  { key: "faq", label: "FAQ", icon: "?" },
  { key: "credits", label: "Credits", icon: "♡" },
  { key: "discord", label: "Discord", icon: "↗" },
];

const modules: ModuleItem[] = [
  {
    name: "Right Shift Menu",
    status: "Working",
    tag: "Core",
    desc: "One clean key opens the Booger Client menu. No extra backup keys.",
  },
  {
    name: "Fullbright",
    status: "In progress",
    tag: "Visual",
    desc: "Local brightness settings for caves, builds, and nighttime clips.",
  },
  {
    name: "CPS Counter",
    status: "In progress",
    tag: "HUD",
    desc: "Tracks left and right clicks for PvP and recording overlays.",
  },
  {
    name: "Coordinates HUD",
    status: "In progress",
    tag: "HUD",
    desc: "Shows clean player position without crowding the screen.",
  },
  {
    name: "Keystrokes",
    status: "Planned",
    tag: "HUD",
    desc: "A small WASD, mouse, and spacebar overlay for gameplay videos.",
  },
  {
    name: "Armor HUD",
    status: "Planned",
    tag: "HUD",
    desc: "Shows armor and item status in a cleaner recording-friendly layout.",
  },
  {
    name: "Profiles",
    status: "In progress",
    tag: "Config",
    desc: "Save different setups for PvP, cinematic clips, and normal survival.",
  },
  {
    name: "Cosmetics",
    status: "Planned",
    tag: "Style",
    desc: "Capes, badges, trails, hats, and Christmas-themed unlocks.",
  },
];

const devlog = [
  ["Christmas chosen", "Booger Client is now aimed at a Christmas comeback window."],
  ["GUI rebuild", "The menu is being rebuilt so it feels real instead of placeholder-only."],
  ["Right Shift only", "The open key is being locked to Right Shift so controls stay simple."],
  ["Real features first", "The next builds focus on real local modules before server-wide ranks."],
  ["Website refresh", "The site is being redesigned with a client-tab style and more pages."],
];

function StatusPill({ status }: { status: ModuleItem["status"] }) {
  return <span className={`status ${status.toLowerCase().replace(" ", "-")}`}>{status}</span>;
}

function TabButton({ tab, active, onClick }: { tab: Tab; active: boolean; onClick: () => void }) {
  return (
    <button className={active ? "tab active" : "tab"} onClick={onClick} type="button">
      <span>{tab.icon}</span>
      {tab.label}
    </button>
  );
}

function MiniWindow({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mini-window">
      <div className="mini-titlebar">
        <span className="lights"><i /> <i /> <i /></span>
        <b>{title}</b>
      </div>
      <div className="mini-body">{children}</div>
    </section>
  );
}

function HomeTab({ setActive }: { setActive: (tab: TabKey) => void }) {
  return (
    <div className="home-grid">
      <div className="hero-card">
        <p className="chip">Christmas Release Window</p>
        <h1>Booger Client is coming back.</h1>
        <p>
          A cozy indie Minecraft Fabric mod/client built around a cleaner Right Shift menu,
          useful HUD tools, customization, cosmetics, and a better everyday Minecraft feel.
        </p>
        <div className="hero-buttons">
          <a href={DISCORD} target="_blank" rel="noreferrer" className="button primary">Join Discord</a>
          <button className="button" type="button" onClick={() => setActive("features")}>View Features</button>
          <button className="button ghost" type="button" onClick={() => setActive("devlog")}>Read Devlog</button>
        </div>
      </div>

      <MiniWindow title="preview_board.exe">
        <div className="check-row"><b>Open Key</b><span>Right Shift only</span></div>
        <div className="check-row"><b>Version</b><span>Fabric 1.21.11</span></div>
        <div className="check-row"><b>Release</b><span>Christmas</span></div>
        <div className="check-row"><b>Trailer</b><span>Not yet</span></div>
      </MiniWindow>
    </div>
  );
}

function DownloadTab() {
  return (
    <div className="split">
      <MiniWindow title="download_center.jar">
        <h2>Download is not public yet.</h2>
        <p>
          Booger Client is still being rebuilt. Public downloads should wait until the core menu,
          HUD modules, and settings actually work cleanly.
        </p>
        <a className="button primary wide" href={DISCORD} target="_blank" rel="noreferrer">Join for beta updates</a>
      </MiniWindow>
      <MiniWindow title="install_steps.txt">
        <ol className="steps">
          <li>Install Minecraft Java 1.21.11.</li>
          <li>Install Fabric Loader.</li>
          <li>Add Fabric API.</li>
          <li>Put the Booger Client jar in your mods folder.</li>
          <li>Open with Right Shift in-game.</li>
        </ol>
      </MiniWindow>
    </div>
  );
}

function FeaturesTab() {
  const cards = [
    ["Clean Menu", "A Right Shift menu that should feel like a real client, not a messy placeholder panel."],
    ["HUD Tools", "CPS, coordinates, keystrokes, armor HUD, and recording-friendly overlays."],
    ["Profiles", "Different saved setups for PvP, cinematic clips, and normal gameplay."],
    ["Cosmetics", "Capes, badges, trails, and small seasonal items planned for the Christmas build."],
    ["Owner Panel", "A local owner-only panel for snot2 and development controls."],
    ["Fair Client", "Focused on visuals, HUD, customization, and quality-of-life tools."],
  ];

  return (
    <div className="card-grid">
      {cards.map(([title, text]) => (
        <article className="glass-card" key={title}>
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </div>
  );
}

function ModulesTab() {
  return (
    <div className="modules-grid">
      {modules.map((item) => (
        <article className="module-card" key={item.name}>
          <div className="module-top">
            <span className="tag">{item.tag}</span>
            <StatusPill status={item.status} />
          </div>
          <h3>{item.name}</h3>
          <p>{item.desc}</p>
        </article>
      ))}
    </div>
  );
}

function CosmeticsTab() {
  return (
    <div className="split cosmetics-split">
      <MiniWindow title="cosmetics_room.bc">
        <h2>Indie cosmetics, not random filler.</h2>
        <p>
          The cosmetic system should feel like collectible stickers: founder cape, Christmas badge,
          slime trail, owner crown, beta cape, cozy scarf, and winter particles.
        </p>
        <div className="sticker-wall">
          <span>Founder Cape</span>
          <span>Christmas Badge</span>
          <span>Slime Trail</span>
          <span>Owner Crown</span>
          <span>Beta Cape</span>
          <span>Snow Trail</span>
        </div>
      </MiniWindow>
      <MiniWindow title="player_preview.png">
        <div className="avatar-preview">
          <div className="avatar-head">☻</div>
          <b>[OWNER] snot2</b>
          <p>Founder cape • gold badge • slime trail</p>
        </div>
      </MiniWindow>
    </div>
  );
}

function OwnerTab() {
  return (
    <div className="split">
      <MiniWindow title="owner_panel.sys">
        <h2>Owner Panel</h2>
        <p>
          The owner panel is meant for local build testing first. Server-wide users, live ranks,
          and global permissions need a real backend or server plugin later.
        </p>
        <div className="owner-grid">
          <span>Owner</span><b>snot2</b>
          <span>Rank</span><b>OWNER</b>
          <span>Open Key</span><b>Right Shift</b>
          <span>Mode</span><b>Local testing</b>
        </div>
      </MiniWindow>
      <MiniWindow title="coming_later.txt">
        <ul className="plain-list">
          <li>Live mod-user list</li>
          <li>Rank assigning</li>
          <li>Online cosmetics database</li>
          <li>Private beta access list</li>
        </ul>
      </MiniWindow>
    </div>
  );
}

function DevlogTab() {
  return (
    <div className="journal">
      {devlog.map(([title, text], index) => (
        <article className="journal-card" key={title}>
          <span>#{String(index + 1).padStart(2, "0")}</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </div>
  );
}

function ScreenshotsTab() {
  return (
    <div className="screenshot-grid">
      {["GUI Preview", "HUD Preview", "Cosmetics Preview", "Christmas Spawn"].map((name) => (
        <div className="screenshot-card" key={name}>
          <div className="fake-shot">
            <span>{name}</span>
          </div>
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
}

function FaqTab() {
  const items = [
    ["Is Booger Client out?", "Not yet. The Christmas window was chosen so it can be polished first."],
    ["Is there a video trailer?", "Not yet. The site is being built first, then the trailer can come later."],
    ["What version?", "Minecraft Java 1.21.11 with Fabric."],
    ["Why only Right Shift?", "Keeping one keybind makes the client cleaner and easier to debug."],
    ["Are global ranks real yet?", "Not client-only. That needs a server plugin or online API later."],
  ];

  return (
    <div className="faq-list">
      {items.map(([q, a]) => (
        <details key={q}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}

function CreditsTab() {
  return (
    <div className="credits">
      <MiniWindow title="credits.txt">
        <h2>Made with personality.</h2>
        <p>
          Booger Client is a small Minecraft client/mod project built around the idea of making
          Minecraft cleaner, cozier, and more customizable.
        </p>
        <div className="credit-row"><span>Founder</span><b>snot2</b></div>
        <div className="credit-row"><span>Release Window</span><b>Christmas</b></div>
        <div className="credit-row"><span>Theme</span><b>Indie client tabs</b></div>
      </MiniWindow>
    </div>
  );
}

function DiscordTab() {
  return (
    <div className="discord-card">
      <p className="chip">Community</p>
      <h2>Help shape the comeback.</h2>
      <p>
        Join the Discord for progress updates, beta news, suggestions, screenshots,
        and the Christmas release buildup.
      </p>
      <a className="button primary" href={DISCORD} target="_blank" rel="noreferrer">Join Discord</a>
    </div>
  );
}

function CurrentTab({ active, setActive }: { active: TabKey; setActive: (tab: TabKey) => void }) {
  if (active === "home") return <HomeTab setActive={setActive} />;
  if (active === "download") return <DownloadTab />;
  if (active === "features") return <FeaturesTab />;
  if (active === "modules") return <ModulesTab />;
  if (active === "cosmetics") return <CosmeticsTab />;
  if (active === "owner") return <OwnerTab />;
  if (active === "devlog") return <DevlogTab />;
  if (active === "screenshots") return <ScreenshotsTab />;
  if (active === "faq") return <FaqTab />;
  if (active === "credits") return <CreditsTab />;
  return <DiscordTab />;
}

export default function Page() {
  const [active, setActive] = useState<TabKey>("home");
  const activeTab = useMemo(() => tabs.find((tab) => tab.key === active) ?? tabs[0], [active]);

  return (
    <main className="site-shell">
      <div className="grain" />
      <div className="stars" />

      <section className="client-frame" aria-label="Booger Client website">
        <header className="topbar">
          <div className="brand">
            <div className="logo">B</div>
            <div>
              <b>Booger Client</b>
              <span>indie Fabric client • 1.21.11</span>
            </div>
          </div>
          <nav className="top-links" aria-label="Quick links">
            <button type="button" onClick={() => setActive("download")}>Download</button>
            <button type="button" onClick={() => setActive("devlog")}>Devlog</button>
            <a href={DISCORD} target="_blank" rel="noreferrer">Discord</a>
          </nav>
        </header>

        <div className="tab-strip" role="tablist" aria-label="Booger Client tabs">
          {tabs.map((tab) => (
            <TabButton key={tab.key} tab={tab} active={active === tab.key} onClick={() => setActive(tab.key)} />
          ))}
        </div>

        <section className="content-window">
          <div className="window-titlebar">
            <div>
              <b>{activeTab.icon} {activeTab.label}</b>
              <span>booger://client/{activeTab.key}</span>
            </div>
            <div className="window-actions"><i /><i /><i /></div>
          </div>
          <div className="content-body">
            <CurrentTab active={active} setActive={setActive} />
          </div>
        </section>

        <footer className="taskbar">
          <button type="button" onClick={() => setActive("home")} className="start-button">◆ Start</button>
          <span>Christmas comeback build</span>
          <b>Right Shift Menu</b>
        </footer>
      </section>

      <style jsx>{`
        :global(*) { box-sizing: border-box; }
        :global(html) { scroll-behavior: smooth; }
        :global(body) {
          margin: 0;
          background: #100f0d;
          color: #fff5dc;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }
        .site-shell {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          padding: clamp(16px, 3vw, 42px);
          background:
            radial-gradient(circle at top left, rgba(143, 191, 111, .24), transparent 34%),
            radial-gradient(circle at 80% 10%, rgba(232, 183, 90, .18), transparent 28%),
            linear-gradient(135deg, #14110e, #1b1712 45%, #111314);
        }
        .grain, .stars {
          pointer-events: none;
          position: fixed;
          inset: 0;
        }
        .grain {
          opacity: .17;
          background-image:
            linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px);
          background-size: 18px 18px;
        }
        .stars {
          opacity: .42;
          background-image:
            radial-gradient(circle, rgba(255,248,232,.45) 1px, transparent 1.5px),
            radial-gradient(circle, rgba(143,191,111,.42) 1px, transparent 1.6px);
          background-position: 0 0, 45px 60px;
          background-size: 140px 140px, 180px 180px;
        }
        .client-frame {
          position: relative;
          z-index: 1;
          width: min(1180px, 100%);
          min-height: calc(100vh - clamp(32px, 6vw, 84px));
          margin: 0 auto;
          border: 2px solid rgba(255, 245, 220, .18);
          border-radius: 24px;
          overflow: hidden;
          background: rgba(26, 22, 17, .88);
          box-shadow: 0 24px 80px rgba(0,0,0,.38), inset 0 0 0 1px rgba(255,255,255,.04);
          backdrop-filter: blur(16px);
          display: flex;
          flex-direction: column;
        }
        .topbar, .taskbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 16px 18px;
          background: rgba(18, 15, 12, .88);
          border-bottom: 1px solid rgba(255,245,220,.12);
        }
        .brand { display: flex; align-items: center; gap: 12px; min-width: 0; }
        .brand b { display: block; font-size: 18px; letter-spacing: .2px; }
        .brand span { display: block; color: #b8a98e; font-size: 13px; margin-top: 2px; }
        .logo {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          font-weight: 900;
          background: linear-gradient(135deg, #8fbf6f, #d8ff93);
          color: #10200f;
          border: 2px solid rgba(255,248,232,.5);
          box-shadow: 0 0 24px rgba(143,191,111,.32);
        }
        .top-links { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; justify-content: flex-end; }
        button, a.button, .top-links a {
          font: inherit;
        }
        .top-links button, .top-links a {
          border: 1px solid rgba(255,245,220,.16);
          background: rgba(255,245,220,.06);
          color: #fff5dc;
          text-decoration: none;
          padding: 9px 12px;
          border-radius: 12px;
          cursor: pointer;
        }
        .top-links button:hover, .top-links a:hover { border-color: rgba(143,191,111,.7); }
        .tab-strip {
          display: flex;
          gap: 8px;
          padding: 12px;
          overflow-x: auto;
          border-bottom: 1px solid rgba(255,245,220,.12);
          background: rgba(33, 27, 22, .72);
          scrollbar-width: thin;
        }
        .tab {
          border: 1px solid rgba(255,245,220,.12);
          color: #d8ccb7;
          background: rgba(255,255,255,.04);
          padding: 10px 13px;
          border-radius: 14px;
          min-width: fit-content;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: .18s ease;
        }
        .tab:hover { transform: translateY(-1px); border-color: rgba(232,183,90,.58); }
        .tab.active {
          color: #13210f;
          background: linear-gradient(135deg, #d8ff93, #8fbf6f);
          border-color: rgba(255,248,232,.65);
          box-shadow: 0 8px 24px rgba(143,191,111,.18);
          font-weight: 800;
        }
        .content-window {
          margin: 18px;
          flex: 1;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255,245,220,.16);
          background: rgba(15, 14, 13, .42);
        }
        .window-titlebar, .mini-titlebar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 14px;
          padding: 13px 16px;
          background: rgba(255,245,220,.07);
          border-bottom: 1px solid rgba(255,245,220,.12);
        }
        .window-titlebar b { display: block; font-size: 16px; }
        .window-titlebar span { display: block; color: #b8a98e; font-size: 12px; margin-top: 2px; }
        .window-actions, .lights { display: inline-flex; gap: 6px; align-items: center; }
        .window-actions i, .lights i {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: #c45b4d;
        }
        .window-actions i:nth-child(2), .lights i:nth-child(2) { background: #e8b75a; }
        .window-actions i:nth-child(3), .lights i:nth-child(3) { background: #8fbf6f; }
        .content-body {
          padding: clamp(16px, 3vw, 28px);
          min-height: 560px;
        }
        .home-grid, .split {
          display: grid;
          grid-template-columns: minmax(0, 1.45fr) minmax(280px, .8fr);
          gap: 18px;
          align-items: stretch;
        }
        .hero-card, .mini-window, .glass-card, .module-card, .journal-card, .screenshot-card, .discord-card {
          border: 1px solid rgba(255,245,220,.14);
          background: linear-gradient(180deg, rgba(255,245,220,.07), rgba(255,245,220,.035));
          border-radius: 18px;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,.03);
        }
        .hero-card {
          padding: clamp(22px, 4vw, 44px);
          min-height: 430px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background:
            radial-gradient(circle at 80% 22%, rgba(143,191,111,.22), transparent 34%),
            linear-gradient(180deg, rgba(255,245,220,.08), rgba(255,245,220,.035));
        }
        .chip, .tag {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          color: #13210f;
          background: #d8ff93;
          border: 1px solid rgba(255,255,255,.32);
          border-radius: 999px;
          padding: 7px 10px;
          font-size: 12px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: .08em;
        }
        h1, h2, h3, p { margin-top: 0; }
        h1 {
          max-width: 780px;
          margin: 18px 0 16px;
          font-size: clamp(42px, 7vw, 78px);
          line-height: .92;
          letter-spacing: -0.06em;
        }
        h2 { font-size: clamp(24px, 3vw, 38px); line-height: 1; letter-spacing: -0.04em; margin-bottom: 12px; }
        h3 { font-size: 20px; margin-bottom: 8px; }
        p { color: #c9bca4; line-height: 1.65; }
        .hero-card p { max-width: 700px; font-size: 17px; }
        .hero-buttons { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 20px; }
        .button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          border-radius: 14px;
          padding: 0 16px;
          border: 1px solid rgba(255,245,220,.18);
          background: rgba(255,245,220,.06);
          color: #fff5dc;
          text-decoration: none;
          cursor: pointer;
          font-weight: 800;
        }
        .button.primary {
          background: linear-gradient(135deg, #8fbf6f, #d8ff93);
          color: #13210f;
          border-color: rgba(255,248,232,.62);
        }
        .button.ghost { color: #e8b75a; }
        .button.wide { width: 100%; margin-top: 12px; }
        .mini-window { overflow: hidden; }
        .mini-titlebar { justify-content: flex-start; }
        .mini-body { padding: 18px; }
        .check-row, .credit-row {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          padding: 13px 0;
          border-bottom: 1px dashed rgba(255,245,220,.14);
        }
        .check-row:last-child, .credit-row:last-child { border-bottom: 0; }
        .check-row b, .credit-row b { color: #fff5dc; }
        .check-row span, .credit-row span { color: #b8a98e; }
        .card-grid, .modules-grid, .journal, .screenshot-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }
        .glass-card, .module-card, .journal-card, .screenshot-card, .discord-card { padding: 18px; }
        .glass-card h3, .module-card h3, .journal-card h3 { color: #fff5dc; }
        .module-top { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 18px; }
        .status {
          white-space: nowrap;
          font-size: 12px;
          font-weight: 900;
          border-radius: 999px;
          padding: 7px 10px;
          border: 1px solid rgba(255,245,220,.16);
        }
        .status.working { color: #10200f; background: #8fbf6f; }
        .status.in-progress { color: #2b1b08; background: #e8b75a; }
        .status.planned { color: #fff5dc; background: rgba(255,245,220,.09); }
        .steps { color: #c9bca4; line-height: 1.9; padding-left: 22px; }
        .sticker-wall { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 18px; }
        .sticker-wall span {
          padding: 9px 11px;
          border-radius: 12px;
          color: #fff5dc;
          background: rgba(255,245,220,.07);
          border: 1px dashed rgba(232,183,90,.55);
          transform: rotate(-1deg);
        }
        .sticker-wall span:nth-child(even) { transform: rotate(1.2deg); }
        .avatar-preview { text-align: center; display: grid; place-items: center; gap: 10px; min-height: 270px; }
        .avatar-head {
          width: 150px;
          height: 150px;
          display: grid;
          place-items: center;
          border-radius: 32px;
          font-size: 76px;
          background: linear-gradient(135deg, #31281f, #1a1511);
          border: 1px solid rgba(255,245,220,.16);
        }
        .owner-grid {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 10px;
          margin-top: 18px;
        }
        .owner-grid span { color: #b8a98e; }
        .plain-list { color: #c9bca4; line-height: 2; padding-left: 20px; }
        .journal-card span { color: #8fbf6f; font-weight: 900; }
        .fake-shot {
          height: 180px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          color: #d8ff93;
          background:
            linear-gradient(135deg, rgba(143,191,111,.12), rgba(232,183,90,.08)),
            repeating-linear-gradient(45deg, rgba(255,245,220,.05), rgba(255,245,220,.05) 8px, transparent 8px, transparent 16px);
          border: 1px solid rgba(255,245,220,.13);
        }
        .faq-list { display: grid; gap: 12px; }
        details {
          border-radius: 16px;
          border: 1px solid rgba(255,245,220,.14);
          background: rgba(255,245,220,.055);
          padding: 16px 18px;
        }
        summary { cursor: pointer; font-weight: 900; color: #fff5dc; }
        details p { margin: 12px 0 0; }
        .discord-card { max-width: 760px; margin: 40px auto; text-align: center; padding: clamp(24px, 5vw, 52px); }
        .discord-card .chip { margin: 0 auto 16px; }
        .taskbar {
          border-top: 1px solid rgba(255,245,220,.12);
          border-bottom: 0;
          color: #b8a98e;
          margin-top: auto;
        }
        .start-button {
          color: #13210f;
          background: #d8ff93;
          border: 0;
          border-radius: 12px;
          padding: 10px 14px;
          font-weight: 900;
          cursor: pointer;
        }
        .taskbar b { color: #e8b75a; }
        @media (max-width: 980px) {
          .home-grid, .split { grid-template-columns: 1fr; }
          .card-grid, .modules-grid, .journal, .screenshot-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .content-body { min-height: auto; }
        }
        @media (max-width: 660px) {
          .site-shell { padding: 10px; }
          .client-frame { border-radius: 18px; min-height: calc(100vh - 20px); }
          .topbar, .taskbar { align-items: flex-start; flex-direction: column; }
          .brand b { font-size: 16px; }
          .content-window { margin: 10px; border-radius: 16px; }
          .card-grid, .modules-grid, .journal, .screenshot-grid { grid-template-columns: 1fr; }
          .window-titlebar { align-items: flex-start; }
          .hero-card { min-height: 360px; }
          h1 { font-size: clamp(38px, 15vw, 58px); }
        }
      `}</style>
    </main>
  );
}
