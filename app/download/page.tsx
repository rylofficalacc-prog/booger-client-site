export default function DownloadPage() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg, #050805, #020302)",
      color: "white",
      padding: "120px 24px",
      fontFamily: "Inter, system-ui, sans-serif"
    }}>
      <section style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ color: "#65ff98", fontWeight: 900, letterSpacing: 2 }}>
          DOWNLOAD
        </p>

        <h1 style={{
          fontSize: "clamp(48px, 8vw, 96px)",
          lineHeight: 0.9,
          letterSpacing: "-0.08em",
          margin: "16px 0"
        }}>
          Download Booger Client
        </h1>

        <p style={{
          maxWidth: 700,
          color: "rgba(255,255,255,.65)",
          fontSize: 18,
          lineHeight: 1.7
        }}>
          Booger Client is currently still in development for Minecraft 1.21.11.
          Public downloads are not available yet, but private beta testing will open later.
        </p>

        <div style={{
          marginTop: 34,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 16
        }}>
          {[
            ["Status", "In Development"],
            ["Version", "Minecraft 1.21.11"],
            ["Build", "Private Beta"],
            ["Release", "Coming Soon"]
          ].map(([title, value]) => (
            <div key={title} style={{
              padding: 26,
              borderRadius: 24,
              background: "rgba(255,255,255,.07)",
              border: "1px solid rgba(255,255,255,.1)"
            }}>
              <strong style={{ display: "block", fontSize: 28 }}>{value}</strong>
              <span style={{ color: "rgba(255,255,255,.5)" }}>{title}</span>
            </div>
          ))}
        </div>

        <a href="https://discord.gg/5HxHgKdfMu" target="_blank" style={{
          display: "inline-block",
          marginTop: 36,
          padding: "16px 24px",
          borderRadius: 16,
          background: "linear-gradient(135deg, #72ff9e, #14bd5d)",
          color: "#031006",
          fontWeight: 1000,
          textDecoration: "none"
        }}>
          Join Discord for Updates
        </a>
      </section>
    </main>
  );
}
