import { useState } from 'react'
import ProfileTab from './tabs/ProfileTab'
import SettingsTab from './tabs/SettingsTab'
import OrdersTab from './tabs/OrdersTab'

// sidebar nav items with their icons
const TABS = [
  {
    id: 'profile', label: 'Profile',
    icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>,
  },
  {
    id: 'orders', label: 'Orders',
    icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" /><rect x="9" y="3" width="6" height="4" rx="1" /><path d="M9 12h6M9 16h4" /></svg>,
  },
  {
    id: 'settings', label: 'Settings',
    icon: <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>,
  },
]

// short description shown under the page title
const DESCRIPTIONS = {
  profile: 'Manage your personal information',
  orders: 'Track and manage your purchases',
  settings: 'Configure your preferences',
}

export default function App() {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <div className="page" style={{ minHeight: '100vh', display: 'flex' }}>

      <aside className="sidebar">
        {/* logo + app name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48 }}>
          <div className="logo-gem">N</div>
          <div>
            <div className="chrome" style={{ fontWeight: 800, fontSize: 15, letterSpacing: '0.12em', textTransform: 'uppercase', lineHeight: 1 }}>
              NexHub
            </div>
            <div style={{ fontSize: 9, color: '#252540', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 4 }}>
              Dashboard v2
            </div>
          </div>
        </div>

        <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1e1e34', marginBottom: 10, paddingLeft: 14 }}>
          Menu
        </div>

        {/* nav buttons */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
            >
              <span style={{ opacity: activeTab === tab.id ? 1 : 0.5 }}>{tab.icon}</span>
              {tab.label}
              {activeTab === tab.id && <span className="nav-dot" />}
            </button>
          ))}
        </nav>

        {/* user info at the bottom */}
        <div className="inner-card" style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12, marginTop: 24 }}>
          <div className="avatar-shell">
            <div className="avatar-inner" style={{ width: 34, height: 34, fontSize: 11 }}>
              <span className="chrome-sm">AK</span>
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#c0c0d8', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Ayesha Khan</div>
            <div style={{ fontSize: 10, color: '#303050', marginTop: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>ayesha@example.com</div>
          </div>
          {/* green dot = online */}
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#34d399', flexShrink: 0 }} className="glow-green" />
        </div>
      </aside>

      <main className="main-area" style={{ flex: 1 }}>
        {/* page header */}
        <div className="topbar">
          <div>
            <h1 className="chrome" style={{ fontSize: 28, fontWeight: 800, lineHeight: 1, textTransform: 'capitalize' }}>
              {activeTab}
            </h1>
            <p style={{ fontSize: 13, color: '#303050', marginTop: 8, letterSpacing: '0.01em' }}>
              {DESCRIPTIONS[activeTab]}
            </p>
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <button className="btn-secondary">Help</button>
            <button className="btn-primary">+ New Order</button>
          </div>
        </div>

        {/* render whichever tab is active */}
        <div className="content-panel">
          {activeTab === 'profile'  && <ProfileTab />}
          {activeTab === 'orders'   && <OrdersTab />}
          {activeTab === 'settings' && <SettingsTab />}
        </div>
      </main>
    </div>
  )
}
