"use client";

import { useMemo, useState } from "react";

const DISCORD = "https://discord.gg/5HxHgKdfMu";

type TabId =
  | "home"
  | "builds"
  | "modules"
  | "hud"
  | "cosmetics"
  | "profiles"
  | "owner"
  | "devlog"
  | "faq"
  | "discord";

const tabs: { id: TabId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "builds", label: "Builds" },
  { id: "modules", label: "Modules" },
  { id: "hud", label: "HUD" },
  { id: "cosmetics", label: "Cosmetics" },
  { id: "profiles", label: "Profiles" },
  { id: "owner", label: "Owner Panel" },
  { id: "devlog", label: "Devlog" },
  { id: "faq", label: "FAQ" },
  { id: "discord", label: "Discord" },
];

const modules = [
  ["Fullbright", "Bright caves without changing the server."],
  ["CPS Counter", "Tracks left and right clicks while you play."],
  ["Keystrokes", "Shows WASD, space, and mouse inputs."],
  ["Coordinates HUD", "Simple position display for survival."],
  ["Armor HUD", "Durability and armor status at a glance."],
  ["Zoom", "Clean zoom key for screenshots and scouting."],
];

const hudItems = ["CPS", "FPS", "Coords", "Armor", "Keystrokes", "Potion effects", "Ping", "Clock"];
const cosmetics = ["Founder cape", "Slime trail", "Christmas badge", "Crown", "Halo", "Name badge"];
const devlog = [
  ["V6", "Right Shift only opener, no fake backup keys, cleaner local modules."],
  ["V5", "Owner panel pass and button hitbox fixes."],
  ["V4", "Local settings and config experiments."],
  ["Next", "Make the first real public Christmas build feel finished."],
];

export default function Page() {
  const [activeTab, setActiveTab] = useState<TabId>("home");

  const activeLabel = useMemo(() => {
    return tabs.find((tab) => tab.id === activeTab)?.label ?? "Home";
  }, [activeTab]);

  return (
    <main className="site-shell">
      <section className="launcher">
        <header className="topbar">
          <div>
            <p className="eyebrow">Minecraft Fabric 1.21.11</p>
            <h1>Booger Client</h1>
            <p className="subtitle">A small client project with a cleaner menu, useful HUD tools, cosmetics, and a Christmas comeback plan.</p>
          </div>
          <div className="top-actions">
            <span className="release-pill">Christmas release</span>
            <a className="small-button" href={DISCORD}>Discord</a>
          </div>
        </header>

        <nav className="tabbar" aria-label="Booger Client sections">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={activeTab === tab.id ? "tab active" : "tab"}
              onClick={() => setActiveTab(tab.id)}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="window-body">
          <aside className="sidebar">
            <div className="client-icon">BC</div>
            <h2>Booger Client Beta</h2>
            <p className="side-copy">Built by the community, polished slowly, and aimed at a cleaner everyday Minecraft setup.</p>

            <div className="progress-wrap">
              <div className="progress-label">
                <span>real module base</span>
                <span>3/8</span>
              </div>
              <div className="progress"><span /></div>
            </div>

            <div className="side-stat"><span>Status</span><strong>In development</strong></div>
            <div className="side-stat"><span>Open key</span><strong>Right Shift</strong></div>
            <div className="side-stat"><span>Owner</span><strong>snot2</strong></div>
            <div className="side-stat"><span>Release</span><strong>Christmas</strong></div>
          </aside>

          <section className="content-window">
            <div className="window-title">
              <span>{activeLabel.toLowerCase()}.dat</span>
              <span className="lights"><i /><i /><i /></span>
            </div>

            {activeTab === "home" && <HomePanel />}
            {activeTab === "builds" && <BuildsPanel />}
            {activeTab === "modules" && <ModulesPanel />}
            {activeTab === "hud" && <HudPanel />}
            {activeTab === "cosmetics" && <CosmeticsPanel />}
            {activeTab === "profiles" && <ProfilesPanel />}
            {activeTab === "owner" && <OwnerPanel />}
            {activeTab === "devlog" && <DevlogPanel />}
            {activeTab === "faq" && <FaqPanel />}
            {activeTab === "discord" && <DiscordPanel />}
          </section>
        </div>
      </section>

      <style jsx>{`
        :global(*) {
          box-sizing: border-box;
        }

        :global(html) {
          background: #080c09;
        }

        :global(body) {
          margin: 0;
          background:
            radial-gradient(circle at top left, rgba(124, 180, 98, 0.12), transparent 34rem),
            radial-gradient(circle at 80% 20%, rgba(195, 76, 62, 0.08), transparent 28rem),
            linear-gradient(135deg, #121914 0%, #0a0f0c 55%, #070907 100%);
          color: #f5ead8;
          font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace;
        }

        .site-shell {
          min-height: 100vh;
          padding: clamp(16px, 3vw, 42px);
          display: grid;
          place-items: center;
          position: relative;
          overflow: hidden;
        }

        .site-shell::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.16;
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
          background-size: 7px 7px;
          mix-blend-mode: screen;
        }

        .launcher {
          width: min(1180px, 100%);
          min-height: min(780px, calc(100vh - 40px));
          border: 2px solid #314533;
          background: rgba(12, 20, 15, 0.96);
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.55), inset 0 0 0 1px rgba(236, 255, 219, 0.04);
        }

        .topbar {
          min-height: 150px;
          display: flex;
          justify-content: space-between;
          gap: 24px;
          align-items: flex-start;
          padding: clamp(22px, 3vw, 38px);
          border-bottom: 2px solid #314533;
          background:
            linear-gradient(90deg, rgba(19, 40, 25, 0.72), rgba(18, 25, 19, 0.9)),
            repeating-linear-gradient(0deg, transparent 0, transparent 7px, rgba(255,255,255,0.015) 8px);
        }

        .eyebrow {
          margin: 0 0 12px;
          color: #9bdd85;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: clamp(11px, 1.6vw, 13px);
          font-weight: 800;
        }

        h1 {
          margin: 0;
          font-size: clamp(44px, 8vw, 82px);
          line-height: 0.92;
          letter-spacing: -0.07em;
          color: #fff3df;
          text-shadow: 4px 4px 0 rgba(0, 0, 0, 0.35);
        }

        .subtitle {
          max-width: 760px;
          margin: 18px 0 0;
          color: #cabca7;
          line-height: 1.8;
          font-size: 14px;
        }

        .top-actions {
          display: flex;
          gap: 12px;
          align-items: center;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .release-pill,
        .small-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          padding: 0 16px;
          border: 1px solid #557253;
          background: #172618;
          color: #fff1d6;
          text-decoration: none;
          font-weight: 800;
          font-size: 13px;
        }

        .small-button:hover,
        .tab:hover,
        .main-button:hover,
        .ghost-button:hover {
          transform: translateY(-1px);
          border-color: #9bdd85;
        }

        .tabbar {
          display: flex;
          gap: 0;
          overflow-x: auto;
          border-bottom: 2px solid #314533;
          scrollbar-width: thin;
          background: #101711;
        }

        .tab {
          appearance: none;
          border: 0;
          border-right: 1px solid #314533;
          background: transparent;
          color: #d8cab2;
          padding: 12px 16px;
          font: inherit;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
          white-space: nowrap;
        }

        .tab.active {
          background: #1d321f;
          color: #a6ff87;
          box-shadow: inset 0 -3px 0 #9bdd85;
        }

        .window-body {
          display: grid;
          grid-template-columns: 260px 1fr;
          min-height: 540px;
        }

        .sidebar {
          border-right: 2px solid #314533;
          padding: 24px;
          background: rgba(10, 17, 12, 0.8);
        }

        .client-icon {
          width: 74px;
          height: 74px;
          display: grid;
          place-items: center;
          color: #071008;
          font-size: 24px;
          font-weight: 1000;
          background: #96c77c;
          border: 3px solid #d7ffd0;
          box-shadow: 7px 0 0 #6f985c;
          margin-bottom: 24px;
        }

        h2, h3, p {
          margin-top: 0;
        }

        .sidebar h2 {
          font-size: 15px;
          color: #ffe19b;
          margin-bottom: 14px;
        }

        .side-copy {
          color: #e6d7be;
          line-height: 1.8;
          font-size: 13px;
        }

        .progress-wrap {
          margin: 22px 0;
        }

        .progress-label {
          display: flex;
          justify-content: space-between;
          color: #aebda7;
          font-size: 11px;
          margin-bottom: 8px;
          gap: 10px;
        }

        .progress {
          height: 15px;
          border: 1px solid #41583f;
          background: #0a100b;
          padding: 2px;
        }

        .progress span {
          display: block;
          height: 100%;
          width: 38%;
          background: repeating-linear-gradient(90deg, #a6ff87 0 8px, #d2ff9d 8px 14px);
        }

        .side-stat {
          display: flex;
          justify-content: space-between;
          gap: 14px;
          padding: 12px 10px;
          border: 1px solid #273829;
          margin-bottom: 8px;
          color: #b7aa94;
          font-size: 12px;
        }

        .side-stat strong {
          color: #fff3df;
          text-align: right;
        }

        .content-window {
          padding: 24px;
        }

        .window-title {
          height: 34px;
          border: 1px solid #3b4e3c;
          border-bottom: 0;
          background: #1d241f;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 12px;
          color: #efe0c5;
          font-weight: 800;
          font-size: 13px;
        }

        .lights {
          display: inline-flex;
          gap: 7px;
        }

        .lights i {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          display: block;
          background: #9bdd85;
        }

        .lights i:nth-child(2) {
          background: #f1c45c;
        }

        .lights i:nth-child(3) {
          background: #c9574f;
        }

        .panel {
          min-height: 468px;
          border: 1px solid #3b4e3c;
          padding: clamp(18px, 3vw, 30px);
          background:
            linear-gradient(120deg, rgba(33, 42, 35, 0.95), rgba(11, 17, 13, 0.98)),
            repeating-linear-gradient(0deg, transparent 0, transparent 12px, rgba(255,255,255,0.012) 13px);
        }

        .panel-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.4fr) minmax(260px, 0.8fr);
          gap: 20px;
        }

        .terminal-line {
          color: #9eff7f;
          font-size: 13px;
          margin-bottom: 20px;
          font-weight: 800;
        }

        .hero-title {
          font-size: clamp(34px, 6vw, 58px);
          line-height: 1.14;
          letter-spacing: -0.06em;
          color: #fff3df;
          max-width: 760px;
          margin: 0 0 18px;
        }

        .hero-copy, .panel-copy {
          color: #d5c7af;
          line-height: 1.85;
          max-width: 720px;
          font-size: 15px;
        }

        .button-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 26px;
        }

        .main-button,
        .ghost-button {
          min-height: 46px;
          padding: 0 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-weight: 1000;
          border: 2px solid #d8ffd0;
        }

        .main-button {
          background: #9bdd85;
          color: #071008;
          box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.35);
        }

        .ghost-button {
          background: #141d15;
          color: #fff3df;
          border-color: #557253;
        }

        .note-card,
        .release-card,
        .module-card,
        .small-card,
        .log-row,
        .faq-card {
          border: 1px solid #435743;
          background: rgba(9, 14, 11, 0.6);
          padding: 16px;
        }

        .release-card {
          border-color: #735c36;
          background: #241b14;
        }

        .tag {
          display: inline-flex;
          padding: 7px 10px;
          background: #b8584a;
          color: #fff3df;
          transform: rotate(-2deg);
          font-size: 11px;
          font-weight: 1000;
          margin-bottom: 18px;
        }

        .release-card h3 {
          font-size: clamp(30px, 4.5vw, 48px);
          color: #ffd66d;
          letter-spacing: -0.06em;
          margin-bottom: 16px;
        }

        .module-grid,
        .small-grid,
        .log-list,
        .faq-grid {
          display: grid;
          gap: 12px;
        }

        .module-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .small-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .module-card h3,
        .small-card h3,
        .faq-card h3 {
          font-size: 15px;
          margin-bottom: 10px;
          color: #fff3df;
        }

        .module-card p,
        .small-card p,
        .faq-card p,
        .log-row p,
        .release-card p {
          color: #cdbfa9;
          line-height: 1.7;
          margin: 0;
          font-size: 13px;
        }

        .module-meta {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          margin-top: 14px;
          color: #93d67e;
          font-size: 11px;
          text-transform: uppercase;
        }

        .log-row {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 14px;
          align-items: start;
        }

        .log-row strong {
          color: #a6ff87;
        }

        .download-box {
          padding: 18px;
          border: 1px dashed #6f985c;
          background: rgba(155, 221, 133, 0.06);
          color: #d5c7af;
          line-height: 1.8;
          margin-top: 18px;
        }

        .code-line {
          display: block;
          margin-top: 8px;
          color: #9eff7f;
        }

        @media (max-width: 900px) {
          .topbar {
            flex-direction: column;
          }

          .window-body,
          .panel-grid {
            grid-template-columns: 1fr;
          }

          .sidebar {
            border-right: 0;
            border-bottom: 2px solid #314533;
          }

          .module-grid,
          .small-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 560px) {
          .site-shell {
            padding: 10px;
          }

          .content-window,
          .sidebar,
          .topbar {
            padding: 16px;
          }

          .tab {
            padding: 10px 12px;
            font-size: 12px;
          }
        }
      `}</style>
    </main>
  );
}

function HomePanel() {
  return (
    <div className="panel panel-grid">
      <div>
        <div className="terminal-line">&gt; boogerclient returns this christmas</div>
        <h2 className="hero-title">A cleaner Minecraft client, built like a little launcher.</h2>
        <p className="hero-copy">
          Booger Client is being rebuilt as a Fabric utility mod for players who want useful HUD tools, a simple Right Shift menu, cosmetics, profiles, and a client that feels personal instead of fake.
        </p>
        <div className="button-row">
          <a className="main-button" href={DISCORD}>Join Discord</a>
          <a className="ghost-button" href="#" aria-label="Use the Modules tab">View modules</a>
        </div>
      </div>
      <div className="release-card">
        <span className="tag">chosen window</span>
        <h3>Christmas</h3>
        <p>
          The release window was picked so the client has time to become stable, clean, and actually useful before it gets pushed out.
        </p>
      </div>
    </div>
  );
}

function BuildsPanel() {
  return (
    <div className="panel">
      <div className="terminal-line">&gt; builds / current status</div>
      <div className="log-list">
        {devlog.map(([version, text]) => (
          <div className="log-row" key={version}>
            <strong>{version}</strong>
            <p>{text}</p>
          </div>
        ))}
      </div>
      <div className="download-box">
        Public downloads are not ready yet. Testing builds are being cleaned up first.
        <span className="code-line">current goal: Christmas beta</span>
      </div>
    </div>
  );
}

function ModulesPanel() {
  return (
    <div className="panel">
      <div className="terminal-line">&gt; modules / local utility features</div>
      <div className="module-grid">
        {modules.map(([name, description], index) => (
          <div className="module-card" key={name}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className="module-meta">
              <span>{index < 3 ? "real base" : "planned"}</span>
              <span>{index < 3 ? "active" : "soon"}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HudPanel() {
  return (
    <div className="panel">
      <div className="terminal-line">&gt; hud / clean screen tools</div>
      <p className="panel-copy">The HUD should stay readable and not cover the whole screen. Each widget will eventually be movable, scalable, and saved per profile.</p>
      <div className="small-grid">
        {hudItems.map((item) => (
          <div className="small-card" key={item}>
            <h3>{item}</h3>
            <p>Small, clean, and toggleable.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CosmeticsPanel() {
  return (
    <div className="panel">
      <div className="terminal-line">&gt; cosmetics / client personality</div>
      <p className="panel-copy">Cosmetics are planned to be visual only. They should make the client feel fun without giving unfair gameplay advantages.</p>
      <div className="small-grid">
        {cosmetics.map((item) => (
          <div className="small-card" key={item}>
            <h3>{item}</h3>
            <p>Preview and unlock system planned.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProfilesPanel() {
  return (
    <div className="panel">
      <div className="terminal-line">&gt; profiles / save your setup</div>
      <div className="module-grid">
        <div className="module-card"><h3>Survival</h3><p>Coords, armor, CPS, and clean HUD tools.</p><div className="module-meta"><span>preset</span><span>planned</span></div></div>
        <div className="module-card"><h3>Recording</h3><p>Cleaner screen, less clutter, better screenshots.</p><div className="module-meta"><span>preset</span><span>planned</span></div></div>
        <div className="module-card"><h3>PvP</h3><p>Keystrokes, CPS, armor HUD, and FPS display.</p><div className="module-meta"><span>preset</span><span>planned</span></div></div>
        <div className="module-card"><h3>Cozy</h3><p>Cosmetics, particles, and simple visual tweaks.</p><div className="module-meta"><span>preset</span><span>planned</span></div></div>
      </div>
    </div>
  );
}

function OwnerPanel() {
  return (
    <div className="panel">
      <div className="terminal-line">&gt; owner / snot2 build tools</div>
      <h2 className="hero-title">Owner panel without fake server powers.</h2>
      <p className="hero-copy">
        The owner panel should show build status, local debug info, cosmetic unlock previews, and client management tools. Global ranks and live users need a server plugin or online API later.
      </p>
      <div className="module-grid">
        <div className="module-card"><h3>Build Status</h3><p>Show current version, broken modules, and next fix.</p><div className="module-meta"><span>owner</span><span>realistic</span></div></div>
        <div className="module-card"><h3>Local Rank</h3><p>Display [OWNER] snot2 locally inside the client UI.</p><div className="module-meta"><span>owner</span><span>safe</span></div></div>
      </div>
    </div>
  );
}

function DevlogPanel() {
  return (
    <div className="panel">
      <div className="terminal-line">&gt; devlog / honest updates</div>
      <div className="log-list">
        {devlog.map(([version, text]) => (
          <div className="log-row" key={version}>
            <strong>{version}</strong>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FaqPanel() {
  return (
    <div className="panel">
      <div className="terminal-line">&gt; faq / quick answers</div>
      <div className="faq-grid">
        <div className="faq-card"><h3>Is it released?</h3><p>Not yet. The plan is Christmas, after the real module base is cleaned up.</p></div>
        <div className="faq-card"><h3>Is it a cheat client?</h3><p>No. The goal is HUD tools, customization, cosmetics, and quality-of-life features.</p></div>
        <div className="faq-card"><h3>What version?</h3><p>Minecraft Java Fabric 1.21.11.</p></div>
        <div className="faq-card"><h3>How do I follow updates?</h3><p>Join the Discord and watch the devlog.</p></div>
      </div>
    </div>
  );
}

function DiscordPanel() {
  return (
    <div className="panel">
      <div className="terminal-line">&gt; discord / community</div>
      <h2 className="hero-title">Help shape the comeback.</h2>
      <p className="hero-copy">
        Suggest features, follow builds, test previews, and help decide what Booger Client should become before Christmas.
      </p>
      <div className="button-row">
        <a className="main-button" href={DISCORD}>Join the Discord</a>
      </div>
    </div>
  );
}
