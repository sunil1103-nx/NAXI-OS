export default function QuickAction({ title }) {
  return (
    <button
      style={{
        width: "100%",
        padding: "18px",
        borderRadius: "14px",
        border: "none",
        background: "#1e293b",
        color: "white",
        cursor: "pointer",
        textAlign: "left",
      }}
    >
      {title}
    </button>
  );
}