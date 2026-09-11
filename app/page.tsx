"use client";

import { useMemo, useState } from "react";

const DISCORD = "https://discord.gg/5HxHgKdfMu";

const tabs = [
  "home",
  "builds",
  "modules",
  "hud",
  "cosmetics",
  "owner",
  "notes",
  "faq",
  "discord",
] as const;

type Tab = (typeof tabs)[number];

const tabLabels: Record<Tab, string> = {
  home: "Home",
  builds: "Builds",
  modules: "Modules",
  hud: "HUD",
  cosmetics: "Cosmetics",
  owner: "Owner",
  notes: "Notes",
  faq: "FAQ",
  discord: "Discord",
};

const modules = [
  ["Fullbright", "Lighting utility for caves and dark areas.", "working"],
  ["CPS Counter", "Tracks left/right clicks on your HUD.", "working"],
  ["Coordinates", "Shows player position cleanly on screen.", "working"],
  ["Keystrokes", "Displays WASD, space, and mouse buttons.", "testing"],
  ["Armor HUD", "Shows armor durability without opening inventory.", "testing"],
  ["Zoom", "Simple clean zoom key for screenshots and gameplay.", "planned"],
  ["Profiles", "Save setups for normal play, PvP, and screenshots.", "planned"],
  ["Cosmetics", "Local menu for capes, trails, badges, and seasonal items.", "planned"],
];

const changelog = [
  "Right Shift is the only menu key now.",
  "Removed the extra backup keys that made testing messy.",
  "Rebuilding the menu around real local modules first.",
  "Christmas was chosen as the release window so the client can get polished.",
];

function StatusTag({ value }: { value: string }) {
  return <span className={`status ${value}`}>{value}</span>;
}

function TabButton({ tab, active, onClick }: { tab: Tab; active: boolean; onClick: () => void }) {
  return (
    <button className={`tab ${active ? "active" : ""}`} onClick={onClick} type="button">
      {tabLabels[tab]}
    </button>
  );
}

function Window({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`window ${className}`}>
      <div className="windowTitle">
        <span>{title}</span>
        <div className="windowDots"><i /><i /><i /></div>
      </div>
      <div className="windowBody">{children}</div>
    </section>
  );
}

export default function Page() {
  const [active, setActive] = useState<Tab>("home");

  const enabledCount = useMemo(() => modules.filter((m) => m[2] === "working").length, []);

  return (
    <main className="pageShell">
      <div className="noise" />
      <div className="siteFrame">
        <header className="topbar">
          <div>
            <div className="eyebrow">Minecraft Fabric 1.21.11</div>
            <h1>Booger Client</h1>
          </div>
          <div className="topRight">
            <span className="badge">Christmas release</span>
            <a href={DISCORD} className="smallLink">Discord</a>
          </div>
        </header>

        <nav className="tabs" aria-label="Booger Client sections">
          {tabs.map((tab) => (
            <TabButton key={tab} tab={tab} active={active === tab} onClick={() => setActive(tab)} />
          ))}
        </nav>

        <div className="contentGrid">
          <aside className="sidePanel">
            <div className="miniLogo">BC</div>
            <p className="sideTitle">Booger Client Beta</p>
            <p className="sideText">A small Minecraft client project with a cleaner menu, useful HUD tools, cosmetics, and a Christmas comeback plan.</p>
            <div className="meter">
              <div className="meterFill" />
            </div>
            <div className="sideStats">
              <span>{enabledCount}/8 real module base</span>
              <span>Right Shift menu</span>
              <span>Owner: snot2</span>
            </div>
          </aside>

          <section className="mainPanel">
            {active === "home" && (
              <div className="twoCol">
                <Window title="boot.txt" className="heroWindow">
                  <p className="terminalLine green">&gt; boogerclient returns this christmas</p>
                  <h2>Less fake. More playable.</h2>
                  <p>
                    Booger Client is being rebuilt as a clean Fabric utility mod. The plan is simple: make the menu feel good, make the local modules actually work, then polish everything before Christmas.
                  </p>
                  <div className="buttonRow">
                    <a href={DISCORD} className="primaryBtn">Join Discord</a>
                    <button className="ghostBtn" type="button" onClick={() => setActive("modules")}>View modules</button>
                  </div>
                </Window>

                <Window title="release-card.dat">
                  <div className="releaseCard">
                    <span className="sticker">chosen window</span>
                    <h3>Christmas</h3>
                    <p>More time to fix the client properly instead of dropping another rushed placeholder build.</p>
                  </div>
                </Window>
              </div>
            )}

            {active === "builds" && (
              <Window title="builds">
                <h2>Current build direction</h2>
                <div className="listCards">
                  <div><b>V6 real starter</b><p>Right Shift only, real local settings, basic HUD modules, owner tab.</p></div>
                  <div><b>Next build</b><p>Cleaner click handling, fewer fake pages, better module backend.</p></div>
                  <div><b>Christmas build</b><p>Public-ready beta with a polished menu, config saving, and preview cosmetics.</p></div>
                </div>
              </Window>
            )}

            {active === "modules" && (
              <Window title="modules">
                <div className="sectionTop">
                  <div>
                    <h2>Modules</h2>
                    <p>Real features first. Fancy pages later.</p>
                  </div>
                  <span className="countBox">{enabledCount} working</span>
                </div>
                <div className="moduleGrid">
                  {modules.map(([name, desc, status]) => (
                    <article className="moduleCard" key={name}>
                      <div className="moduleHead">
                        <b>{name}</b>
                        <StatusTag value={status} />
                      </div>
                      <p>{desc}</p>
                    </article>
                  ))}
                </div>
              </Window>
            )}

            {active === "hud" && (
              <Window title="hud">
                <h2>HUD tools</h2>
                <div className="previewHud">
                  <span>XYZ: 128 / 64 / -420</span>
                  <span>CPS: 7 | 6</span>
                  <span>W A S D</span>
                  <span>Armor: 94%</span>
                </div>
                <p className="muted">The HUD should stay simple: readable, small, and useful without covering half the screen.</p>
              </Window>
            )}

            {active === "cosmetics" && (
              <Window title="cosmetics">
                <h2>Cosmetics</h2>
                <div className="cosmeticShelf">
                  <div><b>Founder Cape</b><span>owner</span></div>
                  <div><b>Slime Trail</b><span>testing</span></div>
                  <div><b>Christmas Badge</b><span>seasonal</span></div>
                  <div><b>Booger Cape</b><span>planned</span></div>
                </div>
                <p className="muted">Cosmetics are planned as local/client-side visuals first. Server-wide visibility would need a server plugin or API later.</p>
              </Window>
            )}

            {active === "owner" && (
              <Window title="owner-panel">
                <h2>Owner Panel</h2>
                <div className="ownerBox">
                  <span className="ownerBadge">[OWNER] snot2</span>
                  <p>Owner tools are for local testing, build info, config checks, and future admin settings. No fake rank system until a real backend exists.</p>
                </div>
              </Window>
            )}

            {active === "notes" && (
              <Window title="dev-notes">
                <h2>Dev notes</h2>
                <ul className="notesList">
                  {changelog.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </Window>
            )}

            {active === "faq" && (
              <Window title="faq">
                <h2>FAQ</h2>
                <div className="faqGrid">
                  <div><b>Is it released?</b><p>Not yet. Christmas is the target window.</p></div>
                  <div><b>Is it a cheat client?</b><p>No. It is being built around utility, visuals, HUD, cosmetics, and customization.</p></div>
                  <div><b>Why not add global ranks yet?</b><p>Because real global ranks need a server plugin or online API.</p></div>
                </div>
              </Window>
            )}

            {active === "discord" && (
              <Window title="discord">
                <h2>Join the comeback</h2>
                <p>Follow updates, test builds, suggest features, and help shape the Christmas release.</p>
                <a href={DISCORD} className="primaryBtn">Join the Discord</a>
              </Window>
            )}
          </section>
        </div>
      </div>

      <style jsx>{`
        :global(*) { box-sizing: border-box; }
        :global(body) { margin: 0; background: #0d1110; color: #f3ead7; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
        :global(a) { color: inherit; text-decoration: none; }
        .pageShell { min-height: 100vh; padding: 28px; position: relative; overflow: hidden; background:
          radial-gradient(circle at 20% 10%, rgba(128, 190, 105, .15), transparent 28%),
          radial-gradient(circle at 90% 0%, rgba(196, 91, 77, .12), transparent 24%),
          linear-gradient(180deg, #111614, #0b0f0e 60%, #080a09); }
        .noise { position: fixed; inset: 0; pointer-events: none; opacity: .12; background-image: repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,.05) 4px); }
        .siteFrame { max-width: 1180px; margin: 0 auto; border: 2px solid #334437; background: rgba(18, 24, 22, .92); box-shadow: 0 0 0 4px rgba(0,0,0,.28), 0 24px 70px rgba(0,0,0,.45); position: relative; }
        .topbar { min-height: 108px; padding: 24px; display: flex; align-items: center; justify-content: space-between; gap: 20px; border-bottom: 2px solid #334437; background: linear-gradient(180deg, #1b241e, #151b18); }
        .eyebrow { color: #90c979; font-size: 12px; letter-spacing: .08em; text-transform: uppercase; margin-bottom: 8px; }
        h1, h2, h3, p { margin-top: 0; }
        h1 { font-size: clamp(34px, 6vw, 70px); margin-bottom: 0; line-height: .9; letter-spacing: -3px; }
        h2 { font-size: clamp(24px, 4vw, 44px); margin-bottom: 14px; letter-spacing: -2px; }
        h3 { font-size: 42px; margin-bottom: 10px; color: #f0c76a; }
        p { color: #c9bea9; line-height: 1.6; }
        .topRight { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; justify-content: flex-end; }
        .badge, .smallLink, .countBox { border: 1px solid #52664c; background: #202b22; color: #d9f7cb; padding: 10px 12px; font-size: 13px; }
        .smallLink { color: #f3ead7; }
        .tabs { display: flex; overflow-x: auto; border-bottom: 2px solid #334437; background: #101412; }
        .tab { appearance: none; border: 0; border-right: 1px solid #334437; background: #131a16; color: #b8b09f; padding: 14px 18px; font: inherit; cursor: pointer; white-space: nowrap; }
        .tab:hover { background: #1d261f; color: #fff2d3; }
        .tab.active { background: #8fbf6f; color: #081009; font-weight: 900; }
        .contentGrid { display: grid; grid-template-columns: 260px 1fr; min-height: 610px; }
        .sidePanel { border-right: 2px solid #334437; background: #121815; padding: 22px; }
        .miniLogo { width: 76px; height: 76px; display: grid; place-items: center; font-size: 26px; font-weight: 900; color: #0b100d; background: #8fbf6f; border: 2px solid #d8ffd2; box-shadow: inset -6px -6px 0 rgba(0,0,0,.18); margin-bottom: 18px; }
        .sideTitle { color: #fff1d1; font-weight: 900; margin-bottom: 8px; }
        .sideText { font-size: 13px; }
        .meter { height: 14px; border: 1px solid #52664c; background: #0b0f0e; margin: 20px 0; }
        .meterFill { height: 100%; width: 46%; background: repeating-linear-gradient(90deg, #8fbf6f, #8fbf6f 8px, #b7df78 8px, #b7df78 14px); }
        .sideStats { display: grid; gap: 8px; font-size: 12px; color: #e6dabf; }
        .sideStats span { border: 1px solid #27322b; padding: 9px; background: #0e1311; }
        .mainPanel { padding: 24px; overflow: hidden; }
        .twoCol { display: grid; grid-template-columns: minmax(0, 1.4fr) minmax(260px, .8fr); gap: 18px; align-items: start; }
        .window { border: 2px solid #334437; background: #121815; box-shadow: 6px 6px 0 rgba(0,0,0,.24); margin-bottom: 18px; }
        .windowTitle { height: 42px; padding: 0 14px; border-bottom: 2px solid #334437; display: flex; align-items: center; justify-content: space-between; background: #1a211d; color: #f6e7c6; font-weight: 900; }
        .windowDots { display: flex; gap: 7px; }
        .windowDots i { width: 9px; height: 9px; background: #52664c; display: block; }
        .windowBody { padding: 22px; }
        .terminalLine { font-size: 13px; color: #9cff7d; margin-bottom: 14px; }
        .buttonRow { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 22px; }
        .primaryBtn, .ghostBtn { display: inline-flex; align-items: center; justify-content: center; min-height: 44px; padding: 0 16px; border: 2px solid #d9ffd0; background: #8fbf6f; color: #071009; font: inherit; font-weight: 900; cursor: pointer; box-shadow: 4px 4px 0 rgba(0,0,0,.3); }
        .ghostBtn { background: #19221d; color: #f3ead7; border-color: #52664c; }
        .releaseCard { min-height: 250px; padding: 16px; border: 1px dashed #7a6540; background: linear-gradient(180deg, #241c16, #181411); }
        .sticker { display: inline-block; background: #c45b4d; color: #fff2dd; padding: 8px 10px; transform: rotate(-2deg); font-size: 12px; font-weight: 900; margin-bottom: 26px; }
        .sectionTop { display: flex; justify-content: space-between; gap: 16px; align-items: start; margin-bottom: 14px; }
        .moduleGrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
        .moduleCard, .listCards > div, .faqGrid > div, .cosmeticShelf > div { border: 1px solid #334437; background: #171f1a; padding: 14px; min-height: 118px; }
        .moduleHead { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 10px; }
        .moduleCard p, .listCards p, .faqGrid p { font-size: 13px; margin-bottom: 0; }
        .status { font-size: 11px; padding: 5px 7px; border: 1px solid #52664c; color: #c9bea9; }
        .status.working { color: #0b1109; background: #9cff7d; border-color: #9cff7d; }
        .status.testing { color: #171006; background: #f0c76a; border-color: #f0c76a; }
        .status.planned { color: #efe0c2; background: #252019; border-color: #7a6540; }
        .listCards, .faqGrid, .cosmeticShelf { display: grid; gap: 12px; }
        .previewHud { border: 2px solid #334437; background: #090d0b; min-height: 240px; padding: 18px; display: grid; align-content: start; gap: 12px; margin-bottom: 18px; }
        .previewHud span { width: fit-content; border: 1px solid #52664c; background: #141b17; padding: 8px 10px; color: #9cff7d; }
        .cosmeticShelf { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .cosmeticShelf div { min-height: 94px; display: grid; align-content: space-between; }
        .cosmeticShelf span { color: #f0c76a; font-size: 12px; }
        .ownerBox { border: 1px solid #7a6540; background: #211a14; padding: 18px; }
        .ownerBadge { display: inline-block; color: #090b07; background: #f0c76a; padding: 8px 10px; font-weight: 900; margin-bottom: 16px; }
        .notesList { margin: 0; padding-left: 20px; color: #c9bea9; line-height: 1.9; }
        .muted { color: #998e7d; }
        @media (max-width: 860px) {
          .pageShell { padding: 12px; }
          .topbar { align-items: flex-start; flex-direction: column; }
          .contentGrid { grid-template-columns: 1fr; }
          .sidePanel { border-right: 0; border-bottom: 2px solid #334437; }
          .twoCol, .moduleGrid, .cosmeticShelf { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}
