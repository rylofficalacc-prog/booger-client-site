          <article className="featureCard moduleCard" id="modules">
            <div className="featureIcon cube">◇</div>
            <h3>Integrated Modules</h3>
            <p>Hover a module to preview what it does.</p>

            <div className="moduleGrid">
              {modules.map((mod) => (
                <button key={mod.name} type="button" onMouseEnter={() => setHoveredModule(mod)} onFocus={() => setHoveredModule(mod)} className={hoveredModule.name === mod.name ? "moduleIcon active" : "moduleIcon"} aria-label={`${mod.name}: ${mod.desc}`}>
                  {mod.icon}
                </button>
              ))}
            </div>

            <div className="modulePreview">
              <strong>{hoveredModule.name}</strong>
              <span>{hoveredModule.tag}</span>
              <p>{hoveredModule.desc}</p>
            </div>
          </article>

          <article className="featureCard version">
            <div className="featureIcon cube">▣</div>
            <h3>Rebuilt UI</h3>
            <h2>MODS<br />HUD<br />COSMETICS</h2>
            <p>Plus Settings and an owner-only page inside the client.</p>
          </article>
        </section>
      </section>

      <section className="section shopSection" id="shop">
        <div className="sectionHead">
          <p>Booger Shop</p>
          <h2>Cosmetics from the actual client.</h2>
          <span>Storefront preview for V19. Pricing and checkout are intentionally not live yet.</span>
        </div>

        <div className="shopToolbar">
          {["All", "Head", "Pet", "Cape", "Back", "Animation"].map((filter) => (
            <button key={filter} type="button" className={shopFilter === filter ? "shopFilter active" : "shopFilter"} onClick={() => setShopFilter(filter)}>{filter}</button>
          ))}
        </div>

        <div className="shopGrid">
          {filteredShop.map((item) => (
            <article className="shopCard" key={item.name}>
              <div className="shopVisual">
                <span>{item.icon}</span>
                {item.badge && <b>{item.badge}</b>}
              </div>
              <div className="shopInfo">
                <span className="shopType">{item.type}</span>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <div className="shopBottom">
                  <span className="shopStatus">Coming soon</span>
                  <a href={DISCORD}>Details ↗</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section ranksSection" id="ranks">
        <div className="sectionHead">
          <p>Identity</p>
          <h2>Booger Client Ranks</h2>
          <span>V19 includes local client-side profile labels. They do not grant Minecraft server permissions.</span>
        </div>
        <div className="rankGrid">
          {ranks.map((rank) => (
            <article className="rankCard" key={rank.name}>
              <strong className={`rankTag ${rank.className}`}>[{rank.name}]</strong>
              <p>{rank.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section release" id="release">
        <div className="releaseBox">
          <div>
            <p>Current Build Direction</p>
            <h2>V19 is getting real.</h2>
            <span>The client now has an actual cosmetic renderer, emote wheel, HUD editor, configurable menu, rank labels and a much larger module set. Join the Discord for build updates and testing news.</span>
          </div>
          <a className="bigButton" href={DISCORD}>Join the Discord</a>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="sectionHead">
          <p>FAQ</p>
          <h2>Good to know</h2>
        </div>
        <div className="faqGrid">
          <article><h3>What Minecraft version?</h3><p>The current source targets Minecraft Java 1.21.11 with Fabric.</p></article>
          <article><h3>Are the cosmetics just particles?</h3><p>No. V19 includes real player-attached 3D cosmetic rendering, including animated Neon Slime Wings.</p></article>
          <article><h3>Can I buy cosmetics yet?</h3><p>The shop is a preview right now. Pricing and checkout will be added once the store setup is decided.</p></article>
          <article><h3>How many emotes?</h3><p>The V19 emote system includes 19 emotes and opens from the in-game emote wheel.</p></article>
          <article><h3>Do ranks give server permissions?</h3><p>No. The V19 rank system is a local Booger Client profile label system.</p></article>
          <article><h3>Is it a cheat client?</h3><p>The current build is focused on HUD tools, visuals, movement utilities, cosmetics, emotes and customization.</p></article>
        </div>
      </section>

      <footer className="footer">
        <a className="brand" href="#top"><img src="/images/booger-logo-icon.png" alt="" /><span>Booger <b>Client</b></span></a>
        <p>Built for Fabric 1.21.11 • V19 website refresh</p>
        <a href={DISCORD}>Discord ↗</a>
      </footer>
    </main>
  );
}
