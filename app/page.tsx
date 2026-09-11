"use client";

import { useMemo, useState } from "react";

type Tab =
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

const DISCORD = "https://discord.gg/5HxHgKdfMu";

const tabs: { id: Tab; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "builds", label: "Builds" },
  { id: "modules", label: "Modules" },
  { id: "hud", label: "HUD" },
  { id: "cosmetics", label: "Cosmetics" },
  { id: "profiles", label: "Profiles" },
  { id: "owner", label: "Owner" },
  { id: "devlog", label: "Devlog" },
  { id: "faq", label: "FAQ" },
  { id: "discord", label: "Discord" },
];

const moduleRows = [
  { name: "Fullbright", status: "working base", desc: "Client-side brightness toggle for caves and night gameplay." },
  { name: "CPS Counter", status: "working base", desc: "Tracks left and right clicks for PvP and practice." },
  { name: "Keystrokes", status: "working base", desc: "Shows movement inputs in a compact HUD widget." },
  { name: "Coordinates", status: "working base", desc: "Cleaner position display without opening the F3 screen." },
  { name: "Armor HUD", status: "next", desc: "Durability display for armor and held item." },
  { name: "Zoom", status: "next", desc: "Simple cinematic zoom for screenshots and normal gameplay." },
];

const hudRows = [
  "CPS Counter",
  "Keystrokes",
  "Coordinates",
  "Armor HUD",
  "Potion Effects",
  "FPS / Ping",
];

const cosmeticRows = [
  "Founder Cape",
  "Booger Cape",
  "Slime Trail",
  "Owner Crown",
  "Christmas Hat",
  "Snow Trail",
  "Name Badges",
  "Profile Accent",
];

const devlog = [
  ["now", "Right Shift only build, cleaner menu, local modules, and config saving."],
  ["next", "Fix HUD rendering, improve click actions, and make cosmetics feel real."],
  ["christmas", "Public beta target with a polished menu and stable starter modules."],
];

function StatusDot({ tone = "green" }: { tone?: "green" | "gold" | "red" }) {
  return <span className={`dot ${tone}`} />;
}

export default function Page() {
  const [tab, setTab] = useState<Tab>("home");
  const [search, setSearch] = useState("");

  const filteredModules = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return moduleRows;
    return moduleRows.filter((m) => `${m.name} ${m.status} ${m.desc}`.toLowerCase().includes(q));
  }, [search]);

  return (
    <main className="pageShell">
      <section className="clientWindow" aria-label="Booger Client website">
        <header className="windowTop">
          <div className="brandBlock">
            <div className="cubeLogo">BC</div>
            <div>
              <p className="tinyLabel">Minecraft Fabric 1.21.11</p>
              <h1>Booger Client</h1>
              <p className="underTitle">Christmas beta comeback build</p>
            </div>
          </div>

          <div className="topStatus">
            <span><StatusDot /> in development</span>
            <span><StatusDot tone="gold" /> release window: Christmas</span>
            <a href={DISCORD} className="miniBtn">Discord</a>
          </div>
        </header>

        <nav className="tabBar" aria-label="Main tabs">
          {tabs.map((item) => (
            <button
              key={item.id}
              className={tab === item.id ? "selected" : ""}
              onClick={() => setTab(item.id)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="windowBody">
          <aside className="leftRail">
            <div className="accountCard">
              <div className="avatarBox">s2</div>
              <div>
                <b>[OWNER] snot2</b>
                <p>local owner profile</p>
              </div>
            </div>

            <div className="meterBlock">
              <div className="meterTop">
                <span>build progress</span>
                <b>42%</b>
              </div>
              <div className="meter"><span /></div>
            </div>

            <button onClick={() => setTab("builds")} className="sideButton" type="button">
              Current build: V6 starter
            </button>
            <button onClick={() => setTab("modules")} className="sideButton" type="button">
              3 real module base
            </button>
            <button onClick={() => setTab("owner")} className="sideButton" type="button">
              Owner panel planned
            </button>
            <button onClick={() => setTab("discord")} className="sideButton gold" type="button">
              Join before Christmas
            </button>
          </aside>

          <section className="mainArea">
            {tab === "home" && (
              <div className="homeLayout">
                <article className="panel heroPanel">
                  <p className="path">C:/BoogerClient/home.txt</p>
                  <p className="consoleLine">&gt; rebuilding client...</p>
                  <h2>Booger Client returns this Christmas.</h2>
                  <p>
                    A small Minecraft Fabric client project focused on a cleaner Right Shift menu,
                    useful HUD tools, cosmetics, profiles, and a smoother everyday Minecraft setup.
                  </p>
                  <p>
                    The goal is simple: stop dropping placeholder builds and turn Booger Client into
                    something that actually feels good to use.
                  </p>
                  <div className="actions">
                    <button type="button" className="mainBtn" onClick={() => setTab("modules")}>View Modules</button>
                    <button type="button" className="mainBtn muted" onClick={() => setTab("devlog")}>Read Devlog</button>
                    <a href={DISCORD} className="mainBtn discord">Join Discord</a>
                  </div>
                </article>

                <article className="panel releasePanel">
                  <p className="path">release-card.dat</p>
                  <span className="stamp">chosen window</span>
                  <h3>Christmas</h3>
                  <p>
                    More time to fix the mod, polish the UI, and prepare a cleaner beta before launch.
                  </p>
                  <div className="miniList">
                    <span><StatusDot /> Right Shift menu</span>
                    <span><StatusDot tone="gold" /> HUD work</span>
                    <span><StatusDot tone="gold" /> Cosmetics work</span>
                  </div>
                </article>
              </div>
            )}

            {tab === "builds" && (
              <article className="panel fullPanel">
                <p className="path">C:/BoogerClient/builds.log</p>
                <h2>Builds</h2>
                <div className="buildList">
                  <div className="buildRow activeBuild"><b>V6 Starter</b><span>Right Shift only, local config, starter modules.</span><em>current</em></div>
                  <div className="buildRow"><b>V7 HUD Pass</b><span>Render CPS, keystrokes, coords, and armor HUD cleanly.</span><em>next</em></div>
                  <div className="buildRow"><b>Christmas Beta</b><span>Polished public test build with finished pages and cleaner visuals.</span><em>target</em></div>
                </div>
              </article>
            )}

            {tab === "modules" && (
              <article className="panel fullPanel">
                <div className="sectionHead">
                  <div>
                    <p className="path">C:/BoogerClient/modules.json</p>
                    <h2>Modules</h2>
                  </div>
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="search modules"
                    aria-label="Search modules"
                  />
                </div>
                <div className="moduleGrid">
                  {filteredModules.map((m) => (
                    <div className="moduleCard" key={m.name}>
                      <div className="moduleTop"><b>{m.name}</b><span>{m.status}</span></div>
                      <p>{m.desc}</p>
                    </div>
                  ))}
                </div>
              </article>
            )}

            {tab === "hud" && (
              <article className="panel fullPanel">
                <p className="path">C:/BoogerClient/hud.layout</p>
                <h2>HUD</h2>
                <p className="lead">The HUD should stay simple: small widgets, readable text, and no giant clutter on screen.</p>
                <div className="pillGrid">
                  {hudRows.map((item, i) => <span key={item}>{i < 3 ? <StatusDot /> : <StatusDot tone="gold" />} {item}</span>)}
                </div>
              </article>
            )}

            {tab === "cosmetics" && (
              <article className="panel fullPanel">
                <p className="path">C:/BoogerClient/cosmetics.list</p>
                <h2>Cosmetics</h2>
                <p className="lead">Cosmetics are planned as client visuals first, with the bigger online system later.</p>
                <div className="cosmeticGrid">
                  {cosmeticRows.map((item) => <div key={item} className="cosmeticCard"><div className="cosIcon">✦</div><b>{item}</b><span>planned</span></div>)}
                </div>
              </article>
            )}

            {tab === "profiles" && (
              <article className="panel fullPanel">
                <p className="path">C:/BoogerClient/profiles.cfg</p>
                <h2>Profiles</h2>
                <div className="buildList">
                  <div className="buildRow"><b>Default</b><span>Balanced HUD setup for normal gameplay.</span><em>local</em></div>
                  <div className="buildRow"><b>PvP</b><span>CPS, keystrokes, armor HUD, and cleaner visual settings.</span><em>planned</em></div>
                  <div className="buildRow"><b>Cinematic</b><span>Minimal HUD setup for screenshots and trailer clips.</span><em>planned</em></div>
                </div>
              </article>
            )}

            {tab === "owner" && (
              <article className="panel fullPanel">
                <p className="path">C:/BoogerClient/owner/snot2.ini</p>
                <h2>Owner Panel</h2>
                <p className="lead">Owner tools should be real local tools first. Global users and ranks need an API or server plugin later.</p>
                <div className="ownerGrid">
                  <div><b>[OWNER] Badge</b><span>Shown for snot2 in the client UI.</span></div>
                  <div><b>Debug Status</b><span>Module states, config info, and build checks.</span></div>
                  <div><b>Rank Manager</b><span>Future backend feature, not fake client-only buttons.</span></div>
                  <div><b>Tester Notes</b><span>Quick notes for bugs and Christmas beta prep.</span></div>
                </div>
              </article>
            )}

            {tab === "devlog" && (
              <article className="panel fullPanel">
                <p className="path">C:/BoogerClient/devlog.md</p>
                <h2>Devlog</h2>
                <div className="timeline">
                  {devlog.map(([date, text]) => <div key={date}><b>{date}</b><p>{text}</p></div>)}
                </div>
              </article>
            )}

            {tab === "faq" && (
              <article className="panel fullPanel">
                <p className="path">C:/BoogerClient/faq.txt</p>
                <h2>FAQ</h2>
                <div className="faqList">
                  <details open><summary>Is Booger Client released?</summary><p>Not yet. The current goal is a Christmas beta comeback.</p></details>
                  <details><summary>Is it a cheat client?</summary><p>No. The plan is HUD tools, cosmetics, profiles, quality-of-life visuals, and customization.</p></details>
                  <details><summary>What version?</summary><p>Minecraft Fabric 1.21.11.</p></details>
                  <details><summary>Why Christmas?</summary><p>It gives enough time to fix the mod properly and stop rushing placeholder builds.</p></details>
                </div>
              </article>
            )}

            {tab === "discord" && (
              <article className="panel fullPanel discordPanel">
                <p className="path">C:/BoogerClient/community.url</p>
                <h2>Join the Discord</h2>
                <p className="lead">Follow previews, suggest features, and get ready for the Christmas beta.</p>
                <a href={DISCORD} className="mainBtn discord">Open Discord</a>
              </article>
            )}
          </section>
        </div>
      </section>

      <style>{`
        * { box-sizing: border-box; }
        html { background: #050705; }
        body { margin: 0; background: #050705; }
        button, input, a { font: inherit; }
        .pageShell {
          min-height: 100vh;
          padding: clamp(14px, 3vw, 34px);
          color: #f3ecd8;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          background:
            linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.018) 1px, transparent 1px),
            radial-gradient(circle at 16% 0%, rgba(122, 194, 89, .18), transparent 34%),
            radial-gradient(circle at 100% 20%, rgba(194, 72, 56, .12), transparent 26%),
            linear-gradient(135deg, #18140f 0%, #071009 52%, #030403 100%);
          background-size: 5px 5px, 5px 5px, auto, auto, auto;
        }
        .clientWindow {
          width: min(1180px, 100%);
          min-height: calc(100vh - clamp(28px, 6vw, 68px));
          margin: 0 auto;
          border: 2px solid #3d573d;
          background: rgba(7, 13, 9, .95);
          box-shadow: 0 0 0 4px rgba(0,0,0,.45), 0 30px 90px rgba(0,0,0,.65);
        }
        .windowTop {
          min-height: 138px;
          padding: clamp(18px, 3vw, 30px);
          display: flex;
          justify-content: space-between;
          gap: 20px;
          border-bottom: 2px solid #3d573d;
          background: linear-gradient(90deg, #142018, #101811 68%, #211610);
        }
        .brandBlock { display: flex; gap: 18px; align-items: center; }
        .cubeLogo {
          width: 76px; height: 76px; flex: 0 0 auto;
          display: grid; place-items: center;
          color: #071008; background: #98cc75;
          border: 3px solid #dbf4bc;
          box-shadow: inset -7px -7px 0 rgba(0,0,0,.2), 0 0 0 2px #577d49;
          font-weight: 900; font-size: 25px;
        }
        .tinyLabel { margin: 0 0 9px; color: #9ed582; font-size: 12px; text-transform: uppercase; letter-spacing: .1em; font-weight: 800; }
        h1 { margin: 0; font-size: clamp(44px, 6vw, 74px); line-height: .9; letter-spacing: -4px; font-weight: 500; }
        .underTitle { margin: 10px 0 0; color: #bdb198; font-size: 14px; }
        .topStatus { display: flex; align-items: flex-start; justify-content: flex-end; gap: 10px; flex-wrap: wrap; max-width: 430px; }
        .topStatus span, .miniBtn {
          display: inline-flex; align-items: center; gap: 8px;
          min-height: 40px; padding: 0 13px;
          border: 1px solid #567256; background: #0d160f; color: #f3ecd8;
          text-decoration: none; font-weight: 800; font-size: 12px;
        }
        .dot { width: 8px; height: 8px; background: #82ff66; box-shadow: 0 0 12px #82ff66; display: inline-block; }
        .dot.gold { background: #ffd46a; box-shadow: 0 0 12px #ffd46a; }
        .dot.red { background: #ff6f5b; box-shadow: 0 0 12px #ff6f5b; }
        .tabBar { display: flex; flex-wrap: wrap; gap: 6px; padding: 8px; border-bottom: 2px solid #3d573d; background: #081009; }
        .tabBar button { border: 1px solid transparent; background: transparent; color: #d8ccb4; padding: 9px 11px; cursor: pointer; font-weight: 900; }
        .tabBar button:hover, .tabBar button.selected { background: #182618; border-color: #7aa36b; color: #9cff75; }
        .windowBody { display: grid; grid-template-columns: 270px minmax(0, 1fr); min-height: 590px; }
        .leftRail { border-right: 2px solid #3d573d; background: #0b140d; padding: 20px; }
        .accountCard { display: flex; align-items: center; gap: 12px; padding: 14px; border: 1px solid #314732; background: #101a12; }
        .avatarBox { width: 46px; height: 46px; display: grid; place-items: center; border: 2px solid #92c774; background: #172b19; color: #9cff75; font-weight: 900; }
        .accountCard p { margin: 4px 0 0; color: #aaa087; font-size: 12px; }
        .meterBlock { margin: 18px 0; }
        .meterTop { display: flex; justify-content: space-between; color: #d8ccb4; font-size: 12px; margin-bottom: 7px; }
        .meter { height: 16px; padding: 2px; border: 1px solid #496445; background: #050a06; }
        .meter span { display: block; height: 100%; width: 42%; background: repeating-linear-gradient(90deg, #92dd6b 0 8px, #d6ffa8 8px 14px); }
        .sideButton { display: block; width: 100%; text-align: left; padding: 13px; margin: 8px 0; border: 1px solid #314732; background: #071009; color: #f2e9d4; cursor: pointer; }
        .sideButton:hover { border-color: #9acd79; color: #9cff75; }
        .sideButton.gold { color: #ffd46a; }
        .mainArea { padding: clamp(18px, 3vw, 28px); min-width: 0; }
        .homeLayout { display: grid; grid-template-columns: minmax(0, 1fr) 310px; gap: 18px; align-items: stretch; }
        .panel { border: 1px solid #425c42; background: linear-gradient(135deg, rgba(29, 38, 31, .96), rgba(11, 18, 13, .96)); padding: clamp(18px, 3vw, 28px); box-shadow: inset 0 0 0 1px rgba(255,255,255,.025); }
        .heroPanel { min-height: 430px; display: flex; flex-direction: column; justify-content: center; }
        .path { margin: 0 0 8px; color: #a99e86; font-size: 12px; }
        .consoleLine { margin: 0 0 24px; color: #7dff66; font-size: 13px; font-weight: 900; }
        h2 { margin: 0 0 16px; font-size: clamp(31px, 4vw, 52px); line-height: 1.03; letter-spacing: -2px; font-weight: 500; }
        h3 { margin: 34px 0 14px; font-size: 39px; color: #ffd46a; font-weight: 500; }
        p { line-height: 1.7; }
        .panel p { color: #d4cab3; max-width: 760px; }
        .actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 18px; }
        .mainBtn { display: inline-flex; align-items: center; justify-content: center; min-height: 44px; padding: 0 16px; border: 1px solid #d7f6bd; background: #9cca78; color: #071008; box-shadow: inset -4px -4px 0 rgba(0,0,0,.18); font-weight: 900; text-decoration: none; cursor: pointer; }
        .mainBtn:hover { filter: brightness(1.08); }
        .mainBtn.muted { background: #101a12; color: #f2ead6; border-color: #536f50; }
        .mainBtn.discord { background: #ffd46a; border-color: #fff1b4; }
        .releasePanel { background: #241911; border-color: #6b5540; border-style: dashed; }
        .stamp { display: inline-block; transform: rotate(-2deg); background: #c65d4a; color: #fff4dc; padding: 8px 12px; font-weight: 900; font-size: 12px; }
        .miniList { display: grid; gap: 9px; margin-top: 22px; }
        .miniList span { border: 1px solid #493e2f; background: #1b120c; padding: 10px; color: #f2ead6; }
        .fullPanel { min-height: 430px; }
        .sectionHead { display: flex; align-items: flex-start; justify-content: space-between; gap: 18px; margin-bottom: 16px; }
        input { min-width: min(340px, 100%); height: 44px; border: 1px solid #496445; background: #081009; color: #f2ead6; padding: 0 12px; outline: none; }
        input:focus { border-color: #9acd79; }
        .moduleGrid, .cosmeticGrid, .pillGrid, .ownerGrid { display: grid; gap: 13px; margin-top: 18px; }
        .moduleGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .moduleCard, .cosmeticCard, .ownerGrid div, .pillGrid span, .buildRow { border: 1px solid #314732; background: #0b140d; padding: 15px; }
        .moduleTop { display: flex; justify-content: space-between; gap: 10px; align-items: center; }
        .moduleTop b, .buildRow b, .cosmeticCard b, .ownerGrid b { color: #fff2d3; }
        .moduleTop span, .buildRow em, .cosmeticCard span { color: #9cff75; font-size: 12px; border: 1px solid #45683d; padding: 4px 7px; font-style: normal; white-space: nowrap; }
        .moduleCard p { margin-bottom: 0; font-size: 13px; }
        .buildList { display: grid; gap: 10px; margin-top: 18px; }
        .buildRow { display: grid; grid-template-columns: 150px minmax(0, 1fr) 80px; gap: 14px; align-items: center; }
        .buildRow span, .ownerGrid span { color: #bdb198; line-height: 1.55; }
        .activeBuild { border-color: #9acd79; }
        .lead { color: #d8ccb4; max-width: 780px; }
        .pillGrid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .pillGrid span { display: flex; gap: 9px; align-items: center; }
        .cosmeticGrid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        .cosmeticCard { min-height: 130px; display: grid; gap: 7px; align-content: start; }
        .cosIcon { width: 35px; height: 35px; display: grid; place-items: center; background: #142316; border: 1px solid #54724d; color: #ffd46a; }
        .ownerGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .ownerGrid div { display: grid; gap: 8px; }
        .timeline { display: grid; gap: 13px; margin-top: 20px; }
        .timeline div { border-left: 5px solid #9cca78; background: #0b140d; padding: 14px 16px; }
        .timeline b { color: #9cff75; }
        .timeline p { margin: 6px 0 0; }
        .faqList { display: grid; gap: 10px; margin-top: 20px; }
        details { border: 1px solid #314732; background: #0b140d; padding: 15px; }
        summary { cursor: pointer; color: #fff2d3; font-weight: 900; }
        details p { margin-bottom: 0; }
        .discordPanel { display: flex; min-height: 430px; flex-direction: column; align-items: flex-start; justify-content: center; }
        @media (max-width: 980px) {
          .windowTop, .brandBlock { align-items: flex-start; }
          .windowTop { flex-direction: column; }
          .topStatus { justify-content: flex-start; max-width: none; }
          .windowBody { grid-template-columns: 1fr; }
          .leftRail { border-right: none; border-bottom: 2px solid #3d573d; }
          .homeLayout, .moduleGrid, .ownerGrid { grid-template-columns: 1fr; }
          .cosmeticGrid, .pillGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 620px) {
          .pageShell { padding: 8px; }
          .brandBlock { flex-direction: column; }
          h1 { font-size: 42px; letter-spacing: -2px; }
          .buildRow { grid-template-columns: 1fr; }
          .sectionHead { flex-direction: column; }
          input { width: 100%; }
          .cosmeticGrid, .pillGrid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}
