const DISCORD = "https://discord.gg/5HxHgKdfMu";

const mods = [
  "Fullbright",
  "Zoom",
  "Armor HUD",
  "CPS Counter",
  "Keystrokes",
  "Coordinates",
  "Ping Display",
  "Toggle Sprint",
  "Profiles",
  "Cosmetics",
  "Badges",
  "Owner Panel",
];

const features = [
  {
    title: "Clean HUD Tools",
    text: "Useful overlays like CPS, keystrokes, armor status, coordinates, and ping.",
  },
  {
    title: "Custom Menu",
    text: "A right-shift client menu built for quick access without extra clutter.",
  },
  {
    title: "Cosmetics & Profiles",
    text: "Save your setup, customize your look, and switch between presets.",
  },
];

export default function Page() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top">
          <span className="logo">BC</span>
          <span>Booger Client</span>
        </a>

        <nav className="links" aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#mods">Mods</a>
          <a href="#versions">Versions</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a className="navButton" href={DISCORD}>
          Discord
        </a>
      </header>

      <section id="top" className="hero">
        <div className="heroText">
          <p className="kicker">Minecraft Fabric 1.21.11</p>
          <h1>Booger Client</h1>
          <p className="subhead">
            A clean Minecraft utility client focused on HUD tools,
            customization, cosmetics, profiles, and a better everyday playing
            experience.
          </p>

          <div className="heroActions">
            <a className="primary" href={DISCORD}>
              Join Discord
            </a>
            <a className="secondary" href="#features">
              View Features
            </a>
          </div>

          <p className="note">Christmas beta planned. Download will be added when ready.</p>
        </div>

        <div className="clientMockup" aria-label="Booger Client preview mockup">
          <div className="mockTop">
            <span />
            <span />
            <span />
          </div>
          <div className="mockHeader">
            <div>
              <strong>Booger Client</strong>
              <p>Right Shift Menu</p>
            </div>
            <b>[OWNER] snot2</b>
          </div>
          <div className="mockGrid">
            {mods.slice(0, 8).map((mod, index) => (
              <div className="mockCard" key={mod}>
                <span>{mod}</span>
                <i>{index % 3 === 0 ? "ON" : "OFF"}</i>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="sectionTitle">
          <p className="kicker">Features</p>
          <h2>Everything you need, nothing extra.</h2>
        </div>

        <div className="featureGrid">
          {features.map((feature) => (
            <article className="feature" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="fpsBand">
        <div>
          <p className="kicker">Performance-minded</p>
          <h2>Built to feel smooth.</h2>
          <p>
            Booger Client is being kept lightweight first. The goal is a clean
            menu, useful HUD modules, and settings that do not get in your way.
          </p>
        </div>
        <div className="meter">
          <span />
        </div>
      </section>

      <section id="mods" className="section modsSection">
        <div className="sectionTitle">
          <p className="kicker">Mod Library</p>
          <h2>Planned client modules</h2>
        </div>

        <div className="modsGrid">
          {mods.map((mod) => (
            <div className="modBox" key={mod}>
              {mod}
            </div>
          ))}
        </div>
      </section>

      <section id="versions" className="versions">
        <div>
          <p className="kicker">Version Support</p>
          <h2>Minecraft 1.21.11</h2>
          <p>
            Current development target is Fabric 1.21.11. More version support
            can come later after the main build is stable.
          </p>
        </div>

        <div className="versionCards">
          <span className="activeVersion">1.21.11</span>
          <span>Fabric</span>
          <span>Java 21</span>
        </div>
      </section>

      <section id="faq" className="section faq">
        <div className="sectionTitle">
          <p className="kicker">FAQ</p>
          <h2>Quick answers</h2>
        </div>

        <div className="faqGrid">
          <article>
            <h3>Is it released?</h3>
            <p>No. The current plan is a Christmas beta release.</p>
          </article>
          <article>
            <h3>Is it a cheat client?</h3>
            <p>No. It focuses on HUD tools, customization, cosmetics, and quality-of-life features.</p>
          </article>
          <article>
            <h3>How do I follow updates?</h3>
            <p>Join the Discord for progress posts, screenshots, and testing news.</p>
          </article>
        </div>
      </section>

      <section className="downloadCta">
        <h2>Ready for the comeback?</h2>
        <p>Booger Client returns this Christmas.</p>
        <a className="primary" href={DISCORD}>
          Join Discord
        </a>
      </section>

      <footer>
        <span>Booger Client</span>
        <span>Fabric 1.21.11</span>
        <a href={DISCORD}>Discord</a>
      </footer>

      <style>{`
        :root {
          --bg: #06090d;
          --panel: #0c121a;
          --panel2: #111a25;
          --line: rgba(255,255,255,.11);
          --text: #f4f8ff;
          --muted: #9aa8bb;
          --green: #6dff7b;
          --green2: #1ec94c;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          background: var(--bg);
          color: var(--text);
          font-family: Inter, Arial, Helvetica, sans-serif;
        }

        main {
          min-height: 100vh;
          background:
            radial-gradient(circle at 65% 10%, rgba(54, 255, 109, .22), transparent 27%),
            radial-gradient(circle at 15% 0%, rgba(70, 132, 255, .12), transparent 28%),
            linear-gradient(180deg, #081018 0%, #06090d 48%, #05070a 100%);
          overflow: hidden;
        }

        .nav {
          height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 0 48px;
          border-bottom: 1px solid var(--line);
          background: rgba(6, 9, 13, .78);
          backdrop-filter: blur(16px);
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .brand {
          color: var(--text);
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          font-weight: 800;
        }

        .logo {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          color: #06100a;
          background: linear-gradient(135deg, var(--green), #b8ff65);
          box-shadow: 0 0 28px rgba(109, 255, 123, .28);
          font-size: 14px;
        }

        .links {
          display: flex;
          align-items: center;
          gap: 26px;
        }

        .links a, footer a {
          color: var(--muted);
          text-decoration: none;
          font-weight: 700;
          font-size: 14px;
        }

        .links a:hover, footer a:hover { color: var(--green); }

        .navButton, .primary, .secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          padding: 0 20px;
          border-radius: 12px;
          font-weight: 900;
          text-decoration: none;
          border: 1px solid transparent;
        }

        .navButton, .primary {
          color: #06100a;
          background: linear-gradient(135deg, var(--green), #a8ff5d);
          box-shadow: 0 15px 45px rgba(30, 201, 76, .24);
        }

        .secondary {
          color: var(--text);
          border-color: var(--line);
          background: rgba(255,255,255,.04);
        }

        .hero {
          max-width: 1180px;
          margin: 0 auto;
          min-height: calc(100vh - 76px);
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(360px, 480px);
          align-items: center;
          gap: 48px;
          padding: 80px 28px;
        }

        .kicker {
          margin: 0 0 14px;
          color: var(--green);
          text-transform: uppercase;
          letter-spacing: .14em;
          font-size: 12px;
          font-weight: 900;
        }

        h1, h2, h3, p { margin-top: 0; }

        h1 {
          margin-bottom: 22px;
          font-size: clamp(56px, 8vw, 108px);
          line-height: .9;
          letter-spacing: -5px;
        }

        h2 {
          margin-bottom: 16px;
          font-size: clamp(32px, 5vw, 58px);
          line-height: .95;
          letter-spacing: -3px;
        }

        h3 {
          margin-bottom: 10px;
          font-size: 21px;
        }

        .subhead {
          max-width: 650px;
          color: #c3cfdd;
          font-size: clamp(18px, 2.1vw, 23px);
          line-height: 1.55;
        }

        .heroActions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin: 32px 0 14px;
        }

        .note, .sectionTitle p, .feature p, .fpsBand p, .versions p, .faq p, .downloadCta p {
          color: var(--muted);
          line-height: 1.65;
        }

        .clientMockup {
          border: 1px solid rgba(255,255,255,.16);
          border-radius: 26px;
          background: linear-gradient(180deg, rgba(17, 26, 37, .96), rgba(8, 13, 19, .96));
          box-shadow: 0 35px 100px rgba(0,0,0,.55), 0 0 80px rgba(109, 255, 123, .14);
          overflow: hidden;
          transform: perspective(900px) rotateY(-7deg) rotateX(3deg);
        }

        .mockTop {
          height: 48px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 18px;
          border-bottom: 1px solid var(--line);
          background: rgba(255,255,255,.03);
        }

        .mockTop span {
          width: 11px;
          height: 11px;
          border-radius: 99px;
          background: rgba(255,255,255,.25);
        }

        .mockHeader {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding: 24px;
          border-bottom: 1px solid var(--line);
        }

        .mockHeader strong { font-size: 23px; }
        .mockHeader p { margin: 7px 0 0; color: var(--muted); }
        .mockHeader b { color: #ffe06f; font-size: 13px; }

        .mockGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          padding: 24px;
        }

        .mockCard {
          min-height: 70px;
          border: 1px solid var(--line);
          border-radius: 16px;
          padding: 14px;
          background: rgba(255,255,255,.04);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .mockCard span { font-weight: 800; }
        .mockCard i { color: var(--green); font-style: normal; font-size: 12px; font-weight: 900; }

        .section, .fpsBand, .versions, .downloadCta {
          max-width: 1180px;
          margin: 0 auto;
          padding: 86px 28px;
        }

        .sectionTitle {
          max-width: 720px;
          margin-bottom: 34px;
        }

        .featureGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .feature, .faq article {
          min-height: 210px;
          padding: 28px;
          border-radius: 24px;
          background: rgba(255,255,255,.045);
          border: 1px solid var(--line);
        }

        .feature::before {
          content: "";
          display: block;
          width: 46px;
          height: 46px;
          border-radius: 14px;
          margin-bottom: 28px;
          background: linear-gradient(135deg, var(--green), #b8ff65);
          box-shadow: 0 0 38px rgba(109, 255, 123, .18);
        }

        .fpsBand, .versions, .downloadCta {
          border: 1px solid var(--line);
          border-radius: 32px;
          background: linear-gradient(135deg, rgba(20, 32, 45, .82), rgba(8, 13, 19, .92));
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 34px;
          align-items: center;
          padding: 44px;
          margin-top: 30px;
          margin-bottom: 30px;
        }

        .meter {
          height: 20px;
          border-radius: 999px;
          padding: 4px;
          background: rgba(0,0,0,.35);
          border: 1px solid var(--line);
        }

        .meter span {
          display: block;
          width: 72%;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, var(--green2), var(--green));
        }

        .modsGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .modBox, .versionCards span {
          min-height: 68px;
          border-radius: 16px;
          display: grid;
          place-items: center;
          text-align: center;
          background: rgba(255,255,255,.045);
          border: 1px solid var(--line);
          color: #dce8f5;
          font-weight: 900;
        }

        .modBox:hover {
          border-color: rgba(109,255,123,.55);
          background: rgba(109,255,123,.07);
        }

        .versionCards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .versionCards .activeVersion {
          color: #06100a;
          background: linear-gradient(135deg, var(--green), #b8ff65);
        }

        .faqGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .downloadCta {
          grid-template-columns: 1fr auto;
        }

        footer {
          max-width: 1180px;
          margin: 0 auto;
          padding: 34px 28px 54px;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          color: var(--muted);
          border-top: 1px solid var(--line);
        }

        @media (max-width: 920px) {
          .nav { padding: 0 18px; }
          .links { display: none; }
          .hero { grid-template-columns: 1fr; min-height: auto; padding-top: 58px; }
          .clientMockup { transform: none; }
          .featureGrid, .faqGrid, .fpsBand, .versions, .downloadCta { grid-template-columns: 1fr; }
          .modsGrid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 520px) {
          h1 { letter-spacing: -3px; }
          .modsGrid, .mockGrid, .versionCards { grid-template-columns: 1fr; }
          .fpsBand, .versions, .downloadCta { padding: 26px; border-radius: 22px; }
        }
      `}</style>
    </main>
  );
}
