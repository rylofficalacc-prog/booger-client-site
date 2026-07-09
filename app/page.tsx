"use client";

import { useEffect, useState } from "react";

const DISCORD = "https://discord.gg/5HxHgKdfMu";
const LAUNCH_DATE = new Date("2026-08-17T00:00:00").getTime();

const features = [
  ["Clean ClickGUI", "Simple categories, smooth toggles, clean module cards, and settings."],
  ["HUD Editor", "Move, scale, and save HUD modules like CPS, armor, potions, and playtime."],
  ["Profiles", "Swap between PvP, Survival, Recording, and custom presets."],
  ["Themes", "Dark mode, soft green accents, and clean saved style presets."],
  ["Discord RPC", "Show Booger Client status while playing Minecraft."],
  ["FPS Tools", "Visual and performance tools built for smoother gameplay."],
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
      <nav className="nav">
        <a className="brand" href="/">
          <img src="/logo.png" alt="Booger Client" />
          <div>
            <strong>Booger Client</strong>
            <span>1.21.11 Fabric Client</span>
          </div>
        </a>

        <div className="links">
          <a href="/features">Features</a>
          <a href="/download">Download</a>
          <a href="/roadmap">Roadmap</a>
          <a href="/changelog">Updates</a>
          <a href="/staff">Staff</a>
          <a href="/faq">FAQ</a>
        </div>

        <a className="navBtn" href={DISCORD} target="_blank">
          Discord
        </a>
      </nav>

      <section className="hero">
        <div className="heroLeft">
          <div className="badge">Minecraft 1.21.11 • Beta Soon</div>

          <h1>
            A cleaner way to play
            <span>Minecraft.</span>
          </h1>

          <p>
            Booger Client is a clean utility client focused on smooth visuals,
            useful HUD tools, simple profiles, and a polished launcher experience.
          </p>

          <div className="heroButtons">
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

        <div className="clientPreview">
          <div className="previewTop">
            <div>
              <strong>Booger Client</strong>
              <span>Module Menu Preview</span>
            </div>
            <p>Private Build</p>
          </div>

          <div className="previewBody">
            <aside>
              <button className="active">Visual</button>
              <button>Movement</button>
              <button>Combat</button>
              <button>HUD</button>
              <button>Misc</button>
            </aside>

            <div className="modules">
              {["Fullbright", "Armor HUD", "CPS Counter", "Crosshair", "Motion Blur"].map(
                (module) => (
                  <div className="module" key={module}>
                    <div>
                      <strong>{module}</strong>
                      <span>Ready to use</span>
                    </div>
                    <div className="toggle" />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="quickStats">
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
          <strong>Worldwide</strong>
          <span>Support Goal</span>
        </div>
      </section>

      <section className="section">
        <div className="sectionHead">
          <span>Features</span>
          <h2>Everything feels simple and polished.</h2>
          <p>
            No messy layout. No random neon spam. Just clean tools, clean menus,
            and a website that looks like a real client project.
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
          <span>Status</span>
          <h2>Booger Client is being rebuilt better.</h2>
          <p>
            Development is still active. The launcher, main menu, module menu,
            HUD tools, and website are being cleaned up before public beta.
          </p>
          <a href="/changelog">View updates →</a>
        </div>

        <div className="bigCard">
          <span>Modules</span>
          <h2>Utility modules.</h2>
          <div className="moduleCloud">
            {modules.map((module) => (
              <p key={module}>{module}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="downloadBox">
        <div>
          <span>Beta Access</span>
          <h2>Download coming soon.</h2>
          <p>
            Public downloads are not open yet. Join the Discord for private testing,
            sneak peeks, announcements, and development updates.
          </p>
        </div>

        <a href={DISCORD} target="_blank">
          Join Discord
        </a>
      </section>

      <footer>
        <div>
          <strong>Booger Client</strong>
          <span>© 2026. All rights reserved.</span>
        </div>
        <p>Not affiliated with Mojang, Microsoft, Lunar Client, or LabyMod.</p>
      </footer>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .site {
          min-height: 100vh;
          color: white;
          background:
            radial-gradient(circle at top left, rgba(72, 255, 135, 0.14), transparent 34%),
            radial-gradient(circle at top right, rgba(255, 255, 255, 0.06), transparent 30%),
            linear-gradient(180deg, #080b09 0%, #0d120f 45%, #070807 100%);
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          overflow-x: hidden;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .nav {
          width: min(1180px, calc(100% - 32px));
          height: 74px;
          margin: 18px auto 0;
          padding: 0 16px;
          border-radius: 22px;
          background: rgba(15, 18, 16, 0.84);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(18px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 18px;
          z-index: 50;
          box-shadow: 0 18px 60px rgba(0, 0, 0, 0.35);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand img {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          object-fit: cover;
          background: rgba(255, 255, 255, 0.08);
        }

        .brand strong {
          display: block;
          font-size: 15px;
        }

        .brand span {
          display: block;
          margin-top: 3px;
          color: rgba(255, 255, 255, 0.48);
          font-size: 12px;
        }

        .links {
          display: flex;
          gap: 20px;
        }

        .links a {
          color: rgba(255, 255, 255, 0.58);
          font-size: 14px;
          font-weight: 700;
        }

        .links a:hover {
          color: white;
        }

        .navBtn,
        .secondary {
          padding: 12px 16px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.1);
          font-weight: 800;
        }

        .hero {
          width: min(1180px, calc(100% - 32px));
          margin: 52px auto 0;
          min-height: 650px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 42px;
        }

        .badge,
        .sectionHead span,
        .bigCard span,
        .downloadBox span {
          display: inline-flex;
          width: fit-content;
          color: #79ff9f;
          background: rgba(121, 255, 159, 0.1);
          border: 1px solid rgba(121, 255, 159, 0.18);
          border-radius: 999px;
          padding: 9px 13px;
          font-size: 12px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        h1 {
          margin: 22px 0 0;
          font-size: clamp(48px, 7vw, 92px);
          line-height: 0.95;
          letter-spacing: -0.07em;
        }

        h1 span {
          display: block;
          color: #79ff9f;
        }

        .heroLeft p {
          max-width: 560px;
          color: rgba(255, 255, 255, 0.64);
          font-size: 18px;
          line-height: 1.7;
          margin: 24px 0 0;
        }

        .heroButtons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .primary,
        .downloadBox a {
          padding: 14px 20px;
          border-radius: 14px;
          color: #071108;
          background: linear-gradient(135deg, #8affaa, #29d66b);
          font-weight: 900;
          box-shadow: 0 18px 50px rgba(41, 214, 107, 0.2);
        }

        .primary:hover,
        .secondary:hover,
        .navBtn:hover,
        .downloadBox a:hover,
        .card:hover,
        .bigCard:hover {
          transform: translateY(-2px);
        }

        .countdown {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          margin-top: 34px;
          max-width: 560px;
        }

        .countdown div,
        .quickStats div,
        .clientPreview,
        .card,
        .bigCard,
        .downloadBox {
          background: rgba(255, 255, 255, 0.055);
          border: 1px solid rgba(255, 255, 255, 0.09);
          backdrop-filter: blur(16px);
          box-shadow: 0 18px 70px rgba(0, 0, 0, 0.26);
        }

        .countdown div {
          border-radius: 18px;
          padding: 18px 12px;
          text-align: center;
        }

        .countdown strong {
          display: block;
          font-size: 28px;
        }

        .countdown span {
          color: rgba(255, 255, 255, 0.45);
          font-size: 12px;
          font-weight: 800;
        }

        .clientPreview {
          border-radius: 28px;
          overflow: hidden;
        }

        .previewTop {
          height: 74px;
          padding: 0 22px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .previewTop strong {
          display: block;
          font-size: 18px;
        }

        .previewTop span,
        .previewTop p {
          color: rgba(255, 255, 255, 0.48);
          font-size: 13px;
          margin: 4px 0 0;
        }

        .previewBody {
          display: grid;
          grid-template-columns: 150px 1fr;
          min-height: 430px;
        }

        aside {
          padding: 18px;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        aside button {
          border: 0;
          border-radius: 14px;
          padding: 12px 14px;
          background: transparent;
          color: rgba(255, 255, 255, 0.5);
          text-align: left;
          font-weight: 800;
        }

        aside .active {
          color: #071108;
          background: #79ff9f;
        }

        .modules {
          padding: 20px;
        }

        .module {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 15px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.055);
          border: 1px solid rgba(255, 255, 255, 0.07);
          margin-bottom: 12px;
        }

        .module strong {
          display: block;
        }

        .module span {
          display: block;
          margin-top: 4px;
          color: rgba(255, 255, 255, 0.45);
          font-size: 12px;
        }

        .toggle {
          width: 44px;
          height: 24px;
          border-radius: 999px;
          background: #79ff9f;
          position: relative;
        }

        .toggle::after {
          content: "";
          width: 18px;
          height: 18px;
          border-radius: 999px;
          background: #071108;
          position: absolute;
          right: 3px;
          top: 3px;
        }

        .quickStats,
        .section,
        .split,
        .downloadBox,
        footer {
          width: min(1180px, calc(100% - 32px));
          margin-left: auto;
          margin-right: auto;
        }

        .quickStats {
          margin-top: 34px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .quickStats div {
          border-radius: 20px;
          padding: 24px;
        }

        .quickStats strong {
          display: block;
          font-size: 26px;
        }

        .quickStats span {
          color: rgba(255, 255, 255, 0.48);
        }

        .section {
          margin-top: 110px;
        }

        .sectionHead {
          max-width: 720px;
          margin: 0 auto 34px;
          text-align: center;
        }

        .sectionHead h2,
        .bigCard h2,
        .downloadBox h2 {
          margin: 14px 0 0;
          font-size: clamp(34px, 5vw, 58px);
          line-height: 1;
          letter-spacing: -0.06em;
        }

        .sectionHead p,
        .bigCard p,
        .downloadBox p {
          color: rgba(255, 255, 255, 0.58);
          line-height: 1.7;
        }

        .featureGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .card,
        .bigCard {
          border-radius: 26px;
          padding: 28px;
          transition: 0.18s ease;
        }

        .card:hover,
        .bigCard:hover {
          border-color: rgba(121, 255, 159, 0.25);
        }

        .icon {
          width: 44px;
          height: 44px;
          border-radius: 15px;
          display: grid;
          place-items: center;
          background: rgba(121, 255, 159, 0.1);
          color: #79ff9f;
          margin-bottom: 20px;
        }

        .card h3 {
          margin: 0 0 10px;
          font-size: 22px;
        }

        .card p {
          margin: 0;
          color: rgba(255, 255, 255, 0.56);
          line-height: 1.6;
        }

        .split {
          margin-top: 100px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 14px;
        }

        .bigCard a {
          display: inline-block;
          margin-top: 18px;
          color: #79ff9f;
          font-weight: 900;
        }

        .moduleCloud {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
        }

        .moduleCloud p {
          margin: 0;
          padding: 10px 13px;
          border-radius: 999px;
          background: rgba(121, 255, 159, 0.1);
          border: 1px solid rgba(121, 255, 159, 0.16);
          color: #caffd7;
          font-size: 13px;
          font-weight: 800;
        }

        .downloadBox {
          margin-top: 100px;
          margin-bottom: 70px;
          border-radius: 30px;
          padding: 34px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .downloadBox p {
          max-width: 680px;
        }

        footer {
          padding: 26px 0 42px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          color: rgba(255, 255, 255, 0.42);
          font-size: 13px;
        }

        footer strong {
          display: block;
          color: white;
          margin-bottom: 5px;
        }

        footer p {
          margin: 0;
        }

        @media (max-width: 950px) {
          .links {
            display: none;
          }

          .hero,
          .split {
            grid-template-columns: 1fr;
          }

          .quickStats,
          .featureGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .clientPreview {
            max-width: 650px;
          }
        }

        @media (max-width: 620px) {
          .brand span {
            display: none;
          }

          .hero {
            margin-top: 38px;
          }

          .countdown,
          .quickStats,
          .featureGrid {
            grid-template-columns: 1fr;
          }

          .previewBody {
            grid-template-columns: 1fr;
          }

          aside {
            display: none;
          }

          .downloadBox,
          footer {
            flex-direction: column;
            align-items: flex-start;
          }

          h1 {
            font-size: 48px;
          }
        }
      `}</style>
    </main>
  );
}
