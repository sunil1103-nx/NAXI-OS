import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      style={{
        width: "240px",
        background: "#111827",
        color: "white",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <h2>🦅 NAXI OS</h2>

      <NavLink to="/dashboard">🏠 Dashboard</NavLink>
      <NavLink to="/career">💼 Career</NavLink>
      <NavLink to="/finance">💰 Finance</NavLink>
      <NavLink to="/skills">📚 Skills</NavLink>
      <NavLink to="/journal">📖 Journal</NavLink>
      <NavLink to="/settings">⚙️ Settings</NavLink>
    </div>
  );
}