"use client";

import { useEffect, useState } from "react";

const DISCORD = "https://discord.gg/5HxHgKdfMu";
const LAUNCH_DATE = new Date("2026-08-17T00:00:00").getTime();

const features = [
  ["Smooth ClickGUI", "A clean premium menu with categories, search, animations, settings, and blur."],
  ["HUD Editor", "Move, scale, snap, and save HUD modules like CPS, armor, potion effects, and playtime."],
  ["Profiles", "Switch between PvP, Survival, Recording, and custom presets instantly."],
  ["Themes", "Choose clean accent colors, dark glass panels, glow effects, and saved presets."],
  ["Discord RPC", "Show Booger Client activity on Discord while playing Minecraft."],
  ["FPS Tools", "Performance-focused visuals and utility options for smoother gameplay."],
];

const modules = [
  "Fullbright",
  "CPS Counter",
  "Armor HUD",
  "Potion Effects",
  "Zoom",
  "Sprint",
  "Playtime",
  "Stopwatch",
  "Crosshair",
  "Motion Blur",
  "Freelook",
  "Notifications",
];

function getTimeLeft() {
  const distance = LAUNCH_DATE - Date.now();

  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
}

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="site">
      <div className="bgGrid" />
      <div className="glow glowOne" />
      <div className="glow glowTwo" />

      <nav className="nav">
        <a className="brand" href="/">
          <div className="brandIcon">B</div>
          <div>
            <strong>Booger Client</strong>
            <span>Minecraft 1.21.11</span>
          </div>
        </a>

        <div className="links">
          <a href="/features">Features</a>
          <a href="/download">Download</a>
          <a href="/roadmap">Roadmap</a>
          <a href="/changelog">Updates</a>
          <a href="/shop">Shop</a>
        </div>

        <a className="discord" href={DISCORD} target="_blank">
          Join Discord
        </a>
      </nav>

      <section className="hero">
        <div className="heroText">
          <div className="pill">Minecraft 1.21.11 • In Development</div>

          <h1>
            BOOGER CLIENT
            <span>BUILT DIFFERENT.</span>
          </h1>

          <p>
            A clean Minecraft utility client with a smooth ClickGUI, custom HUD editor,
            profiles, themes, Discord RPC, FPS tools, and premium visuals.
          </p>

          <div className="buttons">
            <a className="primary" href="/download">
              Download Soon
            </a>
            <a className="secondary" href={DISCORD} target="_blank">
              Join Discord
            </a>
          </div>

          <div className="countdown">
            <div>
              <strong>{timeLeft.days}</strong>
              <span>Days</span>
            </div>
            <div>
              <strong>{timeLeft.hours}</strong>
              <span>Hours</span>
            </div>
            <div>
              <strong>{timeLeft.minutes}</strong>
              <span>Minutes</span>
            </div>
            <div>
              <strong>{timeLeft.seconds}</strong>
              <span>Seconds</span>
            </div>
          </div>
        </div>

        <div className="preview">
          <div className="window">
            <div className="windowTop">
              <div className="dots">
                <span />
                <span />
                <span />
              </div>
              <p>Booger Client Preview</p>
            </div>

            <div className="windowBody">
              <aside>
                <button className="active">Visual</button>
                <button>Movement</button>
                <button>HUD</button>
                <button>Misc</button>
              </aside>

              <div className="panel">
                <div className="panelHead">
                  <h3>Visual Modules</h3>
                  <span>Enabled</span>
                </div>

                {["Fullbright", "Armor HUD", "CPS Counter", "Motion Blur", "Crosshair"].map(
                  (item) => (
                    <div className="module" key={item}>
                      <div>
                        <strong>{item}</strong>
                        <span>Ready</span>
                      </div>
                      <div className="toggle" />
                    </div>
                  )
                )}
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
          <strong>Active</strong>
          <span>Development</span>
        </div>
        <div>
          <strong>Beta Soon</strong>
          <span>Testing Phase</span>
        </div>
      </section>

      <section className="section">
        <div className="sectionHead">
          <span>Features</span>
          <h2>A real client site, not a basic landing page.</h2>
          <p>
            Booger Client is being built with a clean product style, useful pages, and
            room for updates, downloads, cosmetics, and announcements.
          </p>
        </div>

        <div className="featureGrid">
          {features.map(([title, desc]) => (
            <div className="card" key={title}>
              <div className="icon">✦</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="split">
        <div className="bigCard">
          <span>Latest Announcement</span>
          <h2>Development is taking longer than expected.</h2>
          <p>
            Coding for Minecraft 1.21.11 is harder than earlier versions. We are also
            underfunded and understaffed with developers, so progress is slower than planned.
            The project is not cancelled — we are taking more time so the release feels
            polished, stable, and worth using.
          </p>
          <a href="/changelog">View updates →</a>
        </div>

        <div className="bigCard">
          <span>Modules</span>
          <h2>Clean utility features.</h2>
          <div className="moduleCloud">
            {modules.map((module) => (
              <p key={module}>{module}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHead">
          <span>Pages</span>
          <h2>Explore the full site.</h2>
        </div>

        <div className="pageGrid">
          {[
            ["Download", "/download", "View release status and beta information."],
            ["Features", "/features", "See what Booger Client is being built with."],
            ["Roadmap", "/roadmap", "Track the plan before public release."],
            ["Updates", "/changelog", "Read development announcements and changelog posts."],
            ["Shop", "/shop", "Preview cosmetics and supporter perks."],
          ].map(([title, link, desc]) => (
            <a className="pageCard" href={link} key={title}>
              <h3>{title}</h3>
              <p>{desc}</p>
              <span>Open →</span>
            </a>
          ))}
        </div>
      </section>

      <section className="cta">
        <span>Join before launch</span>
        <h2>Booger Client is still cooking.</h2>
        <p>
          Join the Discord for sneak peeks, testing info, announcements, and developer
          application info.
        </p>
        <a href={DISCORD} target="_blank">
          Join Discord
        </a>
      </section>

      <footer>
        <div>
          <strong>Booger Client</strong>
          <span>© 2026. All rights reserved.</span>
        </div>
        <p>Not affiliated with Mojang, Microsoft, Lunar Client, or Feather Client.</p>
      </footer>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .site {
          min-height: 100vh;
          overflow: hidden;
          color: white;
          background:
            radial-gradient(circle at 20% 0%, rgba(70, 255, 130, 0.22), transparent 32%),
            radial-gradient(circle at 80% 10%, rgba(0, 180, 255, 0.16), transparent 30%),
            linear-gradient(180deg, #030603 0%, #07100a 45%, #020302 100%);
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          position: relative;
        }

        .bgGrid {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: linear-gradient(to bottom, black, transparent 80%);
          pointer-events: none;
        }

        .glow {
          position: fixed;
          width: 420px;
          height: 420px;
          border-radius: 999px;
          filter: blur(100px);
          opacity: 0.35;
          pointer-events: none;
        }

        .glowOne {
          top: -100px;
          left: -120px;
          background: #40ff85;
        }

        .glowTwo {
          right: -120px;
          top: 120px;
          background: #00b7ff;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .nav {
          position: fixed;
          top: 18px;
          left: 50%;
          transform: translateX(-50%);
          width: min(1180px, calc(100% - 28px));
          height: 74px;
          padding: 0 18px;
          border-radius: 24px;
          background: rgba(5, 9, 6, 0.76);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(24px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 50;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.45);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brandIcon {
          width: 44px;
          height: 44px;
          border-radius: 16px;
          background: linear-gradient(135deg, #70ff9b, #14bd5d);
          color: #031006;
          display: grid;
          place-items: center;
          font-weight: 1000;
          box-shadow: 0 0 36px rgba(85, 255, 142, 0.3);
        }

        .brand strong {
          display: block;
          font-size: 15px;
          line-height: 1;
        }

        .brand span {
          display: block;
          margin-top: 5px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.48);
        }

        .links {
          display: flex;
          gap: 24px;
        }

        .links a {
          color: rgba(255, 255, 255, 0.62);
          font-size: 14px;
          font-weight: 800;
        }

        .links a:hover {
          color: white;
        }

        .discord {
          padding: 12px 16px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          font-weight: 900;
        }

        .hero {
          position: relative;
          z-index: 2;
          width: min(1180px, calc(100% - 28px));
          min-height: 100vh;
          margin: 0 auto;
          padding: 150px 0 90px;
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          align-items: center;
          gap: 46px;
        }

        .pill {
          display: inline-flex;
          padding: 10px 14px;
          border-radius: 999px;
          color: #baffcf;
          background: rgba(101, 255, 152, 0.12);
          border: 1px solid rgba(101, 255, 152, 0.24);
          font-size: 12px;
          font-weight: 1000;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        h1 {
          margin: 24px 0 0;
          font-size: clamp(56px, 8vw, 112px);
          line-height: 0.86;
          letter-spacing: -0.085em;
        }

        h1 span {
          display: block;
          color: #65ff98;
          text-shadow: 0 0 44px rgba(101, 255, 152, 0.28);
        }

        .heroText p {
          max-width: 660px;
          margin: 28px 0 0;
          color: rgba(255, 255, 255, 0.68);
          font-size: 18px;
          line-height: 1.75;
        }

        .buttons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 34px;
        }

        .primary,
        .secondary,
        .cta a {
          padding: 16px 24px;
          border-radius: 16px;
          font-weight: 1000;
          transition: 0.2s ease;
        }

        .primary,
        .cta a {
          color: #031006;
          background: linear-gradient(135deg, #72ff9e, #14bd5d);
          box-shadow: 0 22px 55px rgba(20, 189, 93, 0.28);
        }

        .secondary {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.14);
        }

        .primary:hover,
        .secondary:hover,
        .discord:hover,
        .cta a:hover,
        .pageCard:hover {
          transform: translateY(-2px);
        }

        .countdown {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          max-width: 650px;
          margin-top: 38px;
        }

        .countdown div,
        .stats div,
        .card,
        .bigCard,
        .pageCard,
        .cta,
        .window {
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.11);
          backdrop-filter: blur(18px);
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.3);
        }

        .countdown div {
          border-radius: 22px;
          padding: 22px;
          text-align: center;
        }

        .countdown strong {
          display: block;
          font-size: 34px;
        }

        .countdown span {
          color: rgba(255, 255, 255, 0.5);
          font-size: 12px;
          font-weight: 1000;
          text-transform: uppercase;
          letter-spacing: 0.14em;
        }

        .window {
          border-radius: 32px;
          overflow: hidden;
        }

        .windowTop {
          height: 56px;
          padding: 0 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.09);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .dots {
          display: flex;
          gap: 7px;
        }

        .dots span {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.28);
        }

        .windowTop p {
          color: rgba(255, 255, 255, 0.55);
          font-size: 13px;
          font-weight: 900;
        }

        .windowBody {
          display: grid;
          grid-template-columns: 140px 1fr;
          min-height: 430px;
        }

        aside {
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
        }

        aside button {
          padding: 12px 14px;
          border: 0;
          border-radius: 14px;
          background: transparent;
          color: rgba(255, 255, 255, 0.55);
          text-align: left;
          font-weight: 900;
        }

        aside .active {
          color: #031006;
          background: #65ff98;
        }

        .panel {
          padding: 22px;
        }

        .panelHead {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
        }

        .panelHead h3 {
          margin: 0;
          font-size: 26px;
        }

        .panelHead span {
          color: #65ff98;
          font-weight: 1000;
          font-size: 13px;
        }

        .module {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.055);
          border: 1px solid rgba(255, 255, 255, 0.08);
          margin-bottom: 12px;
        }

        .module span {
          display: block;
          margin-top: 5px;
          color: rgba(255, 255, 255, 0.45);
          font-size: 12px;
        }

        .toggle {
          width: 44px;
          height: 24px;
          border-radius: 999px;
          background: #65ff98;
          position: relative;
          box-shadow: 0 0 22px rgba(101, 255, 152, 0.3);
        }

        .toggle::after {
          content: "";
          width: 18px;
          height: 18px;
          border-radius: 999px;
          background: #031006;
          position: absolute;
          right: 3px;
          top: 3px;
        }

        .stats {
          position: relative;
          z-index: 3;
          width: min(1180px, calc(100% - 28px));
          margin: -50px auto 100px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .stats div {
          border-radius: 24px;
          padding: 26px;
        }

        .stats strong {
          display: block;
          font-size: 30px;
        }

        .stats span {
          color: rgba(255, 255, 255, 0.5);
        }

        .section,
        .split {
          position: relative;
          z-index: 2;
          width: min(1180px, calc(100% - 28px));
          margin: 0 auto 110px;
        }

        .sectionHead {
          max-width: 760px;
          margin: 0 auto 36px;
          text-align: center;
        }

        .sectionHead span,
        .bigCard span,
        .cta span {
          color: #65ff98;
          font-weight: 1000;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-size: 12px;
        }

        .sectionHead h2,
        .bigCard h2,
        .cta h2 {
          margin: 12px 0 0;
          font-size: clamp(36px, 5vw, 66px);
          line-height: 0.95;
          letter-spacing: -0.07em;
        }

        .sectionHead p,
        .bigCard p,
        .cta p {
          color: rgba(255, 255, 255, 0.62);
          line-height: 1.7;
        }

        .featureGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .card,
        .bigCard,
        .pageCard {
          border-radius: 30px;
          padding: 28px;
          transition: 0.2s ease;
        }

        .card:hover,
        .bigCard:hover {
          border-color: rgba(101, 255, 152, 0.35);
          transform: translateY(-4px);
        }

        .icon {
          width: 46px;
          height: 46px;
          border-radius: 16px;
          background: rgba(101, 255, 152, 0.12);
          color: #65ff98;
          display: grid;
          place-items: center;
          margin-bottom: 22px;
        }

        .card h3,
        .pageCard h3 {
          margin: 0 0 10px;
          font-size: 24px;
        }

        .card p,
        .pageCard p {
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
          margin: 0;
        }

        .split {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 16px;
        }

        .bigCard a {
          display: inline-block;
          margin-top: 24px;
          color: #65ff98;
          font-weight: 1000;
        }

        .moduleCloud {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 24px;
        }

        .moduleCloud p {
          margin: 0;
          padding: 11px 14px;
          border-radius: 999px;
          background: rgba(101, 255, 152, 0.1);
          border: 1px solid rgba(101, 255, 152, 0.18);
          color: #caffd9;
          font-weight: 900;
          font-size: 13px;
        }

        .pageGrid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
        }

        .pageCard span {
          display: inline-block;
          margin-top: 18px;
          color: #65ff98;
          font-weight: 1000;
        }

        .cta {
          position: relative;
          z-index: 2;
          width: min(1180px, calc(100% - 28px));
          margin: 0 auto 90px;
          border-radius: 38px;
          padding: 58px 32px;
          text-align: center;
          background:
            radial-gradient(circle at 50% 0%, rgba(101, 255, 152, 0.16), transparent 45%),
            rgba(255, 255, 255, 0.07);
        }

        .cta p {
          max-width: 680px;
          margin: 18px auto 0;
        }

        .cta a {
          display: inline-block;
          margin-top: 28px;
        }

        footer {
          position: relative;
          z-index: 2;
          width: min(1180px, calc(100% - 28px));
          margin: 0 auto;
          padding: 30px 0 46px;
          display: flex;
          justify-content: space-between;
          color: rgba(255, 255, 255, 0.45);
          font-size: 13px;
          gap: 20px;
        }

        footer strong,
        footer span {
          display: block;
        }

        footer strong {
          color: white;
          margin-bottom: 6px;
        }

        footer p {
          margin: 0;
        }

        @media (max-width: 980px) {
          .links {
            display: none;
          }

          .hero,
          .split {
            grid-template-columns: 1fr;
          }

          .stats,
          .featureGrid,
          .pageGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .hero {
            padding-top: 130px;
          }
        }

        @media (max-width: 640px) {
          .brand span {
            display: none;
          }

          .discord {
            padding: 10px 12px;
            font-size: 13px;
          }

          .countdown,
          .stats,
          .featureGrid,
          .pageGrid {
            grid-template-columns: 1fr;
          }

          .windowBody {
            grid-template-columns: 1fr;
          }

          aside {
            display: none;
          }

          h1 {
            font-size: 54px;
          }

          footer {
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}
