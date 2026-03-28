import { useParams, useNavigate } from 'react-router-dom'
import ProfileCard from '../components/ProfileCard'

export default function Profile({ students }) {
  const { id } = useParams()
  const navigate = useNavigate()

  // find student by url param
  const student = students.find((s) => s.id === Number(id))

  if (!student) {
    return (
      <div className="text-center py-24">
        <p className="text-gray-400 text-lg mb-6">Student not found.</p>
        <button
          onClick={() => navigate('/students')}
          className="px-6 py-2.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl text-sm font-bold shadow hover:scale-105 transition-all"
        >
          Back to Students
        </button>
      </div>
    )
  }

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="mb-8 flex items-center gap-2 text-rose-500 hover:text-rose-700 text-sm font-semibold transition-colors group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span> Back
      </button>

      <div className="mb-7">
        <p className="text-xs font-semibold uppercase tracking-widest text-rose-400 mb-1">Details</p>
        <h1 className="text-3xl font-extrabold text-gray-800">Student Profile</h1>
      </div>

      <ProfileCard student={student} />
    </div>
  )
}
