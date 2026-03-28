import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Students from './pages/Students'
import Profile from './pages/Profile'

const INITIAL_STUDENTS = [
  { id: 1, name: 'Ali Khan',     major: 'Computer Science', year: 3, gpa: 3.8, email: 'ali@uni.edu',    avatar: 'AK' },
  { id: 2, name: 'Rutaba Malik', major: 'Mathematics',      year: 2, gpa: 3.5, email: 'rutaba@uni.edu', avatar: 'RM' },
  { id: 3, name: 'Ayesha Noor',  major: 'Physics',          year: 4, gpa: 3.9, email: 'ayesha@uni.edu', avatar: 'AN' },
  { id: 4, name: 'Alina Raza',   major: 'Biology',          year: 1, gpa: 3.7, email: 'alina@uni.edu',  avatar: 'AR' },
]

export default function App() {
  // shared state lifted here so all pages can access it
  const [students, setStudents] = useState(INITIAL_STUDENTS)

  const addStudent = (student) => {
    setStudents((prev) => [
      ...prev,
      { ...student, id: Date.now(), avatar: student.name.split(' ').map(n => n[0]).join('').toUpperCase() },
    ])
  }

  const removeStudent = (id) => setStudents((prev) => prev.filter((s) => s.id !== id))

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 py-10">
          <Routes>
            <Route path="/" element={<Home students={students} />} />
            <Route path="/students" element={<Students students={students} addStudent={addStudent} removeStudent={removeStudent} />} />
            <Route path="/profile/:id" element={<Profile students={students} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
