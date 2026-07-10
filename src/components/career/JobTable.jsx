export default function JobTable({ jobs }) {
  if (jobs.length === 0) {
    return (
      <p>No job applications yet.</p>
    );
  }

  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
      }}
    >
      <thead>
        <tr>
          <th>Company</th>
          <th>Position</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
      </thead>

      <tbody>
        {jobs.map((job) => (
          <tr key={job.id}>
            <td>{job.company}</td>
            <td>{job.position}</td>
            <td>{job.status}</td>
            <td>{job.appliedDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}