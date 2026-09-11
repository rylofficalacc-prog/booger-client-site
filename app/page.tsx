export default function Page() {
  const discord = "https://discord.gg/5HxHgKdfMu";

  return (
    <main className="page">
      <div className="snow s1" />
      <div className="snow s2" />
      <div className="paper">
        <header className="masthead">
          <div className="stamp">CHRISTMAS BUILD</div>
          <p className="smallTop">indie minecraft fabric mod • 1.21.11 • made by snot2</p>
          <h1>
            BOOGER
            <span>CLIENT</span>
          </h1>
          <p className="tagline">
            A weird little Minecraft client project coming back from the dead — cleaner,
            cozier, and actually being rebuilt piece by piece.
          </p>
          <div className="heroActions">
            <a href={discord}>join the discord</a>
            <span>release window: christmas</span>
          </div>
        </header>

        <section className="notice">
          <div>
            <b>Current note:</b> the old website is gone. This version is meant to feel like a
            handmade dev poster instead of another fake polished client landing page.
          </div>
        </section>

        <section className="split">
          <article className="letter">
            <p className="label">what is this?</p>
            <h2>Booger Client is not trying to be the “#1 client.”</h2>
            <p>
              It is a small Fabric mod/client project focused on a better Right Shift menu,
              useful HUD tools, cosmetics, profiles, and a cleaner everyday Minecraft setup.
            </p>
            <p>
              The Christmas release window gives the project time to stop feeling like a
              placeholder and start feeling like something people would actually want open.
            </p>
          </article>

          <aside className="statusCard">
            <div className="statusHeader">build board</div>
            <div className="statusRow"><span>version</span><b>v6 starter</b></div>
            <div className="statusRow"><span>menu key</span><b>right shift</b></div>
            <div className="statusRow"><span>loader</span><b>fabric</b></div>
            <div className="statusRow"><span>minecraft</span><b>1.21.11</b></div>
            <div className="statusRow"><span>release</span><b>christmas</b></div>
            <div className="progress"><i /></div>
            <p>Polish first. Hype later.</p>
          </aside>
        </section>

        <section className="cards">
          <article>
            <span>01</span>
            <h3>Right Shift Menu</h3>
            <p>A custom menu that should feel simple, readable, and quick to use.</p>
          </article>
          <article>
            <span>02</span>
            <h3>HUD Tools</h3>
            <p>CPS, keystrokes, coords, armor display, and small quality-of-life visuals.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Cosmetics</h3>
            <p>Founder cape, booger cape, slime trail, owner crown, and seasonal ideas.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Profiles</h3>
            <p>Save setups for PvP, screenshots, casual play, and clean recording.</p>
          </article>
        </section>

        <section className="devlog">
          <p className="label">devlog scraps</p>
          <div className="scraps">
            <div>
              <b>picked christmas</b>
              <p>Christmas gives the client enough time to actually be polished before release.</p>
            </div>
            <div>
              <b>rebuilding the mod</b>
              <p>The focus moved from placeholder panels to real local features and config.</p>
            </div>
            <div>
              <b>next goal</b>
              <p>Make the GUI feel good at every GUI scale and make buttons actually matter.</p>
            </div>
          </div>
        </section>

        <section className="roadmap">
          <div className="roadTitle">
            <p className="label">before release</p>
            <h2>Stuff that has to be real.</h2>
          </div>
          <ul>
            <li><b>fullbright</b><span>local visual module</span></li>
            <li><b>cps counter</b><span>actual click tracking</span></li>
            <li><b>keystrokes</b><span>real key display</span></li>
            <li><b>coords hud</b><span>player position display</span></li>
            <li><b>cosmetic menu</b><span>equips and previews</span></li>
            <li><b>owner panel</b><span>snot2-only dev tools</span></li>
          </ul>
        </section>

        <section className="faq">
          <div>
            <h3>Is there a trailer?</h3>
            <p>Not yet. The site is built without a video section for now.</p>
          </div>
          <div>
            <h3>Is it released?</h3>
            <p>No. The comeback window is Christmas.</p>
          </div>
          <div>
            <h3>Is it a cheat client?</h3>
            <p>No. The goal is HUD tools, visuals, customization, profiles, and cosmetics.</p>
          </div>
        </section>

        <footer>
          <div>
            <b>BOOGER CLIENT</b>
            <span>christmas comeback build</span>
          </div>
          <a href={discord}>discord.gg/5HxHgKdfMu</a>
        </footer>
      </div>

      <style>{`
        :root {
          color-scheme: dark;
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #0a100b;
        }

        .page {
          min-height: 100vh;
          padding: 26px;
          color: #182015;
          background:
            radial-gradient(circle at top left, rgba(199, 44, 34, .22), transparent 32%),
            radial-gradient(circle at bottom right, rgba(119, 171, 85, .25), transparent 30%),
            linear-gradient(135deg, #081009 0%, #172317 48%, #070907 100%);
          font-family: Georgia, "Times New Roman", serif;
          position: relative;
          overflow-x: hidden;
        }

        .page:before {
          content: "";
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px);
          background-size: 24px 24px;
          opacity: .25;
          pointer-events: none;
        }

        .snow {
          position: fixed;
          inset: -40px 0 0;
          pointer-events: none;
          opacity: .22;
          background-image:
            radial-gradient(circle, #fff 1px, transparent 2px),
            radial-gradient(circle, #fff 1px, transparent 2px);
          background-size: 90px 90px, 140px 140px;
          animation: fall 18s linear infinite;
        }

        .s2 {
          opacity: .14;
          background-size: 160px 160px, 220px 220px;
          animation-duration: 28s;
        }

        @keyframes fall {
          from { transform: translateY(-80px); }
          to { transform: translateY(80px); }
        }

        .paper {
          position: relative;
          z-index: 1;
          width: min(1120px, 100%);
          margin: 0 auto;
          background:
            linear-gradient(rgba(255,255,255,.15), rgba(255,255,255,0)),
            #f4e4bd;
          border: 6px solid #10140e;
          box-shadow: 12px 12px 0 #000, 0 40px 100px rgba(0,0,0,.5);
          overflow: hidden;
        }

        .paper:before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            repeating-linear-gradient(0deg, rgba(0,0,0,.035) 0 1px, transparent 1px 5px),
            radial-gradient(circle at 20% 10%, rgba(255,255,255,.45), transparent 20%);
          mix-blend-mode: multiply;
          pointer-events: none;
        }

        .masthead {
          padding: 42px 42px 32px;
          border-bottom: 4px solid #10140e;
          background:
            linear-gradient(135deg, rgba(122, 164, 80, .22), transparent 45%),
            linear-gradient(90deg, #f7e9c6, #efd7a7);
          position: relative;
        }

        .smallTop,
        .label,
        .statusHeader,
        .heroActions,
        footer,
        .statusRow,
        .cards span {
          font-family: "Courier New", monospace;
          text-transform: uppercase;
          letter-spacing: .08em;
        }

        .smallTop {
          margin: 0 0 16px;
          font-weight: 900;
          font-size: 13px;
        }

        .stamp {
          position: absolute;
          right: 34px;
          top: 30px;
          padding: 12px 16px;
          border: 3px solid #b53228;
          color: #b53228;
          font: 900 14px "Courier New", monospace;
          transform: rotate(5deg);
          background: rgba(255,255,255,.25);
        }

        h1 {
          margin: 0;
          color: #10140e;
          font-size: clamp(60px, 13vw, 158px);
          line-height: .78;
          letter-spacing: -.08em;
          text-transform: uppercase;
        }

        h1 span {
          display: block;
          color: #4b7d37;
          text-shadow: 4px 4px 0 #10140e;
        }

        .tagline {
          max-width: 760px;
          margin: 28px 0 0;
          font-size: clamp(18px, 2vw, 24px);
          line-height: 1.4;
          font-weight: 700;
        }

        .heroActions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
          align-items: center;
          font-size: 13px;
          font-weight: 900;
        }

        a {
          color: inherit;
        }

        .heroActions a,
        footer a {
          background: #10140e;
          color: #f4e4bd;
          text-decoration: none;
          padding: 14px 18px;
          box-shadow: 5px 5px 0 #6e9d4f;
        }

        .heroActions span {
          border: 2px dashed #b53228;
          color: #b53228;
          padding: 12px 14px;
          background: #fff0c7;
        }

        .notice {
          padding: 18px 42px;
          border-bottom: 4px solid #10140e;
          background: #c44736;
          color: #fff4d6;
          font-size: 18px;
          line-height: 1.45;
        }

        .split {
          display: grid;
          grid-template-columns: 1fr 330px;
          gap: 0;
          border-bottom: 4px solid #10140e;
        }

        .letter {
          padding: 42px;
          border-right: 4px solid #10140e;
        }

        .label {
          margin: 0 0 12px;
          font-weight: 900;
          color: #b53228;
          font-size: 13px;
        }

        h2 {
          margin: 0 0 18px;
          font-size: clamp(32px, 5vw, 64px);
          line-height: .95;
          letter-spacing: -.05em;
        }

        .letter p,
        .statusCard p,
        .cards p,
        .scraps p,
        .faq p {
          font-size: 17px;
          line-height: 1.55;
        }

        .statusCard {
          padding: 26px;
          background: #162112;
          color: #f4e4bd;
        }

        .statusHeader {
          color: #9ee36b;
          font-weight: 900;
          margin-bottom: 18px;
        }

        .statusRow {
          display: flex;
          justify-content: space-between;
          gap: 18px;
          border-bottom: 1px solid rgba(244,228,189,.25);
          padding: 12px 0;
          font-size: 12px;
        }

        .statusRow span {
          color: #c9b98c;
        }

        .progress {
          height: 18px;
          border: 2px solid #f4e4bd;
          margin: 24px 0 16px;
          padding: 3px;
        }

        .progress i {
          display: block;
          height: 100%;
          width: 43%;
          background: repeating-linear-gradient(90deg, #6fb94d 0 10px, #a4e36d 10px 18px);
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-bottom: 4px solid #10140e;
        }

        .cards article {
          min-height: 260px;
          padding: 28px;
          border-right: 4px solid #10140e;
          background: #fff0c7;
        }

        .cards article:nth-child(even) {
          background: #e6c98f;
        }

        .cards article:last-child {
          border-right: 0;
        }

        .cards span {
          display: inline-grid;
          place-items: center;
          width: 42px;
          height: 42px;
          background: #10140e;
          color: #f4e4bd;
          font-weight: 900;
          margin-bottom: 30px;
        }

        h3 {
          margin: 0 0 12px;
          font-size: 31px;
          line-height: 1;
        }

        .devlog {
          padding: 42px;
          background: #efe0b7;
          border-bottom: 4px solid #10140e;
        }

        .scraps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 18px;
        }

        .scraps div {
          background: #fff8db;
          border: 3px solid #10140e;
          padding: 22px;
          box-shadow: 6px 6px 0 rgba(16,20,14,.2);
          transform: rotate(-1deg);
        }

        .scraps div:nth-child(2) {
          transform: rotate(1deg);
          background: #dce9b4;
        }

        .scraps div:nth-child(3) {
          transform: rotate(-.5deg);
          background: #f0c2ad;
        }

        .scraps b {
          display: block;
          font: 900 15px "Courier New", monospace;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .roadmap {
          display: grid;
          grid-template-columns: 360px 1fr;
          border-bottom: 4px solid #10140e;
        }

        .roadTitle {
          padding: 42px;
          background: #10140e;
          color: #f4e4bd;
        }

        .roadTitle .label {
          color: #9ee36b;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }

        li {
          padding: 24px;
          border-left: 4px solid #10140e;
          border-bottom: 4px solid #10140e;
          min-height: 110px;
          background: #f7e9c6;
        }

        li:nth-child(3n) {
          background: #dce9b4;
        }

        li b {
          display: block;
          font-size: 23px;
          margin-bottom: 8px;
        }

        li span {
          font-family: "Courier New", monospace;
          font-size: 13px;
          text-transform: uppercase;
          font-weight: 900;
          color: #4b7d37;
        }

        .faq {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-bottom: 4px solid #10140e;
        }

        .faq div {
          padding: 30px;
          border-right: 4px solid #10140e;
          background: #fff0c7;
        }

        .faq div:last-child {
          border-right: 0;
        }

        footer {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          align-items: center;
          padding: 24px 42px;
          background: #162112;
          color: #f4e4bd;
          font-size: 13px;
          font-weight: 900;
        }

        footer div {
          display: grid;
          gap: 6px;
        }

        footer span {
          color: #b7c89b;
        }

        @media (max-width: 920px) {
          .page {
            padding: 12px;
          }

          .stamp {
            position: static;
            display: inline-block;
            margin-bottom: 18px;
          }

          .masthead,
          .notice,
          .letter,
          .devlog,
          .roadTitle,
          footer {
            padding: 24px;
          }

          .split,
          .roadmap {
            grid-template-columns: 1fr;
          }

          .letter {
            border-right: 0;
            border-bottom: 4px solid #10140e;
          }

          .cards,
          .scraps,
          .faq,
          ul {
            grid-template-columns: 1fr;
          }

          .cards article,
          .faq div {
            border-right: 0;
            border-bottom: 4px solid #10140e;
            min-height: auto;
          }

          li {
            border-left: 0;
          }

          footer {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}
