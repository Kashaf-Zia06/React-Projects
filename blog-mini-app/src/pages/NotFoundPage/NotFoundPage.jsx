import { Link, useNavigate } from 'react-router-dom'

function NotFoundPage() {
  // useNavigate lets us programmatically redirect
  const navigate = useNavigate()

  return (
    <main style={{
      maxWidth: 'var(--max-width)', margin: '0 auto',
      padding: '5rem 2rem',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', textAlign: 'center',
    }}>

      {/* Big 404 */}
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'clamp(80px, 15vw, 140px)',
        fontWeight: 500,
        color: 'var(--bg-4)',
        lineHeight: 1,
        userSelect: 'none',
        marginBottom: '1.5rem',
      }}>
        404
      </div>

      <h1 style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '28px', fontWeight: 600,
        color: 'var(--text)', marginBottom: '.75rem',
      }}>
        Page not found
      </h1>

      <p style={{
        fontSize: '15px', color: 'var(--text-2)',
        lineHeight: 1.7, maxWidth: '420px', marginBottom: '2.5rem',
      }}>
        The page you're looking for doesn't exist or the post slug may be
        incorrect. Check the URL and try again.
      </p>

      {/* Actions */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* Go back button — uses navigate(-1) to go to previous history entry */}
        <button
          onClick={() => navigate(-1)}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '.6rem 1.25rem',
            background: 'transparent', border: '1px solid var(--border-2)',
            borderRadius: 'var(--radius-sm)', color: 'var(--text-2)',
            fontSize: '14px', cursor: 'pointer', fontFamily: 'var(--font-sans)',
          }}
        >
          ← Go back
        </button>

        {/* Home link */}
        <Link to="/" style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          padding: '.6rem 1.25rem',
          background: 'var(--accent-dim)', border: '1px solid var(--accent-border)',
          borderRadius: 'var(--radius-sm)', color: 'var(--accent)',
          fontSize: '14px', textDecoration: 'none',
        }}>
          Home →
        </Link>
      </div>

    </main>
  )
}

export default NotFoundPage
