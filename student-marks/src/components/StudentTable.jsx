import React from 'react';

// Highlight top scorer
function StudentTable({ students }) {
  if (students.length === 0) return <p>No students to display</p>;

  const maxTotal = Math.max(...students.map(s => s.total));

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Roll</th>
          <th>Name</th>
          <th>Math</th>
          <th>Science</th>
          <th>English</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s) => (
          <tr key={s.roll} style={{ backgroundColor: s.total === maxTotal ? "#ffe066" : "transparent" }}>
            <td>{s.roll}</td>
            <td>{s.name}</td>
            <td>{s.math}</td>
            <td>{s.science}</td>
            <td>{s.english}</td>
            <td>{s.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;