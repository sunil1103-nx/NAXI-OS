import Sidebar from "../components/Sidebar";
import Container from "../components/ui/Container";

export default function MainLayout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
      }}
    >
      <Sidebar />

      <main
        style={{
          flex: 1,
          overflowY: "auto",
        }}
      >
        <Container>{children}</Container>
      </main>
    </div>
  );
}