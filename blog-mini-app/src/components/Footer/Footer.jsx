import { Link } from 'react-router-dom'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      background: 'var(--bg-2)',
      padding: '2rem',
      marginTop: '4rem',
    }}>
      <div style={{
        maxWidth: 'var(--max-width)',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>

        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: 'var(--accent)', display: 'inline-block',
          }} />
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', color: 'var(--text)' }}>
            The React Blog
          </span>
        </div>

        {/* Links */}
        <nav style={{ display: 'flex', gap: '1.25rem' }}>
          {[['/', 'Home'], ['/about', 'About']].map(([to, label]) => (
            <Link key={to} to={to} style={{
              fontSize: '13px', color: 'var(--text-3)',
              transition: 'color .15s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--text-2)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-3)'}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-3)' }}>
          © {year} — React Lab Project 11
        </span>

      </div>
    </footer>
  )
}

export default Footer
