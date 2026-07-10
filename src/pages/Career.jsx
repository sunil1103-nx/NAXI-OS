import { useState } from "react";
import JobForm from "../components/career/JobForm";
import JobTable from "../components/career/JobTable";

export default function Career() {
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);

  function saveJob(job) {
    if (editingJob) {
      setJobs((prev) =>
        prev.map((j) => (j.id === job.id ? job : j))
      );
      setEditingJob(null);
    } else {
      setJobs((prev) => [...prev, job]);
    }
  }

  function deleteJob(id) {
    setJobs((prev) => prev.filter((job) => job.id !== id));
  }

  return (
    <div>
      <h1>💼 Career Tracker</h1>

      <div
        style={{
          background: "#1e293b",
          padding: "24px",
          borderRadius: "16px",
          marginBottom: "30px",
        }}
      >
        <JobForm
          onAdd={saveJob}
          editingJob={editingJob}
        />
      </div>

      <div
        style={{
          background: "#1e293b",
          padding: "24px",
          borderRadius: "16px",
        }}
      >
        <JobTable
          jobs={jobs}
          onEdit={setEditingJob}
          onDelete={deleteJob}
        />
      </div>
    </div>
  );
}