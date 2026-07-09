"use client";

import { useEffect, useState } from "react";

const DISCORD = "https://discord.gg/5HxHgKdfMu";
const LAUNCH_DATE = new Date("2026-08-17T00:00:00").getTime();

const features = [
  ["Custom HUD", "Move and customize CPS, armor, potions, playtime, and more."],
  ["Smooth Visuals", "Clean visuals that make Minecraft look better without feeling messy."],
  ["Better Performance", "Useful FPS tools made for smoother gameplay."],
  ["Simple UI", "Easy menus made for players, not confusing settings pages."],
];

const showcases = [
  ["Custom HUD", "Build your perfect layout."],
  ["Smooth Visuals", "Cleaner Minecraft visuals."],
  ["Performance", "Settings made simple."],
  ["Module Menu", "Clean and easy toggles."],
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
            <strong>Booger <b>Client</b></strong>
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
        <div className="shade" />

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

        <div className="village">
          <div className="sun" />
          <div className="cloud cloud1" />
          <div className="cloud cloud2" />

          <div className="bee bee1">
            <i />
          </div>
          <div className="bee bee2">
            <i />
          </div>
          <div className="bee bee3">
            <i />
          </div>

          <div className="house house1">
            <div className="roof" />
            <div className="body">
              <span />
            </div>
          </div>

          <div className="house house2">
            <div className="roof" />
            <div className="body">
              <span />
            </div>
          </div>

          <div className="house house3">
            <div className="roof" />
            <div className="body">
              <span />
            </div>
          </div>

          <div className="tree tree1">
            <span />
          </div>
          <div className="tree tree2">
            <span />
          </div>

          <div className="farm">
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="mob cow">
            <span />
          </div>

          <div className="mob pig">
            <span />
          </div>

          <div className="villager villager1">
            <span />
          </div>

          <div className="villager villager2">
            <span />
          </div>

          <div className="path" />
          <div className="grass" />
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
          <h2>Screenshots and modules.</h2>
          <p>
            Preview sections for your HUD, visuals, performance menu, and module
            menu.
          </p>
        </div>

        <div className="showcaseGrid">
          {showcases.map(([title, desc], index) => (
            <div className="showcase" key={title}>
              <div className={`fakeShot shot${index + 1}`}>
                <div className="fakeWindow">
                  <div className="fakeTop">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="fakeContent">
                    <p />
                    <p />
                    <p />
                    <p />
                  </div>
                </div>
              </div>
              <div>
                <strong>{title}</strong>
                <span>{desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="downloadBox">
        <div className="downloadArt">
          <div className="bee bigBee">
            <i />
          </div>
          <div className="miniVillage">
            <div />
            <div />
            <div />
          </div>
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
            <strong>Booger <b>Client</b></strong>
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
          background: #161a16;
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
          background:
            linear-gradient(135deg, #8ed957 0 50%, #65ad3b 50% 100%);
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
            linear-gradient(180deg, #9fd7ff 0%, #b7e7ff 36%, #6caf42 36%, #4d8c35 100%);
        }

        .shade {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(15, 17, 15, 0.88) 0%, rgba(15, 17, 15, 0.74) 32%, rgba(15, 17, 15, 0.15) 68%),
            linear-gradient(180deg, transparent 0%, rgba(22, 26, 22, 0.78) 100%);
          z-index: 3;
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

        .village {
          position: absolute;
          inset: 0;
          z-index: 1;
          overflow: hidden;
        }

        .grass {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 180px;
          background:
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(#5fa13b, #3f752d);
          background-size: 48px 48px, auto;
        }

        .path {
          position: absolute;
          right: 13%;
          bottom: -30px;
          width: 360px;
          height: 320px;
          background: #bc9c67;
          transform: skewX(-18deg) rotate(3deg);
          border: 12px solid rgba(94, 74, 44, 0.14);
        }

        .sun {
          position: absolute;
          top: 115px;
          right: 280px;
          width: 82px;
          height: 82px;
          background: #ffe37a;
          border-radius: 18px;
          box-shadow: 0 0 90px rgba(255, 227, 122, 0.55);
        }

        .cloud {
          position: absolute;
          height: 36px;
          background: rgba(255, 255, 255, 0.72);
          border-radius: 10px;
        }

        .cloud::before,
        .cloud::after {
          content: "";
          position: absolute;
          background: inherit;
          border-radius: inherit;
        }

        .cloud::before {
          width: 62px;
          height: 46px;
          left: 24px;
          top: -18px;
        }

        .cloud::after {
          width: 74px;
          height: 54px;
          right: 24px;
          top: -24px;
        }

        .cloud1 {
          width: 190px;
          top: 150px;
          right: 440px;
        }

        .cloud2 {
          width: 160px;
          top: 210px;
          right: 80px;
        }

        .house {
          position: absolute;
          width: 180px;
          height: 150px;
        }

        .house .roof {
          position: absolute;
          left: 8px;
          top: 0;
          width: 164px;
          height: 70px;
          background:
            repeating-linear-gradient(0deg, #9d6a30 0 10px, #815123 10px 20px);
          clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
        }

        .house .body {
          position: absolute;
          left: 28px;
          top: 62px;
          width: 124px;
          height: 88px;
          background: #c99b5b;
          border: 6px solid #7c5732;
          box-shadow: inset 0 -14px rgba(0, 0, 0, 0.08);
        }

        .house .body span {
          position: absolute;
          left: 43px;
          bottom: 0;
          width: 36px;
          height: 48px;
          background: #5d3b22;
        }

        .house1 {
          right: 520px;
          bottom: 170px;
          transform: scale(1.15);
        }

        .house2 {
          right: 260px;
          bottom: 155px;
        }

        .house3 {
          right: 70px;
          bottom: 190px;
          transform: scale(0.9);
        }

        .tree {
          position: absolute;
          width: 52px;
          height: 90px;
          background: #6b4427;
        }

        .tree span {
          position: absolute;
          left: -36px;
          top: -78px;
          width: 126px;
          height: 105px;
          background:
            linear-gradient(135deg, #4f9d3b, #2f702c);
          border-radius: 20px;
        }

        .tree1 {
          right: 760px;
          bottom: 205px;
        }

        .tree2 {
          right: 140px;
          bottom: 260px;
          transform: scale(0.85);
        }

        .farm {
          position: absolute;
          right: 330px;
          bottom: 100px;
          width: 260px;
          height: 92px;
          background:
            repeating-linear-gradient(90deg, #6f4a2b 0 22px, #4a311f 22px 44px);
          border: 8px solid #8d6a38;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          padding: 12px;
          transform: skewX(-8deg);
        }

        .farm span {
          background: #70b949;
          border-radius: 8px 8px 0 0;
          box-shadow: inset 0 -14px #e19b34;
        }

        .bee {
          position: absolute;
          width: 52px;
          height: 38px;
          background:
            repeating-linear-gradient(90deg, #f6c64d 0 14px, #2d2516 14px 24px);
          border-radius: 12px;
          box-shadow: inset 0 -6px rgba(0, 0, 0, 0.12);
        }

        .bee::before,
        .bee::after {
          content: "";
          position: absolute;
          top: -16px;
          width: 22px;
          height: 18px;
          background: rgba(255, 255, 255, 0.74);
          border-radius: 999px;
        }

        .bee::before {
          left: 8px;
        }

        .bee::after {
          right: 8px;
        }

        .bee i {
          position: absolute;
          right: -8px;
          top: 15px;
          width: 10px;
          height: 8px;
          background: #2d2516;
          clip-path: polygon(0 0, 100% 50%, 0 100%);
        }

        .bee1 {
          right: 160px;
          top: 160px;
          transform: scale(1.35);
        }

        .bee2 {
          right: 640px;
          top: 210px;
          transform: scale(0.7);
        }

        .bee3 {
          right: 850px;
          top: 150px;
          transform: scale(0.55);
        }

        .mob,
        .villager {
          position: absolute;
          border-radius: 8px;
          box-shadow: inset 0 -10px rgba(0, 0, 0, 0.08);
        }

        .cow {
          right: 730px;
          bottom: 115px;
          width: 95px;
          height: 70px;
          background: #f1eee4;
          border: 6px solid #6d4b35;
        }

        .cow::before,
        .cow::after {
          content: "";
          position: absolute;
          background: #6d4b35;
          border-radius: 5px;
        }

        .cow::before {
          width: 32px;
          height: 24px;
          left: 12px;
          top: 10px;
        }

        .cow::after {
          width: 28px;
          height: 20px;
          right: 14px;
          bottom: 16px;
        }

        .cow span {
          position: absolute;
          right: -38px;
          top: 12px;
          width: 46px;
          height: 42px;
          background: #f1eee4;
          border: 6px solid #6d4b35;
          border-radius: 8px;
        }

        .pig {
          right: 430px;
          bottom: 95px;
          width: 82px;
          height: 58px;
          background: #ee9baa;
          border: 6px solid #d77d8d;
        }

        .pig span {
          position: absolute;
          right: -34px;
          top: 8px;
          width: 42px;
          height: 38px;
          background: #ee9baa;
          border: 6px solid #d77d8d;
          border-radius: 8px;
        }

        .villager {
          width: 52px;
          height: 100px;
          background: #7c553b;
          border: 5px solid #4e3324;
        }

        .villager::before {
          content: "";
          position: absolute;
          left: 4px;
          top: -42px;
          width: 34px;
          height: 42px;
          background: #b88761;
          border: 5px solid #6b4731;
          border-radius: 7px;
        }

        .villager::after {
          content: "";
          position: absolute;
          left: 8px;
          top: -18px;
          width: 28px;
          height: 12px;
          background: #8b5a3e;
          border-radius: 5px;
        }

        .villager1 {
          right: 210px;
          bottom: 95px;
        }

        .villager2 {
          right: 610px;
          bottom: 110px;
          transform: scale(0.85);
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

        .fakeShot {
          height: 150px;
          padding: 18px;
          background:
            linear-gradient(135deg, rgba(139, 207, 84, 0.25), rgba(255, 255, 255, 0.06)),
            linear-gradient(180deg, #8ad6ff 0 48%, #79ad54 48% 100%);
        }

        .shot2 {
          background:
            linear-gradient(135deg, rgba(255, 180, 77, 0.2), rgba(255, 255, 255, 0.06)),
            linear-gradient(180deg, #ffca7a 0 48%, #71a850 48% 100%);
        }

        .shot3 {
          background:
            linear-gradient(135deg, rgba(139, 207, 84, 0.24), rgba(0, 0, 0, 0.16)),
            linear-gradient(180deg, #9ed6ff 0 48%, #4e7c42 48% 100%);
        }

        .shot4 {
          background:
            linear-gradient(135deg, rgba(139, 207, 84, 0.18), rgba(255, 255, 255, 0.06)),
            #151a16;
        }

        .fakeWindow {
          height: 100%;
          border-radius: 16px;
          background: rgba(19, 22, 20, 0.84);
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 12px;
        }

        .fakeTop {
          display: flex;
          gap: 6px;
          margin-bottom: 14px;
        }

        .fakeTop span {
          width: 9px;
          height: 9px;
          background: rgba(255, 255, 255, 0.35);
          border-radius: 99px;
        }

        .fakeContent p {
          height: 12px;
          margin: 8px 0;
          border-radius: 5px;
          background: rgba(139, 207, 84, 0.35);
        }

        .fakeContent p:nth-child(2),
        .fakeContent p:nth-child(4) {
          width: 70%;
          background: rgba(255, 255, 255, 0.18);
        }

        .showcase div:last-child {
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
          min-height: 210px;
          display: grid;
          grid-template-columns: 280px 1fr auto;
          gap: 30px;
          align-items: center;
          padding: 28px;
          border-radius: 26px;
          background:
            linear-gradient(90deg, rgba(25, 29, 26, 0.95), rgba(35, 49, 33, 0.9)),
            linear-gradient(180deg, #8bd6ff 0 45%, #5f9b42 45% 100%);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.26);
          overflow: hidden;
        }

        .downloadArt {
          height: 150px;
          position: relative;
        }

        .bigBee {
          left: 92px;
          top: 22px;
          transform: scale(1.4);
        }

        .miniVillage {
          position: absolute;
          left: 20px;
          bottom: 0;
          display: flex;
          gap: 10px;
          align-items: flex-end;
        }

        .miniVillage div {
          width: 56px;
          height: 56px;
          background: #c99b5b;
          border: 4px solid #7c5732;
          position: relative;
        }

        .miniVillage div::before {
          content: "";
          position: absolute;
          left: -5px;
          top: -30px;
          width: 58px;
          height: 34px;
          background: #8a5a2a;
          clip-path: polygon(50% 0, 100% 100%, 0 100%);
        }

        .miniVillage div:nth-child(2) {
          height: 76px;
        }

        .miniVillage div:nth-child(3) {
          height: 48px;
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

          .downloadArt {
            display: none;
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

          .village {
            opacity: 0.75;
          }

          .house1 {
            right: 220px;
          }

          .house2 {
            right: 40px;
          }

          .house3,
          .tree1,
          .cow,
          .villager2 {
            display: none;
          }
        }
      `}</style>
    </main>
  );
}
