"use client";

import { useState } from "react";

type TabKey =
  | "home"
  | "builds"
  | "modules"
  | "hud"
  | "cosmetics"
  | "owner"
  | "devlog"
  | "faq"
  | "discord";

const DISCORD = "https://discord.gg/5HxHgKdfMu";

const tabs: { key: TabKey; label: string }[] = [
  { key: "home", label: "Home" },
  { key: "builds", label: "Builds" },
  { key: "modules", label: "Modules" },
  { key: "hud", label: "HUD" },
  { key: "cosmetics", label: "Cosmetics" },
  { key: "owner", label: "Owner Panel" },
  { key: "devlog", label: "Devlog" },
  { key: "faq", label: "FAQ" },
  { key: "discord", label: "Discord" },
];

const modules = [
  ["Fullbright", "Brightens dark areas without changing the server."],
  ["CPS Counter", "Shows your clicks per second while playing."],
  ["Keystrokes", "Displays WASD, space, and mouse inputs."],
  ["Coordinates", "Shows your current position cleanly."],
  ["Armor HUD", "Keeps armor durability visible."],
  ["Zoom", "Simple zoom for screenshots and gameplay."],
];

export default function Page() {
  const [tab, setTab] = useState<TabKey>("home");

  return (
    <main className="site">
      <div className="noise" />

      <section className="launcher">
        <header className="top">
          <div>
            <p className="eyebrow">Minecraft Fabric 1.21.11</p>
            <h1>Booger Client</h1>
            <p className="subtitle">
              A small Minecraft client project coming back this Christmas.
            </p>
          </div>

          <div className="topButtons">
            <span className="tag christmas">Christmas Release</span>
            <a className="button ghost" href={DISCORD}>
              Discord
            </a>
          </div>
        </header>

        <nav className="tabs">
          {tabs.map((item) => (
            <button
              key={item.key}
              onClick={() => setTab(item.key)}
              className={tab === item.key ? "active" : ""}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="body">
          <aside className="sidebar">
            <div className="icon">BC</div>

            <h2>Booger Client Beta</h2>
            <p>
              Built for a cleaner menu, useful HUD tools, cosmetics, profiles,
              and a real Christmas comeback.
            </p>

            <div className="progress">
              <span style={{ width: "42%" }} />
            </div>

            <div className="mini">Version: V6 starter</div>
            <div className="mini">Menu key: Right Shift</div>
            <div className="mini">Owner: snot2</div>
            <div className="mini">Status: In development</div>
          </aside>

          <section className="content">
            {tab === "home" && (
              <div className="grid homeGrid">
                <article className="panel mainPanel">
                  <p className="file">/home/booger-client.txt</p>
                  <p className="terminal">&gt; boogerclient returns this christmas</p>
                  <h2>Less fake. More playable.</h2>
                  <p>
                    Booger Client is being rebuilt into a clean Minecraft Fabric
                    mod with a better right-shift menu, real local modules, HUD
                    tools, cosmetics, profiles, and owner features.
                  </p>
                  <p>
                    The Christmas window gives us time to actually polish it
                    instead of dropping another rushed placeholder build.
                  </p>

                  <div className="actions">
                    <a className="button" href={DISCORD}>
                      Join Discord
                    </a>
                    <button className="button ghost" onClick={() => setTab("modules")}>
                      View Modules
                    </button>
                  </div>
                </article>

                <article className="panel release">
                  <span className="sticker">chosen window</span>
                  <h3>Christmas</h3>
                  <p>
                    More time to fix the client properly, clean up the GUI, and
                    make features feel real before release.
                  </p>
                </article>
              </div>
            )}

            {tab === "builds" && (
              <div className="panel">
                <p className="file">/builds/current.dat</p>
                <h2>Build Status</h2>

                <div className="list">
                  <div>
                    <b>V6 Starter</b>
                    <span>Right Shift menu, local module base, config saving.</span>
                  </div>
                  <div>
                    <b>Next Build</b>
                    <span>Cleaner GUI, working HUD rendering, better cosmetics page.</span>
                  </div>
                  <div>
                    <b>Christmas Build</b>
                    <span>Polished public beta goal.</span>
                  </div>
                </div>
              </div>
            )}

            {tab === "modules" && (
              <div className="panel">
                <p className="file">/modules/list.json</p>
                <h2>Modules</h2>
                <p className="muted">
                  Starting with real local modules first. No fake server-wide
                  stuff until there is an API or server plugin.
                </p>

                <div className="cards">
                  {modules.map(([name, desc]) => (
                    <div className="card" key={name}>
                      <div className="cardTop">
                        <b>{name}</b>
                        <span>planned</span>
                      </div>
                      <p>{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tab === "hud" && (
              <div className="panel">
                <p className="file">/hud/layout.txt</p>
                <h2>HUD Tools</h2>
                <div className="list">
                  <div>
                    <b>CPS Counter</b>
                    <span>Small click tracker for PvP and practice.</span>
                  </div>
                  <div>
                    <b>Keystrokes</b>
                    <span>WASD, space, and mouse display.</span>
                  </div>
                  <div>
                    <b>Coordinates</b>
                    <span>Simple position display without opening F3.</span>
                  </div>
                  <div>
                    <b>Armor HUD</b>
                    <span>Durability and armor status while playing.</span>
                  </div>
                </div>
              </div>
            )}

            {tab === "cosmetics" && (
              <div className="panel">
                <p className="file">/cosmetics/catalogue.txt</p>
                <h2>Cosmetics</h2>
                <p className="muted">
                  Cosmetics are being planned as visual client features first.
                </p>

                <div className="cards">
                  {["Founder Cape", "Booger Cape", "Slime Trail", "Owner Crown", "Christmas Hat", "Snow Trail"].map(
                    (item) => (
                      <div className="card small" key={item}>
                        <b>{item}</b>
                        <p>cosmetic item</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {tab === "owner" && (
              <div className="panel">
                <p className="file">/owner/snot2.cfg</p>
                <h2>Owner Panel</h2>
                <p>
                  The owner panel is for snot2 only. It should stay local until
                  the client has a real backend or server plugin.
                </p>

                <div className="list">
                  <div>
                    <b>[OWNER] Badge</b>
                    <span>Special badge shown in the client menu.</span>
                  </div>
                  <div>
                    <b>Build Tools</b>
                    <span>Debug info, module status, and config checks.</span>
                  </div>
                  <div>
                    <b>Future Rank Manager</b>
                    <span>Needs API/server plugin before it can be real.</span>
                  </div>
                </div>
              </div>
            )}

            {tab === "devlog" && (
              <div className="panel">
                <p className="file">/devlog/latest.md</p>
                <h2>Devlog</h2>

                <div className="notes">
                  <p>
                    <b>09/10</b> — Chose Christmas as the comeback release
                    window.
                  </p>
                  <p>
                    <b>09/10</b> — Rebuilt right-shift menu and started real
                    local modules.
                  </p>
                  <p>
                    <b>Next</b> — Fix GUI polish, HUD rendering, and cosmetics
                    preview.
                  </p>
                </div>
              </div>
            )}

            {tab === "faq" && (
              <div className="panel">
                <p className="file">/faq/questions.txt</p>
                <h2>FAQ</h2>

                <div className="list">
                  <div>
                    <b>Is Booger Client released?</b>
                    <span>No. It is planned for a Christmas comeback.</span>
                  </div>
                  <div>
                    <b>Is it a cheat client?</b>
                    <span>No. The goal is clean HUD tools, visuals, and customization.</span>
                  </div>
                  <div>
                    <b>What version?</b>
                    <span>Minecraft Fabric 1.21.11.</span>
                  </div>
                </div>
              </div>
            )}

            {tab === "discord" && (
              <div className="panel discordPanel">
                <p className="file">/community/invite.url</p>
                <h2>Join the Discord</h2>
                <p>
                  Follow development, suggest features, see previews, and get
                  ready for the Christmas beta.
                </p>
                <a className="button" href={DISCORD}>
                  Open Discord
                </a>
              </div>
            )}
          </section>
        </div>
      </section>

      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #070907;
          color: #f6edda;
          font-family: "Courier New", monospace;
        }

        .site {
          min-height: 100vh;
          padding: 28px;
          background:
            radial-gradient(circle at top left, rgba(121, 180, 94, 0.18), transparent 30%),
            radial-gradient(circle at bottom right, rgba(166, 64, 48, 0.14), transparent 32%),
            linear-gradient(135deg, #15120f, #08100b 52%, #060706);
          position: relative;
          overflow-x: hidden;
        }

        .noise {
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.08;
          background-image:
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px);
          background-size: 4px 4px;
        }

        .launcher {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
          border: 2px solid #314934;
          background: rgba(8, 15, 11, 0.94);
          box-shadow: 0 0 0 4px rgba(0,0,0,.45), 0 25px 80px rgba(0,0,0,.55);
        }

        .top {
          min-height: 155px;
          padding: 28px;
          border-bottom: 2px solid #314934;
          display: flex;
          justify-content: space-between;
          gap: 24px;
          align-items: flex-start;
          background: linear-gradient(90deg, #132018, #101611);
        }

        .eyebrow {
          margin: 0 0 14px;
          color: #9bd07f;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        h1 {
          margin: 0;
          font-size: clamp(42px, 7vw, 74px);
          line-height: 0.95;
          font-weight: 400;
          letter-spacing: -3px;
        }

        h2 {
          margin: 0 0 14px;
          font-size: clamp(26px, 4vw, 46px);
          font-weight: 400;
          letter-spacing: -2px;
        }

        h3 {
          margin: 34px 0 18px;
          font-size: 38px;
          font-weight: 400;
          color: #ffd36a;
        }

        .subtitle {
          color: #b9ae96;
          margin: 12px 0 0;
        }

        .topButtons, .actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          align-items: center;
        }

        .tag, .button {
          border: 1px solid #577456;
          background: #142215;
          color: #f6edda;
          padding: 13px 16px;
          font-weight: 700;
          text-decoration: none;
          cursor: pointer;
          font-family: inherit;
          font-size: 14px;
        }

        .button {
          background: #9ac77a;
          color: #08100b;
          box-shadow: inset -4px -4px 0 rgba(0,0,0,.18);
        }

        .button:hover {
          filter: brightness(1.1);
        }

        .button.ghost {
          background: #111a13;
          color: #f6edda;
        }

        .christmas {
          color: #ffd36a;
        }

        .tabs {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
          padding: 8px 10px;
          border-bottom: 2px solid #314934;
          background: #090f0b;
        }

        .tabs button {
          border: 1px solid transparent;
          background: transparent;
          color: #d8ccb7;
          padding: 9px 10px;
          font-family: inherit;
          font-weight: 700;
          cursor: pointer;
        }

        .tabs button:hover,
        .tabs button.active {
          border-color: #7ca36b;
          background: #172618;
          color: #9cff75;
        }

        .body {
          display: grid;
          grid-template-columns: 260px 1fr;
          min-height: 610px;
        }

        .sidebar {
          padding: 24px;
          border-right: 2px solid #314934;
          background: #0c160f;
        }

        .icon {
          width: 74px;
          height: 74px;
          display: grid;
          place-items: center;
          background: #9ac77a;
          color: #061006;
          border: 3px solid #d8f3bd;
          box-shadow: inset -6px -6px 0 rgba(0,0,0,.2);
          font-size: 25px;
          font-weight: 900;
          margin-bottom: 22px;
        }

        .sidebar h2 {
          font-size: 16px;
          letter-spacing: 0;
          font-weight: 900;
          color: #fff3d8;
        }

        .sidebar p {
          color: #f1e4c9;
          line-height: 1.65;
          font-size: 13px;
        }

        .progress {
          height: 14px;
          border: 1px solid #4d674c;
          background: #081008;
          margin: 20px 0;
          padding: 2px;
        }

        .progress span {
          display: block;
          height: 100%;
          background: repeating-linear-gradient(
            90deg,
            #9fe173 0 8px,
            #d4ff9c 8px 15px
          );
        }

        .mini {
          border: 1px solid #27382a;
          padding: 12px;
          margin-top: 8px;
          color: #fff1d0;
          font-size: 12px;
          background: #09120c;
        }

        .content {
          padding: 26px;
          overflow: hidden;
        }

        .grid {
          display: grid;
          gap: 18px;
        }

        .homeGrid {
          grid-template-columns: minmax(0, 1fr) 310px;
          align-items: start;
        }

        .panel {
          border: 1px solid #3d5740;
          background: linear-gradient(135deg, #18221d, #101713);
          padding: 26px;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,.03);
        }

        .mainPanel {
          min-height: 375px;
          border-radius: 0 28px 28px 0;
        }

        .release {
          background: #241a12;
          border-color: #71583e;
          border-style: dashed;
          border-radius: 0 28px 28px 0;
        }

        .sticker {
          display: inline-block;
          background: #c9604c;
          color: #fff5d8;
          padding: 9px 14px;
          transform: rotate(-2deg);
          font-size: 12px;
          font-weight: 900;
        }

        .file {
          color: #d8ccb7;
          margin: 0 0 8px;
        }

        .terminal {
          color: #7eff66;
          font-size: 13px;
          margin: 0 0 30px;
          font-weight: 700;
        }

        .panel p {
          color: #d8ccb7;
          line-height: 1.75;
          max-width: 760px;
        }

        .muted {
          color: #ab9f89 !important;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin-top: 20px;
        }

        .card {
          border: 1px solid #3d5740;
          background: #0d1710;
          padding: 16px;
          min-height: 118px;
        }

        .card.small {
          min-height: 90px;
        }

        .cardTop {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: center;
        }

        .card b,
        .list b {
          color: #fff2d3;
        }

        .cardTop span {
          color: #9cff75;
          font-size: 12px;
          border: 1px solid #436a3d;
          padding: 4px 7px;
        }

        .card p {
          font-size: 13px;
          line-height: 1.55;
          margin-bottom: 0;
        }

        .list {
          display: grid;
          gap: 10px;
          margin-top: 18px;
        }

        .list div {
          border: 1px solid #314934;
          background: #0b130e;
          padding: 14px;
          display: grid;
          gap: 6px;
        }

        .list span {
          color: #b9ae96;
          line-height: 1.5;
        }

        .notes {
          display: grid;
          gap: 12px;
        }

        .notes p {
          border-left: 4px solid #9ac77a;
          padding: 10px 0 10px 14px;
          background: #0c150f;
        }

        .discordPanel {
          min-height: 360px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        }

        @media (max-width: 900px) {
          .site {
            padding: 12px;
          }

          .top {
            flex-direction: column;
          }

          .body {
            grid-template-columns: 1fr;
          }

          .sidebar {
            border-right: none;
            border-bottom: 2px solid #314934;
          }

          .homeGrid,
          .cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
