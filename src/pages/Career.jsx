import { useState } from "react";
import JobForm from "../components/career/JobForm";
import JobTable from "../components/career/JobTable";

export default function Career() {
  const [jobs, setJobs] = useState([]);

  function addJob(job) {
    setJobs((prev) => [...prev, job]);
  }

  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>
        💼 Career Tracker
      </h1>

      <JobForm onAdd={addJob} />

      <div style={{ marginTop: "30px" }}>
        <JobTable jobs={jobs} />
      </div>
    </div>
  );
}