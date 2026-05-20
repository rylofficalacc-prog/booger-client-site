const faqs = [
  {
    q: "Is Booger Client released?",
    a: "Not yet. Booger Client is still in development for Minecraft 1.21.11."
  },
  {
    q: "Why is development taking longer?",
    a: "Minecraft 1.21.11 is harder to code for than earlier versions, and the project is currently underfunded and understaffed with developers."
  },
  {
    q: "Is the project cancelled?",
    a: "No. The project is not cancelled. Development is still active, but progress is slower than originally planned."
  },
  {
    q: "Will there be a download?",
    a: "Yes. A public download is planned after the client is stable, polished, and ready."
  },
  {
    q: "Can I apply as a developer?",
    a: "Yes. Join the Discord server and ask about developer applications."
  },
  {
    q: "Will there be cosmetics or a shop?",
    a: "A shop page is planned for future cosmetics, supporter perks, badges, capes, and beta access."
  }
];

export default function FAQPage() {
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
          FAQ
        </p>

        <h1 style={{
          fontSize: "clamp(48px, 8vw, 96px)",
          lineHeight: 0.9,
          letterSpacing: "-0.08em",
          margin: "16px 0 40px"
        }}>
          Questions & Answers
        </h1>

        <div style={{ display: "grid", gap: 16 }}>
          {faqs.map((faq) => (
            <div key={faq.q} style={{
              padding: 28,
              borderRadius: 26,
              background: "rgba(255,255,255,.07)",
              border: "1px solid rgba(255,255,255,.1)",
              boxShadow: "0 20px 60px rgba(0,0,0,.25)"
            }}>
              <h2 style={{
                margin: "0 0 12px",
                fontSize: 24,
                letterSpacing: "-0.04em"
              }}>
                {faq.q}
              </h2>

              <p style={{
                margin: 0,
                color: "rgba(255,255,255,.62)",
                lineHeight: 1.65
              }}>
                {faq.a}
              </p>
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
          Ask More in Discord
        </a>
      </section>
    </main>
  );
}
