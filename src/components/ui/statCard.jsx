export default function StatCard({ title, value, color }) {
  return (
    <div
      style={{
        background: "#1e293b",
        borderRadius: "16px",
        padding: "20px",
        borderLeft: `5px solid ${color}`,
      }}
    >
      <p style={{ color: "#94a3b8", margin: 0 }}>{title}</p>

      <h1 style={{ marginTop: "10px" }}>{value}</h1>
    </div>
  );
}