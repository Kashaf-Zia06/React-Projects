import { NavLink } from 'react-router-dom'

export default function Navbar() {
  // active link gets white pill style, inactive stays ghost
  const linkClass = ({ isActive }) =>
    `px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
      isActive
        ? 'bg-white text-rose-600 shadow-md'
        : 'text-white/90 hover:bg-white/20 hover:text-white'
    }`

  return (
    <nav className="bg-gradient-to-r from-rose-500 via-pink-500 to-orange-400 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-white text-xl font-bold tracking-wide drop-shadow">UniPortal</span>
        <div className="flex gap-2">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/students" className={linkClass}>Students</NavLink>
        </div>
      </div>
    </nav>
  )
}
