import { useNavigate } from 'react-router-dom'

const avatarColors = [
  'from-rose-400 to-pink-500',
  'from-pink-400 to-orange-400',
  'from-orange-400 to-rose-400',
  'from-fuchsia-400 to-pink-400',
]

export default function Home({ students }) {
  const navigate = useNavigate()

  const avgGpa = students.length
    ? (students.reduce((sum, s) => sum + s.gpa, 0) / students.length).toFixed(2)
    : '—'

  return (
    <div>
      {/* hero */}
      <div className="rounded-3xl bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 p-8 mb-8 shadow-xl text-white relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-white/10 rounded-full blur-2xl" />
        <p className="text-sm font-semibold uppercase tracking-widest text-white/70 mb-1">Dashboard</p>
        <h1 className="text-4xl font-extrabold mb-2 drop-shadow">Welcome Back</h1>
        <p className="text-white/80 text-base">Manage your university students all in one place.</p>
      </div>

      {/* stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
        <StatCard label="Total Students" value={students.length} from="from-rose-400" to="to-pink-500" />
        <StatCard label="Average GPA"    value={avgGpa}          from="from-pink-400" to="to-orange-400" />
        <StatCard label="Departments"    value={new Set(students.map(s => s.major)).size} from="from-orange-400" to="to-rose-400" />
      </div>

      <h2 className="text-xl font-bold text-rose-700 mb-5">Student Profiles</h2>

      {students.length === 0 ? (
        <p className="text-gray-400 text-center py-10">No students yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {students.map((s, i) => (
            <div
              key={s.id}
              onClick={() => navigate(`/profile/${s.id}`)}
              className="bg-white/70 backdrop-blur-sm border border-rose-100 rounded-2xl p-5 flex flex-col items-center gap-3 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform`}>
                {s.avatar}
              </div>
              <div className="text-center">
                <p className="font-bold text-gray-800">{s.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{s.major}</p>
                <span className="inline-block mt-2 px-3 py-0.5 bg-rose-50 text-rose-600 text-xs font-semibold rounded-full border border-rose-200">
                  Year {s.year} · GPA {s.gpa}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function StatCard({ label, value, from, to }) {
  return (
    <div className={`rounded-2xl bg-gradient-to-br ${from} ${to} p-6 text-white shadow-lg relative overflow-hidden`}>
      <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full blur-xl" />
      <p className="text-4xl font-extrabold">{value}</p>
      <p className="text-sm text-white/80 mt-1">{label}</p>
    </div>
  )
}
