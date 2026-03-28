import { useState } from 'react'

export default function AddStudentForm({ addStudent }) {
  const EMPTY = { name: '', major: '', year: 1, gpa: '', email: '' }
  const [form, setForm] = useState(EMPTY)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.major.trim() || !form.email.trim()) {
      setError('Name, major, and email are required.')
      return
    }
    if (isNaN(form.gpa) || form.gpa < 0 || form.gpa > 4) {
      setError('GPA must be between 0 and 4.')
      return
    }
    setError('')
    addStudent({ ...form, gpa: parseFloat(form.gpa), year: parseInt(form.year) })
    setForm(EMPTY)
  }

  return (
    <div className="bg-white/60 backdrop-blur-md border border-rose-100 rounded-3xl shadow-lg p-7 mb-8">
      <h2 className="text-lg font-bold text-gray-700 mb-6">Add New Student</h2>

      {error && (
        <div className="mb-5 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Field label="Full Name" name="name"  value={form.name}  onChange={handleChange} placeholder="e.g. Sara Ahmed" />
          <Field label="Major"     name="major" value={form.major} onChange={handleChange} placeholder="e.g. Chemistry" />
          <Field label="Email"     name="email" type="email" value={form.email} onChange={handleChange} placeholder="student@uni.edu" />
          <Field label="GPA (0–4)" name="gpa"   type="number" value={form.gpa} onChange={handleChange} placeholder="3.7" step="0.1" min="0" max="4" />

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Year</label>
            <select
              name="year"
              value={form.year}
              onChange={handleChange}
              className="border border-rose-200 bg-white/80 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 transition"
            >
              {[1, 2, 3, 4].map((y) => <option key={y} value={y}>Year {y}</option>)}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 px-7 py-2.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl text-sm font-bold shadow-md hover:shadow-rose-300 hover:scale-105 transition-all duration-200"
        >
          Add Student
        </button>
      </form>
    </div>
  )
}

function Field({ label, name, value, onChange, type = 'text', ...rest }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="border border-rose-200 bg-white/80 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 transition"
        {...rest}
      />
    </div>
  )
}
