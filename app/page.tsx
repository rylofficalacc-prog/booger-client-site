const DISCORD = "https://discord.gg/5HxHgKdfMu";

const features = [
  {
    icon: "✦",
    title: "Right Shift Menu",
    text: "A cleaner client-style menu built around fast access, simple tabs, and less clutter.",
  },
  {
    icon: "☄",
    title: "HUD Tools",
    text: "Useful overlays like CPS, coordinates, keystrokes, armor HUD, and more planned for release.",
  },
  {
    icon: "❄",
    title: "Cosmetics",
    text: "Capes, badges, particles, trails, and seasonal cosmetics made to give the client personality.",
  },
  {
    icon: "◆",
    title: "Profiles",
    text: "Save different setups for survival, PvP, recording, screenshots, or just casual play.",
  },
  {
    icon: "♛",
    title: "Owner Panel",
    text: "Private owner tools for testing, debugging, and managing local client features during development.",
  },
  {
    icon: "☕",
    title: "Cozy Polish",
    text: "Less fake filler, more working features, better spacing, smoother menus, and a warmer indie feel.",
  },
];

const devNotes = [
  ["Now", "Rebuilding the GUI so buttons actually feel useful instead of acting like placeholders."],
  ["Next", "Improving HUD modules, local saving, profile switching, and cleaner settings pages."],
  ["Soon", "Adding better cosmetics previews, Christmas visuals, and beta tester polish."],
  ["Christmas", "Planned comeback release window after the client feels stable enough to show publicly."],
];

const gallery = [
  { src: "/hero-village.png", title: "Warm Minecraft Vibe", note: "Cozy visuals over cold corporate UI." },
  { src: "/mobs-showcase.png", title: "Player Friendly", note: "Built for normal Minecraft players." },
  { src: "/villagers.png", title: "Community First", note: "Discord feedback shapes updates." },
  { src: "/village-run.png", title: "Everyday Use", note: "Small tools that make the game feel better." },
];

export default function Home() {
  return (
    <main className="site">
      <div className="grain" />
      <div className="snow snowOne" />
      <div className="snow snowTwo" />

      <nav className="nav">
        <a className="brand" href="#top" aria-label="Booger Client home">
          <span className="brandMark">B</span>
          <span>
            <strong>Booger Client</strong>
            <small>Fabric 1.21.11</small>
          </span>
        </a>
        <div className="navLinks">
          <a href="#features">Features</a>
          <a href="#progress">Progress</a>
          <a href="#gallery">Preview</a>
          <a className="navButton" href={DISCORD}>Discord</a>
        </div>
      </nav>

      <section id="top" className="hero section">
        <div className="heroText">
          <div className="sticker">🎄 Christmas Release Window</div>
          <h1>Booger Client Returns This Christmas</h1>
          <p>
            A cozy Minecraft Fabric mod built for cleaner HUD tools, customization,
            cosmetics, profiles, and a smoother everyday Minecraft experience.
          </p>
          <div className="heroButtons">
            <a className="primary" href={DISCORD}>Join Discord</a>
            <a className="secondary" href="#features">View Features</a>
            <a className="secondary ghost" href="#progress">Follow Development</a>
          </div>
          <div className="miniStats" aria-label="Booger Client quick stats">
            <span><b>1.21.11</b> Minecraft</span>
            <span><b>Right Shift</b> Menu</span>
            <span><b>Christmas</b> Comeback</span>
          </div>
        </div>

        <div className="heroBoard" aria-label="Booger Client preview board">
          <div className="stringLights" />
          <div className="noteCard bigNote">
            <span className="pin" />
            <p className="noteLabel">Current Build Focus</p>
            <h2>Make it feel real.</h2>
            <ul>
              <li>Working buttons</li>
              <li>Scale-safe GUI</li>
              <li>Right Shift only</li>
              <li>Less placeholders</li>
            </ul>
          </div>
          <div className="tinyCards">
            <div className="tinyCard green">HUD Tools</div>
            <div className="tinyCard gold">Cosmetics</div>
            <div className="tinyCard red">Profiles</div>
          </div>
        </div>
      </section>

      <section className="section introGrid">
        <div className="paperPanel">
          <p className="eyebrow">What it is</p>
          <h2>A small client project with a lot of personality.</h2>
          <p>
            Booger Client is being rebuilt as a Minecraft Fabric utility mod. The goal is not to
            be loud, messy, or packed with fake features. It should feel clean, useful, cozy,
            and actually nice to open while playing.
          </p>
        </div>
        <div className="paperPanel checklistPanel">
          <p className="eyebrow">No trailer yet</p>
          <h2>The trailer is still cooking.</h2>
          <p>
            For now, development is focused on fixing the client itself: the menu, working modules,
            owner panel, local settings, and Christmas polish.
          </p>
          <div className="checklist">
            <span>✓ Right Shift menu</span>
            <span>✓ Cleaner GUI</span>
            <span>✓ HUD tools</span>
            <span>✓ Cosmetics</span>
            <span>✓ Profiles</span>
            <span>✓ Christmas release polish</span>
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="sectionHeading">
          <p className="eyebrow">Features</p>
          <h2>Clean, cozy, and customizable.</h2>
          <p>Built for players who want Minecraft to feel smoother without turning the site into a fake corporate client page.</p>
        </div>
        <div className="featureGrid">
          {features.map((feature) => (
            <article className="featureCard" key={feature.title}>
              <div className="featureIcon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section releaseSection">
        <div className="releaseCard">
          <div>
            <p className="eyebrow">Release window</p>
            <h2>Why Christmas?</h2>
            <p>
              Christmas gives the project time to breathe. Instead of rushing a broken menu with
              placeholder buttons, Booger Client can be rebuilt into something that feels finished,
              polished, and worth downloading.
            </p>
          </div>
          <div className="giftBox" aria-hidden="true">
            <span className="bow" />
            <span className="giftText">2026</span>
          </div>
        </div>
      </section>

      <section id="progress" className="section journalSection">
        <div className="sectionHeading left">
          <p className="eyebrow">Dev journal</p>
          <h2>What is being worked on.</h2>
        </div>
        <div className="journalGrid">
          {devNotes.map(([label, text]) => (
            <article className="journalCard" key={label}>
              <span>{label}</span>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="gallery" className="section gallerySection">
        <div className="sectionHeading">
          <p className="eyebrow">Preview board</p>
          <h2>Screenshots can go here later.</h2>
          <p>Drop your real GUI screenshots into the public folder and the site will feel like a real launch page.</p>
        </div>
        <div className="galleryGrid">
          {gallery.map((item, index) => (
            <article className={`photoCard photo${index + 1}`} key={item.title}>
              <div className="tape" />
              <img src={item.src} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section ctaSection">
        <div className="ctaCard">
          <p className="eyebrow">Join early</p>
          <h2>Help shape Booger Client before Christmas.</h2>
          <p>
            Join the Discord for updates, screenshots, testing news, and suggestions while the comeback build is being polished.
          </p>
          <a className="primary" href={DISCORD}>Join the Discord</a>
        </div>
      </section>

      <footer className="footer">
        <span>Booger Client</span>
        <span>Made for clean, cozy, customizable Minecraft.</span>
      </footer>

      <style>{`
        :root {
          --bg: #15120f;
          --bg2: #1b1612;
          --panel: #211b16;
          --card: #2b241d;
          --card2: #33291f;
          --cream: #f7ead2;
          --muted: #b8a98e;
          --green: #8fbf6f;
          --gold: #e8b75a;
          --red: #c45b4d;
          --snow: #fff8e8;
          --line: rgba(247, 234, 210, 0.14);
          --shadow: rgba(0, 0, 0, 0.38);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--bg);
          color: var(--cream);
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .site {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(circle at 18% 8%, rgba(143, 191, 111, 0.18), transparent 28rem),
            radial-gradient(circle at 82% 14%, rgba(196, 91, 77, 0.14), transparent 25rem),
            linear-gradient(180deg, #17120f 0%, #15120f 45%, #100d0b 100%);
          font-family: ui-rounded, "Trebuchet MS", "Segoe UI", system-ui, sans-serif;
        }

        .grain {
          pointer-events: none;
          position: fixed;
          inset: 0;
          opacity: 0.12;
          background-image:
            repeating-radial-gradient(circle at 0 0, rgba(255,255,255,0.18) 0 1px, transparent 1px 5px);
          mix-blend-mode: overlay;
          z-index: 0;
        }

        .snow {
          pointer-events: none;
          position: fixed;
          inset: -20%;
          opacity: 0.22;
          background-image:
            radial-gradient(circle, rgba(255,248,232,0.9) 0 1px, transparent 2px),
            radial-gradient(circle, rgba(255,248,232,0.45) 0 1px, transparent 2px);
          background-size: 120px 120px, 180px 180px;
          animation: snowDrift 26s linear infinite;
          z-index: 0;
        }

        .snowTwo {
          opacity: 0.13;
          background-size: 220px 220px, 300px 300px;
          animation-duration: 42s;
          animation-direction: reverse;
        }

        @keyframes snowDrift {
          from { transform: translate3d(0, -40px, 0); }
          to { transform: translate3d(70px, 120px, 0); }
        }

        .nav,
        .section,
        .footer {
          position: relative;
          z-index: 1;
        }

        .nav {
          width: min(1180px, calc(100% - 32px));
          margin: 18px auto 0;
          padding: 12px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid var(--line);
          border-radius: 22px;
          background: rgba(33, 27, 22, 0.75);
          box-shadow: 0 18px 55px var(--shadow);
          backdrop-filter: blur(16px);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brandMark {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          color: #17200f;
          background: linear-gradient(135deg, var(--green), var(--gold));
          font-weight: 950;
          box-shadow: 0 8px 25px rgba(143, 191, 111, 0.28);
        }

        .brand strong,
        .brand small {
          display: block;
          line-height: 1.1;
        }

        .brand small {
          margin-top: 4px;
          color: var(--muted);
          font-size: 0.76rem;
        }

        .navLinks {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--muted);
          font-size: 0.93rem;
        }

        .navLinks a {
          padding: 10px 12px;
          border-radius: 999px;
          transition: 0.2s ease;
        }

        .navLinks a:hover {
          color: var(--cream);
          background: rgba(255, 255, 255, 0.06);
        }

        .navButton {
          color: #15120f !important;
          background: var(--gold) !important;
          font-weight: 800;
        }

        .section {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
          padding: 82px 0 0;
        }

        .hero {
          min-height: 720px;
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
          gap: 44px;
          align-items: center;
          padding-top: 76px;
        }

        .sticker,
        .eyebrow {
          width: fit-content;
          color: #1c160f;
          background: var(--gold);
          border: 1px solid rgba(255,255,255,0.22);
          border-radius: 999px;
          padding: 8px 12px;
          font-size: 0.79rem;
          font-weight: 900;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          box-shadow: 0 10px 30px rgba(232, 183, 90, 0.16);
        }

        .eyebrow {
          padding: 7px 10px;
          margin: 0 0 14px;
          background: rgba(143, 191, 111, 0.18);
          color: var(--green);
          border-color: rgba(143, 191, 111, 0.28);
          box-shadow: none;
        }

        .hero h1 {
          max-width: 760px;
          margin: 22px 0 18px;
          font-size: clamp(3.2rem, 8vw, 7.7rem);
          line-height: 0.88;
          letter-spacing: -0.08em;
          text-wrap: balance;
        }

        .hero p,
        .sectionHeading p,
        .paperPanel p,
        .releaseCard p,
        .ctaCard p {
          color: var(--muted);
          font-size: clamp(1rem, 1.7vw, 1.18rem);
          line-height: 1.75;
        }

        .heroText > p {
          max-width: 690px;
        }

        .heroButtons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }

        .primary,
        .secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 0 18px;
          border-radius: 16px;
          font-weight: 900;
          border: 1px solid var(--line);
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        .primary {
          color: #15120f;
          background: linear-gradient(135deg, var(--green), var(--gold));
          box-shadow: 0 14px 35px rgba(143, 191, 111, 0.2);
        }

        .secondary {
          color: var(--cream);
          background: rgba(255, 255, 255, 0.06);
        }

        .ghost {
          color: var(--muted);
        }

        .primary:hover,
        .secondary:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 38px rgba(0,0,0,0.25);
        }

        .miniStats {
          margin-top: 28px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .miniStats span {
          display: inline-flex;
          gap: 6px;
          padding: 10px 12px;
          border-radius: 14px;
          border: 1px dashed rgba(247, 234, 210, 0.18);
          background: rgba(43, 36, 29, 0.68);
          color: var(--muted);
          font-size: 0.92rem;
        }

        .miniStats b {
          color: var(--cream);
        }

        .heroBoard {
          position: relative;
          min-height: 530px;
          border: 1px solid var(--line);
          border-radius: 34px;
          background:
            linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02)),
            linear-gradient(180deg, #2c241d, #1d1712);
          box-shadow: 0 30px 80px var(--shadow);
          padding: 26px;
          overflow: hidden;
          transform: rotate(1deg);
        }

        .stringLights {
          position: absolute;
          left: -20px;
          right: -20px;
          top: 20px;
          height: 44px;
          border-top: 2px solid rgba(247, 234, 210, 0.18);
          border-radius: 50%;
        }

        .stringLights::after {
          content: "";
          position: absolute;
          inset: 12px 38px auto;
          height: 12px;
          background:
            radial-gradient(circle, var(--green) 0 4px, transparent 5px) 0 0 / 54px 12px repeat-x,
            radial-gradient(circle, var(--red) 0 4px, transparent 5px) 27px 0 / 54px 12px repeat-x;
          filter: drop-shadow(0 0 6px rgba(232, 183, 90, 0.55));
        }

        .noteCard {
          position: relative;
          border-radius: 28px;
          padding: 28px;
          background: #f1dfbd;
          color: #261b12;
          box-shadow: 0 22px 45px rgba(0,0,0,0.22);
        }

        .bigNote {
          margin-top: 74px;
          transform: rotate(-2.2deg);
        }

        .pin {
          position: absolute;
          top: 15px;
          right: 22px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--red);
          box-shadow: 0 4px 10px rgba(0,0,0,0.22);
        }

        .noteLabel {
          color: #6f5635 !important;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 0.78rem !important;
          margin: 0 0 12px;
        }

        .noteCard h2 {
          margin: 0 0 14px;
          font-size: clamp(2rem, 4vw, 3.5rem);
          letter-spacing: -0.05em;
        }

        .noteCard ul {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          padding: 0;
          margin: 18px 0 0;
          list-style: none;
        }

        .noteCard li {
          padding: 10px;
          border-radius: 13px;
          background: rgba(38, 27, 18, 0.08);
          font-weight: 800;
        }

        .tinyCards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 34px;
        }

        .tinyCard {
          min-height: 92px;
          display: grid;
          place-items: center;
          border-radius: 22px;
          color: #18120d;
          font-weight: 950;
          box-shadow: 0 18px 34px rgba(0,0,0,0.22);
        }

        .tinyCard.green { background: var(--green); transform: rotate(2deg); }
        .tinyCard.gold { background: var(--gold); transform: rotate(-1deg); }
        .tinyCard.red { background: var(--red); color: var(--snow); transform: rotate(1.5deg); }

        .introGrid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 22px;
        }

        .paperPanel,
        .releaseCard,
        .ctaCard {
          border: 1px solid var(--line);
          border-radius: 30px;
          background: rgba(33, 27, 22, 0.82);
          box-shadow: 0 24px 70px var(--shadow);
          padding: clamp(22px, 4vw, 38px);
        }

        .paperPanel h2,
        .releaseCard h2,
        .sectionHeading h2,
        .ctaCard h2 {
          margin: 0 0 14px;
          font-size: clamp(2rem, 4vw, 4rem);
          line-height: 0.98;
          letter-spacing: -0.06em;
        }

        .checklist {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 18px;
        }

        .checklist span {
          padding: 10px 12px;
          border-radius: 14px;
          background: rgba(143, 191, 111, 0.12);
          color: var(--green);
          border: 1px solid rgba(143, 191, 111, 0.24);
          font-weight: 850;
        }

        .sectionHeading {
          max-width: 760px;
          margin: 0 auto 30px;
          text-align: center;
        }

        .sectionHeading .eyebrow {
          margin-left: auto;
          margin-right: auto;
        }

        .sectionHeading.left {
          margin-left: 0;
          text-align: left;
        }

        .sectionHeading.left .eyebrow {
          margin-left: 0;
        }

        .featureGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .featureCard,
        .journalCard,
        .photoCard {
          border: 1px solid var(--line);
          border-radius: 26px;
          background: rgba(43, 36, 29, 0.78);
          box-shadow: 0 18px 55px rgba(0,0,0,0.22);
        }

        .featureCard {
          padding: 24px;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .featureCard:hover {
          transform: translateY(-5px) rotate(-0.4deg);
          background: rgba(51, 41, 31, 0.94);
        }

        .featureIcon {
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          border-radius: 15px;
          color: #16120e;
          background: linear-gradient(135deg, var(--green), var(--gold));
          font-size: 1.2rem;
          font-weight: 900;
        }

        .featureCard h3,
        .photoCard h3 {
          margin: 18px 0 10px;
          font-size: 1.28rem;
        }

        .featureCard p,
        .journalCard p,
        .photoCard p,
        .footer {
          color: var(--muted);
          line-height: 1.65;
        }

        .releaseCard {
          display: grid;
          grid-template-columns: 1fr 220px;
          gap: 28px;
          align-items: center;
          background:
            radial-gradient(circle at 90% 10%, rgba(196, 91, 77, 0.18), transparent 18rem),
            rgba(33, 27, 22, 0.86);
        }

        .giftBox {
          position: relative;
          width: min(220px, 100%);
          height: 190px;
          display: grid;
          place-items: center;
          justify-self: center;
          border-radius: 28px;
          background:
            linear-gradient(90deg, transparent 42%, rgba(255,248,232,0.24) 42% 58%, transparent 58%),
            linear-gradient(180deg, var(--red), #8f4036);
          box-shadow: inset 0 -16px 0 rgba(0,0,0,0.12), 0 20px 45px rgba(0,0,0,0.24);
        }

        .bow {
          position: absolute;
          top: -26px;
          width: 120px;
          height: 52px;
          background:
            radial-gradient(circle at 28% 50%, var(--gold) 0 27px, transparent 28px),
            radial-gradient(circle at 72% 50%, var(--gold) 0 27px, transparent 28px);
        }

        .giftText {
          color: var(--snow);
          font-size: 2rem;
          font-weight: 950;
          letter-spacing: -0.04em;
        }

        .journalGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .journalCard {
          padding: 20px;
        }

        .journalCard span {
          display: inline-flex;
          padding: 8px 10px;
          border-radius: 999px;
          background: rgba(232, 183, 90, 0.12);
          color: var(--gold);
          border: 1px solid rgba(232, 183, 90, 0.2);
          font-weight: 900;
        }

        .galleryGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .photoCard {
          position: relative;
          padding: 12px;
          background: #ead7b7;
          color: #281d13;
          transform: rotate(-1deg);
        }

        .photo2 { transform: rotate(1.5deg); }
        .photo3 { transform: rotate(-1.4deg); }
        .photo4 { transform: rotate(1deg); }

        .photoCard img {
          width: 100%;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          display: block;
          border-radius: 16px;
          background: #2a221b;
        }

        .photoCard h3 {
          margin: 12px 4px 4px;
        }

        .photoCard p {
          margin: 0 4px 4px;
          color: #705a3b;
          font-size: 0.92rem;
        }

        .tape {
          position: absolute;
          z-index: 2;
          top: -13px;
          left: 50%;
          width: 92px;
          height: 28px;
          transform: translateX(-50%) rotate(2deg);
          border-radius: 5px;
          background: rgba(255,248,232,0.62);
          box-shadow: 0 3px 10px rgba(0,0,0,0.14);
        }

        .ctaSection {
          padding-bottom: 70px;
        }

        .ctaCard {
          text-align: center;
          background:
            radial-gradient(circle at 20% 20%, rgba(143, 191, 111, 0.18), transparent 22rem),
            radial-gradient(circle at 80% 40%, rgba(232, 183, 90, 0.12), transparent 18rem),
            rgba(33, 27, 22, 0.86);
        }

        .ctaCard .eyebrow {
          margin-left: auto;
          margin-right: auto;
        }

        .footer {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
          padding: 24px 0 34px;
          display: flex;
          justify-content: space-between;
          gap: 12px;
          border-top: 1px solid var(--line);
          font-size: 0.94rem;
        }

        .footer span:first-child {
          color: var(--cream);
          font-weight: 900;
        }

        @media (max-width: 980px) {
          .hero,
          .introGrid,
          .releaseCard {
            grid-template-columns: 1fr;
          }

          .hero {
            min-height: auto;
            padding-top: 54px;
          }

          .heroBoard {
            min-height: 470px;
            transform: rotate(0deg);
          }

          .featureGrid,
          .journalGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .galleryGrid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 720px) {
          .nav {
            align-items: flex-start;
            gap: 14px;
            flex-direction: column;
          }

          .navLinks {
            width: 100%;
            overflow-x: auto;
            padding-bottom: 4px;
          }

          .section {
            width: min(100% - 22px, 1180px);
            padding-top: 58px;
          }

          .hero h1 {
            font-size: clamp(3rem, 18vw, 5.8rem);
          }

          .heroBoard {
            padding: 18px;
            border-radius: 26px;
          }

          .noteCard ul,
          .tinyCards,
          .featureGrid,
          .journalGrid,
          .galleryGrid {
            grid-template-columns: 1fr;
          }

          .bigNote {
            margin-top: 64px;
            transform: none;
          }

          .footer {
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}
