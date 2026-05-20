const phases = [
  {
    phase: "Phase 1",
    title: "Core Client Systems",
    status: "Completed / Testing",
    text: "Base client setup, module manager, settings system, keybinds, and the foundation for Booger Client."
  },
  {
    phase: "Phase 2",
    title: "ClickGUI + HUD Editor",
    status: "In Progress",
    text: "Premium ClickGUI, searchable modules, draggable HUD editor, snapping, scaling, themes, and clean animations."
  },
  {
    phase: "Phase 3",
    title: "Profiles + Configs",
    status: "Planned",
    text: "PvP, Survival, Recording, and custom profiles with auto-save, import/export, and theme presets."
  },
  {
    phase: "Phase 4",
    title: "Private Beta",
    status: "Coming Soon",
    text: "Small testing group, bug reports, stability checks, module testing, and feedback from trusted users."
  },
  {
    phase: "Phase 5",
    title: "Launcher",
    status: "Planned",
    text: "Custom launcher, account login, client version selection, update checking, and easier installs."
  },
  {
    phase: "Phase 6",
    title: "Public Release",
    status: "Delayed",
    text: "Public download after the client is stable, polished, and ready for Minecraft 1.21.11."
  }
];

export default function RoadmapPage() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "radial-gradient(circle at top, rgba(101,255,152,.14), transparent 35%), linear-gradient(180deg, #050805, #020302)",
      color: "white",
      padding: "120px 24px",
      fontFamily: "Inter, system-ui, sans-serif"
    }}>
      <section style={{ maxWidth: 1100, margin: "0 auto" }}>
        <a href="/" style={{ color: "#65ff98", textDecoration: "none", fontWeight: 900 }}>
          ← Back Home
        </a>

        <p style={{ color: "#65ff98", fontWeight: 900, letterSpacing: 2, marginTop: 40 }}>
          ROADMAP
        </p>

        <h1 style={{
          fontSize: "clamp(48px, 8vw, 96px)",
          lineHeight: 0.9,
          letterSpacing: "-0.08em",
          margin: "16px 0"
        }}>
          The plan before release.
        </h1>

        <p style={{
          maxWidth: 720,
          color: "rgba(255,255,255,.65)",
          fontSize: 18,
          lineHeight: 1.7,
          marginBottom: 44
        }}>
          Booger Client is being built in phases so the release feels stable,
          polished, and worth using instead of rushed.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 18
        }}>
          {phases.map((item) => (
            <div key={item.phase} style={{
              padding: 28,
              borderRadius: 26,
              background: "rgba(255,255,255,.07)",
              border: "1px solid rgba(255,255,255,.1)",
              boxShadow: "0 20px 60px rgba(0,0,0,.25)"
            }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 12,
                alignItems: "center",
                marginBottom: 18
              }}>
                <strong style={{
                  color: "#65ff98",
                  fontSize: 14,
                  letterSpacing: 1
                }}>
                  {item.phase}
                </strong>

                <span style={{
                  padding: "8px 10px",
                  borderRadius: 999,
                  background: "rgba(101,255,152,.12)",
                  border: "1px solid rgba(101,255,152,.2)",
                  color: "#baffcf",
                  fontSize: 12,
                  fontWeight: 900
                }}>
                  {item.status}
                </span>
              </div>

              <h2 style={{
                margin: "0 0 12px",
                fontSize: 26,
                letterSpacing: "-0.04em"
              }}>
                {item.title}
              </h2>

              <p style={{
                margin: 0,
                color: "rgba(255,255,255,.62)",
                lineHeight: 1.65
              }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
