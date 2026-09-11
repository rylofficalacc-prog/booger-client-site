"use client";

import { useMemo, useState } from "react";

type TabKey =
  | "home"
  | "launch"
  | "download"
  | "modules"
  | "hud"
  | "cosmetics"
  | "owner"
  | "updates"
  | "screenshots"
  | "faq"
  | "discord";

const DISCORD = "https://discord.gg/5HxHgKdfMu";

const tabs: { key: TabKey; label: string; icon: string }[] = [
  { key: "home", label: "Home", icon: "★" },
  { key: "launch", label: "Launch", icon: "▶" },
  { key: "download", label: "Download", icon: "⬇" },
  { key: "modules", label: "Modules", icon: "▣" },
  { key: "hud", label: "HUD", icon: "⌁" },
  { key: "cosmetics", label: "Cosmetics", icon: "✦" },
  { key: "owner", label: "Owner", icon: "♛" },
  { key: "updates", label: "Updates", icon: "✎" },
  { key: "screenshots", label: "Gallery", icon: "▧" },
  { key: "faq", label: "FAQ", icon: "?" },
  { key: "discord", label: "Discord", icon: "☁" },
];

const modules = [
  ["Fullbright", "Visuals", "Bright caves without needing server changes.", "ON"],
  ["CPS Counter", "HUD", "Tracks clicks in a clean corner widget.", "ON"],
  ["Keystrokes", "HUD", "Shows WASD, space, and mouse input.", "WIP"],
  ["Armor HUD", "HUD", "Displays durability and armor status.", "WIP"],
  ["Coordinates", "HUD", "Shows your live X/Y/Z position.", "ON"],
  ["Zoom", "Utility", "Smooth zoom for screenshots and gameplay.", "WIP"],
  ["Hit Particles", "Visuals", "Adds client-side hit feedback.", "WIP"],
  ["Profiles", "Utility", "Swap between saved setups.", "ON"],
];

const cosmetics = [
  "Founder Cape",
  "Booger Cape",
  "Christmas Cape",
  "Slime Trail",
  "Snow Trail",
  "Owner Crown",
  "Beta Badge",
  "Name Badge",
];

const updates = [
  ["V6 Real Starter", "Right Shift only, working local settings, CPS, coords, and owner panel base."],
  ["GUI Rebuild", "Replacing placeholder screens with cleaner tabs and real local actions."],
  ["Christmas Release", "Chosen so the client has time to feel polished instead of rushed."],
  ["Next Focus", "Armor HUD, keystrokes, profiles, cosmetics preview, and cleaner config."],
];

function StatusPill({ children }: { children: string }) {
  return <span className="statusPill">{children}</span>;
}

function BigButton({ href, children, hollow = false }: { href: string; children: string; hollow?: boolean }) {
  return (
    <a className={hollow ? "bigButton hollow" : "bigButton"} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {children}
    </a>
  );
}

function MiniCard({ title, text, tag }: { title: string; text: string; tag?: string }) {
  return (
    <div className="miniCard">
      {tag && <span className="tinyTag">{tag}</span>}
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default function Page() {
  const [activeTab, setActiveTab] = useState<TabKey>("home");
  const [selectedModule, setSelectedModule] = useState(modules[0]);

  const enabledCount = useMemo(() => modules.filter((m) => m[3] === "ON").length, []);

  return (
    <main className="siteShell">
      <div className="stars" />
      <div className="scanlines" />

      <section className="clientFrame">
        <header className="topBar">
          <div className="windowDots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="titleBlock">
            <span className="logoBox">B</span>
            <div>
              <h1>Booger Client</h1>
              <p>Fabric 1.21.11 • Christmas comeback build</p>
            </div>
          </div>
          <div className="topStats">
            <StatusPill>{enabledCount}/8 working modules</StatusPill>
            <StatusPill>[OWNER] snot2</StatusPill>
          </div>
        </header>

        <nav className="tabBar" aria-label="Booger Client tabs">
          {tabs.map((tab) => (
            <button key={tab.key} className={activeTab === tab.key ? "tab active" : "tab"} onClick={() => setActiveTab(tab.key)}>
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="contentArea">
          {activeTab === "home" && (
            <section className="tabPage homeGrid">
              <div className="heroPanel">
                <span className="eyebrow">Christmas 2026 Release Window</span>
                <h2>Booger Client returns with a cleaner client-style website.</h2>
                <p>
                  A cozy Minecraft Fabric utility mod built around a Right Shift menu, HUD tools, cosmetics, profiles, and a real owner panel for development.
                </p>
                <div className="buttonRow">
                  <BigButton href={DISCORD}>Join Discord</BigButton>
                  <BigButton href="#download" hollow>Download Soon</BigButton>
                </div>
              </div>

              <div className="sideConsole">
                <div className="consoleHeader">client_status.log</div>
                <p><span className="green">✓</span> Right Shift menu</p>
                <p><span className="green">✓</span> No Fabric event crash</p>
                <p><span className="green">✓</span> Owner panel base</p>
                <p><span className="yellow">•</span> Replacing placeholders</p>
                <p><span className="yellow">•</span> Christmas polish active</p>
              </div>

              <MiniCard tag="01" title="Client-style tabs" text="The site now feels more like a Minecraft client menu instead of a portfolio page." />
              <MiniCard tag="02" title="No trailer needed yet" text="Until the ad is final, the site focuses on development status, features, and Discord." />
              <MiniCard tag="03" title="Indie but cleaner" text="Dark panels, green accents, pixel borders, and a cozy handmade game-client feel." />
            </section>
          )}

          {activeTab === "launch" && (
            <section className="tabPage splitPage">
              <div>
                <span className="eyebrow">Launcher Preview</span>
                <h2>Launch panel</h2>
                <p>This is styled like a client home screen. Later, this can link to your real launcher, mod download, setup guide, and update notes.</p>
                <div className="launchBox">
                  <div className="launchLogo">BC</div>
                  <div>
                    <h3>Booger Client Beta</h3>
                    <p>Version: V6 starter • Minecraft: 1.21.11 • Loader: Fabric</p>
                  </div>
                  <button className="fakeLaunch">Coming Christmas</button>
                </div>
              </div>
              <div className="notePanel">
                <h3>Before release</h3>
                <p>We are fixing real features first so the site does not overpromise fake buttons or unfinished modules.</p>
              </div>
            </section>
          )}

          {activeTab === "download" && (
            <section id="download" className="tabPage downloadPage">
              <span className="eyebrow">Download</span>
              <h2>Not public yet.</h2>
              <p>Booger Client is planned for a Christmas release window. Beta builds are being tested before a public download is posted.</p>
              <div className="downloadCard">
                <h3>Public Build</h3>
                <p>Status: Coming Christmas</p>
                <p>Minecraft: Java 1.21.11</p>
                <p>Loader: Fabric</p>
                <BigButton href={DISCORD}>Get beta updates</BigButton>
              </div>
            </section>
          )}

          {activeTab === "modules" && (
            <section className="tabPage moduleLayout">
              <div className="moduleList">
                <div className="sectionTitle">
                  <span className="eyebrow">Modules</span>
                  <h2>Feature tabs</h2>
                </div>
                <div className="moduleGrid">
                  {modules.map((module) => (
                    <button key={module[0]} className={selectedModule[0] === module[0] ? "moduleCard selected" : "moduleCard"} onClick={() => setSelectedModule(module)}>
                      <div>
                        <h3>{module[0]}</h3>
                        <p>{module[2]}</p>
                      </div>
                      <div className="moduleFooter">
                        <span>{module[1]}</span>
                        <strong className={module[3] === "ON" ? "green" : "yellow"}>{module[3]}</strong>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              <aside className="detailPanel">
                <span className="eyebrow">Selected Module</span>
                <h2>{selectedModule[0]}</h2>
                <p>{selectedModule[2]}</p>
                <div className="settingRows">
                  <div><span>Category</span><b>{selectedModule[1]}</b></div>
                  <div><span>Status</span><b>{selectedModule[3]}</b></div>
                  <div><span>Client side</span><b>Yes</b></div>
                </div>
              </aside>
            </section>
          )}

          {activeTab === "hud" && (
            <section className="tabPage cardGridPage">
              <span className="eyebrow">HUD Tools</span>
              <h2>Clean overlays for everyday gameplay.</h2>
              <div className="cards3">
                <MiniCard title="CPS Counter" text="Simple click tracker for PvP and practice." />
                <MiniCard title="Coordinates" text="Live position display for SMPs and travel." />
                <MiniCard title="Keystrokes" text="WASD input overlay planned for the next working build." />
                <MiniCard title="Armor HUD" text="Durability and equipment info without opening inventory." />
                <MiniCard title="Profiles" text="Switch HUD setups for PvP, SMP, or cinematic recording." />
                <MiniCard title="Right Shift GUI" text="One clean menu key. No backup spam binds." />
              </div>
            </section>
          )}

          {activeTab === "cosmetics" && (
            <section className="tabPage cosmeticsPage">
              <div>
                <span className="eyebrow">Cosmetics</span>
                <h2>Seasonal and founder cosmetics.</h2>
                <p>Cosmetics are planned around capes, trails, badges, and profile identity. Some will require future server/API support to show for everyone.</p>
                <div className="cosmeticGrid">
                  {cosmetics.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
              <div className="previewSkin">
                <div className="head" />
                <div className="body" />
                <div className="legs" />
                <p>[OWNER] snot2</p>
              </div>
            </section>
          )}

          {activeTab === "owner" && (
            <section className="tabPage ownerPage">
              <span className="eyebrow">Owner Panel</span>
              <h2>Built for snot2.</h2>
              <p>The owner panel is for local development controls, build testing, cosmetic previews, and future admin tools. Server-wide rank changes will need a plugin or API later.</p>
              <div className="ownerGrid">
                <MiniCard title="Build Tools" text="Quick test toggles for checking modules and HUD states." />
                <MiniCard title="Cosmetic Preview" text="Test owner badge, cape, crown, and Christmas cosmetics." />
                <MiniCard title="User/Ranks Plan" text="Real global ranks need backend support, not fake placeholders." />
                <MiniCard title="Release Checklist" text="Track what is ready before the Christmas public build." />
              </div>
            </section>
          )}

          {activeTab === "updates" && (
            <section className="tabPage updatesPage">
              <span className="eyebrow">Devlog</span>
              <h2>Development notes</h2>
              <div className="timeline">
                {updates.map(([title, text], index) => (
                  <div className="timelineItem" key={title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === "screenshots" && (
            <section className="tabPage screenshotsPage">
              <span className="eyebrow">Gallery</span>
              <h2>Preview slots</h2>
              <p>Add your real Booger Client screenshots here when the GUI and modules are ready.</p>
              <div className="shotGrid">
                <div>GUI Screenshot</div>
                <div>HUD Preview</div>
                <div>Cosmetic Preview</div>
                <div>Christmas Spawn Shot</div>
              </div>
            </section>
          )}

          {activeTab === "faq" && (
            <section className="tabPage faqPage">
              <span className="eyebrow">FAQ</span>
              <h2>Questions</h2>
              <details open><summary>Is Booger Client a cheat client?</summary><p>No. The plan is a fair Fabric utility mod/client with HUD, customization, visuals, cosmetics, and profiles.</p></details>
              <details><summary>When is release?</summary><p>The release window chosen is Christmas. Testing and polish happen before public release.</p></details>
              <details><summary>Why are some features not real yet?</summary><p>Client-only features can work locally. Global users, ranks, and public cosmetics need a server plugin or online API.</p></details>
              <details><summary>What version?</summary><p>Minecraft Java 1.21.11 with Fabric.</p></details>
            </section>
          )}

          {activeTab === "discord" && (
            <section className="tabPage discordPage">
              <span className="eyebrow">Community</span>
              <h2>Join the Booger Client Discord.</h2>
              <p>Follow development, suggest features, see screenshots, and get beta/release updates.</p>
              <BigButton href={DISCORD}>Open Discord</BigButton>
            </section>
          )}
        </div>
      </section>

      <footer className="siteFooter">
        <span>Booger Client • Indie Fabric client site</span>
        <span>Christmas release window</span>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          background: #05070d;
          color: #f3f5ff;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
          min-height: 100vh;
          overflow-x: hidden;
        }
        a { color: inherit; text-decoration: none; }
        button { font: inherit; }
        .siteShell {
          min-height: 100vh;
          padding: 28px;
          position: relative;
          isolation: isolate;
          background:
            radial-gradient(circle at 15% 10%, rgba(108, 255, 105, .16), transparent 25%),
            radial-gradient(circle at 85% 15%, rgba(255, 207, 105, .13), transparent 22%),
            linear-gradient(135deg, #05070d 0%, #0b1220 45%, #0f0c10 100%);
        }
        .stars {
          position: fixed;
          inset: 0;
          background-image:
            radial-gradient(#ffffff 1px, transparent 1px),
            radial-gradient(#7cff6b 1px, transparent 1px),
            radial-gradient(#f7c85b 1px, transparent 1px);
          background-size: 90px 90px, 140px 140px, 180px 180px;
          background-position: 0 0, 40px 70px, 110px 20px;
          opacity: .18;
          z-index: -3;
        }
        .scanlines {
          position: fixed;
          inset: 0;
          background: repeating-linear-gradient(to bottom, rgba(255,255,255,.03) 0 1px, transparent 1px 5px);
          pointer-events: none;
          z-index: -1;
        }
        .clientFrame {
          width: min(1180px, calc(100vw - 56px));
          min-height: calc(100vh - 95px);
          margin: 0 auto;
          border: 2px solid #2f4a68;
          background: rgba(7, 11, 19, .94);
          box-shadow: 0 0 0 3px rgba(0,0,0,.45), 0 24px 80px rgba(0,0,0,.55), inset 0 0 90px rgba(124,255,107,.04);
        }
        .topBar {
          min-height: 100px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 18px 20px;
          background: linear-gradient(180deg, rgba(24, 34, 50, .98), rgba(12, 18, 29, .98));
          border-bottom: 2px solid #25364d;
        }
        .windowDots { display: flex; gap: 7px; }
        .windowDots span {
          width: 12px;
          height: 12px;
          display: block;
          border: 1px solid #496884;
          background: #101927;
        }
        .windowDots span:nth-child(1) { background: #ff6b6b; }
        .windowDots span:nth-child(2) { background: #f7c85b; }
        .windowDots span:nth-child(3) { background: #7cff6b; }
        .titleBlock { display: flex; align-items: center; gap: 14px; flex: 1; }
        .logoBox {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, #74ff64, #223d25);
          color: #07110a;
          border: 2px solid #c4ffbe;
          box-shadow: 4px 4px 0 #000;
          font-weight: 900;
          font-size: 24px;
        }
        h1, h2, h3, p { margin: 0; }
        h1 { font-size: clamp(22px, 3vw, 38px); letter-spacing: -1px; }
        .titleBlock p, .heroPanel p, .tabPage p, .miniCard p, .sideConsole p, details p {
          color: #aeb8ca;
          line-height: 1.65;
        }
        .topStats { display: flex; gap: 10px; flex-wrap: wrap; justify-content: flex-end; }
        .statusPill, .tinyTag {
          border: 1px solid #38516e;
          background: #101927;
          color: #7cff6b;
          padding: 8px 10px;
          font-size: 12px;
          box-shadow: inset 0 0 20px rgba(124,255,107,.04);
        }
        .tabBar {
          display: flex;
          gap: 0;
          overflow-x: auto;
          background: #070b12;
          border-bottom: 2px solid #25364d;
          scrollbar-color: #7cff6b #101927;
        }
        .tab {
          min-width: 112px;
          padding: 14px 14px;
          border: 0;
          border-right: 1px solid #25364d;
          background: #0b111d;
          color: #aeb8ca;
          cursor: pointer;
          transition: .16s ease;
          display: flex;
          gap: 8px;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
        }
        .tab:hover { color: #fff; background: #121b2b; }
        .tab.active {
          color: #07110a;
          background: #7cff6b;
          box-shadow: inset 0 -4px 0 rgba(0,0,0,.22);
          font-weight: 900;
        }
        .contentArea { padding: 24px; }
        .tabPage { animation: showTab .16s ease-out both; }
        @keyframes showTab { from { opacity: 0; transform: translateY(7px); } to { opacity: 1; transform: translateY(0); } }
        .homeGrid {
          display: grid;
          grid-template-columns: 1.35fr .75fr;
          gap: 18px;
        }
        .heroPanel, .sideConsole, .miniCard, .detailPanel, .notePanel, .downloadCard, .launchBox, .previewSkin, details, .shotGrid div {
          border: 2px solid #2a3d58;
          background: rgba(16, 24, 38, .92);
          box-shadow: inset 0 0 50px rgba(255,255,255,.02), 8px 8px 0 rgba(0,0,0,.25);
        }
        .heroPanel { padding: clamp(24px, 4vw, 46px); min-height: 360px; display: flex; flex-direction: column; justify-content: center; }
        .eyebrow { color: #f7c85b; text-transform: uppercase; letter-spacing: .14em; font-size: 12px; font-weight: 900; }
        h2 { font-size: clamp(28px, 5vw, 58px); line-height: .98; margin: 12px 0 16px; letter-spacing: -2px; }
        h3 { font-size: 18px; margin-bottom: 8px; }
        .buttonRow { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 22px; }
        .bigButton {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          padding: 0 18px;
          background: #7cff6b;
          color: #07110a;
          font-weight: 900;
          border: 2px solid #c4ffbe;
          box-shadow: 4px 4px 0 #000;
        }
        .bigButton:hover { transform: translate(-1px, -1px); box-shadow: 6px 6px 0 #000; }
        .bigButton.hollow { background: #101927; color: #f3f5ff; border-color: #496884; }
        .sideConsole { padding: 20px; }
        .consoleHeader { color: #7cff6b; border-bottom: 1px solid #2a3d58; padding-bottom: 10px; margin-bottom: 14px; }
        .green { color: #7cff6b; }
        .yellow { color: #f7c85b; }
        .miniCard { padding: 18px; min-height: 150px; }
        .homeGrid .miniCard { min-height: 170px; }
        .splitPage, .cosmeticsPage { display: grid; grid-template-columns: 1fr 330px; gap: 18px; align-items: start; }
        .launchBox { margin-top: 22px; padding: 18px; display: grid; grid-template-columns: 64px 1fr auto; gap: 16px; align-items: center; }
        .launchLogo { width: 64px; height: 64px; display: grid; place-items: center; background: #7cff6b; color: #07110a; border: 2px solid #c4ffbe; font-weight: 900; font-size: 24px; }
        .fakeLaunch { border: 2px solid #c4ffbe; background: #7cff6b; color: #07110a; padding: 12px 16px; font-weight: 900; }
        .notePanel, .downloadCard { padding: 20px; }
        .downloadPage { max-width: 760px; }
        .downloadCard { margin-top: 20px; display: grid; gap: 10px; }
        .moduleLayout { display: grid; grid-template-columns: 1fr 320px; gap: 18px; align-items: start; }
        .sectionTitle { margin-bottom: 16px; }
        .moduleGrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
        .moduleCard {
          text-align: left;
          padding: 16px;
          min-height: 150px;
          border: 2px solid #2a3d58;
          background: #101827;
          color: #f3f5ff;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .moduleCard:hover, .moduleCard.selected { border-color: #7cff6b; background: #152339; }
        .moduleCard p { font-size: 13px; }
        .moduleFooter, .settingRows div {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          color: #aeb8ca;
          margin-top: 14px;
          border-top: 1px solid #2a3d58;
          padding-top: 12px;
        }
        .detailPanel { padding: 20px; position: sticky; top: 18px; }
        .settingRows { margin-top: 18px; display: grid; gap: 10px; }
        .cards3, .ownerGrid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; margin-top: 20px; }
        .cosmeticGrid { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 20px; }
        .cosmeticGrid span {
          padding: 12px 14px;
          border: 1px solid #38516e;
          background: #101927;
          color: #f3f5ff;
        }
        .previewSkin { min-height: 340px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; padding: 22px; }
        .head, .body, .legs { border: 2px solid #2a3d58; background: linear-gradient(135deg, #7cff6b, #1c3520); box-shadow: 4px 4px 0 #000; }
        .head { width: 82px; height: 82px; }
        .body { width: 104px; height: 128px; }
        .legs { width: 82px; height: 84px; }
        .previewSkin p { color: #f7c85b; font-weight: 900; }
        .timeline { display: grid; gap: 14px; margin-top: 18px; }
        .timelineItem { display: grid; grid-template-columns: 55px 1fr; gap: 16px; padding: 16px; border: 2px solid #2a3d58; background: #101827; }
        .timelineItem > span { color: #7cff6b; font-size: 22px; font-weight: 900; }
        .shotGrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; margin-top: 20px; }
        .shotGrid div { min-height: 210px; display: grid; place-items: center; color: #aeb8ca; }
        .faqPage { max-width: 850px; }
        details { padding: 18px; margin-top: 12px; }
        summary { cursor: pointer; font-weight: 900; color: #f3f5ff; }
        details p { margin-top: 10px; }
        .discordPage { max-width: 720px; min-height: 420px; display: flex; flex-direction: column; justify-content: center; }
        .siteFooter { width: min(1180px, calc(100vw - 56px)); margin: 18px auto 0; display: flex; justify-content: space-between; gap: 12px; color: #aeb8ca; font-size: 12px; }
        @media (max-width: 980px) {
          .topBar { align-items: flex-start; flex-direction: column; }
          .topStats { justify-content: flex-start; }
          .homeGrid, .splitPage, .moduleLayout, .cosmeticsPage { grid-template-columns: 1fr; }
          .detailPanel { position: static; }
          .cards3, .ownerGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 680px) {
          .siteShell { padding: 14px; }
          .clientFrame, .siteFooter { width: calc(100vw - 28px); }
          .contentArea { padding: 14px; }
          .windowDots { display: none; }
          .tab { min-width: 96px; padding: 12px 10px; }
          .moduleGrid, .cards3, .ownerGrid, .shotGrid { grid-template-columns: 1fr; }
          .launchBox { grid-template-columns: 1fr; }
          .siteFooter { flex-direction: column; }
        }
      `}</style>
    </main>
  );
}
