export default function ProfileCard({ student }) {
  const { name, major, year, gpa, email, avatar } = student

  return (
    <div className="max-w-md mx-auto">
      <div className="rounded-3xl bg-gradient-to-br from-rose-400 via-pink-500 to-orange-400 p-1 shadow-2xl shadow-rose-200">
        <div className="bg-white rounded-[22px] overflow-hidden">

          <div className="bg-gradient-to-br from-rose-400 via-pink-500 to-orange-400 px-8 pt-10 pb-14 flex flex-col items-center gap-2 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl" />
            <div className="w-24 h-24 rounded-2xl bg-white text-rose-500 flex items-center justify-center text-3xl font-extrabold shadow-xl z-10">
              {avatar}
            </div>
            <h2 className="text-white text-2xl font-extrabold z-10 drop-shadow">{name}</h2>
            <span className="bg-white/20 backdrop-blur text-white text-xs font-semibold px-4 py-1 rounded-full z-10">
              {major}
            </span>
          </div>

          {/* mini stats strip */}
          <div className="grid grid-cols-3 -mt-6 mx-6 bg-white rounded-2xl shadow-lg border border-rose-100 divide-x divide-rose-100 z-20 relative">
            <MiniStat label="Year" value={`Y${year}`} />
            <MiniStat label="GPA" value={gpa} highlight={gpa >= 3.5} />
            <MiniStat label="Status" value="Active" />
          </div>

          <div className="px-8 py-6 space-y-3">
            <DetailRow label="Email" value={email} />
            <DetailRow label="Major" value={major} />
            <DetailRow label="Year"  value={`Year ${year} Student`} />
          </div>
        </div>
      </div>
    </div>
  )
}

function MiniStat({ label, value, highlight }) {
  return (
    <div className="flex flex-col items-center py-3 px-2">
      <span className={`text-lg font-extrabold ${highlight ? 'text-green-500' : 'text-rose-500'}`}>{value}</span>
      <span className="text-xs text-gray-400 mt-0.5">{label}</span>
    </div>
  )
}

function DetailRow({ label, value }) {
  return (
    <div className="bg-rose-50/60 rounded-xl px-4 py-3">
      <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">{label}</p>
      <p className="text-sm text-gray-700 font-medium">{value}</p>
    </div>
  )
}
