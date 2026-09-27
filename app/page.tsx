const DISCORD = "https://discord.gg/5HxHgKdfMu";

const modules = [
  ["Fullbright","☀","Visual"],["Zoom","⌕","Utility"],["Toggle Sprint","⇧","Movement"],
  ["Freelook","◌","Camera"],["CPS Counter","◉","HUD"],["Keystrokes","⌨","HUD"],
  ["Armor HUD","▣","HUD"],["Combo Counter","×","HUD"],["Reach Display","↔","HUD"],
  ["Potion Effects","✦","HUD"],["Crosshair","+","Visual"],["Auto Respawn","↻","Utility"],
];

const cosmetics = [
  ["Neon Slime Wings","NW","3D animated wings with glow, color, size and speed customization."],
  ["Slime Crown","SC","A glowing slime-themed crown cosmetic."],
  ["Slime Halo","SH","A floating glowing halo above your player."],
  ["Shoulder Slime","SS","A small slime companion that sits on your shoulder."],
  ["Booger Cape","BC","The official Booger Client cape."],
  ["Bunny Ears","BE","Animated bunny ears for your player model."],
  ["Player Pet","PP","A mini player companion that follows you."],
  ["Pet Morph","PM","A local pet-style player morph."],
  ["Emote Pack","EM","19 emotes available from the in-game emote wheel."],
];

const ranks = ["OWNER","ADMIN","STAFF","BETA","SUPPORTER","USER"];

export default function Page() {
  return (
    <main className="page" id="top">
      <nav className="navbar">
        <a className="brand" href="#top">
          <img src="/images/booger-logo-icon.png" alt="" />
          <span>Booger <b>Client</b></span>
        </a>
        <div className="navlinks">
          <a className="active" href="#client">Client</a>
          <a href="#modules">Modules</a>
          <a href="#shop">Shop</a>
          <a href="#ranks">Ranks</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="navActions">
          <a className="discord" href={DISCORD}>Discord</a>
          <a className="join" href="#shop">Shop</a>
        </div>
      </nav>

      <section className="hero" id="client">
        <div className="heroBg" /><div className="shade" />
        <div className="orb orbOne" /><div className="orb orbTwo" />
        <img className="heroRender heroLeft" src="/images/render-goose-cut.png" alt="" />
        <img className="heroRender heroRightTop" src="/images/render-king-cut.png" alt="" />
        <img className="heroRender heroRightBottom" src="/images/render-purple-cut.png" alt="" />
        <div className="heroCenter">
          <img className="heroLogo" src="/images/booger-logo-icon.png" alt="Booger Client" />
          <h1><span>Booger</span> Client</h1>
          <p>Fabric 1.21.11 client with HUD modules, movement tools, 3D cosmetics and emotes.</p>
          <div className="heroTags"><span>26 Modules</span><i/><span>9 Cosmetics</span><i/><span>19 Emotes</span></div>
          <div className="heroButtons">
            <a className="bigButton" href={DISCORD}>Join Discord</a>
            <a className="bigButton dark" href="#shop">View Shop</a>
          </div>
        </div>
      </section>

      <section className="section" id="modules">
        <div className="sectionHead"><p>V19</p><h2>Modules</h2><span>Core modules from the current client build.</span></div>
        <div className="lookGrid">
          {modules.map(([name,icon,tag]) => (
            <article className="look" key={name}>
              <div style={{padding:24,textAlign:"center",fontSize:42,color:"#7dff67"}}>{icon}</div>
              <div><h3>{name}</h3><p>{tag}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section cosmetics" id="shop">
        <div className="sectionHead"><p>Booger Shop</p><h2>V19 Cosmetics</h2><span>Store preview — checkout is coming later.</span></div>
        <div className="lookGrid">
          {cosmetics.map(([name,short,desc]) => (
            <article className="look" key={name}>
              <div style={{padding:42,textAlign:"center",fontSize:38,fontWeight:900,color:"#7dff67"}}>{short}</div>
              <div><h3>{name}</h3><p>{desc}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="ranks">
        <div className="sectionHead"><p>Identity</p><h2>Client Ranks</h2><span>Local profile labels, not server permissions.</span></div>
        <div className="faqGrid">{ranks.map((rank)=><article key={rank}><h3>[{rank}]</h3><p>Booger Client profile rank.</p></article>)}</div>
      </section>

      <section className="section faq" id="faq">
        <div className="sectionHead"><p>FAQ</p><h2>Good to know</h2></div>
        <div className="faqGrid">
          <article><h3>Version?</h3><p>Minecraft Java Fabric 1.21.11.</p></article>
          <article><h3>Real cosmetics?</h3><p>Yes. V19 includes player-attached 3D cosmetic rendering.</p></article>
          <article><h3>Shop live?</h3><p>Not yet. Pricing and checkout are still coming.</p></article>
        </div>
      </section>
    </main>
  );
}
