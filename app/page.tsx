"use client";

const DISCORD = "https://discord.gg/5HxHgKdfMu";

const features = [
  {
    title: "Clean Client Menu",
    text: "A right-shift menu made for modules, profiles, cosmetics, and settings without the messy placeholder feel.",
  },
  {
    title: "Real HUD Tools",
    text: "CPS, keystrokes, coordinates, armor display, and useful overlays built for everyday Minecraft.",
  },
  {
    title: "Fabric 1.21.11",
    text: "Focused on one modern Minecraft version first so the client can be polished instead of rushed.",
  },
];

const modules = [
  "Fullbright",
  "CPS Counter",
  "Keystrokes",
  "Coordinates",
  "Armor HUD",
  "Zoom",
  "Profiles",
  "Cosmetics",
  "Owner Panel",
  "Settings",
  "Hit Particles",
  "Name Badges",
];

const cosmetics = [
  "Founder Cape",
  "Booger Cape",
  "Slime Trail",
  "Owner Crown",
  "Christmas Hat",
  "Snow Trail",
];

export default function Page() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Booger Client home">
          <span className="logo">BC</span>
          <span>BOOGER</span>
        </a>

        <div className="links">
          <a href="#client">Client</a>
          <a href="#modules">Modules</a>
          <a href="#cosmetics">Cosmetics</a>
          <a href="#faq">Support</a>
        </div>

        <a className="navButton" href={DISCORD}>Discord</a>
      </nav>

      <section id="top" className="hero">
        <div className="bg" />
        <div className="shade" />

        <div className="heroContent">
          <p className="pill">Minecraft Fabric 1.21.11</p>
          <h1>BOOGER CLIENT</h1>
          <p className="tagline">
            A clean Minecraft utility client being rebuilt for HUD tools, cosmetics,
            profiles, and a Christmas comeback.
          </p>

          <div className="heroButtons">
            <a className="primary" href={DISCORD}>JOIN DISCORD</a>
            <a className="secondary" href="#modules">VIEW FEATURES</a>
          </div>

          <p className="small">Public release window: Christmas</p>
        </div>

        <div className="showcase" id="client">
          <div className="player playerLeft">
            <div className="head" />
            <div className="body" />
            <div className="arm left" />
            <div className="arm right" />
            <div className="leg left" />
            <div className="leg right" />
          </div>

          <div className="statCard fps">
            <h3>CLEAN HUD</h3>
            <div className="bar large"><span /></div>
            <div className="bar medium"><span /></div>
            <div className="bar small"><span /></div>
            <p>CPS • KEYS • COORDS</p>
          </div>

          <div className="statCard icons">
            <h3>MODULES</h3>
            <div className="iconGrid">
              {modules.slice(0, 9).map((m) => <span key={m}>{m[0]}</span>)}
            </div>
          </div>

          <div className="statCard versions">
            <h3>VERSION</h3>
            <strong>1.21.11</strong>
            <p>Fabric client build</p>
          </div>

          <div className="player playerRight">
            <div className="head" />
            <div className="body" />
            <div className="arm left" />
            <div className="arm right" />
            <div className="leg left" />
            <div className="leg right" />
          </div>
        </div>
      </section>

      <section className="section featureSection">
        <div className="sectionTitle">
          <p>Client Preview</p>
          <h2>Built to feel clean, not cluttered.</h2>
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

      <section id="modules" className="section darkSection">
        <div className="sectionTitle center">
          <p>Module Library</p>
          <h2>Useful features first.</h2>
        </div>

        <div className="moduleGrid">
          {modules.map((module) => <div key={module}>{module}</div>)}
        </div>
      </section>

      <section id="cosmetics" className="section storeLike">
        <div className="sectionTitle">
          <p>Cosmetics</p>
          <h2>Style without overcomplicating it.</h2>
        </div>

        <div className="cosmeticGrid">
          {cosmetics.map((item) => (
            <article className="cosmetic" key={item}>
              <div className="cosmeticPreview" />
              <h3>{item}</h3>
              <p>Planned cosmetic</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section release">
        <div>
          <p className="pill gold">Chosen Release Window</p>
          <h2>Christmas Comeback</h2>
          <p>
            Booger Client is being rebuilt slowly so the menu, modules, and visuals
            can actually feel ready. No rushed fake launch.
          </p>
        </div>
        <a className="primary" href={DISCORD}>FOLLOW DEVELOPMENT</a>
      </section>

      <section id="faq" className="section faq">
        <div className="sectionTitle center">
          <p>FAQ</p>
          <h2>Simple answers.</h2>
        </div>

        <div className="faqGrid">
          <article>
            <h3>Is it released?</h3>
            <p>Not yet. The current plan is a Christmas release window.</p>
          </article>
          <article>
            <h3>What version?</h3>
            <p>Minecraft Fabric 1.21.11.</p>
          </article>
          <article>
            <h3>Is it a cheat client?</h3>
            <p>No. The focus is HUD tools, customization, cosmetics, and cleaner gameplay.</p>
          </article>
        </div>
      </section>

      <footer>
        <span>BOOGER CLIENT</span>
        <a href={DISCORD}>Join Discord</a>
      </footer>

      <style jsx>{`
        main {
          min-height: 100vh;
          background: #111;
          color: white;
          font-family: Arial, Helvetica, sans-serif;
        }

        :global(html) {
          scroll-behavior: smooth;
        }

        :global(body) {
          margin: 0;
          background: #111;
        }

        .nav {
          height: 72px;
          position: fixed;
          z-index: 50;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 34px;
          background: rgba(14, 14, 14, 0.92);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          color: white;
          text-decoration: none;
          font-weight: 900;
          font-size: 24px;
          letter-spacing: -1px;
        }

        .logo {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          background: linear-gradient(135deg, #39ff74, #12b7ff);
          color: #071007;
          font-size: 15px;
          box-shadow: 0 0 22px rgba(35, 200, 255, .3);
        }

        .links {
          display: flex;
          align-items: center;
          gap: 34px;
          font-weight: 800;
        }

        .links a,
        footer a {
          color: white;
          text-decoration: none;
          opacity: .88;
        }

        .links a:hover,
        footer a:hover {
          color: #22c7ff;
          opacity: 1;
        }

        .navButton,
        .primary,
        .secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          padding: 0 26px;
          border-radius: 5px;
          background: #23bdf3;
          color: white;
          text-decoration: none;
          font-weight: 900;
          border: 0;
          box-shadow: 0 5px 0 rgba(0,0,0,.22);
        }

        .secondary {
          background: rgba(0,0,0,.45);
          border: 1px solid rgba(255,255,255,.22);
          box-shadow: none;
        }

        .hero {
          min-height: 920px;
          position: relative;
          overflow: hidden;
          padding-top: 72px;
        }

        .bg {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(rgba(0,0,0,.28), rgba(0,0,0,.58)),
            radial-gradient(circle at 22% 35%, rgba(68, 255, 112, .22), transparent 24%),
            radial-gradient(circle at 76% 30%, rgba(31, 188, 255, .24), transparent 24%),
            linear-gradient(135deg, #5f7f83 0%, #2d433c 32%, #15201e 64%, #0c1112 100%);
          filter: blur(2px);
          transform: scale(1.02);
        }

        .bg:after {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(45deg, rgba(255,255,255,.06) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(255,255,255,.04) 25%, transparent 25%);
          background-size: 32px 32px;
          opacity: .18;
        }

        .shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(8,9,10,.25), rgba(8,9,10,.7) 72%, #111 100%);
        }

        .heroContent {
          position: relative;
          z-index: 2;
          max-width: 950px;
          margin: 0 auto;
          padding: 70px 24px 20px;
          text-align: center;
          text-shadow: 0 4px 16px rgba(0,0,0,.72);
        }

        .pill {
          display: inline-flex;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(0,0,0,.48);
          border: 1px solid rgba(255,255,255,.12);
          color: #70ff89;
          font-weight: 900;
          text-transform: uppercase;
          font-size: 13px;
          letter-spacing: .5px;
        }

        .gold {
          color: #ffd44d;
        }

        h1 {
          margin: 25px 0 16px;
          font-size: clamp(58px, 9vw, 112px);
          line-height: .9;
          font-weight: 1000;
          letter-spacing: -4px;
        }

        .tagline {
          max-width: 820px;
          margin: 0 auto;
          font-size: clamp(17px, 2vw, 24px);
          line-height: 1.45;
          font-weight: 900;
          text-transform: uppercase;
        }

        .heroButtons {
          margin-top: 34px;
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .small {
          margin-top: 18px;
          font-size: 13px;
          font-weight: 900;
          opacity: .9;
        }

        .showcase {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          margin: 62px auto 0;
          min-height: 405px;
          display: grid;
          grid-template-columns: 210px 1fr 1fr 1fr 210px;
          gap: 18px;
          align-items: end;
          padding: 0 24px;
        }

        .statCard {
          min-height: 250px;
          border-radius: 28px;
          background: rgba(180, 195, 200, .28);
          border: 8px solid rgba(255,255,255,.12);
          box-shadow: 0 20px 35px rgba(0,0,0,.24), inset 0 0 30px rgba(255,255,255,.05);
          padding: 32px;
          backdrop-filter: blur(10px);
          text-align: center;
        }

        .statCard h3 {
          margin: -70px 0 42px;
          font-size: 20px;
          line-height: 1.25;
          text-shadow: 0 3px 12px rgba(0,0,0,.8);
        }

        .bar {
          height: 35px;
          margin: 14px 0;
          border-radius: 4px;
          background: rgba(255,255,255,.62);
          overflow: hidden;
        }

        .bar span {
          display: block;
          height: 100%;
          background: repeating-linear-gradient(135deg, #ffc340 0 12px, #ffde71 12px 24px);
        }

        .large span { width: 96%; }
        .medium span { width: 72%; background: #d9d9d9; }
        .small span { width: 34%; background: #d9d9d9; }

        .statCard p {
          font-weight: 900;
          font-size: 13px;
        }

        .iconGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .iconGrid span {
          height: 46px;
          display: grid;
          place-items: center;
          font-weight: 1000;
          font-size: 20px;
          border-radius: 9px;
          background: rgba(255,255,255,.18);
        }

        .versions strong {
          display: block;
          font-size: 70px;
          line-height: 1;
          margin: 20px 0 10px;
        }

        .player {
          position: relative;
          width: 120px;
          height: 260px;
          margin: 0 auto 10px;
          filter: drop-shadow(0 16px 18px rgba(0,0,0,.45));
        }

        .head, .body, .arm, .leg {
          position: absolute;
          background: #121212;
          border: 4px solid rgba(255,255,255,.09);
          box-shadow: inset -10px -10px rgba(0,0,0,.22);
        }

        .playerLeft .head { background: #f6bd65; }
        .playerRight .head { background: #f0a9d9; }
        .head { width: 62px; height: 62px; left: 29px; top: 0; }
        .body { width: 70px; height: 95px; left: 25px; top: 64px; background: #111; }
        .playerLeft .body { border-bottom-color: #ff453b; }
        .playerRight .body { background: #77cdfa; }
        .arm { width: 34px; height: 96px; top: 70px; }
        .arm.left { left: -8px; transform: rotate(18deg); }
        .arm.right { right: -8px; transform: rotate(-18deg); }
        .leg { width: 34px; height: 92px; top: 158px; }
        .leg.left { left: 26px; }
        .leg.right { right: 26px; }

        .section {
          padding: 85px 34px;
          background: #151515;
        }

        .sectionTitle {
          max-width: 1060px;
          margin: 0 auto 34px;
        }

        .sectionTitle.center {
          text-align: center;
        }

        .sectionTitle p {
          margin: 0 0 10px;
          color: #23bdf3;
          font-weight: 900;
          text-transform: uppercase;
        }

        h2 {
          margin: 0;
          font-size: clamp(36px, 5vw, 64px);
          line-height: 1;
        }

        .featureGrid,
        .faqGrid {
          max-width: 1060px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .feature,
        .faq article,
        .cosmetic {
          background: #202020;
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 9px;
          padding: 28px;
          box-shadow: 0 5px 20px rgba(0,0,0,.22);
        }

        .feature h3,
        .faq h3,
        .cosmetic h3 {
          margin: 0 0 12px;
          font-size: 22px;
        }

        .feature p,
        .faq p,
        .release p,
        .cosmetic p {
          color: #c9c9c9;
          line-height: 1.6;
        }

        .darkSection {
          background: #101010;
        }

        .moduleGrid {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .moduleGrid div {
          background: #2b2b2b;
          border-radius: 999px;
          padding: 16px 18px;
          text-align: center;
          font-weight: 900;
          border: 1px solid rgba(255,255,255,.08);
        }

        .storeLike {
          background: #262626;
        }

        .cosmeticGrid {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .cosmeticPreview {
          height: 170px;
          border-radius: 6px;
          background:
            radial-gradient(circle, rgba(63,255,109,.55), transparent 18%),
            radial-gradient(circle at 65% 35%, rgba(35,189,243,.45), transparent 14%),
            #151515;
          margin-bottom: 18px;
          border: 1px solid rgba(255,255,255,.08);
        }

        .release {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 26px;
          background: linear-gradient(110deg, #23190b, #111 70%);
        }

        .release > div {
          max-width: 760px;
        }

        .faq {
          background: #151515;
        }

        footer {
          padding: 34px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #0c0c0c;
          border-top: 1px solid rgba(255,255,255,.08);
          font-weight: 900;
        }

        @media (max-width: 980px) {
          .links { display: none; }
          .showcase {
            grid-template-columns: 1fr;
          }
          .player { display: none; }
          .statCard h3 { margin: 0 0 22px; }
          .featureGrid,
          .faqGrid,
          .cosmeticGrid {
            grid-template-columns: 1fr;
          }
          .moduleGrid {
            grid-template-columns: repeat(2, 1fr);
          }
          .release {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 560px) {
          .nav { padding: 0 14px; }
          .navButton { display: none; }
          .hero { min-height: auto; padding-bottom: 50px; }
          .moduleGrid { grid-template-columns: 1fr; }
          h1 { letter-spacing: -2px; }
        }
      `}</style>
    </main>
  );
}
