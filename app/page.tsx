"use client";

import { useEffect, useState } from "react";

const DISCORD = "https://discord.gg/5HxHgKdfMu";
const LAUNCH_DATE = new Date("2026-08-17T00:00:00").getTime();

const features = [
  ["Custom HUD", "Move and customize CPS, armor, potions, playtime, and more."],
  ["Smooth Visuals", "Clean Minecraft visuals that make your game feel better."],
  ["Better Performance", "Useful FPS tools made for smoother gameplay."],
  ["Simple UI", "Easy menus made for players, not confusing settings pages."],
];

const screenshots = [
  {
    title: "Minecraft Village",
    desc: "A friendly Minecraft-themed design.",
    image: "/hero-village.png",
  },
  {
    title: "Mobs & Gameplay",
    desc: "Clean visuals built around Minecraft.",
    image: "/mobs-showcase.png",
  },
  {
    title: "Villagers",
    desc: "Village style, simple and familiar.",
    image: "/villagers.png",
  },
  {
    title: "Adventure",
    desc: "A client made for everyday players.",
    image: "/village-run.png",
  },
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
        <div className="heroText">
          <div className="pill">Beta Soon • Minecraft 1.21.11</div>

          <h1>
            Booger <span>Client</span>
          </h1>

          <h2>A cleaner way to play Minecraft.</h2>

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
          <strong>Worldwide</strong>
          <span>Support Goal</span>
        </div>
      </section>

      <section className="section">
        <div className="sectionHead">
          <span>Built for a Better Minecraft</span>
          <h2>Simple, clean, and player friendly.</h2>
          <p>
            Booger Client is made to feel useful and easy. No confusing mess,
            no crazy futuristic style, just a clean Minecraft client site.
          </p>
        </div>

        <div className="featureGrid">
          {features.map(([title, desc], index) => (
            <div className="card" key={title}>
              <div className="icon">{["⌖", "▰", "↗", "☺"][index]}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="sectionHead">
          <span>See it in Action</span>
          <h2>Minecraft style, clean client feel.</h2>
          <p>
            A friendly village-themed site with mobs, villagers, and a familiar
            Minecraft look.
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
        <div className="downloadImage">
          <img src="/mobs-showcase.png" alt="Booger Client Minecraft mobs" />
        </div>

        <div className="downloadText">
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
          background: #171b17;
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
          min-height: 720px;
          overflow: hidden;
          background:
            linear-gradient(90deg, rgba(15, 17, 15, 0.9) 0%, rgba(15, 17, 15, 0.72) 35%, rgba(15, 17, 15, 0.18) 100%),
            linear-gradient(180deg, rgba(15, 17, 15, 0.1) 0%, rgba(22, 26, 22, 0.92) 100%),
            url("/hero-village.png");
          background-size: cover;
          background-position: center;
        }

        .heroText {
          position: relative;
          z-index: 10;
          width: min(1220px, calc(100% - 32px));
          margin: 0 auto;
          padding-top: 160px;
        }

        .pill,
        .sectionHead span,
        .downloadText span {
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
        .showcase:hover {
          transform: translateY(-2px);
        }

        .countdown {
          max-width: 560px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          margin-top: 36px;
        }

        .countdown div {
          padding: 18px 12px;
          text-align: center;
          border-radius: 16px;
          background: rgba(22, 26, 22, 0.68);
          border: 1px solid rgba(255, 255, 255, 0.14);
          backdrop-filter: blur(12px);
        }

        .countdown strong {
          display: block;
          color: #a7e567;
          font-size: 30px;
        }

        .countdown span {
          display: block;
          margin-top: 4px;
          color: rgba(255, 255, 255, 0.68);
          font-size: 11px;
          font-weight: 1000;
          text-transform: uppercase;
        }

        .stats,
        .section,
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

        .sectionHead h2 {
          margin: 14px 0 0;
          font-size: clamp(34px, 5vw, 56px);
          line-height: 1;
          letter-spacing: -0.05em;
        }

        .sectionHead p {
          color: rgba(255, 255, 255, 0.62);
          line-height: 1.7;
        }

        .featureGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .card {
          padding: 24px;
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
          font-size: 20px;
        }

        .card p {
          margin: 0;
          color: rgba(255, 255, 255, 0.62);
          line-height: 1.55;
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
          display: grid;
          grid-template-columns: 320px 1fr auto;
          gap: 30px;
          align-items: center;
          padding: 28px;
          border-radius: 26px;
          background: rgba(25, 29, 26, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.26);
          overflow: hidden;
        }

        .downloadImage {
          height: 170px;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .downloadImage img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .downloadText h2 {
          margin: 12px 0 0;
          font-size: clamp(32px, 5vw, 48px);
          letter-spacing: -0.04em;
        }

        .downloadText p {
          max-width: 650px;
          color: rgba(255, 255, 255, 0.64);
          line-height: 1.65;
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

          .featureGrid,
          .showcaseGrid,
          .stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .stats div {
            border-right: none;
          }

          .downloadBox {
            grid-template-columns: 1fr;
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

          .heroText {
            padding-top: 135px;
          }

          h1 {
            font-size: 58px;
          }

          .countdown,
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
