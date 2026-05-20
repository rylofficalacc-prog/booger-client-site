const products = [
  {
    name: "Supporter Rank",
    price: "Coming Soon",
    desc: "Support the project and get a clean supporter badge when accounts are added.",
    tag: "Rank"
  },
  {
    name: "Founder Pack",
    price: "Coming Soon",
    desc: "Limited early supporter pack for people who helped before public release.",
    tag: "Limited"
  },
  {
    name: "Capes",
    price: "Coming Soon",
    desc: "Custom cape cosmetics for your Booger Client profile.",
    tag: "Cosmetic"
  },
  {
    name: "Name Colors",
    price: "Coming Soon",
    desc: "Unlock custom name colors for your future profile and launcher account.",
    tag: "Cosmetic"
  },
  {
    name: "Badges",
    price: "Coming Soon",
    desc: "Show badges like Beta Tester, Supporter, Founder, and Staff.",
    tag: "Profile"
  },
  {
    name: "Beta Access",
    price: "Coming Soon",
    desc: "Access private testing when beta opens for trusted community members.",
    tag: "Beta"
  }
];

export default function ShopPage() {
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
          SHOP
        </p>

        <h1 style={{
          fontSize: "clamp(48px, 8vw, 96px)",
          lineHeight: 0.9,
          letterSpacing: "-0.08em",
          margin: "16px 0"
        }}>
          Cosmetics & Supporter Perks
        </h1>

        <p style={{
          maxWidth: 720,
          color: "rgba(255,255,255,.65)",
          fontSize: 18,
          lineHeight: 1.7,
          marginBottom: 44
        }}>
          The Booger Client shop is not open yet. Later, this page can include supporter ranks,
          capes, badges, name colors, beta access, and other cosmetic perks.
        </p>

        <div style={{
          padding: 24,
          borderRadius: 26,
          background: "rgba(101,255,152,.09)",
          border: "1px solid rgba(101,255,152,.22)",
          marginBottom: 28
        }}>
          <strong style={{ color: "#65ff98", fontSize: 20 }}>
            Shop Status: Locked
          </strong>
          <p style={{
            margin: "10px 0 0",
            color: "rgba(255,255,255,.68)",
            lineHeight: 1.6
          }}>
            Purchases are disabled until the client is closer to release. Join the Discord for updates,
            beta information, and supporter announcements.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 18
        }}>
          {products.map((item) => (
            <div key={item.name} style={{
              padding: 28,
              borderRadius: 26,
              background: "rgba(255,255,255,.07)",
              border: "1px solid rgba(255,255,255,.1)",
              boxShadow: "0 20px 60px rgba(0,0,0,.25)"
            }}>
              <div style={{
                width: 52,
                height: 52,
                borderRadius: 18,
                background: "linear-gradient(135deg, #72ff9e, #14bd5d)",
                color: "#031006",
                display: "grid",
                placeItems: "center",
                fontWeight: 1000,
                marginBottom: 20
              }}>
                ◆
              </div>

              <span style={{
                display: "inline-block",
                padding: "7px 10px",
                borderRadius: 999,
                background: "rgba(101,255,152,.12)",
                border: "1px solid rgba(101,255,152,.2)",
                color: "#baffcf",
                fontSize: 12,
                fontWeight: 900,
                marginBottom: 14
              }}>
                {item.tag}
              </span>

              <h2 style={{
                margin: "0 0 10px",
                fontSize: 26,
                letterSpacing: "-0.04em"
              }}>
                {item.name}
              </h2>

              <strong style={{
                display: "block",
                color: "#65ff98",
                marginBottom: 12
              }}>
                {item.price}
              </strong>

              <p style={{
                margin: 0,
                color: "rgba(255,255,255,.62)",
                lineHeight: 1.65
              }}>
                {item.desc}
              </p>

              <button disabled style={{
                marginTop: 22,
                width: "100%",
                padding: "14px 18px",
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,.12)",
                background: "rgba(255,255,255,.08)",
                color: "rgba(255,255,255,.55)",
                fontWeight: 900,
                cursor: "not-allowed"
              }}>
                Locked
              </button>
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
          Join Discord for Shop Updates
        </a>
      </section>
    </main>
  );
}
