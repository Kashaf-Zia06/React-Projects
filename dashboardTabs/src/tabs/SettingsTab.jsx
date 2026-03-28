import { useState } from 'react'

// small toggle switch component
function Toggle({ on, onToggle, label }) {
  return (
    <button
      role="switch"
      aria-checked={on}
      aria-label={label}
      onClick={onToggle}
      className={`toggle-wrap ${on ? 'toggle-on' : 'toggle-off'}`}
    >
      <span className={`toggle-thumb ${on ? 'toggle-thumb-on' : 'toggle-thumb-off'}`} />
    </button>
  )
}

// one row inside a settings group
function SettingRow({ label, desc, on, onToggle, last }) {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 0' }}>
        <div style={{ flex: 1, paddingRight: 24 }}>
          <div style={{ fontSize: 13, fontWeight: 500, color: '#b0b0cc' }}>{label}</div>
          <div style={{ fontSize: 11, color: '#282840', marginTop: 4 }}>{desc}</div>
        </div>
        <Toggle on={on} onToggle={onToggle} label={label} />
      </div>
      {!last && <div className="divider" />}
    </>
  )
}

const GROUPS = [
  {
    title: 'Notifications', icon: '🔔',
    items: [
      { key: 'pushNotif',   label: 'Push Notifications', desc: 'Real-time alerts for orders and activity' },
      { key: 'emailDigest', label: 'Email Digest',        desc: 'Weekly summary sent to your inbox' },
      { key: 'smsAlerts',   label: 'SMS Alerts',          desc: 'Text messages for critical updates' },
    ],
  },
  {
    title: 'Security', icon: '🔐',
    items: [
      { key: 'twoFactor',   label: 'Two-Factor Auth', desc: 'Require a code on every login' },
      { key: 'loginAlerts', label: 'Login Alerts',    desc: 'Notify me of new sign-ins' },
    ],
  },
  {
    title: 'Preferences', icon: '🎛️',
    items: [
      { key: 'darkMode',     label: 'Dark Mode',     desc: 'Use dark theme across the app' },
      { key: 'autoSave',     label: 'Auto Save',     desc: 'Automatically save form changes' },
      { key: 'analytics',    label: 'Analytics',     desc: 'Share anonymous usage data' },
      { key: 'betaFeatures', label: 'Beta Features', desc: 'Access experimental features early' },
    ],
  },
]

// theme orbs — radial gradient stops for each color
const THEMES = [
  { id: 'silver',  label: 'Silver',  stops: ['#ffffff', '#a0a0a0', '#505050'] },
  { id: 'gold',    label: 'Gold',    stops: ['#ffe566', '#c8960c', '#6a4800'] },
  { id: 'rose',    label: 'Rose',    stops: ['#ffb3c6', '#e05080', '#6a1030'] },
  { id: 'cobalt',  label: 'Cobalt',  stops: ['#80b0ff', '#3060d0', '#102060'] },
  { id: 'emerald', label: 'Emerald', stops: ['#6ee7b7', '#10b981', '#065f46'] },
]

export default function SettingsTab() {
  const [settings, setSettings] = useState({
    pushNotif: true, emailDigest: false, smsAlerts: false,
    twoFactor: true, loginAlerts: true,
    darkMode: true, autoSave: true, analytics: false, betaFeatures: false,
  })
  const [theme, setTheme] = useState('silver')
  const [saved, setSaved] = useState(false)

  const toggle = key => setSettings(s => ({ ...s, [key]: !s[key] }))

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  return (
    <div>

      {/* header with save button */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 36 }}>
        <div>
          <div className="chrome" style={{ fontSize: 20, fontWeight: 800 }}>Preferences</div>
          <div style={{ fontSize: 12, color: '#282840', marginTop: 6 }}>Customize your NexHub experience</div>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          {saved && <span className="save-toast">✓ Saved</span>}
          <button className="btn-primary" onClick={handleSave}>Save Settings</button>
        </div>
      </div>

      {/* theme color picker */}
      <div className="inner-card" style={{ padding: 28, marginBottom: 28 }}>
        <div className="section-heading">Accent Theme</div>
        <div style={{ display: 'flex', gap: 28, alignItems: 'flex-end' }}>
          {THEMES.map(t => (
            <button key={t.id} onClick={() => setTheme(t.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <div
                className={`theme-orb ${theme === t.id ? 'selected' : ''}`}
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${t.stops[0]}, ${t.stops[1]}, ${t.stops[2]})`,
                  boxShadow: theme === t.id
                    ? `0 0 0 2px rgba(255,255,255,0.12), 0 0 24px ${t.stops[1]}55, 0 6px 16px rgba(0,0,0,0.5)`
                    : '0 4px 12px rgba(0,0,0,0.5)',
                  opacity: theme === t.id ? 1 : 0.45,
                }}
              />
              <span style={{ fontSize: 10, letterSpacing: '0.08em', color: theme === t.id ? '#8080a0' : '#202038', textTransform: 'uppercase', fontWeight: 600 }}>
                {t.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* grouped settings cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {GROUPS.map(group => (
          <div key={group.title} className="inner-card" style={{ padding: '8px 28px' }}>
            <div style={{ paddingTop: 20, paddingBottom: 4 }}>
              <div className="section-heading">
                <span>{group.icon}</span> {group.title}
              </div>
            </div>
            {group.items.map((item, i) => (
              <SettingRow
                key={item.key}
                label={item.label}
                desc={item.desc}
                on={settings[item.key]}
                onToggle={() => toggle(item.key)}
                last={i === group.items.length - 1}
              />
            ))}
            <div style={{ paddingBottom: 8 }} />
          </div>
        ))}
      </div>

      {/* danger zone — destructive actions */}
      <div className="danger-card" style={{ marginTop: 28 }}>
        <div className="section-heading" style={{ color: '#4a1a1a' }}>
          <span>⚠️</span> Danger Zone
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {[
            { label: 'Delete Account', color: '#f87171', bg: 'rgba(248,113,113,0.07)', border: 'rgba(248,113,113,0.15)' },
            { label: 'Reset All Data', color: '#fbbf24', bg: 'rgba(251,191,36,0.07)',  border: 'rgba(251,191,36,0.15)' },
            { label: 'Export Data',    bg: 'rgba(255,255,255,0.03)', border: 'rgba(255,255,255,0.08)', textColor: '#505070' },
          ].map(b => (
            <button key={b.label} style={{
              padding: '10px 20px',
              borderRadius: 12,
              fontSize: 12,
              fontWeight: 600,
              cursor: 'pointer',
              border: `1px solid ${b.border}`,
              background: b.bg,
              color: b.textColor || b.color,
              transition: 'all 0.18s ease',
              letterSpacing: '0.03em',
            }}>
              {b.label}
            </button>
          ))}
        </div>
      </div>

    </div>
  )
}
