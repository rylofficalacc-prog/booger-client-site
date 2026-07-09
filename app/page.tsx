"use client";

const DISCORD = "https://discord.gg/5HxHgKdfMu";

const features = [
  {
    title: "Clean HUD",
    desc: "Customize your CPS, armor, potions, playtime, and other HUD tools.",
    icon: "🎯",
  },
  {
    title: "Better Visuals",
    desc: "Make Minecraft feel smoother and cleaner without making it confusing.",
    icon: "🌄",
  },
  {
    title: "Simple Profiles",
    desc: "Switch between PvP, Survival, Recording, and future custom presets.",
    icon: "🧰",
  },
  {
    title: "Player Friendly",
    desc: "Built for normal Minecraft players, not confusing tech menus.",
    icon: "🐝",
  },
];

const workingOn = [
  "Launcher cleanup",
  "Main menu design",
  "Module menu polish",
  "HUD editor",
  "Website redesign",
  "Private testing",
];

const screenshots = [
  {
    title: "Village Theme",
    desc: "A warm Minecraft village style.",
    image: "/hero-village.png",
  },
  {
    title: "Mob Showcase",
    desc: "A fun Minecraft gameplay feel.",
    image: "/mobs-showcase.png",
  },
  {
    title: "Villagers",
    desc: "Friendly, familiar Minecraft visuals.",
    image: "/villagers.png",
  },
  {
    title: "Adventure",
    desc: "Made for everyday gameplay.",
    image: "/village-run.png",
  },
];

const checklist = [
  ["Launcher opens Minecraft", true],
  ["Client loads in-game", true],
  ["Website updated", true],
  ["Main menu polished", false],
  ["Module menu polished", false],
  ["Private testing complete", false],
];

const faqs = [
  ["Is Booger Client a cheat client?", "No. Booger Client is a non-cheat utility client focused on HUD, visuals, profiles, and quality-of-life tools."],
  ["When is release?", "The release date is undetermined. We are taking time to make the client better for users."],
  ["What version is supported?", "Booger Client is focused on Minecraft Java Edition 1.21.11 Fabric."],
  ["How do I get updates?", "Join the Discord for announcements, beta information, and sneak peeks."],
];

const staff = [
  ["Snot2", "Founder"],
  ["TRM", "Co-Founder"],
  ["descendant_of_time", "Executive"],
  ["Vueril", "Executive"],
  ["MES", "Internal Affairs Supervisor"],
  ["Private Testers", "Testing Team"],
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
          <a href="#features">Features</a>
          <a href="#status">Beta Status</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#faq">FAQ</a>
        </div>

        <a className="discord" href={DISCORD} target="_blank">
          Discord
        </a>
      </nav>

      <section className="hero">
        <div className="heroContent">
          <div className="heroText">
            <div className="pill">Fabric 1.21.11 • Non-cheat utility client</div>

            <h1>
              Booger <span>Client</span>
            </h1>

            <p className="headline">
              A Minecraft client built for cleaner gameplay, useful HUD tools,
              and a smoother player experience.
            </p>

            <div className="buttons">
              <a className="primary" href="#status">
                View Beta Status
              </a>
              <a className="secondary" href={DISCORD} target="_blank">
                Join Discord
              </a>
            </div>

            <div className="miniStats">
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
            </div>
          </div>
        </div>
      </section>

      <section className="notice">
        <span>Development Notice</span>
        <h2>Release date is undetermined.</h2>
        <p>
          We are taking extra time to make Booger Client cleaner, safer, more
          stable, and better for users. We do not want to rush out something
          unfinished.
        </p>
      </section>

      <section className="section" id="features">
        <div className="sectionHead">
          <span>Features</span>
          <h2>Built for everyday Minecraft players.</h2>
          <p>
            Booger Client is meant to feel simple, familiar, and useful without
            looking overly futuristic or confusing.
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

      <section className="splitShowcase">
        <div className="showcaseImage">
          <img src="/mobs-showcase.png" alt="Minecraft mobs showcase" />
        </div>

        <div className="showcaseText">
          <span>Clean Minecraft Style</span>
          <h2>Made to feel like Minecraft, not a sci-fi site.</h2>
          <p>
            The website uses Minecraft villages, mobs, villagers, and warm colors
            so it feels more appealing and friendly to normal players.
          </p>
          <a href={DISCORD} target="_blank">
            Join the Community
          </a>
        </div>
      </section>

      <section className="statusSection" id="status">
        <div className="statusText">
          <span>Beta Status</span>
          <h2>Current progress.</h2>
          <p>
            Public downloads are not open yet. The client is still being cleaned
            up before private testing and public beta.
          </p>
        </div>

        <div className="statusCards">
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

      <section className="section">
        <div className="sectionHead">
          <span>Being Worked On</span>
          <h2>What we are polishing.</h2>
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

      <section className="checklistSection">
        <div>
          <span>Before Release</span>
          <h2>Checklist before public beta.</h2>
          <p>
            We want the client to feel clean and stable before opening downloads.
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

      <section className="section">
        <div className="sectionHead">
          <span>Gallery</span>
          <h2>Minecraft-themed visuals.</h2>
          <p>
            These images help the site feel friendly, alive, and connected to
            Minecraft.
          </p>
        </div>

        <div className="gallery">
          {screenshots.map((shot) => (
            <div className="galleryCard" key={shot.title}>
              <img src={shot.image} alt={shot.title} />
              <div>
                <strong>{shot.title}</strong>
                <span>{shot.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="roadmap">
        <div className="sectionHead">
          <span>Roadmap</span>
          <h2>The plan moving forward.</h2>
        </div>

        <div className="roadmap">
          <div>
            <strong>01</strong>
            <h3>Launcher</h3>
            <p>Make sure the launcher opens Minecraft correctly.</p>
          </div>
          <div>
            <strong>02</strong>
            <h3>Main Menu</h3>
            <p>Replace the Minecraft menu with a clean Booger Client menu.</p>
          </div>
          <div>
            <strong>03</strong>
            <h3>Module Menu</h3>
            <p>Polish the module menu so it feels clean and usable.</p>
          </div>
          <div>
            <strong>04</strong>
            <h3>Private Testing</h3>
            <p>Let trusted testers try the client before public beta.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHead">
          <span>Team</span>
          <h2>The people behind Booger Client.</h2>
        </div>

        <div className="staffGrid">
          {staff.map(([name, role]) => (
            <div className="staffCard" key={name}>
              <div className="avatar">{name.charAt(0)}</div>
              <h3>{name}</h3>
              <span>{role}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="faq">
        <div className="sectionHead">
          <span>FAQ</span>
          <h2>Common questions.</h2>
        </div>

        <div className="faqGrid">
          {faqs.map(([q, a]) => (
            <div className="faq" key={q}>
              <h3>{q}</h3>
              <p>{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="finalCta">
        <div>
          <span>Join the Community</span>
          <h2>Get updates before release.</h2>
          <p>
            Join the Discord for private testing news, sneak peeks, beta updates,
            and announcements.
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
          <a href="/">Home</a>
          <a href="#features">Features</a>
          <a href="#status">Beta Status</a>
          <a href="#faq">FAQ</a>
          <a href={DISCORD} target="_blank">
            Discord
          </a>
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
          color: #fff8e8;
          background: #171614;
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          overflow-x: hidden;
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
          min-height: 72px;
          padding: 12px 16px;
          border-radius: 22px;
          background: rgba(29, 27, 24, 0.88);
          border: 1px solid rgba(255, 255, 255, 0.14);
          backdrop-filter: blur(18px);
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.3);
        }

        .brand,
        .footerBrand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand strong,
        .footerBrand strong {
          display: block;
          font-size: 22px;
          line-height: 1;
        }

        .brand b,
        .footerBrand b {
          color: #f7c85b;
        }

        .brand p,
        .footerBrand p {
          margin: 4px 0 0;
          color: rgba(255, 248, 232, 0.58);
          font-size: 12px;
        }

        .logoCube {
          width: 46px;
          height: 46px;
          border-radius: 13px;
          background: linear-gradient(135deg, #8fcf57 0 50%, #5f9b3d 50% 100%);
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
          gap: 24px;
        }

        .links a {
          color: rgba(255, 248, 232, 0.72);
          font-size: 14px;
          font-weight: 800;
        }

        .links a:hover {
          color: #f7c85b;
        }

        .discord,
        .secondary {
          padding: 13px 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.16);
          font-weight: 900;
        }

        .hero {
          min-height: 760px;
          background:
            linear-gradient(90deg, rgba(23, 22, 20, 0.88) 0%, rgba(23, 22, 20, 0.58) 45%, rgba(23, 22, 20, 0.18) 100%),
            linear-gradient(180deg, rgba(23, 22, 20, 0.08) 0%, #171614 100%),
            url("/hero-village.png");
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
        }

        .heroContent {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
          padding-top: 80px;
        }

        .heroText {
          max-width: 700px;
        }

        .pill,
        .sectionHead span,
        .showcaseText span,
        .statusText span,
        .checklistSection span,
        .notice span,
        .finalCta span {
          display: inline-flex;
          width: fit-content;
          padding: 10px 14px;
          border-radius: 999px;
          color: #fff4ca;
          background: rgba(247, 200, 91, 0.16);
          border: 1px solid rgba(247, 200, 91, 0.32);
          font-size: 12px;
          font-weight: 1000;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        h1 {
          margin: 22px 0 0;
          font-size: clamp(70px, 9vw, 138px);
          line-height: 0.86;
          letter-spacing: -0.08em;
          color: white;
          text-shadow: 0 8px 0 rgba(0, 0, 0, 0.16);
        }

        h1 span {
          color: #f7c85b;
        }

        .headline {
          max-width: 650px;
          margin: 24px 0 0;
          color: rgba(255, 248, 232, 0.84);
          font-size: clamp(22px, 3vw, 34px);
          line-height: 1.25;
          font-weight: 700;
        }

        .buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 30px;
        }

        .primary,
        .finalCta a,
        .showcaseText a {
          padding: 16px 24px;
          border-radius: 15px;
          color: #22180b;
          background: linear-gradient(180deg, #ffd873, #f2b94d);
          border: 1px solid rgba(255, 255, 255, 0.28);
          box-shadow: 0 12px 0 #9b7028, 0 22px 40px rgba(0, 0, 0, 0.28);
          font-weight: 1000;
          transition: 0.16s ease;
          display: inline-flex;
        }

        .primary:hover,
        .secondary:hover,
        .discord:hover,
        .card:hover,
        .galleryCard:hover,
        .workItem:hover,
        .check:hover,
        .faq:hover,
        .staffCard:hover,
        .roadmap div:hover,
        .finalCta a:hover,
        .showcaseText a:hover {
          transform: translateY(-2px);
        }

        .miniStats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          max-width: 650px;
          margin-top: 40px;
        }

        .miniStats div {
          padding: 18px;
          border-radius: 18px;
          background: rgba(29, 27, 24, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.14);
          backdrop-filter: blur(12px);
        }

        .miniStats strong {
          display: block;
          color: white;
          font-size: 22px;
        }

        .miniStats span {
          display: block;
          margin-top: 5px;
          color: rgba(255, 248, 232, 0.58);
          font-size: 13px;
        }

        .notice,
        .section,
        .splitShowcase,
        .statusSection,
        .checklistSection,
        .finalCta,
        footer,
        .copyright {
          width: min(1180px, calc(100% - 32px));
          margin-left: auto;
          margin-right: auto;
        }

        .notice {
          margin-top: -48px;
          position: relative;
          z-index: 5;
          padding: 30px;
          border-radius: 28px;
          background: rgba(29, 27, 24, 0.94);
          border: 1px solid rgba(247, 200, 91, 0.24);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.28);
        }

        .notice h2 {
          margin: 14px 0 0;
          font-size: clamp(32px, 5vw, 52px);
          line-height: 1;
          letter-spacing: -0.05em;
        }

        .notice p {
          max-width: 850px;
          color: rgba(255, 248, 232, 0.65);
          line-height: 1.7;
        }

        .section {
          margin-top: 90px;
        }

        .sectionHead {
          max-width: 760px;
          margin: 0 auto 34px;
          text-align: center;
        }

        .sectionHead h2,
        .showcaseText h2,
        .statusText h2,
        .checklistSection h2,
        .finalCta h2 {
          margin: 14px 0 0;
          font-size: clamp(36px, 5vw, 62px);
          line-height: 1;
          letter-spacing: -0.06em;
        }

        .sectionHead p,
        .showcaseText p,
        .statusText p,
        .checklistSection p,
        .finalCta p {
          color: rgba(255, 248, 232, 0.62);
          line-height: 1.7;
        }

        .featureGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .card,
        .workItem,
        .check,
        .galleryCard,
        .roadmap div,
        .staffCard,
        .faq {
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.065);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.22);
          transition: 0.16s ease;
        }

        .card {
          padding: 26px;
        }

        .icon,
        .avatar {
          width: 58px;
          height: 58px;
          border-radius: 16px;
          display: grid;
          place-items: center;
          background: rgba(247, 200, 91, 0.14);
          border: 1px solid rgba(247, 200, 91, 0.24);
          font-size: 28px;
          margin-bottom: 18px;
        }

        .card h3,
        .roadmap h3,
        .staffCard h3,
        .faq h3 {
          margin: 0 0 8px;
          font-size: 22px;
        }

        .card p,
        .roadmap p,
        .faq p {
          margin: 0;
          color: rgba(255, 248, 232, 0.62);
          line-height: 1.6;
        }

        .splitShowcase {
          margin-top: 90px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 28px;
          align-items: center;
          padding: 28px;
          border-radius: 30px;
          background: rgba(29, 27, 24, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.24);
        }

        .showcaseImage img {
          width: 100%;
          height: 360px;
          object-fit: cover;
          border-radius: 24px;
          display: block;
        }

        .showcaseText a {
          margin-top: 18px;
        }

        .statusSection,
        .checklistSection,
        .finalCta {
          margin-top: 90px;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 28px;
          align-items: center;
          padding: 32px;
          border-radius: 30px;
          background:
            linear-gradient(90deg, rgba(29, 27, 24, 0.96), rgba(29, 27, 24, 0.86)),
            url("/villagers.png");
          background-size: cover;
          background-position: center;
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.24);
        }

        .statusCards,
        .checkGrid {
          display: grid;
          gap: 12px;
        }

        .statusCards div {
          padding: 20px;
          border-radius: 20px;
          background: rgba(23, 22, 20, 0.78);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .statusCards strong {
          display: block;
          margin-bottom: 6px;
        }

        .statusCards span {
          color: rgba(255, 248, 232, 0.62);
        }

        .workGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .workItem {
          padding: 22px;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .workItem span {
          width: 42px;
          height: 42px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          background: #f7c85b;
          color: #22180b;
          font-weight: 1000;
        }

        .checklistSection {
          background:
            linear-gradient(90deg, rgba(29, 27, 24, 0.96), rgba(29, 27, 24, 0.86)),
            url("/village-run.png");
          background-size: cover;
          background-position: center;
        }

        .check {
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .check span {
          width: 34px;
          height: 34px;
          border-radius: 99px;
          display: grid;
          place-items: center;
          background: rgba(255, 255, 255, 0.12);
          font-weight: 1000;
        }

        .check.done span {
          background: #f7c85b;
          color: #22180b;
        }

        .check p {
          margin: 0;
          font-weight: 900;
        }

        .gallery {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .galleryCard {
          overflow: hidden;
        }

        .galleryCard img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          display: block;
        }

        .galleryCard div {
          padding: 16px;
        }

        .galleryCard strong {
          display: block;
          margin-bottom: 5px;
        }

        .galleryCard span {
          color: rgba(255, 248, 232, 0.56);
          font-size: 13px;
        }

        .roadmap {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .roadmap div {
          padding: 24px;
        }

        .roadmap strong {
          display: block;
          color: #f7c85b;
          margin-bottom: 16px;
          font-size: 22px;
        }

        .staffGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .staffCard {
          padding: 24px;
        }

        .staffCard span {
          color: #f7c85b;
          font-size: 13px;
          font-weight: 900;
        }

        .faqGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .faq {
          padding: 24px;
        }

        .finalCta {
          background:
            linear-gradient(90deg, rgba(29, 27, 24, 0.96), rgba(29, 27, 24, 0.78)),
            url("/mobs-showcase.png");
          background-size: cover;
          background-position: center;
          margin-bottom: 70px;
        }

        footer {
          padding: 34px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footerLinks {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
        }

        .footerLinks a {
          color: rgba(255, 248, 232, 0.58);
          font-weight: 800;
        }

        .footerLinks a:hover {
          color: #f7c85b;
        }

        .copyright {
          padding: 0 0 34px;
          text-align: center;
          color: rgba(255, 248, 232, 0.38);
          font-size: 13px;
        }

        @media (max-width: 1000px) {
          .links {
            display: none;
          }

          .featureGrid,
          .gallery,
          .roadmap,
          .staffGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .splitShowcase,
          .statusSection,
          .checklistSection,
          .finalCta {
            grid-template-columns: 1fr;
          }

          .workGrid,
          .faqGrid,
          .miniStats {
            grid-template-columns: 1fr;
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

          h1 {
            font-size: 62px;
          }

          .hero {
            min-height: 720px;
          }

          .featureGrid,
          .gallery,
          .roadmap,
          .staffGrid {
            grid-template-columns: 1fr;
          }

          footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </main>
  );
}
