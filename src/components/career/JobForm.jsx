import { useState } from "react";

export default function JobForm({ onAdd }) {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("Applied");

  function handleSubmit(e) {
    e.preventDefault();

    if (!company.trim() || !position.trim()) {
      alert("Company and Position are required.");
      return;
    }

    onAdd({
      id: crypto.randomUUID(),
      company,
      position,
      status,
      appliedDate: new Date().toLocaleDateString(),
    });

    setCompany("");
    setPosition("");
    setStatus("Applied");
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "grid",
        gap: "15px",
        maxWidth: "500px",
      }}
    >
      <input
        placeholder="Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <input
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>

      <button type="submit">
        + Add Job
      </button>
    </form>
  );
}