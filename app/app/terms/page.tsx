export default function TermsPage() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "radial-gradient(circle at top, rgba(101,255,152,.14), transparent 35%), linear-gradient(180deg, #050805, #020302)",
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

        <div style={{ display: "grid", gap: 18 }}>
          {[
            {
              title: "1. Use of Booger Client",
              text: "Booger Client is a Minecraft utility client project. By using the website, Discord, downloads, or related services, you agree to follow these terms."
            },
            {
              title: "2. Development Status",
              text: "Booger Client is currently in development. Features, release dates, downloads, cosmetics, and services may change at any time."
            },
            {
              title: "3. No Affiliation",
              text: "Booger Client is not affiliated with Mojang, Microsoft, Lunar Client, Feather Client, or any other Minecraft client."
            },
            {
              title: "4. Community Rules",
              text: "Users must follow the Discord server rules. Harassment, abuse, scams, spam, or attempts to harm the project may result in removal from the community."
            },
            {
              title: "5. Downloads and Safety",
              text: "Only download Booger Client from official links provided by the team. We are not responsible for fake downloads, reuploads, or modified versions from other sources."
            },
            {
              title: "6. Purchases and Supporter Perks",
              text: "Future cosmetics, supporter perks, ranks, or shop items may change before release. Purchases, if added later, will be handled through official Booger Client links only."
            },
            {
              title: "7. Changes to Terms",
              text: "These terms may be updated over time as the project grows. Continued use of the website or services means you accept the updated terms."
            }
          ].map((item) => (
            <div key={item.title} style={{
              padding: 28,
              borderRadius: 26,
              background: "rgba(255,255,255,.07)",
              border: "1px solid rgba(255,255,255,.1)",
              boxShadow: "0 20px 60px rgba(0,0,0,.25)"
            }}>
              <h2 style={{
                color: "white",
                margin: "0 0 10px",
                fontSize: 24,
                letterSpacing: "-0.04em"
              }}>
                {item.title}
              </h2>

              <p style={{
                margin: 0,
                color: "rgba(255,255,255,.68)",
                lineHeight: 1.7,
                fontSize: 16
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
