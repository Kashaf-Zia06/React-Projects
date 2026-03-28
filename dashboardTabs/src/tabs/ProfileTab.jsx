import { useState } from 'react'

const STATS = [
  { label: 'Total Orders', value: '24', sub: '+3 this month', color: '#9090c0' },
  { label: 'Reviews',      value: '8',  sub: '2 pending',    color: '#c0a060' },
  { label: 'Points',       value: '1,240', sub: 'Gold tier', color: '#60c090' },
  { label: 'Member Since', value: '2022',  sub: '4 years',   color: '#8080c0' },
]

const FIELDS_LEFT  = ['name', 'email', 'phone']
const FIELDS_RIGHT = ['role', 'location', 'website']

const FIELD_META = {
  name:     { label: 'Full Name',     placeholder: 'Your full name' },
  email:    { label: 'Email Address', placeholder: 'you@example.com' },
  phone:    { label: 'Phone',         placeholder: '+1 (555) 000-0000' },
  role:     { label: 'Job Title',     placeholder: 'e.g. Senior Engineer' },
  location: { label: 'Location',      placeholder: 'City, Country' },
  website:  { label: 'Website',       placeholder: 'yoursite.com' },
}

export default function ProfileTab() {
  const [editing, setEditing] = useState(false)
  const [saved, setSaved]     = useState(false)
  const [form, setForm]       = useState({
    name: 'Ayesha Khan', email: 'ayesha@example.com', phone: '+1 (555) 000-1234',
    role: 'Senior Engineer', location: 'San Francisco, CA', website: 'ayeshakhan.dev',
    bio: 'Building things that matter. Coffee-driven developer with a passion for clean interfaces and fast systems.',
  })

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSave = () => {
    setEditing(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  return (
    <div>

      {/* top banner with avatar and name */}
      <div className="profile-banner">
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'flex-end', gap: 24 }}>
          <div className="avatar-shell">
            <div className="avatar-inner" style={{ width: 80, height: 80, fontSize: 22 }}>
              <span className="chrome">AK</span>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div className="chrome" style={{ fontSize: 24, fontWeight: 800, lineHeight: 1 }}>{form.name}</div>
            <div style={{ color: '#505070', fontSize: 13, marginTop: 6 }}>{form.role}</div>
            <div style={{ display: 'flex', gap: 20, marginTop: 10 }}>
              <span style={{ fontSize: 11, color: '#303050', display: 'flex', alignItems: 'center', gap: 5 }}>
                <svg width="10" height="10" fill="#303050" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                {form.location}
              </span>
              <span style={{ fontSize: 11, color: '#303050', display: 'flex', alignItems: 'center', gap: 5 }}>
                <svg width="10" height="10" fill="none" stroke="#303050" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                {form.website}
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10, alignSelf: 'flex-start' }}>
            {saved && <span className="save-toast">✓ Saved</span>}
            {editing && (
              <button className="btn-secondary" onClick={() => setEditing(false)}>Cancel</button>
            )}
            <button className="btn-primary" onClick={() => editing ? onSave() : setEditing(true)}>
              {editing ? 'Save Changes' : 'Edit Profile'}
            </button>
          </div>
        </div>
      </div>

      {/* quick stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 36 }}>
        {STATS.map(s => (
          <div key={s.label} className="stat-card">
            <div style={{ width: 32, height: 3, borderRadius: 2, background: s.color, marginBottom: 16, opacity: 0.6 }} />
            <div className="chrome" style={{ fontSize: 28, fontWeight: 900, lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: 12, color: '#505070', marginTop: 6 }}>{s.label}</div>
            <div style={{ fontSize: 10, color: '#282840', marginTop: 4 }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* two column form */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 28 }}>
        <div>
          <div className="section-heading">Personal Info</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {FIELDS_LEFT.map(key => (
              <div key={key}>
                <label className="field-label">{FIELD_META[key].label}</label>
                <input
                  name={key}
                  value={form[key]}
                  onChange={onChange}
                  disabled={!editing}
                  placeholder={FIELD_META[key].placeholder}
                  className="field-input"
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="section-heading">Work Info</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {FIELDS_RIGHT.map(key => (
              <div key={key}>
                <label className="field-label">{FIELD_META[key].label}</label>
                <input
                  name={key}
                  value={form[key]}
                  onChange={onChange}
                  disabled={!editing}
                  placeholder={FIELD_META[key].placeholder}
                  className="field-input"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* bio textarea */}
      <div>
        <label className="field-label">Bio</label>
        <textarea
          name="bio"
          value={form.bio}
          onChange={onChange}
          disabled={!editing}
          rows={4}
          className="field-input"
          style={{ resize: 'none' }}
        />
      </div>

    </div>
  )
}
