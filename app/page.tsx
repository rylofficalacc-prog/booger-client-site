"use client";

const DISCORD = "https://discord.gg/5HxHgKdfMu";

const features = [
  {
    title: "Easy to Use",
    desc: "No confusing menus. Booger Client is built to feel simple, clean, and easy for any Minecraft player.",
  },
  {
    title: "PvP & Survival Ready",
    desc: "Useful HUD tools, visuals, profiles, and settings for normal gameplay, PvP, and survival worlds.",
  },
  {
    title: "Community Driven",
    desc: "Updates, testing, feedback, and sneak peeks are handled through the Booger Client Discord.",
  },
];

const modules = [
  ["Fullbright", "ON"],
  ["CPS Counter", "ON"],
  ["Armor HUD", "ON"],
  ["Zoom", "ON"],
  ["Potion Effects", "ON"],
  ["Sprint", "ON"],
];

const screenshots = [
  {
    title: "Village Theme",
    desc: "A friendly Minecraft look with villagers, mobs, and a warm village feel.",
    image: "/hero-village.png",
  },
  {
    title: "Clean Visuals",
    desc: "Minecraft-style visuals that feel fun, colorful, and familiar.",
    image: "/mobs-showcase.png",
  },
  {
    title: "Player Friendly",
    desc: "A simple site made for real players, not a confusing tech page.",
    image: "/villagers.png",
  },
  {
    title: "Smooth Gameplay",
    desc: "Useful client tools made for everyday Minecraft gameplay.",
    image: "/village-run.png",
  },
];

export default function Home() {
  return (
    <main className="site">
      <nav className="nav">
        <a className="brand" href="/">
          <div className="logoCube">
            <span />
          </div>
          <div>
            <strong>
              Booger <b>Client</b>
            </strong>
            <p>Minecraft Utility Client</p>
          </div>
        </a>

        <div className="links">
          <a href="/">Home</a>
          <a href="/features">Features</a>
          <a href="/download">Download</a>
          <a href="/roadmap">Roadmap</a>
          <a href="/faq">FAQ</a>
        </div>

        <a className="discord" href={DISCORD} target="_blank">
          Join Discord
        </a>
      </nav>

      <section className="hero">
        <div className="heroInner">
          <div className="heroText">
            <div className="pill">Non-cheat utility client • Fabric 1.21.11</div>

            <h1>
              Booger <span>Client</span>
            </h1>

            <h2>A cleaner Minecraft client built for smoother gameplay.</h2>

            <p>
              Customize your HUD, improve your visuals, manage profiles, and play
              Minecraft with a smoother client experience.
            </p>

            <div className="buttons">
              <a className="primary" href="/download">
                Download Soon
              </a>
              <a className="secondary" href={DISCORD} target="_blank">
                Join Discord
              </a>
            </div>

            <div className="trust">
              <span>Fabric 1.21.11</span>
              <span>Private Beta</span>
              <span>Community Feedback</span>
            </div>
          </div>

          <div className="clientPreview">
            <div className="previewTop">
              <div className="miniLogo">B</div>
              <div>
                <strong>Booger Client</strong>
                <span>Module Menu Preview</span>
              </div>
              <p>Beta Build</p>
            </div>

            <div className="previewBody">
              <aside>
                <button className="active">Visual</button>
                <button>Movement</button>
                <button>Combat</button>
                <button>HUD</button>
                <button>Settings</button>
              </aside>

              <div className="moduleList">
                {modules.map(([name, state]) => (
                  <div className="module" key={name}>
                    <div>
                      <strong>{name}</strong>
                      <span>Ready to use</span>
                    </div>
                    <em>{state}</em>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div>
          <strong>1.21.11</strong>
          <span>Target Version</span>
        </div>
        <div>
          <strong>Private</strong>
          <span>Current Build</span>
        </div>
        <div>
          <strong>Beta Soon</strong>
          <span>Release Phase</span>
        </div>
        <div>
          <strong>Discord</strong>
          <span>Community Updates</span>
        </div>
      </section>

      <section className="section">
        <div className="sectionHead">
          <span>Why Booger Client?</span>
          <h2>Made to feel useful, clean, and familiar.</h2>
          <p>
            Booger Client is designed around Minecraft players. The goal is not
            to look futuristic. The goal is to look trustworthy, simple, and fun.
          </p>
        </div>

        <div className="featureGrid">
          {features.map((feature, index) => (
            <div className="card" key={feature.title}>
              <div className="icon">{["🌿", "⚔️", "💬"][index]}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wideShowcase">
        <img src="/mobs-showcase.png" alt="Minecraft mobs showcase" />
        <div>
          <span>Clean Minecraft Style</span>
          <h2>Built around the game people already love.</h2>
          <p>
            The website uses a village and mob theme so it feels like Minecraft
            right away. Bees, cows, pigs, villagers, and farms make it more
            friendly and appealing to normal players.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="sectionHead">
          <span>Preview</span>
          <h2>Village-themed, player-friendly design.</h2>
          <p>
            These image cards help the site feel more alive and less like a
            plain project page.
          </p>
        </div>

        <div className="showcaseGrid">
          {screenshots.map((shot) => (
            <div className="showcase" key={shot.title}>
              <img src={shot.image} alt={shot.title} />
              <div>
                <strong>{shot.title}</strong>
                <span>{shot.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="downloadBox">
        <div>
          <span>Beta Access</span>
          <h2>Download coming soon.</h2>
          <p>
            Public downloads are not open yet. Join the Discord for private
            testing, sneak peeks, announcements, and development updates.
          </p>
        </div>

        <a href={DISCORD} target="_blank">
          Join Discord
        </a>
      </section>

      <footer>
        <div className="footerBrand">
          <div className="logoCube small">
            <span />
          </div>
          <div>
            <strong>
              Booger <b>Client</b>
            </strong>
            <p>Play better. Your world, your way.</p>
          </div>
        </div>

        <div className="footerLinks">
          <div>
            <strong>Links</strong>
            <a href="/">Home</a>
            <a href="/features">Features</a>
            <a href="/download">Download</a>
          </div>
          <div>
            <strong>Support</strong>
            <a href="/faq">FAQ</a>
            <a href={DISCORD} target="_blank">
              Discord
            </a>
            <a href="/staff">Staff</a>
          </div>
          <div>
            <strong>Legal</strong>
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
          </div>
        </div>
      </footer>

      <div className="copyright">
        © 2026 Booger Client. Not affiliated with Mojang or Microsoft.
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .site {
          min-height: 100vh;
          color: #f7fff0;
          background:
            radial-gradient(circle at top, rgba(139, 207, 84, 0.1), transparent 36%),
            #171b17;
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          overflow-x: hidden;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .nav {
          position: fixed;
          top: 16px;
          left: 50%;
          transform: translateX(-50%);
          width: min(1220px, calc(100% - 28px));
          min-height: 72px;
          padding: 12px 16px;
          border-radius: 20px;
          background: rgba(26, 30, 28, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(18px);
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.28);
        }

        .brand,
        .footerBrand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand strong,
        .footerBrand strong {
          font-size: 22px;
          line-height: 1;
        }

        .brand b,
        .footerBrand b {
          color: #8bcf54;
        }

        .brand p,
        .footerBrand p {
          margin: 4px 0 0;
          color: rgba(255, 255, 255, 0.58);
          font-size: 12px;
        }

        .logoCube {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: linear-gradient(135deg, #8ed957 0 50%, #65ad3b 50% 100%);
          border: 2px solid #2d4b24;
          position: relative;
          box-shadow: inset 0 -8px rgba(0, 0, 0, 0.12);
        }

        .logoCube::before,
        .logoCube::after,
        .logoCube span {
          content: "";
          position: absolute;
          width: 7px;
          height: 7px;
          border-radius: 2px;
          background: #24401e;
        }

        .logoCube::before {
          left: 12px;
          top: 13px;
        }

        .logoCube::after {
          right: 12px;
          top: 13px;
        }

        .logoCube span {
          left: 20px;
          bottom: 12px;
          width: 8px;
        }

        .logoCube.small {
          width: 42px;
          height: 42px;
        }

        .links {
          display: flex;
          gap: 26px;
        }

        .links a {
          font-size: 14px;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.74);
          transition: 0.2s ease;
        }

        .links a:hover {
          color: #a6df68;
        }

        .discord,
        .secondary {
          padding: 13px 18px;
          border-radius: 13px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.16);
          font-weight: 900;
        }

        .hero {
          position: relative;
          min-height: 780px;
          overflow: hidden;
          background:
            linear-gradient(90deg, rgba(15, 17, 15, 0.92) 0%, rgba(15, 17, 15, 0.72) 36%, rgba(15, 17, 15, 0.16) 100%),
            linear-gradient(180deg, rgba(15, 17, 15, 0.1) 0%, rgba(22, 26, 22, 0.94) 100%),
            url("/hero-village.png");
          background-size: cover;
          background-position: center;
        }

        .heroInner {
          width: min(1220px, calc(100% - 32px));
          margin: 0 auto;
          padding-top: 155px;
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          align-items: center;
          gap: 36px;
          position: relative;
          z-index: 5;
        }

        .pill,
        .sectionHead span,
        .wideShowcase span,
        .downloadBox span {
          display: inline-flex;
          width: fit-content;
          padding: 9px 14px;
          border-radius: 999px;
          color: #eaffd2;
          background: rgba(139, 207, 84, 0.22);
          border: 1px solid rgba(139, 207, 84, 0.36);
          font-size: 12px;
          font-weight: 1000;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        h1 {
          margin: 18px 0 0;
          max-width: 720px;
          font-size: clamp(64px, 8vw, 122px);
          line-height: 0.88;
          letter-spacing: -0.08em;
          color: white;
          text-shadow: 0 8px 0 rgba(0, 0, 0, 0.12);
        }

        h1 span {
          color: #9dde61;
        }

        .heroText h2 {
          margin: 22px 0 0;
          font-size: clamp(26px, 4vw, 42px);
          line-height: 1.1;
        }

        .heroText p {
          max-width: 610px;
          margin: 16px 0 0;
          color: rgba(255, 255, 255, 0.82);
          font-size: 18px;
          line-height: 1.65;
        }

        .buttons {
          margin-top: 28px;
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .primary,
        .downloadBox a {
          padding: 16px 24px;
          border-radius: 15px;
          color: #1b2a13;
          background: linear-gradient(180deg, #b5ee70, #7fc64b);
          border: 1px solid rgba(255, 255, 255, 0.28);
          box-shadow: 0 12px 0 #4c7c2e, 0 22px 40px rgba(0, 0, 0, 0.28);
          font-weight: 1000;
          transition: 0.16s ease;
        }

        .primary:hover,
        .secondary:hover,
        .discord:hover,
        .downloadBox a:hover,
        .card:hover,
        .showcase:hover,
        .wideShowcase:hover {
          transform: translateY(-2px);
        }

        .trust {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 32px;
        }

        .trust span {
          padding: 10px 12px;
          border-radius: 999px;
          color: rgba(255, 255, 255, 0.76);
          background: rgba(22, 26, 22, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.12);
          font-size: 13px;
          font-weight: 800;
        }

        .clientPreview {
          overflow: hidden;
          border-radius: 26px;
          background: rgba(22, 26, 22, 0.86);
          border: 1px solid rgba(255, 255, 255, 0.14);
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.42);
          backdrop-filter: blur(16px);
        }

        .previewTop {
          min-height: 74px;
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .previewTop strong {
          display: block;
          font-size: 16px;
        }

        .previewTop span {
          display: block;
          margin-top: 3px;
          color: rgba(255, 255, 255, 0.5);
          font-size: 12px;
        }

        .previewTop p {
          margin: 0 0 0 auto;
          color: #a6df68;
          font-size: 12px;
          font-weight: 900;
        }

        .miniLogo {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          color: #1b2a13;
          background: #9dde61;
          font-weight: 1000;
          font-size: 22px;
        }

        .previewBody {
          display: grid;
          grid-template-columns: 150px 1fr;
          min-height: 390px;
        }

        aside {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 9px;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
        }

        aside button {
          padding: 12px 13px;
          border: 0;
          border-radius: 12px;
          background: transparent;
          color: rgba(255, 255, 255, 0.58);
          text-align: left;
          font-weight: 900;
        }

        aside .active {
          color: #1b2a13;
          background: #9dde61;
        }

        .moduleList {
          padding: 18px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .module {
          min-height: 82px;
          padding: 15px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.065);
          border: 1px solid rgba(255, 255, 255, 0.09);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .module strong {
          display: block;
        }

        .module span {
          display: block;
          margin-top: 5px;
          color: rgba(255, 255, 255, 0.52);
          font-size: 12px;
        }

        .module em {
          font-style: normal;
          color: #1b2a13;
          background: #9dde61;
          border-radius: 999px;
          padding: 7px 10px;
          font-size: 11px;
          font-weight: 1000;
        }

        .stats,
        .section,
        .wideShowcase,
        .downloadBox,
        footer,
        .copyright {
          width: min(1220px, calc(100% - 32px));
          margin-left: auto;
          margin-right: auto;
        }

        .stats {
          position: relative;
          z-index: 5;
          margin-top: -42px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          padding: 20px;
          border-radius: 24px;
          background: rgba(25, 29, 26, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.28);
        }

        .stats div {
          padding: 18px 22px;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
        }

        .stats div:last-child {
          border-right: none;
        }

        .stats strong {
          display: block;
          color: white;
          font-size: 24px;
        }

        .stats span {
          display: block;
          margin-top: 5px;
          color: rgba(255, 255, 255, 0.58);
        }

        .section {
          margin-top: 84px;
        }

        .sectionHead {
          max-width: 760px;
          margin: 0 auto 34px;
          text-align: center;
        }

        .sectionHead h2,
        .wideShowcase h2,
        .downloadBox h2 {
          margin: 14px 0 0;
          font-size: clamp(34px, 5vw, 56px);
          line-height: 1;
          letter-spacing: -0.05em;
        }

        .sectionHead p,
        .wideShowcase p,
        .downloadBox p {
          color: rgba(255, 255, 255, 0.62);
          line-height: 1.7;
        }

        .featureGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .card {
          padding: 26px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.065);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.24);
          transition: 0.18s ease;
        }

        .icon {
          width: 58px;
          height: 58px;
          display: grid;
          place-items: center;
          border-radius: 15px;
          color: #caff8e;
          background: rgba(139, 207, 84, 0.18);
          border: 1px solid rgba(139, 207, 84, 0.2);
          font-size: 28px;
          margin-bottom: 18px;
        }

        .card h3 {
          margin: 0 0 8px;
          font-size: 22px;
        }

        .card p {
          margin: 0;
          color: rgba(255, 255, 255, 0.62);
          line-height: 1.6;
        }

        .wideShowcase {
          margin-top: 84px;
          min-height: 390px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          align-items: center;
          padding: 26px;
          border-radius: 28px;
          background: rgba(25, 29, 26, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.25);
          transition: 0.18s ease;
        }

        .wideShowcase img {
          width: 100%;
          height: 330px;
          object-fit: cover;
          display: block;
          border-radius: 22px;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .wideShowcase div {
          padding: 10px;
        }

        .showcaseGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .showcase {
          overflow: hidden;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.065);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: 0.18s ease;
        }

        .showcase:hover {
          border-color: rgba(139, 207, 84, 0.35);
        }

        .showcase img {
          width: 100%;
          height: 170px;
          object-fit: cover;
          display: block;
        }

        .showcase div {
          padding: 14px 16px 16px;
        }

        .showcase strong {
          display: block;
        }

        .showcase span {
          display: block;
          margin-top: 4px;
          color: rgba(255, 255, 255, 0.56);
          font-size: 13px;
        }

        .downloadBox {
          margin-top: 84px;
          min-height: 230px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          padding: 34px;
          border-radius: 26px;
          background:
            linear-gradient(90deg, rgba(25, 29, 26, 0.96), rgba(25, 29, 26, 0.86)),
            url("/villagers.png");
          background-size: cover;
          background-position: center;
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.26);
          overflow: hidden;
        }

        .downloadBox p {
          max-width: 650px;
        }

        footer {
          margin-top: 72px;
          padding: 34px 0;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 28px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footerLinks {
          display: flex;
          gap: 80px;
        }

        .footerLinks div {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .footerLinks strong {
          color: white;
          margin-bottom: 5px;
        }

        .footerLinks a {
          color: rgba(255, 255, 255, 0.54);
          font-size: 14px;
        }

        .footerLinks a:hover {
          color: #a6df68;
        }

        .copyright {
          padding: 0 0 34px;
          text-align: center;
          color: rgba(255, 255, 255, 0.38);
          font-size: 13px;
        }

        @media (max-width: 1050px) {
          .links {
            display: none;
          }

          .heroInner,
          .wideShowcase {
            grid-template-columns: 1fr;
          }

          .clientPreview {
            max-width: 720px;
          }

          .featureGrid,
          .showcaseGrid,
          .stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .stats div {
            border-right: none;
          }

          .downloadBox {
            flex-direction: column;
            align-items: flex-start;
          }

          footer {
            flex-direction: column;
          }

          .footerLinks {
            gap: 42px;
          }
        }

        @media (max-width: 640px) {
          .nav {
            top: 10px;
            width: calc(100% - 16px);
          }

          .brand p {
            display: none;
          }

          .discord {
            padding: 10px 12px;
            font-size: 13px;
          }

          .heroInner {
            padding-top: 135px;
          }

          h1 {
            font-size: 58px;
          }

          .previewBody {
            grid-template-columns: 1fr;
          }

          aside {
            display: none;
          }

          .moduleList {
            grid-template-columns: 1fr;
          }

          .featureGrid,
          .showcaseGrid,
          .stats {
            grid-template-columns: 1fr;
          }

          .footerLinks {
            flex-direction: column;
            gap: 24px;
          }
        }
      `}</style>
    </main>
  );
}
