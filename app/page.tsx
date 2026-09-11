"use client";

import { useMemo, useState } from "react";

const DISCORD = "https://discord.gg/5HxHgKdfMu";

const tabs = [
  "Home",
  "Builds",
  "Modules",
  "HUD",
  "Cosmetics",
  "Profiles",
  "Owner",
  "Download",
  "Changelog",
  "Screenshots",
  "FAQ",
  "Discord",
];

const modules = [
  ["Fullbright", "Visual", "working base"],
  ["CPS Counter", "HUD", "working base"],
  ["Coordinates", "HUD", "working base"],
  ["Keystrokes", "HUD", "in progress"],
  ["Armor HUD", "HUD", "in progress"],
  ["Zoom", "Utility", "planned"],
  ["Profiles", "Config", "local saves"],
  ["Right Shift Menu", "GUI", "working base"],
];

const devNotes = [
  "Christmas window chosen so the client can be fixed properly.",
  "Right Shift is the only planned menu key.",
  "No fake server-wide ranks until a real API/server plugin exists.",
  "Current focus: working modules first, cosmetics after.",
];

export default function Page() {
  const [active, setActive] = useState("Home");

  const activeText = useMemo(() => {
    switch (active) {
      case "Builds":
        return "Current build target: Minecraft Fabric 1.21.11. The goal is a clean starter build with real local modules before public beta.";
      case "Modules":
        return "Modules are being rebuilt one at a time. No more fake switches that only change text.";
      case "HUD":
        return "HUD tools come first: CPS, coordinates, keystrokes, armor HUD, and cleaner on-screen info.";
      case "Cosmetics":
        return "Capes, badges, trails, and seasonal cosmetics are planned after the base client feels solid.";
      case "Profiles":
        return "Profiles save local client settings so players can swap setups without rebuilding everything.";
      case "Owner":
        return "Owner tools are for snot2 only. Global ranks need a server plugin or online API later.";
      case "Download":
        return "The public download is not ready yet. Test builds are private until the starter modules work correctly.";
      case "Changelog":
        return "Latest direction: right shift only, cleaner GUI scale, working local modules, Christmas release window.";
      case "Screenshots":
        return "Screenshots will go here once the V6/V7 GUI looks clean enough to show publicly.";
      case "FAQ":
        return "Booger Client is a Fabric utility mod/client. It is being built to stay fair and useful.";
      case "Discord":
        return "Join the Discord for progress updates, beta testing, polls, and release announcements.";
      default:
        return "A small Minecraft Fabric client project being rebuilt into something cleaner, more usable, and less fake before Christmas.";
    }
  }, [active]);

  return (
    <main className="page">
      <section className="clientFrame">
        <div className="topStrip">
          <div className="brandBlock">
            <div className="tinyLogo">BC</div>
            <div>
              <p className="eyebrow">minecraft fabric 1.21.11</p>
              <h1>Booger Client</h1>
            </div>
          </div>

          <div className="topActions">
            <span className="statusDot" />
            <span>christmas release</span>
            <a href={DISCORD}>discord</a>
          </div>
        </div>

        <nav className="tabBar" aria-label="Booger Client tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={active === tab ? "tab active" : "tab"}
              onClick={() => setActive(tab)}
              type="button"
            >
              {tab}
            </button>
          ))}
        </nav>

        <div className="contentGrid">
          <aside className="sidePanel">
            <div className="iconCard">BC</div>
            <h2>Booger Client Beta</h2>
            <p>
              Cleaner menu, useful HUD tools, cosmetics, and a Christmas comeback plan.
            </p>

            <div className="meterLabel">
              <span>real module base</span>
              <span>3 / 8</span>
            </div>
            <div className="meter"><span /></div>

            <ul className="miniList">
              <li>Right Shift menu</li>
              <li>Owner: snot2</li>
              <li>No public build yet</li>
            </ul>
          </aside>

          <section className="mainPanel">
            <div className="windowTitle">/boogerclient/{active.toLowerCase()}.txt</div>
            <div className="terminalLine">&gt; opening {active.toLowerCase()} tab</div>

            <div className="heroRow">
              <div>
                <h3>{active === "Home" ? "Less fake. More playable." : active}</h3>
                <p>{activeText}</p>
              </div>
              <div className="releaseCard">
                <span>chosen window</span>
                <strong>Christmas</strong>
                <p>More time to fix the client before release.</p>
              </div>
            </div>

            <div className="moduleGrid">
              {modules.map(([name, type, status]) => (
                <article key={name} className="moduleCard">
                  <div>
                    <strong>{name}</strong>
                    <small>{type}</small>
                  </div>
                  <span className={status === "working base" || status === "local saves" ? "tag good" : status === "in progress" ? "tag wait" : "tag"}>
                    {status}
                  </span>
                </article>
              ))}
            </div>
          </section>

          <aside className="rightPanel">
            <div className="windowTitle">dev-notes.log</div>
            {devNotes.map((note, index) => (
              <p key={note} className="note">
                <span>{String(index + 1).padStart(2, "0")}</span>
                {note}
              </p>
            ))}

            <a className="bigButton" href={DISCORD}>Join Discord</a>
          </aside>
        </div>
      </section>

      <style>{`
        :root {
          --bg: #090d0a;
          --frame: #0f1a13;
          --panel: #111f17;
          --panel2: #17271d;
          --line: #35523b;
          --line2: #5e7d58;
          --text: #f5eddc;
          --muted: #c6bca6;
          --green: #9fd27f;
          --green2: #76ff5d;
          --gold: #ffd46a;
          --red: #c96a55;
        }

        * { box-sizing: border-box; }
        html, body { margin: 0; min-height: 100%; background: var(--bg); }
        body {
          background:
            linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,.018) 1px, transparent 1px),
            radial-gradient(circle at top left, rgba(116, 255, 93, .12), transparent 32rem),
            linear-gradient(135deg, #111b13 0%, #090d0a 55%, #0b0b09 100%);
          background-size: 4px 4px, 4px 4px, auto, auto;
          color: var(--text);
          font-family: "Courier New", monospace;
        }

        .page {
          min-height: 100vh;
          padding: clamp(18px, 4vw, 44px);
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }

        .clientFrame {
          width: min(1180px, 100%);
          min-height: min(780px, calc(100vh - 52px));
          border: 2px solid var(--line);
          background: rgba(10, 18, 13, .92);
          box-shadow: 0 0 0 5px rgba(0,0,0,.35), 0 24px 60px rgba(0,0,0,.45);
        }

        .topStrip {
          padding: clamp(18px, 3vw, 30px);
          border-bottom: 2px solid var(--line);
          display: flex;
          justify-content: space-between;
          gap: 18px;
          align-items: center;
          background: rgba(17, 31, 23, .92);
        }

        .brandBlock { display: flex; align-items: center; gap: 18px; min-width: 0; }
        .tinyLogo {
          width: 74px;
          height: 74px;
          display: grid;
          place-items: center;
          border: 3px solid #d8f8bd;
          outline: 4px solid #5b8b4d;
          background: var(--green);
          color: #0a140d;
          font-weight: 900;
          font-size: 24px;
          flex: 0 0 auto;
        }
        .eyebrow {
          margin: 0 0 8px;
          color: var(--green);
          font-size: clamp(11px, 1.3vw, 13px);
          text-transform: uppercase;
          letter-spacing: .08em;
        }
        h1 {
          margin: 0;
          font-size: clamp(38px, 7vw, 76px);
          line-height: .9;
          font-weight: 400;
          letter-spacing: -0.06em;
          overflow-wrap: anywhere;
        }

        .topActions {
          display: flex;
          gap: 10px;
          align-items: center;
          flex-wrap: wrap;
          justify-content: flex-end;
          color: var(--muted);
          font-size: 13px;
          text-transform: lowercase;
        }
        .statusDot {
          width: 9px;
          height: 9px;
          background: var(--green2);
          display: inline-block;
          box-shadow: 0 0 12px var(--green2);
        }
        .topActions a, .bigButton {
          color: var(--text);
          text-decoration: none;
          border: 1px solid var(--line2);
          padding: 12px 16px;
          background: rgba(159, 210, 127, .08);
        }

        .tabBar {
          min-height: 40px;
          border-bottom: 2px solid var(--line);
          display: flex;
          flex-wrap: wrap;
          gap: 0;
          background: #0b130e;
        }
        .tab {
          appearance: none;
          border: 0;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          background: transparent;
          color: var(--text);
          padding: 11px 14px;
          font-family: inherit;
          font-weight: 700;
          cursor: pointer;
          font-size: 13px;
        }
        .tab:hover, .tab.active {
          background: var(--green);
          color: #0b130e;
        }

        .contentGrid {
          display: grid;
          grid-template-columns: 260px minmax(0, 1fr) 300px;
          min-height: 560px;
        }
        .sidePanel, .mainPanel, .rightPanel { min-width: 0; }
        .sidePanel {
          border-right: 2px solid var(--line);
          padding: 22px;
          background: rgba(15, 26, 19, .88);
        }
        .sidePanel h2 { font-size: 15px; margin: 18px 0 10px; }
        .sidePanel p { color: var(--text); line-height: 1.7; font-size: 13px; margin: 0 0 20px; }
        .iconCard {
          width: 70px;
          height: 70px;
          display: grid;
          place-items: center;
          color: #09130c;
          font-size: 22px;
          font-weight: 900;
          background: var(--green);
          border: 2px solid #e1ffd0;
          box-shadow: 5px 5px 0 #5b8b4d;
        }
        .meterLabel { display: flex; justify-content: space-between; font-size: 11px; color: var(--muted); margin-bottom: 8px; }
        .meter { border: 1px solid var(--line2); height: 14px; padding: 2px; }
        .meter span { display: block; width: 38%; height: 100%; background: repeating-linear-gradient(90deg, var(--green) 0 8px, #d8f8bd 8px 14px); }
        .miniList { list-style: none; padding: 0; margin: 22px 0 0; display: grid; gap: 9px; }
        .miniList li { border: 1px solid #293d30; padding: 12px; font-size: 12px; color: var(--text); background: #0c150f; }

        .mainPanel { padding: 24px 26px 30px; }
        .windowTitle { color: var(--muted); font-size: 13px; margin-bottom: 8px; }
        .terminalLine { color: var(--green2); font-size: 13px; margin-bottom: 18px; }
        .heroRow {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 290px;
          gap: 20px;
          margin-bottom: 20px;
        }
        .heroRow > div:first-child {
          border: 1px solid #3a493d;
          border-radius: 0 28px 28px 0;
          background: rgba(245, 237, 220, .06);
          padding: clamp(18px, 3vw, 28px);
        }
        h3 {
          margin: 0 0 15px;
          font-size: clamp(26px, 4.2vw, 48px);
          line-height: 1.15;
          font-weight: 400;
          max-width: 12ch;
        }
        .heroRow p { color: var(--muted); line-height: 1.65; margin: 0; font-size: 14px; }
        .releaseCard {
          border: 1px dashed #846f43;
          background: #241a13;
          padding: 20px;
          min-height: 190px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .releaseCard span {
          align-self: flex-start;
          background: var(--red);
          color: #fff4df;
          padding: 8px 11px;
          font-weight: 800;
          font-size: 11px;
          transform: rotate(-2deg);
        }
        .releaseCard strong { color: var(--gold); font-size: clamp(30px, 4vw, 44px); margin: 22px 0 12px; font-weight: 400; }

        .moduleGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }
        .moduleCard {
          border: 1px solid #314536;
          background: #0d1711;
          padding: 14px;
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: center;
          min-height: 74px;
        }
        .moduleCard strong { display: block; font-size: 14px; margin-bottom: 6px; }
        .moduleCard small { display: block; color: var(--muted); }
        .tag {
          border: 1px solid var(--line2);
          color: var(--muted);
          padding: 6px 8px;
          font-size: 11px;
          white-space: nowrap;
        }
        .tag.good { color: #0b130e; background: var(--green); border-color: #d8f8bd; }
        .tag.wait { color: var(--gold); border-color: var(--gold); }

        .rightPanel {
          border-left: 2px solid var(--line);
          padding: 24px 20px;
          background: rgba(13, 23, 17, .9);
        }
        .note {
          border: 1px solid #2a3c30;
          background: #0b130e;
          padding: 12px;
          margin: 0 0 10px;
          color: var(--muted);
          line-height: 1.55;
          font-size: 12px;
        }
        .note span { color: var(--green); margin-right: 8px; font-weight: 900; }
        .bigButton {
          display: block;
          margin-top: 20px;
          text-align: center;
          background: var(--green);
          color: #0b130e;
          font-weight: 900;
          border: 2px solid #d8f8bd;
        }

        @media (max-width: 1050px) {
          .contentGrid { grid-template-columns: 220px minmax(0, 1fr); }
          .rightPanel { grid-column: 1 / -1; border-left: 0; border-top: 2px solid var(--line); }
          .heroRow { grid-template-columns: 1fr; }
        }
        @media (max-width: 760px) {
          .page { padding: 10px; }
          .topStrip { align-items: flex-start; flex-direction: column; }
          .tinyLogo { width: 58px; height: 58px; font-size: 18px; }
          .contentGrid { grid-template-columns: 1fr; }
          .sidePanel { border-right: 0; border-bottom: 2px solid var(--line); }
          .moduleGrid { grid-template-columns: 1fr; }
          .tab { flex: 1 0 auto; }
        }
      `}</style>
    </main>
  );
}
