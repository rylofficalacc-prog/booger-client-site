const updates = [
  {
    date: "May 2026",
    title: "Website Expansion Started",
    text: "Added new pages for download, features, changelog, roadmap, shop, staff, and FAQ to make the site feel like a real client website."
  },
  {
    date: "May 2026",
    title: "Development Delay Announcement",
    text: "Development is taking longer because Minecraft 1.21.11 is harder to code for, funding is limited, and the development team is currently understaffed."
  },
  {
    date: "May 2026",
    title: "Homepage Redesign",
    text: "Started redesigning the homepage with a premium dark client style, countdown timer, feature cards, roadmap preview, and Discord links."
  },
  {
    date: "April 2026",
    title: "Client Polish Work",
    text: "Continued work on the custom main menu, ClickGUI, HUD editor, modules, themes, and configuration system."
  }
];

export default function ChangelogPage() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #050805, #020302)",
      color: "white",
      padding: "120px 24px",
      fontFamily: "Inter, system-ui, sans-serif"
    }}>
      <section style={{ maxWidth: 900, margin: "0 auto" }}>
        <a href="/" style={{ color: "#65ff98", textDecoration: "none", fontWeight: 900 }}>
          ← Back Home
        </a>

        <p style={{ color: "#65ff98", fontWeight: 900, letterSpacing: 2, marginTop: 40 }}>
          CHANGELOG
        </p>

        <h1 style={{
          fontSize: "clamp(48px, 8vw, 96px)",
          lineHeight: 0.9,
          letterSpacing: "-0.08em",
          margin: "16px 0 40px"
        }}>
          Latest Updates
        </h1>

        <div style={{ display: "grid", gap: 16 }}>
          {updates.map((update) => (
            <div key={update.title} style={{
              padding: 28,
              borderRadius: 24,
              background: "rgba(255,255,255,.07)",
              border: "1px solid rgba(255,255,255,.1)"
            }}>
              <strong style={{ color: "#65ff98", letterSpacing: 1 }}>
                {update.date}
              </strong>
              <h2 style={{ margin: "10px 0", fontSize: 26 }}>
                {update.title}
              </h2>
              <p style={{ margin: 0, color: "rgba(255,255,255,.65)", lineHeight: 1.6 }}>
                {update.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
