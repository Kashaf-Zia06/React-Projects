import { useNavigate } from 'react-router-dom'

const avatarColors = [
  'from-rose-400 to-pink-500',
  'from-pink-400 to-orange-400',
  'from-orange-400 to-rose-400',
  'from-fuchsia-400 to-pink-400',
]

export default function StudentTable({ students, removeStudent }) {
  const navigate = useNavigate()

  if (students.length === 0) {
    return (
      <div className="text-center py-16 text-gray-400">
        No students yet. Add one above!
      </div>
    )
  }

  return (
    <div className="bg-white/60 backdrop-blur-md border border-rose-100 rounded-3xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 px-6 py-4">
        <h3 className="text-white font-bold text-base">All Students</h3>
        <p className="text-white/70 text-xs">{students.length} enrolled</p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-rose-50/80 text-rose-500 text-xs uppercase tracking-wider">
              {['', 'Student', 'Major', 'Year', 'GPA', 'Email', 'Actions'].map((h) => (
                <th key={h} className="px-5 py-3 text-left font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-rose-50">
            {students.map((s, i) => (
              <tr key={s.id} className="hover:bg-rose-50/50 transition-colors">
                <td className="px-5 py-3">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white font-bold text-sm shadow-sm`}>
                    {s.avatar}
                  </div>
                </td>
                <td className="px-5 py-3 font-semibold text-gray-800">{s.name}</td>
                <td className="px-5 py-3 text-gray-500">{s.major}</td>
                <td className="px-5 py-3">
                  <span className="px-2.5 py-1 bg-pink-50 text-pink-600 rounded-full text-xs font-semibold border border-pink-200">
                    Year {s.year}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                    s.gpa >= 3.5
                      ? 'bg-green-50 text-green-600 border border-green-200'
                      : 'bg-yellow-50 text-yellow-600 border border-yellow-200'
                  }`}>
                    {s.gpa}
                  </span>
                </td>
                <td className="px-5 py-3 text-gray-400 text-xs">{s.email}</td>
                <td className="px-5 py-3">
                  <div className="flex gap-2">
                    <button
                      onClick={() => navigate(`/profile/${s.id}`)}
                      className="px-3 py-1.5 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-lg text-xs font-semibold hover:scale-105 transition-all"
                    >
                      View
                    </button>
                    <button
                      onClick={() => removeStudent(s.id)}
                      className="px-3 py-1.5 bg-red-50 text-red-500 border border-red-200 rounded-lg text-xs font-semibold hover:bg-red-100 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
