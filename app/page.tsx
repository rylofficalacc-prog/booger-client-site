const DISCORD = "https://discord.gg/5HxHgKdfMu";

const modules = [
  "Right Shift Menu",
  "Fullbright",
  "CPS Counter",
  "Keystrokes",
  "Coordinates HUD",
  "Armor HUD",
  "Zoom",
  "Cosmetics",
];

export default function Page() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Booger Client home">
          <img src="/booger-logo.png" alt="Booger Client logo" />
          <span>BOOGER</span>
        </a>

        <div className="links">
          <a href="#client">Client</a>
          <a href="#modules">Modules</a>
          <a href="#cosmetics">Cosmetics</a>
          <a href="#release">Release</a>
        </div>

        <a className="login" href={DISCORD}>Discord</a>
      </nav>

      <section id="top" className="hero">
        <div className="heroBg" />
        <img className="sideRender left" src="/snot-render.png" alt="Minecraft player render" />
        <img className="sideRender right" src="/purple-cosmetic.png" alt="Minecraft cosmetic render" />

        <div className="heroContent">
          <img className="bigLogo" src="/booger-logo.png" alt="Booger Client" />
          <p className="small">Minecraft Fabric 1.21.11</p>
          <h1>BOOGER CLIENT</h1>
          <p className="tagline">
            A clean Minecraft client-style mod with a custom menu, HUD tools,
            cosmetics, profiles, and Christmas comeback plans.
          </p>
          <a className="download" href={DISCORD}>JOIN DISCORD</a>
          <p className="available">Christmas beta planned • Windows / Mac / Linux through Fabric</p>
        </div>

        <div id="client" className="heroCards">
          <article>
            <h3>Clean Client Menu</h3>
            <div className="fakeMenu">
              <span />
              <span />
              <span />
              <span />
            </div>
            <p>Right Shift opens the Booger Client menu.</p>
          </article>

          <article>
            <h3>Useful Modules</h3>
            <div className="icons">
              {modules.slice(1, 7).map((item) => <b key={item}>{item[0]}</b>)}
            </div>
            <p>Start with real HUD and quality-of-life features.</p>
          </article>

          <article>
            <h3>Christmas Release</h3>
            <div className="versions">
              <strong>1.21.11</strong>
              <span>Fabric</span>
              <em>Beta</em>
            </div>
            <p>Extra time to polish before the comeback.</p>
          </article>
        </div>
      </section>

      <section id="modules" className="section dark">
        <p className="kicker">Module Library</p>
        <h2>Built around simple features people actually use.</h2>
        <div className="moduleGrid">
          {modules.map((module) => (
            <div className="module" key={module}>
              <span>{module}</span>
              <small>planned / in dev</small>
            </div>
          ))}
        </div>
      </section>

      <section id="cosmetics" className="storeLike">
        <div className="storeTop">
          <h2>Cosmetics Preview</h2>
          <a href={DISCORD}>Join for updates</a>
        </div>

        <div className="cosmeticGrid">
          <article>
            <img src="/booger-king.png" alt="Booger king render" />
            <div>
              <h3>Owner Crown</h3>
              <p>Special owner cosmetic for snot2.</p>
            </div>
          </article>
          <article>
            <img src="/purple-cosmetic.png" alt="Purple cosmetic render" />
            <div>
              <h3>Founder Set</h3>
              <p>Early supporter style and badge ideas.</p>
            </div>
          </article>
          <article>
            <img src="/booger-logo.png" alt="Booger logo" />
            <div>
              <h3>Slime Theme</h3>
              <p>Booger green branding, capes, trails, and menu accents.</p>
            </div>
          </article>
        </div>
      </section>

      <section id="release" className="release">
        <div>
          <p className="kicker">Release Window</p>
          <h2>Booger Client returns this Christmas.</h2>
          <p>
            The goal is to make the client feel cleaner, make the main modules
            work properly, and avoid another rushed placeholder build.
          </p>
        </div>
        <a className="download smallBtn" href={DISCORD}>FOLLOW DEVELOPMENT</a>
      </section>

      <footer>
        <img src="/booger-logo.png" alt="Booger Client logo" />
        <span>Booger Client • Fabric 1.21.11 • Christmas Beta</span>
      </footer>

      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #111; color: white; font-family: Arial, Helvetica, sans-serif; }
        a { color: inherit; text-decoration: none; }

        .nav {
          height: 72px;
          background: #101010;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 34px;
          position: sticky;
          top: 0;
          z-index: 10;
          box-shadow: 0 2px 14px rgba(0,0,0,.45);
        }
        .brand { display: flex; align-items: center; gap: 12px; font-size: 28px; font-weight: 900; letter-spacing: -1px; }
        .brand img { width: 44px; height: 44px; object-fit: cover; border-radius: 8px; }
        .links { display: flex; gap: 34px; font-weight: 800; }
        .links a { opacity: .9; padding: 25px 0; border-bottom: 3px solid transparent; }
        .links a:hover { border-color: #19bfff; }
        .login {
          background: #24bdf2;
          color: white;
          font-weight: 900;
          padding: 13px 34px;
          border-radius: 5px;
          box-shadow: 0 4px 0 #118fc0;
        }

        .hero {
          position: relative;
          min-height: 900px;
          padding: 95px 30px 45px;
          overflow: hidden;
          text-align: center;
          background: #111;
        }
        .heroBg {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(rgba(8, 13, 18, .64), rgba(8, 13, 18, .86)),
            radial-gradient(circle at 50% 5%, rgba(39, 200, 255, .28), transparent 38%),
            radial-gradient(circle at 18% 40%, rgba(115, 255, 48, .18), transparent 33%),
            linear-gradient(135deg, #1e3440, #0c1013 55%, #111);
          filter: saturate(1.05);
        }
        .heroBg::after {
          content: "";
          position: absolute;
          inset: 0;
          backdrop-filter: blur(2px);
          background-image: linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px);
          background-size: 42px 42px;
          opacity: .35;
        }
        .heroContent { position: relative; z-index: 2; max-width: 860px; margin: 0 auto; }
        .bigLogo {
          width: 145px;
          height: 145px;
          object-fit: cover;
          border-radius: 24px;
          box-shadow: 0 20px 70px rgba(99,255,24,.38), 0 0 0 4px rgba(255,255,255,.08);
          margin-bottom: 26px;
        }
        .small { text-transform: uppercase; font-weight: 900; letter-spacing: 1px; font-size: 16px; text-shadow: 0 3px 8px rgba(0,0,0,.8); }
        h1 { margin: 10px 0 18px; font-size: clamp(54px, 8vw, 98px); line-height: .9; font-weight: 1000; text-shadow: 0 6px 0 rgba(0,0,0,.2), 0 8px 20px rgba(0,0,0,.8); }
        .tagline { margin: 0 auto 30px; max-width: 760px; font-size: 20px; line-height: 1.55; font-weight: 800; text-shadow: 0 3px 8px rgba(0,0,0,.8); }
        .download {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: min(520px, 90vw);
          background: #24bdf2;
          color: white;
          padding: 24px 36px;
          border-radius: 6px;
          font-weight: 1000;
          font-size: 31px;
          box-shadow: 0 5px 0 #118fc0, 0 15px 40px rgba(0,0,0,.45);
        }
        .download:hover, .login:hover { filter: brightness(1.08); transform: translateY(-1px); }
        .available { font-size: 13px; font-weight: 900; margin-top: 18px; }
        .sideRender { position: absolute; z-index: 1; bottom: 92px; width: min(25vw, 285px); filter: drop-shadow(0 25px 30px rgba(0,0,0,.7)); }
        .sideRender.left { left: 8vw; }
        .sideRender.right { right: 8vw; width: min(29vw, 330px); }

        .heroCards {
          position: relative;
          z-index: 3;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          max-width: 1040px;
          margin: 95px auto 0;
        }
        .heroCards article {
          min-height: 270px;
          padding: 26px;
          border-radius: 28px;
          background: rgba(160, 175, 185, .34);
          border: 8px solid rgba(255,255,255,.12);
          box-shadow: inset 0 0 40px rgba(255,255,255,.08), 0 25px 50px rgba(0,0,0,.35);
          backdrop-filter: blur(10px);
        }
        .heroCards h3 { margin: 0 0 18px; font-size: 22px; text-transform: uppercase; text-shadow: 0 3px 8px rgba(0,0,0,.8); }
        .heroCards p { margin: 22px 0 0; font-weight: 800; }
        .fakeMenu { display: grid; gap: 12px; margin: 20px auto 0; max-width: 210px; }
        .fakeMenu span { height: 30px; border-radius: 4px; background: linear-gradient(90deg, #24bdf2, #74ff4b); box-shadow: inset 0 0 0 2px rgba(255,255,255,.25); }
        .fakeMenu span:nth-child(2) { width: 86%; }
        .fakeMenu span:nth-child(3) { width: 70%; }
        .fakeMenu span:nth-child(4) { width: 50%; }
        .icons { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; max-width: 230px; margin: 0 auto; }
        .icons b { display: grid; place-items: center; height: 44px; border-radius: 8px; background: rgba(255,255,255,.17); font-size: 22px; }
        .versions strong { font-size: 58px; display: block; }
        .versions span { display: block; font-weight: 900; margin: 4px 0; }
        .versions em { display: inline-block; background: rgba(255,255,255,.2); border-radius: 999px; padding: 10px 35px; font-style: normal; font-weight: 900; }

        .section { padding: 80px 32px; }
        .dark { background: #191919; }
        .kicker { color: #27c6ff; margin: 0 0 12px; font-weight: 1000; text-transform: uppercase; }
        .section h2, .storeLike h2, .release h2 { margin: 0 auto 30px; max-width: 850px; text-align: center; font-size: clamp(36px, 5vw, 58px); line-height: 1; }
        .moduleGrid { max-width: 1050px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; }
        .module {
          background: #282828;
          border: 1px solid #3b3b3b;
          border-radius: 8px;
          min-height: 112px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .module span { font-weight: 1000; font-size: 18px; }
        .module small { color: #27c6ff; font-weight: 900; }

        .storeLike { background: #222; padding: 72px 32px; }
        .storeTop { max-width: 1200px; margin: 0 auto 30px; display: flex; justify-content: space-between; align-items: center; gap: 20px; }
        .storeTop h2 { margin: 0; text-align: left; }
        .storeTop a { background: #24bdf2; padding: 14px 22px; border-radius: 5px; font-weight: 900; }
        .cosmeticGrid { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .cosmeticGrid article { background: #1b1b1b; border: 1px solid #333; border-radius: 8px; overflow: hidden; }
        .cosmeticGrid img { width: 100%; height: 300px; object-fit: contain; background: #101010; padding: 20px; }
        .cosmeticGrid div { background: #333; padding: 18px; }
        .cosmeticGrid h3 { margin: 0 0 8px; font-size: 21px; }
        .cosmeticGrid p { margin: 0; color: #c9c9c9; font-weight: 700; }

        .release {
          background: linear-gradient(90deg, #32260c, #111);
          min-height: 410px;
          padding: 78px 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 70px;
          text-align: center;
        }
        .release div { max-width: 700px; }
        .release p { color: #d6d6d6; font-size: 18px; line-height: 1.65; font-weight: 800; }
        .smallBtn { min-width: 280px; font-size: 18px; padding: 18px 26px; }
        footer { background: #0f0f0f; padding: 38px 32px; display: flex; gap: 16px; align-items: center; justify-content: center; color: #bdbdbd; font-weight: 800; }
        footer img { width: 44px; height: 44px; object-fit: cover; border-radius: 8px; }

        @media (max-width: 1000px) {
          .links { display: none; }
          .hero { min-height: auto; }
          .sideRender { opacity: .25; width: 290px; }
          .sideRender.left { left: -70px; }
          .sideRender.right { right: -70px; }
          .heroCards, .cosmeticGrid { grid-template-columns: 1fr; }
          .moduleGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .storeTop, .release { flex-direction: column; }
        }
        @media (max-width: 560px) {
          .nav { padding: 0 16px; }
          .brand span { display: none; }
          .login { padding: 12px 18px; }
          .download { font-size: 21px; min-width: 0; width: 100%; }
          .moduleGrid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}
