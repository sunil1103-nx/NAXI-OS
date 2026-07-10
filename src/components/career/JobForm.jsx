import { useEffect, useState } from "react";

export default function JobForm({
  onAdd,
  editingJob,
}) {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("Applied");

  useEffect(() => {
    if (editingJob) {
      setCompany(editingJob.company);
      setPosition(editingJob.position);
      setStatus(editingJob.status);
    }
  }, [editingJob]);

  const inputStyle = {
    background: "#1e293b",
    border: "1px solid #334155",
    color: "white",
    padding: "12px",
    borderRadius: "8px",
    fontSize: "16px",
    outline: "none",
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (!company || !position) return;

    onAdd({
      id: editingJob
        ? editingJob.id
        : crypto.randomUUID(),
      company,
      position,
      status,
      appliedDate: editingJob
        ? editingJob.appliedDate
        : new Date().toLocaleDateString(),
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
      }}
    >
      <input
        style={inputStyle}
        placeholder="Company"
        value={company}
        onChange={(e) =>
          setCompany(e.target.value)
        }
      />

      <input
        style={inputStyle}
        placeholder="Position"
        value={position}
        onChange={(e) =>
          setPosition(e.target.value)
        }
      />

      <select
        style={inputStyle}
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
      >
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>

      <button
        type="submit"
        style={{
          background: "#2563eb",
          color: "white",
          border: "none",
          padding: "12px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        {editingJob ? "Update Job" : "+ Add Job"}
      </button>
    </form>
  );
}