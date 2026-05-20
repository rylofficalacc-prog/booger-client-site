const staff = [
  {
    name: "Snot2",
    role: "Founder",
    desc: "Project owner and main leader for Booger Client."
  },
  {
    name: "TRM",
    role: "Co-Founder",
    desc: "Helps lead the project, planning, and community direction."
  },
  {
    name: "descendant_of_time",
    role: "Executive",
    desc: "Helps manage higher-level project decisions and staff coordination."
  },
  {
    name: "Vueril",
    role: "Executive",
    desc: "Supports staff organization, planning, and community management."
  },
  {
    name: "MES",
    role: "Internal Affairs Supervisor",
    desc: "Helps with staff structure, moderation, and internal organization."
  }
];

export default function StaffPage() {
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
          STAFF
        </p>

        <h1 style={{
          fontSize: "clamp(48px, 8vw, 96px)",
          lineHeight: 0.9,
          letterSpacing: "-0.08em",
          margin: "16px 0"
        }}>
          Meet the Team
        </h1>

        <p style={{
          maxWidth: 720,
          color: "rgba(255,255,255,.65)",
          fontSize: 18,
          lineHeight: 1.7,
          marginBottom: 44
        }}>
          Booger Client is being built and managed by a small team. Development is slower
          because we are currently understaffed, but the project is still moving forward.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 18
        }}>
          {staff.map((member) => (
            <div key={member.name} style={{
              padding: 28,
              borderRadius: 26,
              background: "rgba(255,255,255,.07)",
              border: "1px solid rgba(255,255,255,.1)",
              boxShadow: "0 20px 60px rgba(0,0,0,.25)"
            }}>
              <div style={{
                width: 58,
                height: 58,
                borderRadius: 20,
                background: "linear-gradient(135deg, #72ff9e, #14bd5d)",
                color: "#031006",
                display: "grid",
                placeItems: "center",
                fontWeight: 1000,
                fontSize: 24,
                marginBottom: 20
              }}>
                {member.name[0]}
              </div>

              <h2 style={{
                margin: "0 0 8px",
                fontSize: 28,
                letterSpacing: "-0.04em"
              }}>
                {member.name}
              </h2>

              <strong style={{
                display: "block",
                color: "#65ff98",
                marginBottom: 12
              }}>
                {member.role}
              </strong>

              <p style={{
                margin: 0,
                color: "rgba(255,255,255,.62)",
                lineHeight: 1.65
              }}>
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
