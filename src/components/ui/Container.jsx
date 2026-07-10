export default function Container({ children }) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "24px",
      }}
    >
      {children}
    </div>
  );
}