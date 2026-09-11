"use client";

import { useEffect, useState } from "react";

type WindowKey = "welcome" | "features" | "dev" | "cosmetics" | "owner" | "downloads" | "discord";

type WindowData = {
  title: string;
  subtitle: string;
  icon: string;
};

const DISCORD = "https://discord.gg/5HxHgKdfMu";

const WINDOWS: Record<WindowKey, WindowData> = {
  welcome: {
    title: "Welcome.txt",
    subtitle: "Start here",
    icon: "📄",
  },
  features: {
    title: "Features",
    subtitle: "Working modules",
    icon: "🧰",
  },
  dev: {
    title: "Dev Journal",
    subtitle: "Build notes",
    icon: "📓",
  },
  cosmetics: {
    title: "Cosmetics",
    subtitle: "Style menu",
    icon: "🎒",
  },
  owner: {
    title: "Owner Panel",
    subtitle: "snot2 tools",
    icon: "👑",
  },
  downloads: {
    title: "Release Plan",
    subtitle: "Christmas",
    icon: "🎁",
  },
  discord: {
    title: "Discord",
    subtitle: "Join the server",
    icon: "💬",
  },
};

const desktopIcons: { key: WindowKey; label: string; icon: string }[] = [
  { key: "welcome", label: "Booger Client", icon: "🟩" },
  { key: "features", label: "Features", icon: "🧰" },
  { key: "dev", label: "Dev Journal", icon: "📓" },
  { key: "cosmetics", label: "Cosmetics", icon: "🎒" },
  { key: "owner", label: "Owner Panel", icon: "👑" },
  { key: "downloads", label: "Christmas Release", icon: "🎁" },
  { key: "discord", label: "Discord", icon: "💬" },
];

const modules = [
  ["Right Shift Menu", "The main client menu opens with one clean keybind."],
  ["Fullbright", "Local brightness control for caves and night builds."],
  ["CPS Counter", "Tracks clicks so PvP clips look cleaner."],
  ["Coordinates HUD", "Simple position info without crowding the screen."],
  ["Keystrokes", "WASD and jump display for recordings."],
  ["Profiles", "Switch between saved client setups."],
];

const devNotes = [
  { tag: "Fixed", text: "Right Shift is the only menu key." },
  { tag: "Fixed", text: "The GUI is being rebuilt to avoid placeholder spam." },
  { tag: "Next", text: "More modules need real code behind them." },
  { tag: "Next", text: "Cosmetics need previews and better unlock states." },
  { tag: "Christmas", text: "Release window chosen so the client can be polished." },
];

function StatusLight({ label, ready }: { label: string; ready: boolean }) {
  return (
    <div className="status-light">
      <span className={ready ? "dot ready" : "dot working"} />
      <span>{label}</span>
    </div>
  );
}

function WindowContent({ active }: { active: WindowKey }) {
  if (active === "welcome") {
    return (
      <div className="window-body-grid">
        <section className="hero-copy">
          <p className="stamp">Christmas Release Window</p>
          <h1>Booger Client returns this Christmas.</h1>
          <p>
            A cozy indie Minecraft Fabric mod built for cleaner HUD tools, customization,
            cosmetics, profiles, and a smoother everyday Minecraft experience.
          </p>
          <div className="button-row">
            <a href={DISCORD} className="primary" target="_blank" rel="noreferrer">Join Discord</a>
            <button onClick={() => document.dispatchEvent(new CustomEvent("booger-open-window", { detail: "features" }))}>
              View Features
            </button>
          </div>
        </section>

        <section className="notice-card">
          <div className="mini-title">Preview Board</div>
          <p>The trailer is still cooking. For now, development updates live here.</p>
          <div className="checklist">
            <StatusLight label="Right Shift menu" ready />
            <StatusLight label="Cleaner GUI" ready />
            <StatusLight label="HUD modules" ready />
            <StatusLight label="Cosmetics polish" ready={false} />
            <StatusLight label="Christmas release prep" ready={false} />
          </div>
        </section>
      </div>
    );
  }

  if (active === "features") {
    return (
      <div>
        <div className="section-head">
          <p className="eyebrow">Client toolbox</p>
          <h2>Features that should feel real, not fake.</h2>
        </div>
        <div className="feature-grid">
          {modules.map(([name, desc]) => (
            <article className="feature-card" key={name}>
              <div className="feature-card-top">
                <span>{name}</span>
                <b>ON</b>
              </div>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    );
  }

  if (active === "dev") {
    return (
      <div>
        <div className="section-head">
          <p className="eyebrow">Patch notes</p>
          <h2>Dev journal</h2>
        </div>
        <div className="journal-list">
          {devNotes.map((note) => (
            <div className="journal-row" key={note.text}>
              <span>{note.tag}</span>
              <p>{note.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (active === "cosmetics") {
    return (
      <div className="two-col">
        <section>
          <p className="eyebrow">Style system</p>
          <h2>Cosmetics with personality.</h2>
          <p className="soft-text">
            Capes, badges, trails, hats, and owner cosmetics are planned for the Christmas build.
            The goal is cozy Minecraft style, not random placeholder buttons.
          </p>
          <div className="tag-wrap">
            <span>Founder Cape</span>
            <span>Slime Trail</span>
            <span>Christmas Badge</span>
            <span>Owner Crown</span>
            <span>Beta Tester Cape</span>
          </div>
        </section>
        <section className="preview-card">
          <div className="avatar-box">🧍</div>
          <div>
            <b>[OWNER] snot2</b>
            <p>Founder cape • gold badge • slime trail</p>
          </div>
        </section>
      </div>
    );
  }

  if (active === "owner") {
    return (
      <div>
        <div className="section-head">
          <p className="eyebrow">Owner build</p>
          <h2>Owner panel</h2>
        </div>
        <div className="owner-panel">
          <div>
            <b>Owner</b>
            <p>snot2</p>
          </div>
          <div>
            <b>Status</b>
            <p>Local-only panel for now</p>
          </div>
          <div>
            <b>Rank</b>
            <p>OWNER</p>
          </div>
          <div>
            <b>Important</b>
            <p>Global users/ranks need a server plugin or online API later.</p>
          </div>
        </div>
      </div>
    );
  }

  if (active === "downloads") {
    return (
      <div className="two-col">
        <section>
          <p className="eyebrow">Release window</p>
          <h2>Christmas comeback.</h2>
          <p className="soft-text">
            Booger Client is planned to return around Christmas so the GUI, working modules,
            cosmetics, profiles, and owner tools have time to actually feel polished.
          </p>
          <div className="release-box">🎄 Christmas 2026</div>
        </section>
        <section className="notice-card">
          <div className="mini-title">Before release</div>
          <div className="checklist">
            <StatusLight label="Fix menu polish" ready={false} />
            <StatusLight label="Finish starter modules" ready={false} />
            <StatusLight label="Add cosmetic previews" ready={false} />
            <StatusLight label="Prepare beta testing" ready={false} />
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="discord-window">
      <p className="eyebrow">Community</p>
      <h2>Help shape Booger Client.</h2>
      <p>
        Join for previews, testing updates, suggestions, and Christmas release news.
      </p>
      <a href={DISCORD} target="_blank" rel="noreferrer" className="primary big">Join the Discord</a>
    </div>
  );
}

export default function Home() {
  const [active, setActive] = useState<WindowKey>("welcome");
  const [startOpen, setStartOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);

  useEffect(() => {
    const listener = (event: Event) => {
      const key = (event as CustomEvent<WindowKey>).detail;
      if (key && WINDOWS[key]) {
        setActive(key);
        setMinimized(false);
        setStartOpen(false);
      }
    };
    document.addEventListener("booger-open-window", listener);
    return () => document.removeEventListener("booger-open-window", listener);
  }, []);

  const current = WINDOWS[active];

  return (
    <main className="desktop-shell">
      <div className="snow" />
      <div className="wallpaper-glow glow-a" />
      <div className="wallpaper-glow glow-b" />

      <section className="desktop-icons" aria-label="Desktop shortcuts">
        {desktopIcons.map((icon) => (
          <button
            className="desktop-icon"
            key={icon.key}
            onClick={() => {
              setActive(icon.key);
              setMinimized(false);
            }}
          >
            <span>{icon.icon}</span>
            <small>{icon.label}</small>
          </button>
        ))}
      </section>

      {!minimized && (
        <section className="app-window" aria-label={current.title}>
          <div className="title-bar">
            <div className="window-title">
              <span>{current.icon}</span>
              <div>
                <b>{current.title}</b>
                <small>{current.subtitle}</small>
              </div>
            </div>
            <div className="window-controls">
              <button onClick={() => setMinimized(true)} aria-label="Minimize">—</button>
              <button onClick={() => setActive("welcome")} aria-label="Home">□</button>
              <button onClick={() => setMinimized(true)} aria-label="Close">×</button>
            </div>
          </div>

          <div className="window-toolbar">
            {desktopIcons.slice(0, 6).map((item) => (
              <button
                key={item.key}
                className={active === item.key ? "selected" : ""}
                onClick={() => setActive(item.key)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="window-content">
            <WindowContent active={active} />
          </div>
        </section>
      )}

      <footer className="taskbar">
        <button className="start-button" onClick={() => setStartOpen(!startOpen)}>
          <span>🟩</span> Start
        </button>

        {startOpen && (
          <div className="start-menu">
            <div className="start-head">
              <span>🟩</span>
              <div>
                <b>Booger OS</b>
                <small>Christmas build</small>
              </div>
            </div>
            <div className="start-list">
              {desktopIcons.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    setActive(item.key);
                    setMinimized(false);
                    setStartOpen(false);
                  }}
                >
                  <span>{item.icon}</span>
                  <div>
                    <b>{item.label}</b>
                    <small>{WINDOWS[item.key].subtitle}</small>
                  </div>
                </button>
              ))}
            </div>
            <a href={DISCORD} target="_blank" rel="noreferrer" className="shutdown">
              Join Discord →
            </a>
          </div>
        )}

        <button className="task-window" onClick={() => setMinimized(false)}>
          {current.icon} {current.title}
        </button>

        <div className="task-status">
          <span>🎄 Christmas 2026</span>
          <span>21:18</span>
        </div>
      </footer>

      <style jsx>{`
        :global(*) {
          box-sizing: border-box;
        }

        :global(html) {
          scroll-behavior: smooth;
        }

        :global(body) {
          margin: 0;
          background: #15120f;
          color: #f7ead2;
          font-family: ui-rounded, "Trebuchet MS", "Segoe UI", system-ui, sans-serif;
          overflow: hidden;
        }

        .desktop-shell {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at 22% 18%, rgba(143, 191, 111, 0.32), transparent 28%),
            radial-gradient(circle at 76% 18%, rgba(196, 91, 77, 0.24), transparent 26%),
            linear-gradient(180deg, #1b1713 0%, #15120f 45%, #0d1512 100%);
        }

        .desktop-shell::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: 0.22;
          background-image:
            linear-gradient(rgba(255, 248, 232, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 248, 232, 0.04) 1px, transparent 1px);
          background-size: 26px 26px;
          pointer-events: none;
        }

        .snow {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            radial-gradient(circle, rgba(255,255,255,.9) 1px, transparent 1px),
            radial-gradient(circle, rgba(255,255,255,.55) 1px, transparent 1px),
            radial-gradient(circle, rgba(255,255,255,.35) 1px, transparent 1px);
          background-size: 120px 120px, 190px 190px, 260px 260px;
          background-position: 20px 30px, 80px 120px, 140px 60px;
          opacity: .45;
          animation: snow-drift 18s linear infinite;
        }

        @keyframes snow-drift {
          from { transform: translateY(-30px); }
          to { transform: translateY(80px); }
        }

        .wallpaper-glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(28px);
          opacity: .45;
          pointer-events: none;
        }

        .glow-a {
          width: 300px;
          height: 300px;
          left: 56%;
          top: 12%;
          background: #8fbf6f;
        }

        .glow-b {
          width: 240px;
          height: 240px;
          right: 12%;
          bottom: 18%;
          background: #e8b75a;
        }

        .desktop-icons {
          position: absolute;
          left: clamp(12px, 2vw, 28px);
          top: clamp(12px, 3vh, 28px);
          display: grid;
          gap: 14px;
          width: 100px;
          z-index: 3;
        }

        .desktop-icon {
          width: 94px;
          min-height: 82px;
          border: 1px solid transparent;
          background: transparent;
          color: #fff8e8;
          text-shadow: 0 2px 8px rgba(0,0,0,.55);
          border-radius: 12px;
          cursor: pointer;
          display: grid;
          place-items: center;
          gap: 4px;
          padding: 8px 6px;
        }

        .desktop-icon:hover {
          background: rgba(255, 248, 232, .09);
          border-color: rgba(255, 248, 232, .18);
        }

        .desktop-icon span {
          font-size: 34px;
          width: 46px;
          height: 46px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: rgba(33, 27, 22, .64);
          border: 1px solid rgba(255, 248, 232, .13);
          box-shadow: inset 0 1px rgba(255,255,255,.08), 0 10px 24px rgba(0,0,0,.2);
        }

        .desktop-icon small {
          font-size: 12px;
          line-height: 1.05;
          font-weight: 800;
        }

        .app-window {
          position: absolute;
          z-index: 5;
          left: clamp(126px, 13vw, 180px);
          right: clamp(14px, 4vw, 56px);
          top: clamp(18px, 7vh, 70px);
          bottom: 72px;
          max-width: 1180px;
          margin: 0 auto;
          border-radius: 18px;
          overflow: hidden;
          border: 2px solid rgba(247, 234, 210, .22);
          background: rgba(33, 27, 22, .88);
          box-shadow: 0 28px 90px rgba(0,0,0,.55), inset 0 1px rgba(255,255,255,.12);
          backdrop-filter: blur(18px);
        }

        .title-bar {
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 12px 0 18px;
          background: linear-gradient(180deg, #3a2e24, #211b16);
          border-bottom: 1px solid rgba(247, 234, 210, .14);
        }

        .window-title {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .window-title span {
          font-size: 24px;
        }

        .window-title b {
          display: block;
          font-size: 15px;
        }

        .window-title small {
          display: block;
          color: #b8a98e;
          font-size: 12px;
          margin-top: 2px;
        }

        .window-controls {
          display: flex;
          gap: 8px;
        }

        .window-controls button {
          width: 34px;
          height: 30px;
          border-radius: 10px;
          border: 1px solid rgba(247, 234, 210, .18);
          color: #f7ead2;
          background: rgba(255,255,255,.06);
          cursor: pointer;
          font-weight: 900;
        }

        .window-controls button:hover {
          background: rgba(196, 91, 77, .42);
        }

        .window-toolbar {
          height: 48px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          background: rgba(43, 36, 29, .74);
          border-bottom: 1px solid rgba(247, 234, 210, .11);
          overflow-x: auto;
        }

        .window-toolbar button {
          border: 1px solid rgba(247, 234, 210, .13);
          color: #f7ead2;
          background: rgba(255,255,255,.04);
          padding: 8px 12px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 900;
          white-space: nowrap;
          cursor: pointer;
        }

        .window-toolbar button:hover,
        .window-toolbar .selected {
          background: rgba(143, 191, 111, .22);
          border-color: rgba(143, 191, 111, .6);
        }

        .window-content {
          height: calc(100% - 106px);
          overflow: auto;
          padding: clamp(18px, 3vw, 38px);
          background:
            linear-gradient(135deg, rgba(255,255,255,.04), transparent 30%),
            rgba(21, 18, 15, .22);
        }

        .window-body-grid,
        .two-col {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(250px, .9fr);
          gap: clamp(16px, 3vw, 32px);
          align-items: stretch;
        }

        .stamp {
          display: inline-flex;
          width: fit-content;
          transform: rotate(-2deg);
          color: #15120f;
          background: #e8b75a;
          padding: 8px 12px;
          border-radius: 6px;
          box-shadow: 0 8px 24px rgba(0,0,0,.24);
          font-weight: 1000;
          letter-spacing: .02em;
          margin: 0 0 14px;
        }

        h1, h2, p {
          margin-top: 0;
        }

        h1 {
          font-size: clamp(34px, 6.8vw, 78px);
          line-height: .9;
          letter-spacing: -0.06em;
          max-width: 780px;
          margin-bottom: 18px;
        }

        h2 {
          font-size: clamp(28px, 4vw, 46px);
          line-height: .98;
          letter-spacing: -0.045em;
          margin-bottom: 12px;
        }

        .hero-copy p:not(.stamp),
        .soft-text,
        .discord-window p,
        .notice-card p {
          color: #d7cab3;
          font-size: clamp(15px, 1.7vw, 19px);
          line-height: 1.6;
        }

        .button-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 24px;
        }

        .button-row a,
        .button-row button,
        .primary,
        .shutdown {
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(247, 234, 210, .2);
          color: #f7ead2;
          background: rgba(255,255,255,.06);
          padding: 12px 16px;
          border-radius: 14px;
          cursor: pointer;
          font-weight: 1000;
          box-shadow: inset 0 1px rgba(255,255,255,.08), 0 12px 30px rgba(0,0,0,.18);
        }

        .button-row .primary,
        .primary {
          color: #15120f;
          background: linear-gradient(180deg, #a7df82, #8fbf6f);
          border-color: rgba(255,255,255,.2);
        }

        .big {
          margin-top: 18px;
          padding: 14px 18px;
        }

        .notice-card,
        .preview-card,
        .owner-panel,
        .release-box {
          border-radius: 22px;
          border: 1px solid rgba(247, 234, 210, .16);
          background: rgba(43, 36, 29, .78);
          box-shadow: inset 0 1px rgba(255,255,255,.07), 0 18px 42px rgba(0,0,0,.22);
        }

        .notice-card {
          padding: clamp(18px, 3vw, 28px);
          min-height: 300px;
        }

        .mini-title,
        .eyebrow {
          color: #e8b75a;
          text-transform: uppercase;
          letter-spacing: .14em;
          font-size: 12px;
          font-weight: 1000;
          margin-bottom: 12px;
        }

        .checklist {
          display: grid;
          gap: 10px;
          margin-top: 18px;
        }

        .status-light {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #fff8e8;
          font-weight: 800;
          padding: 10px 12px;
          border: 1px solid rgba(247, 234, 210, .12);
          border-radius: 14px;
          background: rgba(0,0,0,.16);
        }

        .dot {
          width: 11px;
          height: 11px;
          border-radius: 999px;
          box-shadow: 0 0 16px currentColor;
        }

        .ready {
          color: #8fbf6f;
          background: #8fbf6f;
        }

        .working {
          color: #e8b75a;
          background: #e8b75a;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .feature-card {
          min-height: 130px;
          padding: 18px;
          border: 1px solid rgba(247, 234, 210, .14);
          border-radius: 18px;
          background: rgba(43, 36, 29, .7);
        }

        .feature-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 12px;
        }

        .feature-card-top span {
          font-size: 17px;
          font-weight: 1000;
        }

        .feature-card-top b {
          color: #15120f;
          background: #8fbf6f;
          border-radius: 999px;
          padding: 5px 8px;
          font-size: 10px;
        }

        .feature-card p,
        .journal-row p,
        .preview-card p,
        .owner-panel p {
          color: #b8a98e;
          line-height: 1.45;
          margin: 0;
        }

        .journal-list {
          display: grid;
          gap: 12px;
        }

        .journal-row {
          display: grid;
          grid-template-columns: 110px 1fr;
          gap: 14px;
          align-items: center;
          padding: 14px 16px;
          border-radius: 16px;
          border: 1px solid rgba(247, 234, 210, .13);
          background: rgba(43, 36, 29, .74);
        }

        .journal-row span {
          color: #15120f;
          background: #e8b75a;
          border-radius: 999px;
          padding: 7px 10px;
          text-align: center;
          font-size: 11px;
          font-weight: 1000;
        }

        .tag-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
        }

        .tag-wrap span {
          border: 1px solid rgba(247, 234, 210, .14);
          background: rgba(255,255,255,.05);
          color: #fff8e8;
          padding: 10px 12px;
          border-radius: 999px;
          font-weight: 900;
          font-size: 13px;
        }

        .preview-card {
          padding: 22px;
          display: grid;
          place-items: center;
          text-align: center;
          gap: 16px;
        }

        .avatar-box {
          width: min(210px, 48vw);
          aspect-ratio: 1;
          border-radius: 28px;
          display: grid;
          place-items: center;
          font-size: 72px;
          background:
            linear-gradient(135deg, rgba(143, 191, 111, .24), rgba(232, 183, 90, .16)),
            rgba(0,0,0,.18);
          border: 1px solid rgba(247, 234, 210, .14);
        }

        .owner-panel {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          padding: 18px;
        }

        .owner-panel div {
          padding: 16px;
          border-radius: 16px;
          background: rgba(0,0,0,.18);
          border: 1px solid rgba(247, 234, 210, .11);
        }

        .release-box {
          width: fit-content;
          margin-top: 18px;
          padding: 18px 22px;
          color: #15120f;
          background: linear-gradient(180deg, #fff8e8, #e8b75a);
          font-weight: 1000;
          font-size: 22px;
        }

        .discord-window {
          max-width: 720px;
        }

        .taskbar {
          position: absolute;
          z-index: 20;
          left: 0;
          right: 0;
          bottom: 0;
          height: 54px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 7px 10px;
          border-top: 1px solid rgba(247, 234, 210, .14);
          background: rgba(27, 23, 19, .95);
          box-shadow: 0 -14px 30px rgba(0,0,0,.3);
          backdrop-filter: blur(16px);
        }

        .start-button,
        .task-window {
          height: 38px;
          border-radius: 12px;
          border: 1px solid rgba(247, 234, 210, .16);
          color: #f7ead2;
          background: rgba(255,255,255,.07);
          font-weight: 1000;
          cursor: pointer;
          padding: 0 14px;
        }

        .start-button {
          color: #15120f;
          background: linear-gradient(180deg, #a7df82, #8fbf6f);
          min-width: 104px;
        }

        .task-window {
          min-width: min(240px, 35vw);
          text-align: left;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .task-status {
          margin-left: auto;
          display: flex;
          gap: 10px;
          color: #d7cab3;
          font-weight: 900;
          font-size: 12px;
        }

        .task-status span {
          border: 1px solid rgba(247, 234, 210, .12);
          background: rgba(0,0,0,.16);
          padding: 9px 10px;
          border-radius: 12px;
        }

        .start-menu {
          position: absolute;
          left: 10px;
          bottom: 58px;
          width: min(340px, calc(100vw - 20px));
          border-radius: 20px;
          overflow: hidden;
          background: rgba(33, 27, 22, .96);
          border: 1px solid rgba(247, 234, 210, .2);
          box-shadow: 0 24px 70px rgba(0,0,0,.55);
        }

        .start-head {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: linear-gradient(180deg, #3a2e24, #211b16);
          border-bottom: 1px solid rgba(247, 234, 210, .12);
        }

        .start-head span {
          font-size: 28px;
        }

        .start-head b,
        .start-head small {
          display: block;
        }

        .start-head small,
        .start-list small {
          color: #b8a98e;
        }

        .start-list {
          padding: 8px;
          display: grid;
          gap: 4px;
          max-height: 380px;
          overflow: auto;
        }

        .start-list button {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          text-align: left;
          color: #f7ead2;
          background: transparent;
          border: 0;
          border-radius: 14px;
          padding: 10px;
          cursor: pointer;
        }

        .start-list button:hover {
          background: rgba(143, 191, 111, .18);
        }

        .start-list button > span {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          display: grid;
          place-items: center;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(247, 234, 210, .12);
        }

        .start-list b,
        .start-list small {
          display: block;
        }

        .shutdown {
          margin: 8px;
        }

        @media (max-width: 760px) {
          :global(body) {
            overflow: auto;
          }

          .desktop-shell {
            min-height: 100svh;
            overflow: hidden;
          }

          .desktop-icons {
            left: 8px;
            top: 8px;
            grid-template-columns: repeat(4, 72px);
            width: auto;
            gap: 8px;
          }

          .desktop-icon {
            width: 72px;
            min-height: 66px;
            padding: 5px;
          }

          .desktop-icon span {
            width: 36px;
            height: 36px;
            font-size: 24px;
          }

          .desktop-icon small {
            font-size: 10px;
          }

          .app-window {
            left: 8px;
            right: 8px;
            top: 86px;
            bottom: 64px;
            border-radius: 15px;
          }

          .title-bar {
            height: 54px;
            padding-left: 12px;
          }

          .window-controls button {
            width: 30px;
          }

          .window-toolbar {
            height: 44px;
            padding: 7px;
          }

          .window-toolbar button {
            padding: 7px 9px;
            font-size: 11px;
          }

          .window-content {
            height: calc(100% - 98px);
            padding: 16px;
          }

          .window-body-grid,
          .two-col,
          .feature-grid,
          .owner-panel {
            grid-template-columns: 1fr;
          }

          .journal-row {
            grid-template-columns: 1fr;
          }

          .task-status span:first-child {
            display: none;
          }
        }
      `}</style>
    </main>
  );
}
