'use client';

import { useMemo, useState } from 'react';

const DISCORD = 'https://discord.gg/5HxHgKdfMu';

const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'builds', label: 'Builds' },
  { id: 'modules', label: 'Modules' },
  { id: 'hud', label: 'HUD' },
  { id: 'cosmetics', label: 'Cosmetics' },
  { id: 'owner', label: 'Owner' },
  { id: 'devlog', label: 'Devlog' },
  { id: 'faq', label: 'FAQ' },
  { id: 'discord', label: 'Discord' },
] as const;

type TabId = (typeof tabs)[number]['id'];

const moduleRows = [
  ['Fullbright', 'In progress', 'Cleaner visibility toggle for caves and dark areas.'],
  ['CPS Counter', 'Working base', 'Tracks clicks and displays a simple HUD counter.'],
  ['Keystrokes', 'Working base', 'Shows movement keys with a small customizable overlay.'],
  ['Coordinates', 'Working base', 'Displays your position without opening F3.'],
  ['Armor HUD', 'Planned', 'Cleaner armor and durability display.'],
  ['Zoom', 'Planned', 'Simple cinematic zoom for screenshots and gameplay.'],
];

const hudRows = [
  'CPS Counter',
  'Keystrokes',
  'Coordinates',
  'Armor HUD',
  'FPS Display',
  'Potion Effects',
  'Pearl Cooldown',
  'Rod Timer',
];

const cosmeticRows = [
  ['Founder Cape', 'Owner / early supporter reward.'],
  ['Booger Cape', 'Main green cape for the client.'],
  ['Slime Trail', 'Small particle trail concept.'],
  ['Name Badges', '[OWNER], [BETA], [BC], and more.'],
  ['Christmas Set', 'Seasonal cosmetics planned for release.'],
];

const devlog = [
  ['V6', 'Right Shift only opener, no extra backup keys, cleaner starter base.'],
  ['Website', 'Moving away from AI-looking landing pages into a launcher-style client page.'],
  ['Next', 'Make modules actually do things before adding big fake pages.'],
  ['Release', 'Christmas was chosen so the client can be polished instead of rushed.'],
];

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="pill">{children}</span>;
}

function StatusDot({ status }: { status: string }) {
  const tone = status.includes('Working') ? 'good' : status.includes('progress') ? 'warn' : 'muted';
  return <span className={`statusDot ${tone}`} />;
}

export default function Page() {
  const [active, setActive] = useState<TabId>('home');
  const activeLabel = useMemo(() => tabs.find((tab) => tab.id === active)?.label ?? 'Home', [active]);

  return (
    <main className="siteShell">
      <div className="noise" />
      <section className="launcher">
        <header className="topbar">
          <div>
            <p className="eyebrow">Minecraft Fabric 1.21.11</p>
            <h1>Booger Client</h1>
            <p className="subtitle">A small Minecraft client project with a cleaner menu, useful HUD tools, cosmetics, and a Christmas comeback plan.</p>
          </div>
          <div className="topActions">
            <Pill>Christmas release</Pill>
            <a className="button ghost" href={DISCORD}>Discord</a>
          </div>
        </header>

        <nav className="tabs" aria-label="Website tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={active === tab.id ? 'tab active' : 'tab'}
              onClick={() => setActive(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="bodyGrid">
          <aside className="sidePanel">
            <div className="clientIcon">BC</div>
            <h2>Booger Client Beta</h2>
            <p>Indie Fabric client/mod built by snot2. No fake #1 client stuff, just a real project being improved.</p>
            <div className="progressBox">
              <div className="progressTop">
                <span>Build progress</span>
                <b>V6</b>
              </div>
              <div className="progressTrack"><span /></div>
            </div>
            <ul className="quickStats">
              <li><b>Status</b><span>In development</span></li>
              <li><b>Open key</b><span>Right Shift</span></li>
              <li><b>Owner</b><span>snot2</span></li>
              <li><b>Release</b><span>Christmas</span></li>
            </ul>
          </aside>

          <section className="contentWindow">
            <div className="windowHeader">
              <span className="windowTitle">/{activeLabel.toLowerCase()}.txt</span>
              <span className="windowButtons"><i /><i /><i /></span>
            </div>
            <TabContent active={active} setActive={setActive} />
          </section>
        </div>
      </section>

      <style>{css}</style>
    </main>
  );
}

function TabContent({ active, setActive }: { active: TabId; setActive: (tab: TabId) => void }) {
  if (active === 'home') {
    return (
      <div className="tabPage homePage">
        <p className="terminalLine">&gt; boogerclient returns this christmas</p>
        <h2>Cleaner Minecraft. Less clutter. More personality.</h2>
        <p>
          Booger Client is being rebuilt as a clean Fabric utility client. The goal is simple: make the menu feel good,
          make the local HUD tools actually work, and polish the client before Christmas.
        </p>
        <div className="buttonRow">
          <a className="button primary" href={DISCORD}>Join Discord</a>
          <button className="button" type="button" onClick={() => setActive('modules')}>View modules</button>
          <button className="button" type="button" onClick={() => setActive('devlog')}>Read devlog</button>
        </div>
        <div className="cards three">
          <InfoCard title="Right Shift menu" text="The client opens from one clean keybind. No random backup keys." />
          <InfoCard title="Real local modules" text="Starting with simple features that actually do something." />
          <InfoCard title="Christmas comeback" text="More time to fix the client properly before release." />
        </div>
      </div>
    );
  }

  if (active === 'builds') {
    return (
      <div className="tabPage">
        <h2>Builds</h2>
        <p className="muted">Downloads will go here when a public build is ready. For now, development builds are private/testing only.</p>
        <div className="buildList">
          <BuildRow name="V6 Starter" tag="testing" text="Right Shift only, owner panel visible, starter real modules." />
          <BuildRow name="V5 Owner Panel" tag="old" text="Test build with owner tab and button logs." />
          <BuildRow name="V4 Local UI" tag="old" text="Local config experiments. Too placeholder-heavy." />
        </div>
      </div>
    );
  }

  if (active === 'modules') {
    return (
      <div className="tabPage">
        <div className="sectionTitle">
          <div>
            <h2>Modules</h2>
            <p>Small client features first. No fake pages, no fake promises.</p>
          </div>
          <Pill>3/6 active base</Pill>
        </div>
        <div className="moduleTable">
          {moduleRows.map(([name, status, text]) => (
            <div className="moduleRow" key={name}>
              <div className="moduleName"><StatusDot status={status} />{name}</div>
              <div className="moduleStatus">{status}</div>
              <div className="moduleText">{text}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (active === 'hud') {
    return (
      <div className="tabPage">
        <h2>HUD</h2>
        <p className="muted">HUD tools should be useful, readable, and easy to move around later.</p>
        <div className="tagGrid">
          {hudRows.map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>
    );
  }

  if (active === 'cosmetics') {
    return (
      <div className="tabPage">
        <h2>Cosmetics</h2>
        <p className="muted">Cosmetics are planned as client-side style items first, with bigger systems later.</p>
        <div className="cards two">
          {cosmeticRows.map(([title, text]) => <InfoCard key={title} title={title} text={text} />)}
        </div>
      </div>
    );
  }

  if (active === 'owner') {
    return (
      <div className="tabPage ownerPage">
        <h2>Owner Panel</h2>
        <p className="muted">Owner tools are for local client controls and dev testing. Server-wide ranks/users need a server plugin or API later.</p>
        <div className="ownerCard">
          <div className="badge">[OWNER] snot2</div>
          <p>Visible owner identity, local dev tools, build notes, and future admin controls.</p>
          <ul>
            <li>Owner badge display</li>
            <li>Build status</li>
            <li>Local config tools</li>
            <li>Future rank/API system</li>
          </ul>
        </div>
      </div>
    );
  }

  if (active === 'devlog') {
    return (
      <div className="tabPage">
        <h2>Devlog</h2>
        <div className="timeline">
          {devlog.map(([version, text]) => (
            <div className="timelineItem" key={version}>
              <b>{version}</b>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (active === 'faq') {
    return (
      <div className="tabPage">
        <h2>FAQ</h2>
        <div className="faqList">
          <InfoCard title="Is it released?" text="Not publicly yet. The release window is Christmas." />
          <InfoCard title="What version?" text="Minecraft Java Fabric 1.21.11." />
          <InfoCard title="Is this a cheat client?" text="No. The focus is clean HUD tools, cosmetics, profiles, and customization." />
          <InfoCard title="Will ranks/users be real?" text="Only after a server plugin or online API exists." />
        </div>
      </div>
    );
  }

  return (
    <div className="tabPage discordPage">
      <h2>Join the Discord</h2>
      <p>Follow updates, vote on features, test builds, and help shape Booger Client before Christmas.</p>
      <a className="button primary large" href={DISCORD}>Open Discord</a>
    </div>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="infoCard">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function BuildRow({ name, tag, text }: { name: string; tag: string; text: string }) {
  return (
    <article className="buildRow">
      <div>
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
      <span>{tag}</span>
    </article>
  );
}

const css = `
  :root {
    --bg: #080d09;
    --panel: #101a12;
    --panel2: #152318;
    --panel3: #1b2b1e;
    --border: #345139;
    --border2: #55775b;
    --text: #f5eddc;
    --muted: #bbae97;
    --green: #97d879;
    --green2: #63ff70;
    --gold: #ffd36a;
    --red: #bf574e;
    --shadow: rgba(0, 0, 0, .45);
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; background: var(--bg); color: var(--text); }
  a { color: inherit; text-decoration: none; }
  button { font: inherit; }

  .siteShell {
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    padding: 26px;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace;
    background:
      radial-gradient(circle at 20% 0%, rgba(151, 216, 121, .12), transparent 34%),
      radial-gradient(circle at 90% 10%, rgba(191, 87, 78, .10), transparent 32%),
      linear-gradient(135deg, #0b140d 0%, #090e0a 50%, #060806 100%);
  }

  .noise {
    position: fixed;
    inset: 0;
    pointer-events: none;
    opacity: .16;
    background-image: linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px);
    background-size: 7px 7px;
  }

  .launcher {
    position: relative;
    z-index: 1;
    width: min(1180px, calc(100vw - 52px));
    min-height: min(780px, calc(100vh - 52px));
    margin: 0 auto;
    border: 2px solid var(--border);
    background: rgba(10, 18, 12, .94);
    box-shadow: 0 30px 80px var(--shadow), inset 0 0 0 1px rgba(255,255,255,.04);
  }

  .topbar {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    padding: 28px 28px 24px;
    border-bottom: 2px solid var(--border);
    background: linear-gradient(180deg, rgba(22, 37, 25, .98), rgba(13, 23, 15, .98));
  }

  .eyebrow {
    margin: 0 0 12px;
    color: var(--green);
    font-size: 12px;
    letter-spacing: .08em;
    text-transform: uppercase;
  }

  h1, h2, h3, p { margin-top: 0; }
  h1 {
    margin-bottom: 10px;
    font-size: clamp(44px, 6vw, 82px);
    line-height: .9;
    letter-spacing: -.06em;
    font-weight: 500;
  }
  .subtitle {
    margin: 0;
    max-width: 660px;
    color: var(--muted);
    line-height: 1.65;
    font-size: 14px;
  }
  .topActions { display: flex; align-items: flex-start; gap: 12px; flex-wrap: wrap; justify-content: flex-end; }

  .pill, .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 40px;
    padding: 0 14px;
    border: 1px solid var(--border2);
    background: rgba(23, 39, 26, .8);
    color: var(--text);
    box-shadow: inset 0 0 0 1px rgba(255,255,255,.04);
    font-size: 13px;
    font-weight: 700;
  }
  .button { cursor: pointer; transition: transform .15s ease, background .15s ease, border-color .15s ease; }
  .button:hover { transform: translateY(-1px); border-color: var(--green); background: rgba(32, 58, 36, .95); }
  .button.primary { background: var(--green); color: #061006; border-color: #d8ffd0; }
  .button.ghost { background: transparent; }
  .button.large { min-height: 48px; padding: 0 24px; }
  .buttonRow { display: flex; flex-wrap: wrap; gap: 12px; margin: 24px 0; }

  .tabs {
    display: flex;
    gap: 0;
    overflow-x: auto;
    border-bottom: 2px solid var(--border);
    background: #0d160f;
    scrollbar-width: thin;
  }
  .tab {
    flex: 0 0 auto;
    border: 0;
    border-right: 1px solid var(--border);
    background: transparent;
    color: var(--muted);
    padding: 12px 15px;
    cursor: pointer;
    font-size: 13px;
    font-weight: 800;
  }
  .tab:hover, .tab.active { color: #061006; background: var(--green); }

  .bodyGrid {
    display: grid;
    grid-template-columns: 260px minmax(0, 1fr);
    min-height: 560px;
  }

  .sidePanel {
    border-right: 2px solid var(--border);
    padding: 24px;
    background: rgba(13, 23, 15, .88);
  }
  .clientIcon {
    width: 76px;
    height: 76px;
    display: grid;
    place-items: center;
    background: var(--green);
    color: #061006;
    font-size: 26px;
    font-weight: 900;
    border: 4px solid #d8ffd0;
    box-shadow: 7px 7px 0 rgba(151, 216, 121, .36);
    margin-bottom: 26px;
  }
  .sidePanel h2 { font-size: 15px; margin-bottom: 12px; }
  .sidePanel p { color: var(--text); line-height: 1.65; font-size: 13px; }

  .progressBox { margin: 24px 0; }
  .progressTop { display: flex; justify-content: space-between; font-size: 12px; color: var(--muted); margin-bottom: 8px; }
  .progressTop b { color: var(--green); }
  .progressTrack { height: 14px; border: 1px solid var(--border2); background: #09100b; padding: 2px; }
  .progressTrack span { display: block; width: 48%; height: 100%; background: repeating-linear-gradient(90deg, var(--green) 0 8px, #d8ffd0 8px 16px); }

  .quickStats { padding: 0; margin: 0; list-style: none; display: grid; gap: 10px; }
  .quickStats li { border: 1px solid #233828; background: #0b130d; padding: 12px; font-size: 12px; }
  .quickStats b { display: block; margin-bottom: 6px; color: var(--gold); }
  .quickStats span { color: var(--text); }

  .contentWindow { padding: 24px; min-width: 0; }
  .windowHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--border2);
    border-bottom: 0;
    background: #0b130d;
    padding: 10px 12px;
    color: var(--muted);
    font-size: 13px;
  }
  .windowButtons { display: flex; gap: 6px; }
  .windowButtons i { width: 10px; height: 10px; border: 1px solid var(--border2); display: block; background: var(--panel3); }
  .windowButtons i:nth-child(2) { background: var(--gold); }
  .windowButtons i:nth-child(3) { background: var(--red); }

  .tabPage {
    min-height: 470px;
    border: 1px solid var(--border2);
    background:
      linear-gradient(135deg, rgba(255,255,255,.025), transparent 45%),
      rgba(18, 29, 20, .78);
    padding: 28px;
  }
  .tabPage h2 { font-size: clamp(28px, 4vw, 48px); line-height: 1; letter-spacing: -.06em; margin-bottom: 16px; font-weight: 500; }
  .tabPage p { color: var(--muted); line-height: 1.75; max-width: 780px; font-size: 14px; }
  .terminalLine { color: var(--green2) !important; font-size: 13px !important; margin-bottom: 28px; }
  .muted { color: var(--muted) !important; }

  .cards { display: grid; gap: 14px; margin-top: 22px; }
  .cards.three { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .cards.two { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .infoCard, .buildRow, .ownerCard {
    border: 1px solid #314b36;
    background: rgba(9, 16, 11, .72);
    padding: 18px;
    box-shadow: inset 0 0 0 1px rgba(255,255,255,.03);
  }
  .infoCard h3, .buildRow h3 { margin: 0 0 8px; font-size: 15px; color: var(--text); }
  .infoCard p, .buildRow p { margin: 0; font-size: 13px; }

  .sectionTitle { display: flex; align-items: flex-start; justify-content: space-between; gap: 18px; margin-bottom: 18px; }
  .moduleTable { display: grid; gap: 10px; }
  .moduleRow {
    display: grid;
    grid-template-columns: 180px 130px minmax(0, 1fr);
    gap: 14px;
    align-items: center;
    border: 1px solid #314b36;
    background: rgba(9,16,11,.72);
    padding: 14px;
    font-size: 13px;
  }
  .moduleName { display: flex; align-items: center; gap: 10px; font-weight: 800; }
  .moduleStatus { color: var(--gold); }
  .moduleText { color: var(--muted); line-height: 1.5; }
  .statusDot { width: 10px; height: 10px; display: inline-block; background: #647268; }
  .statusDot.good { background: var(--green2); }
  .statusDot.warn { background: var(--gold); }

  .tagGrid { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 22px; }
  .tagGrid span { border: 1px solid var(--border2); background: #0b130d; padding: 12px 14px; color: var(--text); font-size: 13px; }

  .buildList, .timeline, .faqList { display: grid; gap: 12px; margin-top: 22px; }
  .buildRow { display: flex; align-items: center; justify-content: space-between; gap: 14px; }
  .buildRow span { border: 1px solid var(--border2); color: var(--green); padding: 7px 10px; font-size: 12px; }
  .timelineItem { border-left: 3px solid var(--green); padding: 6px 0 18px 18px; }
  .timelineItem b { color: var(--gold); }
  .timelineItem p { margin: 8px 0 0; }
  .ownerCard { max-width: 620px; }
  .badge { color: var(--gold); font-weight: 900; margin-bottom: 12px; }
  .ownerCard ul { color: var(--text); line-height: 1.9; }
  .discordPage { display: grid; place-content: center; text-align: center; }
  .discordPage p { margin-left: auto; margin-right: auto; }

  @media (max-width: 900px) {
    .siteShell { padding: 14px; }
    .launcher { width: calc(100vw - 28px); min-height: calc(100vh - 28px); }
    .topbar { flex-direction: column; padding: 22px; }
    .topActions { justify-content: flex-start; }
    .bodyGrid { grid-template-columns: 1fr; }
    .sidePanel { border-right: 0; border-bottom: 2px solid var(--border); }
    .contentWindow { padding: 16px; }
    .tabPage { padding: 20px; }
    .cards.three, .cards.two { grid-template-columns: 1fr; }
    .moduleRow { grid-template-columns: 1fr; gap: 6px; }
  }

  @media (max-width: 520px) {
    .tab { padding: 10px 12px; font-size: 12px; }
    h1 { font-size: 44px; }
    .buttonRow { flex-direction: column; align-items: stretch; }
    .button { width: 100%; }
  }
`;
