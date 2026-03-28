import React, { useState } from 'react';
import StudentTable from './components/StudentTable';
import Controls from './components/Controls';
import './index.css';

function App() {
  const initialStudents = [
    { roll: 1, name: "Ali", math: 80, science: 75, english: 70 },
    { roll: 2, name: "Sara", math: 65, science: 85, english: 90 },
    { roll: 3, name: "Ahmed", math: 40, science: 50, english: 60 },
    { roll: 4, name: "Zara", math: 90, science: 95, english: 100 },
  ];

  const [students, setStudents] = useState(initialStudents);
  const [subject, setSubject] = useState('');
  const [sortAsc, setSortAsc] = useState(false); // toggle sort
  

  // Compute total marks dynamically
  const studentsWithTotal = students.map(s => ({
    ...s,
    total: s.math + s.science + s.english
  }));

  // Filter students based on selected subject
  const filteredStudents = studentsWithTotal.filter((s) => {
    if (subject === "math") return s.math >= 50;
    if (subject === "science") return s.science >= 50;
    if (subject === "english") return s.english >= 50;
    return true;
  });

  // Sort by total marks
  const sortedStudents = filteredStudents.sort((a, b) => 
    sortAsc ? a.total - b.total : b.total - a.total
  );

  // Handle sort toggle
  const handleSortToggle = () => setSortAsc(!sortAsc);

  return (
    <div className="app">
      <h1>Student Marks Table</h1>
      <Controls subject={subject} setSubject={setSubject} handleSortToggle={handleSortToggle} sortAsc={sortAsc} />
      <StudentTable students={sortedStudents} />
    </div>
  );
}

export default App;