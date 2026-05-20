const features = [
  ["Smooth ClickGUI", "A clean animated menu for toggling modules, searching features, and changing settings."],
  ["HUD Editor", "Move, scale, snap, and customize HUD modules like CPS, Armor HUD, Potion Effects, and more."],
  ["Profiles", "Switch between PvP, Survival, Recording, and custom presets."],
  ["Themes", "Customize the client with clean accent colors and dark glass UI styles."],
  ["Discord RPC", "Show your Booger Client status on Discord while playing."],
  ["FPS Tools", "Helpful performance and visual settings for smoother gameplay."],
  ["Notifications", "Clean slide-in alerts for modules, friends, updates, and profiles."],
  ["Crosshair Customizer", "Change your crosshair style, color, size, and look."]
];

export default function FeaturesPage() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #050805, #020302)",
      color: "white",
      padding: "120px 24px",
      fontFamily: "Inter, system-ui, sans-serif"
    }}>
      <section style={{ maxWidth: 1100, margin: "0 auto" }}>
        <a href="/" style={{ color: "#65ff98", textDecoration: "none", fontWeight: 900 }}>
          ← Back Home
        </a>

        <p style={{ color: "#65ff98", fontWeight: 900, letterSpacing: 2, marginTop: 40 }}>
          FEATURES
        </p>

        <h1 style={{
          fontSize: "clamp(48px, 8vw, 96px)",
          lineHeight: 0.9,
          letterSpacing: "-0.08em",
          margin: "16px 0 40px"
        }}>
          Built for smooth gameplay.
        </h1>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 16
        }}>
          {features.map(([title, desc]) => (
            <div key={title} style={{
              padding: 26,
              borderRadius: 24,
              background: "rgba(255,255,255,.07)",
              border: "1px solid rgba(255,255,255,.1)"
            }}>
              <div style={{
                width: 44,
                height: 44,
                borderRadius: 16,
                background: "rgba(101,255,152,.12)",
                color: "#65ff98",
                display: "grid",
                placeItems: "center",
                marginBottom: 18
              }}>
                ✦
              </div>
              <h2 style={{ margin: "0 0 10px", fontSize: 22 }}>{title}</h2>
              <p style={{ margin: 0, color: "rgba(255,255,255,.6)", lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
