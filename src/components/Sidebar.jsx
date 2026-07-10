import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      style={{
        width: "260px",
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
  <NavLink
  to="/dashboard"
  style={({ isActive }) => ({
    color: isActive ? "#60A5FA" : "white",
    textDecoration: "none",
    padding: "10px",
    borderRadius: "8px",
    background: isActive ? "#1e3a8a" : "transparent",
  })}
>
  
</NavLink>
}