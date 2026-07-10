export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px",
      }}
    >
      <div>
        <h1 style={{ margin: 0 }}>Welcome, Founder 👋</h1>
        <p style={{ color: "#94a3b8" }}>
          Let's build your future today.
        </p>
      </div>

      <div
        style={{
          background: "#1e293b",
          padding: "10px 18px",
          borderRadius: "10px",
        }}
      >
        🔥 Streak: 16 Days
      </div>
    </div>
  );
}