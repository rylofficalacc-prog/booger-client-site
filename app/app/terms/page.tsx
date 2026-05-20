export default function TermsPage() {
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
          TERMS OF SERVICE
        </p>

        <h1 style={{
          fontSize: "clamp(48px, 8vw, 96px)",
          lineHeight: 0.9,
          letterSpacing: "-0.08em",
          margin: "16px 0 40px"
        }}>
          Booger Client Terms
        </h1>

        <div style={{
          display: "grid",
          gap: 18,
          color: "rgba(255,255,255,.68)",
          lineHeight: 1.7,
          fontSize: 16
        }}>
          <div style={card}>
            <h2 style={title}>1. Use of Booger Client</h2>
            <p>
              Booger Client is provided as a Minecraft utility client project. By using the website,
              Discord, downloads, or related services, you agree to follow these terms.
            </p>
          </div>

          <div style={card}>
            <h2 style={title}>2. Development Status</h2>
            <p>
              Booger Client is currently in development. Features, release dates, downloads,
              cosmetics, and services may change at any time.
            </p>
          </div>

          <div style={card}>
            <h2 style={title}>3. No Affiliation</h2>
            <p>
              Booger Client is not affiliated with Mojang, Microsoft, Lunar Client, Feather Client,
              or any other Minecraft client.
            </p>
          </div>

          <div style={card}>
            <h2 style={title}>4. Community Rules</h2>
            <p>
              Users must follow the Discord server rules. Harassment, abuse, scams, spam, or attempts
              to harm the project may result in removal from the community.
            </p>
          </div>

          <div style={card}>
            <h2 style={title}>5. Downloads and Safety</h2>
            <p>
              Only download Booger Client from official links provided by the team. We are not
              responsible for fake downloads, reuploads, or modified versions from other sources.
            </p>
          </div>

          <div style={card}>
            <h2 style={title}>6. Changes to Terms</h2>
            <p>
              These terms may be updated over time as the project grows. Continued use of the website
              or services means you accept the updated terms.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

const card = {
  padding: 28,
  borderRadius: 26,
  background: "rgba(255,255,255,.07)",
  border: "1px solid rgba(255,255,255,.1)",
  boxShadow: "0 20px 60px rgba(0,0,0,.25)"
};

const title = {
  color: "white",
  margin: "0 0 10px",
  fontSize: 24,
  letterSpacing: "-0.04em"
};
