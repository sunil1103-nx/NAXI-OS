export default function StatusBadge({ status }) {
  const colors = {
    Applied: "#2563EB",
    Interview: "#F59E0B",
    Offer: "#22C55E",
    Rejected: "#EF4444",
  };

  return (
    <span
      style={{
        background: colors[status],
        color: "white",
        padding: "6px 12px",
        borderRadius: "20px",
        fontSize: "13px",
        fontWeight: "600",
      }}
    >
      {status}
    </span>
  );
}