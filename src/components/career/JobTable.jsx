import StatusBadge from "./StatusBadge";

export default function JobTable({
  jobs,
  onEdit,
  onDelete,
}) {
  if (jobs.length === 0) {
    return <p>No Jobs Added</p>;
  }

  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
      }}
    >
      <thead
        style={{
          background: "#243145",
        }}
      >
        <tr>
          <th style={th}>Company</th>
          <th style={th}>Position</th>
          <th style={th}>Status</th>
          <th style={th}>Date</th>
          <th style={th}>Actions</th>
        </tr>
      </thead>

      <tbody>
        {jobs.map((job) => (
          <tr
            key={job.id}
            style={{
              borderBottom:
                "1px solid #334155",
            }}
          >
            <td style={td}>{job.company}</td>

            <td style={td}>{job.position}</td>

            <td style={td}>
              <StatusBadge
                status={job.status}
              />
            </td>

            <td style={td}>
              {job.appliedDate}
            </td>

            <td style={td}>
              <button
                onClick={() =>
                  onEdit(job)
                }
              >
                ✏️
              </button>

              <button
                onClick={() =>
                  onDelete(job.id)
                }
              >
                🗑️
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const th = {
  padding: "15px",
  textAlign: "left",
};

const td = {
  padding: "15px",
};