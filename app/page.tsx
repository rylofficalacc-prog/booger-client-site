"use client";

import { useEffect, useState } from "react";

const LAUNCH_DATE = new Date("2026-08-17T00:00:00").getTime();

const features = [
  {
    title: "Smooth ClickGUI",
    desc: "A clean, animated GUI built for fast toggling, searching, and customizing modules.",
  },
  {
    title: "HUD Editor",
    desc: "Drag, scale, snap, and customize HUD modules exactly how you want them.",
  },
  {
    title: "1.21.11 Ready",
    desc: "Built specifically around Minecraft 1.21.11 with modern client features.",
  },
  {
    title: "Profiles",
    desc: "Swap between PvP, Survival, Recording, and custom presets instantly.",
  },
  {
    title: "Themes",
    desc: "Choose clean accent colors, dark glass panels, and premium UI styles.",
  },
  {
    title: "Discord RPC",
    desc: "Show your Booger Client status on Discord while playing Minecraft.",
  },
  {
    title: "FPS Tools",
    desc: "Helpful visual and performance tools made for a smoother experience.",
  },
  {
    title: "Notifications",
    desc: "Clean slide-in alerts for modules, profiles, friends, updates, and more.",
  },
];

const roadmap = [
  "Core client systems",
  "ClickGUI polish",
  "HUD editor upgrades",
  "Profiles and themes",
  "Private beta testing",
  "Public release",
];

function getTimeLeft() {
  const now = new Date().getTime();
  const distance = LAUNCH_DATE - now;

  if (distance <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
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
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="site">
      <nav className="navbar">
        <div className="brand">
          <div className="logo">B</div>
          <span>Booger Client</span>
        </div>

        <div className="navLinks">
          <a href="#features">Features</a>
          <a href="#download">Download</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#updates">Updates</a>
          <a href="#support">Support</a>
        </div>

        <a className="navButton" href="https://discord.gg/YOUR_INVITE" target="_blank">
          Join Discord
        </a>
      </nav>

      <section className="hero">
        <div className="heroGlow"></div>

        <div className="heroContent">
          <div className="statusPill">Minecraft 1.21.11 • In Development</div>

          <h1>
            Booger Client
            <span>built different.</span>
          </h1>

          <p>
            A clean Minecraft utility client with a smooth ClickGUI, custom HUD editor,
            themes, profiles, Discord RPC, FPS tools, and premium visuals.
          </p>

          <div className="heroButtons" id="download">
            <a className="primaryButton" href="#">
              Download Soon
            </a>
            <a className="secondaryButton" href="https://discord.gg/YOUR_INVITE" target="_blank">
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
          <strong>Active</strong>
          <span>Development</span>
        </div>
        <div>
          <strong>Beta Soon</strong>
          <span>Testing Phase</span>
        </div>
      </section>

      <section className="section" id="features">
        <div className="sectionHeader">
          <p>Features</p>
          <h2>Everything you need in one clean client.</h2>
        </div>

        <div className="featureGrid">
          {features.map((feature) => (
            <div className="featureCard" key={feature.title}>
              <div className="featureIcon">✦</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="splitSection" id="updates">
        <div className="announcementCard">
          <p className="miniTitle">Latest Announcement</p>
          <h2>Development is taking longer than expected.</h2>
          <p>
            Coding for Minecraft 1.21.11 is harder than earlier versions. We are also
            currently underfunded and understaffed with developers, so progress is slower.
            The project is not cancelled — we are taking more time so the release feels
            polished, stable, and worth using.
          </p>
          <a href="https://discord.gg/YOUR_INVITE" target="_blank">
            Read updates on Discord →
          </a>
        </div>

        <div className="shopCard">
          <p className="miniTitle">Coming Soon</p>
          <h2>Cosmetics & Supporter Perks</h2>
          <div className="perkList">
            <span>Capes</span>
            <span>Badges</span>
            <span>Name Colors</span>
            <span>Emotes</span>
            <span>Supporter Packs</span>
            <span>Beta Access</span>
          </div>
        </div>
      </section>

      <section className="section" id="roadmap">
        <div className="sectionHeader">
          <p>Roadmap</p>
          <h2>What we are building next.</h2>
        </div>

        <div className="roadmap">
          {roadmap.map((item, index) => (
            <div className="roadmapItem" key={item}>
              <div className="roadmapNumber">{index + 1}</div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="cta" id="support">
        <h2>Be here before release.</h2>
        <p>
          Join the Discord for sneak peeks, testing info, announcements, and development
          updates.
        </p>
        <a href="https://discord.gg/YOUR_INVITE" target="_blank">
          Join Booger Client Discord
        </a>
      </section>

      <footer>
        <span>Booger Client © 2026</span>
        <span>Not affiliated with Mojang, Microsoft, Lunar Client, or Feather Client.</span>
      </footer>

      <style jsx>{`
        .site {
          min-height: 100vh;
          background:
            radial-gradient(circle at 20% 10%, rgba(0, 255, 120, 0.18), transparent 30%),
            radial-gradient(circle at 80% 20%, rgba(0, 180, 255, 0.16), transparent 35%),
            linear-gradient(180deg, #050806 0%, #080c0a 50%, #030403 100%);
          color: white;
          font-family:
            Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            sans-serif;
          overflow-x: hidden;
        }

        .navbar {
          position: fixed;
          top: 18px;
          left: 50%;
          transform: translateX(-50%);
          width: min(1120px, calc(100% - 32px));
          height: 68px;
          padding: 0 18px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 22px;
          background: rgba(6, 10, 8, 0.72);
          backdrop-filter: blur(20px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 50;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 900;
          letter-spacing: -0.03em;
        }

        .logo {
          width: 38px;
          height: 38px;
          border-radius: 14px;
          background: linear-gradient(135deg, #49ff87, #08a84f);
          color: #041007;
          display: grid;
          place-items: center;
          font-weight: 1000;
          box-shadow: 0 0 28px rgba(73, 255, 135, 0.35);
        }

        .navLinks {
          display: flex;
          gap: 22px;
        }

        .navLinks a,
        .navButton,
        .heroButtons a,
        .announcementCard a,
        .cta a {
          color: white;
          text-decoration: none;
        }

        .navLinks a {
          color: rgba(255, 255, 255, 0.68);
          font-size: 14px;
          transition: 0.2s ease;
        }

        .navLinks a:hover {
          color: white;
        }

        .navButton {
          padding: 11px 16px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          font-weight: 800;
          font-size: 14px;
        }

        .hero {
          min-height: 100vh;
          display: grid;
          place-items: center;
          position: relative;
          padding: 140px 24px 80px;
          background:
            linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.78)),
            url("https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&w=1800&q=80");
          background-size: cover;
          background-position: center;
        }

        .hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(0, 0, 0, 0.72), transparent, rgba(0, 0, 0, 0.72)),
            linear-gradient(180deg, transparent 30%, #050806 100%);
          pointer-events: none;
        }

        .heroGlow {
          position: absolute;
          width: 520px;
          height: 520px;
          border-radius: 999px;
          background: rgba(60, 255, 130, 0.2);
          filter: blur(90px);
          z-index: 1;
        }

        .heroContent {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 920px;
        }

        .statusPill {
          display: inline-flex;
          padding: 10px 15px;
          border-radius: 999px;
          background: rgba(64, 255, 133, 0.1);
          border: 1px solid rgba(64, 255, 133, 0.24);
          color: #89ffb5;
          font-weight: 800;
          font-size: 13px;
          margin-bottom: 22px;
        }

        h1 {
          font-size: clamp(58px, 10vw, 128px);
          line-height: 0.86;
          letter-spacing: -0.085em;
          margin: 0;
          text-transform: uppercase;
        }

        h1 span {
          display: block;
          color: #59ff91;
          text-shadow: 0 0 40px rgba(89, 255, 145, 0.38);
        }

        .heroContent p {
          max-width: 720px;
          margin: 28px auto 0;
          color: rgba(255, 255, 255, 0.76);
          font-size: 18px;
          line-height: 1.7;
        }

        .heroButtons {
          display: flex;
          justify-content: center;
          gap: 14px;
          margin-top: 34px;
          flex-wrap: wrap;
        }

        .primaryButton,
        .secondaryButton {
          padding: 16px 24px;
          border-radius: 16px;
          font-weight: 900;
          transition: 0.2s ease;
        }

        .primaryButton {
          background: linear-gradient(135deg, #5dff97, #12b95b);
          color: #031006 !important;
          box-shadow: 0 20px 50px rgba(18, 185, 91, 0.28);
        }

        .secondaryButton {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.14);
        }

        .primaryButton:hover,
        .secondaryButton:hover,
        .cta a:hover {
          transform: translateY(-2px);
        }

        .countdown {
          margin: 46px auto 0;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          max-width: 720px;
        }

        .countdown div,
        .stats div,
        .featureCard,
        .announcementCard,
        .shopCard,
        .roadmapItem,
        .cta {
          background: rgba(255, 255, 255, 0.065);
          border: 1px solid rgba(255, 255, 255, 0.11);
          backdrop-filter: blur(16px);
          box-shadow: 0 20px 70px rgba(0, 0, 0, 0.28);
        }

        .countdown div {
          border-radius: 22px;
          padding: 22px;
        }

        .countdown strong {
          display: block;
          font-size: 38px;
          line-height: 1;
        }

        .countdown span {
          color: rgba(255, 255, 255, 0.58);
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .stats {
          width: min(1120px, calc(100% - 32px));
          margin: -48px auto 90px;
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .stats div {
          border-radius: 22px;
          padding: 24px;
        }

        .stats strong {
          display: block;
          font-size: 26px;
          margin-bottom: 6px;
        }

        .stats span {
          color: rgba(255, 255, 255, 0.58);
          font-size: 14px;
        }

        .section,
        .splitSection {
          width: min(1120px, calc(100% - 32px));
          margin: 0 auto 100px;
        }

        .sectionHeader {
          text-align: center;
          margin-bottom: 34px;
        }

        .sectionHeader p,
        .miniTitle {
          color: #59ff91;
          font-weight: 1000;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-size: 12px;
        }

        .sectionHeader h2,
        .announcementCard h2,
        .shopCard h2,
        .cta h2 {
          font-size: clamp(34px, 5vw, 58px);
          line-height: 1;
          letter-spacing: -0.06em;
          margin: 8px 0 0;
        }

        .featureGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .featureCard {
          border-radius: 26px;
          padding: 24px;
          min-height: 210px;
          transition: 0.2s ease;
        }

        .featureCard:hover {
          transform: translateY(-5px);
          border-color: rgba(89, 255, 145, 0.34);
          box-shadow: 0 28px 80px rgba(0, 0, 0, 0.38);
        }

        .featureIcon {
          width: 42px;
          height: 42px;
          border-radius: 14px;
          background: rgba(89, 255, 145, 0.12);
          display: grid;
          place-items: center;
          color: #59ff91;
          margin-bottom: 20px;
        }

        .featureCard h3 {
          font-size: 19px;
          margin: 0 0 10px;
        }

        .featureCard p,
        .announcementCard p,
        .shopCard p,
        .cta p {
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.65;
          margin: 0;
        }

        .splitSection {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 16px;
        }

        .announcementCard,
        .shopCard,
        .cta {
          border-radius: 32px;
          padding: 34px;
        }

        .announcementCard a {
          display: inline-block;
          margin-top: 24px;
          color: #59ff91;
          font-weight: 900;
        }

        .perkList {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 24px;
        }

        .perkList span {
          padding: 11px 14px;
          border-radius: 999px;
          background: rgba(89, 255, 145, 0.1);
          border: 1px solid rgba(89, 255, 145, 0.18);
          color: #baffcf;
          font-weight: 800;
          font-size: 13px;
        }

        .roadmap {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .roadmapItem {
          border-radius: 24px;
          padding: 22px;
          display: flex;
          align-items: center;
          gap: 16px;
          font-weight: 900;
        }

        .roadmapNumber {
          width: 42px;
          height: 42px;
          border-radius: 14px;
          background: #59ff91;
          color: #031006;
          display: grid;
          place-items: center;
          font-weight: 1000;
        }

        .cta {
          width: min(1120px, calc(100% - 32px));
          margin: 0 auto 80px;
          text-align: center;
          background:
            radial-gradient(circle at 50% 0%, rgba(89, 255, 145, 0.18), transparent 45%),
            rgba(255, 255, 255, 0.065);
        }

        .cta p {
          max-width: 640px;
          margin: 18px auto 0;
        }

        .cta a {
          display: inline-block;
          margin-top: 28px;
          padding: 16px 24px;
          border-radius: 16px;
          background: linear-gradient(135deg, #5dff97, #12b95b);
          color: #031006;
          font-weight: 1000;
          box-shadow: 0 20px 50px rgba(18, 185, 91, 0.28);
        }

        footer {
          width: min(1120px, calc(100% - 32px));
          margin: 0 auto;
          padding: 32px 0 50px;
          display: flex;
          justify-content: space-between;
          color: rgba(255, 255, 255, 0.45);
          font-size: 13px;
          gap: 16px;
        }

        @media (max-width: 900px) {
          .navLinks {
            display: none;
          }

          .countdown,
          .stats,
          .featureGrid,
          .roadmap,
          .splitSection {
            grid-template-columns: 1fr;
          }

          .hero {
            padding-top: 130px;
          }

          footer {
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}
