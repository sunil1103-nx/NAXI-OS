import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>🦅 NAXI OS</h1>

      <h2 style={{ color: "#60A5FA" }}>
        Build your career like a system.
      </h2>

      <p>WHO ARE YOU BECOMING TODAY?</p>

      <button onClick={() => navigate("/dashboard")}>
        ENTER
      </button>
    </div>
  );
}