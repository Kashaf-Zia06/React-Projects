import AddStudentForm from '../components/AddStudentForm'
import StudentTable from '../components/StudentTable'

export default function Students({ students, addStudent, removeStudent }) {
  return (
    <div>
      <div className="mb-7">
        <p className="text-xs font-semibold uppercase tracking-widest text-rose-400 mb-1">Manage</p>
        <h1 className="text-3xl font-extrabold text-gray-800">Students</h1>
      </div>
      <AddStudentForm addStudent={addStudent} />
      <StudentTable students={students} removeStudent={removeStudent} />
    </div>
  )
}
