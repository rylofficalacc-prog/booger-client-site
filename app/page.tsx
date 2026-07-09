"use client";

const DISCORD = "https://discord.gg/5HxHgKdfMu";

const features = [
  {
    title: "Easy to Use",
    desc: "Clean menus made for normal players. No confusing layout, no messy settings.",
    icon: "🌿",
  },
  {
    title: "PvP & Survival Ready",
    desc: "Useful HUD, visual, and utility tools for PvP, survival, and everyday gameplay.",
    icon: "⚔️",
  },
  {
    title: "Community Driven",
    desc: "Updates, beta testing, feedback, and sneak peeks are handled through Discord.",
    icon: "💬",
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

const roadmap = [
  ["Phase 1", "Launcher", "Opening Minecraft through the Booger Client launcher."],
  ["Phase 2", "Main Menu", "Custom Minecraft main menu with Booger Client branding."],
  ["Phase 3", "Module Menu", "Clean module menu with categories, toggles, and settings."],
  ["Phase 4", "HUD Editor", "Move, scale, and save HUD elements in-game."],
  ["Phase 5", "Private Testing", "Small trusted testing group before public beta."],
  ["Phase 6", "Public Beta", "Public download when the client is stable and ready."],
];

const staff = [
  ["Snot2", "Founder", "Project owner and main vision for Booger Client."],
  ["TRM", "Co-Founder", "Helps lead the project and community direction."],
  ["descendant_of_time", "Executive", "Helps manage project direction and community growth."],
  ["Vueril", "Executive", "Helps support leadership, planning, and team organization."],
  ["MES", "Internal Affairs Supervisor", "Helps with staff structure, community safety, and internal rules."],
  ["Private Testers", "Testing Team", "Tests builds before public beta release."],
];

const faqs = [
  ["Is Booger Client free?", "The goal is to keep the main client free, with possible supporter cosmetics later."],
  ["Is Booger Client a cheat client?", "No. Booger Client is a non-cheat utility client focused on HUD, visuals, profiles, and quality-of-life tools."],
  ["What version will it support?", "Booger Client is currently focused on Minecraft Java Edition 1.21.11 Fabric."],
  ["When is beta?", "The release date is undetermined. We are focusing on making the client stable, clean, and worth using."],
  ["How do I join testing?", "Join the Discord for testing news, announcements, and future application info."],
];

const workingOn = [
  "Launcher cleanup",
  "Main menu design",
  "Module menu polish",
  "HUD editor",
  "Website redesign",
  "Private testing",
];

const checklist = [
  ["Launcher opens correctly", true],
  ["Client loads in-game", true],
  ["Main menu replaced", false],
  ["Module menu works", false],
  ["HUD editor saves", false],
  ["Website updated", true],
  ["Private testing complete", false],
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
          <a href="/download">Beta Status</a>
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

            <h2>A Minecraft utility client built for smoother gameplay.</h2>

            <p>
              Customize your HUD, improve visuals, manage profiles, and enjoy a
              cleaner Minecraft experience.
            </p>

            <div className="buttons">
              <a className="primary" href="#status">
                View Beta Status
              </a>
              <a className="secondary" href={DISCORD} target="_blank">
                Join Discord
              </a>
            </div>

            <div className="trust">
              <span>Release Date: Undetermined</span>
              <span>No unfair combat hacks</span>
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

      <section className="notice">
        <div>
          <span>Development Notice</span>
          <h2>Release date is undetermined.</h2>
          <p>
            Booger Client is still in development. We are taking extra time to
            make the client cleaner, safer, more stable, and better for users.
            We do not want to rush out something unfinished.
          </p>
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
          <strong>Undetermined</strong>
          <span>Release Date</span>
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
            Booger Client is designed around Minecraft players. The goal is to
            look trustworthy, simple, and fun.
          </p>
        </div>

        <div className="featureGrid">
          {features.map((feature) => (
            <div className="card" key={feature.title}>
              <div className="icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="statusBox" id="status">
        <div>
          <span>Beta Status</span>
          <h2>Current development status.</h2>
          <p>
            Public downloads are not open yet. The release date is undetermined
            because we are focusing on quality, stability, and the user
            experience.
          </p>
        </div>

        <div className="statusGrid">
          <div>
            <strong>Current Status</strong>
            <span>Private Development</span>
          </div>
          <div>
            <strong>Public Download</strong>
            <span>Coming When Ready</span>
          </div>
          <div>
            <strong>Supported Version</strong>
            <span>Minecraft 1.21.11 Fabric</span>
          </div>
        </div>
      </section>

      <section className="safeBox">
        <div>
          <span>Non-cheat Utility Client</span>
          <h2>Built for HUD, visuals, profiles, and quality-of-life tools.</h2>
          <p>
            Booger Client is not being built as an unfair combat cheat client.
            The goal is to give players a smoother Minecraft experience with
            clean menus, useful HUD tools, visual options, profiles, and
            everyday quality-of-life features.
          </p>
        </div>

        <div className="safeGrid">
          <p>No unfair combat hacks</p>
          <p>HUD and visual tools</p>
          <p>Profiles and settings</p>
          <p>Quality-of-life features</p>
        </div>
      </section>

      <section className="section">
        <div className="sectionHead">
          <span>What’s Being Worked On?</span>
          <h2>Active development areas.</h2>
          <p>
            These are the main parts being cleaned up before Booger Client is
            ready for public beta.
          </p>
        </div>

        <div className="workGrid">
          {workingOn.map((item) => (
            <div className="workItem" key={item}>
              <span>✦</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="checklistBox">
        <div>
          <span>Before Release Checklist</span>
          <h2>What needs to be finished first.</h2>
          <p>
            We want the client to feel clean and stable before opening public
            downloads.
          </p>
        </div>

        <div className="checkGrid">
          {checklist.map(([item, done]) => (
            <div className={done ? "check done" : "check"} key={item as string}>
              <span>{done ? "✓" : "…"}</span>
              <p>{item}</p>
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
          <span>Roadmap</span>
          <h2>The plan before public beta.</h2>
          <p>
            Booger Client is being built in phases so the release feels cleaner,
            safer, and more stable.
          </p>
        </div>

        <div className="timeline">
          {roadmap.map(([phase, title, desc]) => (
            <div className="roadItem" key={phase}>
              <div className="roadDot" />
              <div>
                <span>{phase}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
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

      <section className="section">
        <div className="sectionHead">
          <span>Team</span>
          <h2>The people behind Booger Client.</h2>
          <p>
            A growing project built by staff, developers, and private testers
            working toward a cleaner Minecraft client.
          </p>
        </div>

        <div className="staffGrid">
          {staff.map(([name, role, desc]) => (
            <div className="staffCard" key={name}>
              <div className="avatar">{name.charAt(0)}</div>
              <h3>{name}</h3>
              <span>{role}</span>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="sectionHead">
          <span>FAQ</span>
          <h2>Common questions.</h2>
          <p>
            Quick answers for people who want to know what Booger Client is and
            when they can use it.
          </p>
        </div>

        <div className="faqGrid">
          {faqs.map(([question, answer]) => (
            <div className="faq" key={question}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="downloadBox">
        <div>
          <span>Join the Community</span>
          <h2>Get updates before release.</h2>
          <p>
            Join the Discord for private testing news, sneak peeks, beta updates,
            announcements, and development progress.
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
            <a href="#status">Beta Status</a>
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
        .downloadBox span,
        .statusBox span,
        .notice span,
        .safeBox span,
        .checklistBox span {
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
        .wideShowcase:hover,
        .staffCard:hover,
        .faq:hover,
        .roadItem:hover,
        .workItem:hover,
        .check:hover {
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
        .statusBox,
        .notice,
        .safeBox,
        .checklistBox,
        footer,
        .copyright {
          width: min(1220px, calc(100% - 32px));
          margin-left: auto;
          margin-right: auto;
        }

        .notice {
          margin-top: -50px;
          position: relative;
          z-index: 6;
          padding: 28px;
          border-radius: 26px;
          background: rgba(25, 29, 26, 0.94);
          border: 1px solid rgba(139, 207, 84, 0.2);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.28);
        }

        .notice h2,
        .safeBox h2,
        .checklistBox h2 {
          margin: 14px 0 0;
          font-size: clamp(30px, 5vw, 48px);
          line-height: 1;
          letter-spacing: -0.05em;
        }

        .notice p,
        .safeBox p,
        .checklistBox p {
          max-width: 820px;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.7;
        }

        .stats {
          position: relative;
          z-index: 5;
          margin-top: 18px;
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

        .section,
        .statusBox,
        .safeBox,
        .checklistBox {
          margin-top: 84px;
        }

        .sectionHead {
          max-width: 760px;
          margin: 0 auto 34px;
          text-align: center;
        }

        .sectionHead h2,
        .wideShowcase h2,
        .downloadBox h2,
        .statusBox h2 {
          margin: 14px 0 0;
          font-size: clamp(34px, 5vw, 56px);
          line-height: 1;
          letter-spacing: -0.05em;
        }

        .sectionHead p,
        .wideShowcase p,
        .downloadBox p,
        .statusBox p {
          color: rgba(255, 255, 255, 0.62);
          line-height: 1.7;
        }

        .featureGrid,
        .staffGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .card,
        .staffCard,
        .faq,
        .roadItem,
        .workItem,
        .check {
          padding: 26px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.065);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.24);
          transition: 0.18s ease;
        }

        .icon,
        .avatar {
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

        .card h3,
        .staffCard h3,
        .faq h3,
        .roadItem h3 {
          margin: 0 0 8px;
          font-size: 22px;
        }

        .card p,
        .staffCard p,
        .faq p,
        .roadItem p {
          margin: 0;
          color: rgba(255, 255, 255, 0.62);
          line-height: 1.6;
        }

        .statusBox,
        .safeBox,
        .checklistBox {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          align-items: center;
          padding: 30px;
          border-radius: 28px;
          background:
            linear-gradient(90deg, rgba(25, 29, 26, 0.95), rgba(32, 44, 28, 0.9)),
            url("/villagers.png");
          background-size: cover;
          background-position: center;
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.25);
        }

        .safeBox {
          background:
            linear-gradient(90deg, rgba(25, 29, 26, 0.96), rgba(25, 29, 26, 0.9)),
            url("/mobs-showcase.png");
          background-size: cover;
          background-position: center;
        }

        .checklistBox {
          background:
            linear-gradient(90deg, rgba(25, 29, 26, 0.96), rgba(25, 29, 26, 0.9)),
            url("/village-run.png");
          background-size: cover;
          background-position: center;
        }

        .statusGrid,
        .safeGrid,
        .checkGrid {
          display: grid;
          gap: 12px;
        }

        .statusGrid div,
        .safeGrid p {
          padding: 18px;
          border-radius: 18px;
          background: rgba(22, 26, 22, 0.76);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .statusGrid strong {
          display: block;
          margin-bottom: 7px;
        }

        .safeGrid p {
          margin: 0;
          font-weight: 900;
        }

        .workGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .workItem {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .workItem span {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          color: #1b2a13;
          background: #9dde61;
          font-weight: 1000;
        }

        .checkGrid {
          grid-template-columns: 1fr;
        }

        .check {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px;
        }

        .check span {
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          color: white;
          font-weight: 1000;
        }

        .check.done span {
          background: #9dde61;
          color: #1b2a13;
        }

        .check p {
          margin: 0;
          font-weight: 900;
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

        .timeline {
          display: grid;
          gap: 14px;
        }

        .roadItem {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 18px;
          align-items: flex-start;
        }

        .roadDot {
          width: 18px;
          height: 18px;
          border-radius: 999px;
          background: #9dde61;
          box-shadow: 0 0 0 8px rgba(157, 222, 97, 0.13);
          margin-top: 6px;
        }

        .roadItem span,
        .staffCard span {
          display: inline-block;
          margin-bottom: 8px;
          color: #a6df68;
          font-size: 12px;
          font-weight: 1000;
          letter-spacing: 0.08em;
          text-transform: uppercase;
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

        .faqGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
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
            url("/village-run.png");
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
          .wideShowcase,
          .statusBox,
          .safeBox,
          .checklistBox {
            grid-template-columns: 1fr;
          }

          .clientPreview {
            max-width: 720px;
          }

          .featureGrid,
          .showcaseGrid,
          .stats,
          .staffGrid,
          .faqGrid,
          .workGrid {
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
          .stats,
          .staffGrid,
          .faqGrid,
          .workGrid {
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
