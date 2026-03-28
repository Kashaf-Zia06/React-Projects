import { useParams, Link } from 'react-router-dom'
import { useEffect }       from 'react'
import { getPostBySlug, POSTS } from '../../data/posts'
import { formatDate, formatReadTime } from '../../utils/formatters'
import PostCard    from '../../components/PostCard/PostCard'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import './PostDetailPage.css'

// ── Simple Markdown → HTML renderer ─────────────────────
// We keep this in-file since it only applies to post content.
// Converts the subset of markdown used in posts.js to HTML strings.
function renderMarkdown(md) {
  return md
    // Fenced code blocks (``` lang ... ```)
    .replace(/```[\w]*\n([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
    // Blockquotes
    .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
    // H2
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    // H3
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    // Bold **text**
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Italic *text* (but not inside **)
    .replace(/\*(?!\*)(.+?)(?<!\*)\*/g, '<em>$1</em>')
    // Inline code `text`
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Table rows
    .replace(/^\|(.+)\|$/gm, (_, row) => {
      const cells = row.split('|').map(c => c.trim())
      const isHeader = false
      return `<tr>${cells.map(c => `<td>${c}</td>`).join('')}</tr>`
    })
    // Table separators (|---|---|) — remove them
    .replace(/<tr><td>[-: ]+<\/td>.*?<\/tr>/g, '')
    // Wrap consecutive <tr> in <table>
    .replace(/(<tr>[\s\S]+?<\/tr>\n?)+/g, m => `<table>${m}</table>`)
    // Fix: first <tr> of each table should use <th>
    .replace(/<table>(<tr>)(.*?)(<\/tr>)/s, (_, open, inner, close) =>
      `<table>${open}${inner.replace(/<td>/g,'<th>').replace(/<\/td>/g,'</th>')}${close}`
    )
    // Unordered list items
    .replace(/^[-*] (.+)$/gm, '<li>$1</li>')
    // Wrap consecutive <li> in <ul>
    .replace(/(<li>.*<\/li>\n?)+/g, m => `<ul>${m}</ul>`)
    // Numbered list items
    .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
    // Paragraphs: lines that are not already tags
    .replace(/^(?!<[a-z]|\s*$)(.+)$/gm, '<p>$1</p>')
    // Clean up empty lines between block elements
    .replace(/\n{3,}/g, '\n\n')
}

// ── Extract headings for Table of Contents ───────────────
function extractHeadings(content) {
  const headings = []
  const h2Regex  = /^## (.+)$/gm
  let match

  while ((match = h2Regex.exec(content)) !== null) {
    const text = match[1]
    // Create an id by slugifying the heading text
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    headings.push({ text, id })
  }
  return headings
}

// ── Main Component ───────────────────────────────────────
function PostDetailPage() {
  // useParams reads the :slug segment from the URL
  const { slug } = useParams()

  // Look up post from static data
  const post = getPostBySlug(slug)

  // Scroll to top when navigating between posts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  // If post not found, show 404
  if (!post) return <NotFoundPage />

  const {
    title, excerpt, content, author,
    category, date, readTime,
    coverEmoji, tags, id,
  } = post

  // Render markdown to HTML string
  const htmlContent = renderMarkdown(content)

  // Extract table of contents headings
  const headings = extractHeadings(content)

  // Related posts: same category, excluding current
  const related = POSTS
    .filter(p => p.category === category && p.id !== id)
    .slice(0, 2)

  // Copy link handler
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
      .catch(() => {/* clipboard not available */})
  }

  return (
    <div className="post-detail">

      {/* ── Back to home ── */}
      <Link to="/" className="post-detail__back">
        ← Back to all posts
      </Link>

      <div className="post-detail__layout">

        {/* ════════════════════════════════
            MAIN ARTICLE
        ════════════════════════════════ */}
        <article className="post-detail__article">

          {/* Cover emoji */}
          <div className="post-detail__cover" aria-hidden="true">
            {coverEmoji}
          </div>

          {/* Meta: category · read time · date */}
          <div className="post-detail__meta">
            <span className="post-detail__category">{category}</span>
            <span className="post-detail__meta-sep">·</span>
            <span className="post-detail__readtime">{formatReadTime(readTime)}</span>
            <span className="post-detail__meta-sep">·</span>
            <time className="post-detail__date-str" dateTime={date}>
              {formatDate(date)}
            </time>
          </div>

          {/* Title */}
          <h1 className="post-detail__title">{title}</h1>

          {/* Author strip */}
          <div className="post-detail__author-strip">
            <div className="post-detail__author-avatar" aria-hidden="true">
              {author.avatar}
            </div>
            <div>
              <div className="post-detail__author-name">{author.name}</div>
              <div className="post-detail__author-role">{author.role}</div>
            </div>
          </div>

          {/* Article body — rendered markdown */}
          <div
            className="post-detail__content"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
            /*
             * dangerouslySetInnerHTML is safe here because the
             * content comes from our own static data file —
             * not from user input or an external API.
             */
          />

          {/* Tags */}
          <div className="post-detail__tags" aria-label="Tags">
            {tags.map(tag => (
              <span key={tag} className="post-detail__tag">#{tag}</span>
            ))}
          </div>

          {/* ── Related Posts ── */}
          {related.length > 0 && (
            <section className="post-detail__related">
              <h2 className="post-detail__related-title">You might also like</h2>
              <div className="post-detail__related-grid">
                {related.map(p => <PostCard key={p.id} post={p} />)}
              </div>
            </section>
          )}

        </article>

        {/* ════════════════════════════════
            SIDEBAR
        ════════════════════════════════ */}
        <aside className="post-detail__sidebar" aria-label="Sidebar">

          {/* Table of Contents */}
          {headings.length > 0 && (
            <div className="sidebar-card">
              <div className="sidebar-card__label">In this article</div>
              <ol className="sidebar-card__toc">
                {headings.map(h => (
                  <li key={h.id}>
                    <a href={`#${h.id}`}>{h.text}</a>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Share */}
          <div className="sidebar-card">
            <div className="sidebar-card__label">Share</div>
            <button className="sidebar-share-btn" onClick={copyLink} type="button">
              🔗 Copy link
            </button>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar-share-btn"
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              𝕏 Share on X
            </a>
          </div>

          {/* Article info card */}
          <div className="sidebar-card">
            <div className="sidebar-card__label">About this post</div>
            <div style={{ fontSize: '13px', color: 'var(--text-2)', lineHeight: 1.6 }}>
              <div style={{ marginBottom: '.5rem' }}>
                <span style={{ color: 'var(--text-3)', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>
                  AUTHOR
                </span><br />
                {author.name}
              </div>
              <div style={{ marginBottom: '.5rem' }}>
                <span style={{ color: 'var(--text-3)', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>
                  PUBLISHED
                </span><br />
                {formatDate(date)}
              </div>
              <div>
                <span style={{ color: 'var(--text-3)', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>
                  READ TIME
                </span><br />
                {formatReadTime(readTime)}
              </div>
            </div>
          </div>

        </aside>

      </div>
    </div>
  )
}

export default PostDetailPage
