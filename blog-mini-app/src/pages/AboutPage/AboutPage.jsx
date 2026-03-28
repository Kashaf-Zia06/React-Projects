import { Link } from 'react-router-dom'

// Author / team data — static, lives here since it's only used on this page
const TEAM = [
  { name: 'Aisha Malik',     avatar: '👩‍💻', role: 'Senior Frontend Engineer', posts: 1 },
  { name: 'Omar Farooq',     avatar: '🧑‍🎨', role: 'UI/UX Engineer',           posts: 1 },
  { name: 'Zara Ahmed',      avatar: '👩‍🔬', role: 'JavaScript Developer',      posts: 1 },
  { name: 'Hassan Qureshi',  avatar: '🧑‍💻', role: 'React Architect',           posts: 1 },
  { name: 'Bilal Chaudhry',  avatar: '🧑‍🔧', role: 'DevOps Engineer',           posts: 1 },
  { name: 'Sana Riaz',       avatar: '👩‍🎨', role: 'Design Systems Lead',       posts: 1 },
]

const TOPICS = [
  { emoji: '⚛️',  label: 'React'      },
  { emoji: '🟨',  label: 'JavaScript' },
  { emoji: '🎨',  label: 'CSS'        },
  { emoji: '🚀',  label: 'Performance'},
  { emoji: '🌿',  label: 'Career'     },
]

function AboutPage() {
  return (
    <main style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '3rem 2rem 5rem' }}>

      {/* ── Header ── */}
      <header style={{ marginBottom: '3rem', maxWidth: '560px' }}>
        <span style={{
          display: 'inline-block', fontFamily: 'var(--font-mono)',
          fontSize: '11px', color: 'var(--accent)',
          letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '.75rem',
        }}>
          About us
        </span>
        <h1 style={{
          fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 40px)',
          fontWeight: 600, lineHeight: 1.15, letterSpacing: '-.02em',
          color: 'var(--text)', marginBottom: '.75rem',
        }}>
          Built by developers,<br />for developers.
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.7 }}>
          The React Blog is a React Lab Project 11 — a blog mini-app demonstrating
          static data rendering, React Router, component composition, custom hooks,
          and clean folder structure. Every post is written by a real developer
          with real experience.
        </p>
      </header>

      {/* ── What we cover ── */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{
          fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-3)',
          letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '1rem',
        }}>
          What we cover
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
          {TOPICS.map(t => (
            <span key={t.label} style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '.4rem .9rem',
              background: 'var(--bg-2)', border: '1px solid var(--border)',
              borderRadius: '999px', fontSize: '13px', color: 'var(--text-2)',
            }}>
              {t.emoji} {t.label}
            </span>
          ))}
        </div>
      </section>

      {/* ── Divider ── */}
      <div style={{ height: '1px', background: 'var(--border)', marginBottom: '3rem' }} />

      {/* ── Team grid ── */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{
          fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-3)',
          letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '1.25rem',
        }}>
          Our writers
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '1rem',
        }}>
          {TEAM.map(member => (
            <div key={member.name} style={{
              background: 'var(--bg-2)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius)', padding: '1.25rem',
              display: 'flex', alignItems: 'center', gap: '12px',
            }}>
              {/* Avatar */}
              <div style={{
                width: '44px', height: '44px', borderRadius: '50%',
                background: 'var(--bg-3)', border: '1px solid var(--border-2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '22px', flexShrink: 0,
              }}>
                {member.avatar}
              </div>
              {/* Info */}
              <div>
                <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text)' }}>
                  {member.name}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-3)', marginTop: '2px' }}>
                  {member.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tech stack ── */}
      <section style={{
        background: 'var(--bg-2)', border: '1px solid var(--border)',
        borderRadius: 'var(--radius)', padding: '1.5rem 2rem', marginBottom: '3rem',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-3)',
          letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '1rem',
        }}>
          Tech stack
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
          {[
            ['⚛️', 'React 18', 'UI library'],
            ['🔀', 'React Router v6', 'Navigation'],
            ['⚡', 'Vite', 'Build tool'],
            ['📁', 'Static data', 'No backend needed'],
            ['🪝', 'Custom hooks', 'useBlogFilter'],
          ].map(([emoji, name, desc]) => (
            <div key={name} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <span style={{ fontSize: '20px' }}>{emoji}</span>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text)' }}>{name}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-3)' }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <div style={{ textAlign: 'center' }}>
        <Link to="/" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '.65rem 1.5rem',
          background: 'var(--accent-dim)', border: '1px solid var(--accent-border)',
          borderRadius: 'var(--radius-sm)', color: 'var(--accent)', fontSize: '14px',
          transition: 'all .15s',
          textDecoration: 'none',
        }}>
          ← Read the blog
        </Link>
      </div>

    </main>
  )
}

export default AboutPage
