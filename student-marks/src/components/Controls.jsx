import React from 'react';

function Controls({ subject, setSubject, handleSortToggle, sortAsc }) {
  return (
    <div className="controls">
      <label>
        Filter by subject:
        <select value={subject} onChange={(e) => setSubject(e.target.value)}>
          <option value="">All</option>
          <option value="math">Math ≥ 50</option>
          <option value="science">Science ≥ 50</option>
          <option value="english">English ≥ 50</option>
        </select>
      </label>

      <button onClick={handleSortToggle}>
        Sort by Total {sortAsc ? "↑ Asc" : "↓ Desc"}
      </button>

      <button onClick={() => setSubject('')}>Clear Filter</button>
    </div>
  );
}

export default Controls;