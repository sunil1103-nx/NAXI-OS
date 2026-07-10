import StatCard from "../components/ui/StatCard";
import Header from "../components/Header";
import QuickAction from "../components/ui/QuickAction";

export default function Dashboard() {
  return (
    
    <>
    
      <h1 style={{ marginBottom: "30px" }}>
        📊 Dashboard
      </h1>

      <div
       style={{
    display:"grid",
    gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
    gap:"20px"
}}
      >
        <StatCard
          title="Career Score"
          value="82"
          color="#3B82F6"
        />

        <StatCard
          title="XP"
          value="1340"
          color="#22C55E"
        />

        <StatCard
          title="Level"
          value="12"
          color="#F59E0B"
        />
      </div>

      <div
        style={{
          marginTop: "40px",
          background: "#1e293b",
          padding: "20px",
          borderRadius: "16px",
        }}
      >
        <h2>Today's Mission</h2>

        <ul>
          <li>Apply to 5 Jobs</li>
          <li>Practice React for 1 Hour</li>
          <li>Complete Excel Revision</li>
          <li>Workout</li>
        </ul>
        <>
  <Header />

  

  {/* Stat Cards */}

  {/* Today's Mission */}
  <div
    style={{
      marginTop: "40px",
      background: "#1e293b",
      padding: "20px",
      borderRadius: "16px",
    }}
  >
    <h2>Today's Mission</h2>

    <ul>
      <li>Apply to 5 Jobs</li>
      <li>Practice React for 1 Hour</li>
      <li>Complete Excel Revision</li>
      <li>Workout</li>
    </ul>
  </div>

  <h2>Quick Actions</h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: "20px",
    }}
  >
    <QuickAction title="➕ Add New Job Application" />
    <QuickAction title="📄 Open Resume Vault" />
    <QuickAction title="📚 Continue Learning" />
    <QuickAction title="💰 Finance Overview" />
  </div>
</>
      </div>
    </>
  );
  
}
