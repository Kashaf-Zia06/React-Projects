import { Link } from 'react-router-dom'
import { formatDate, formatReadTime } from '../../utils/formatters'
import './PostCard.css'

/**
 * PostCard component
 *
 * @param {object} props
 * @param {object} props.post - Full post object from data/posts.js
 */
function PostCard({ post }) {
  const {
    slug,
    title,
    excerpt,
    author,
    category,
    date,
    readTime,
    coverEmoji,
    featured,
  } = post

  return (
    // The entire card is a Link so users can click anywhere on it
    <Link
      to={`/post/${slug}`}
      className={`post-card ${featured ? 'post-card--featured' : ''}`}
      aria-label={`Read: ${title}`}
    >
      {/* ── Cover ── */}
      <div className="post-card__cover" aria-hidden="true">
        <span role="img" aria-label={category}>{coverEmoji}</span>
        {featured && (
          <span className="post-card__featured-badge">★ Featured</span>
        )}
      </div>

      {/* ── Body ── */}
      <div className="post-card__body">

        {/* Category + read time */}
        <div className="post-card__meta">
          <span className="post-card__category">{category}</span>
          <span className="post-card__dot" aria-hidden="true" />
          <span className="post-card__readtime">{formatReadTime(readTime)}</span>
        </div>

        {/* Title */}
        <h2 className="post-card__title">{title}</h2>

        {/* Excerpt */}
        <p className="post-card__excerpt">{excerpt}</p>

        {/* Read more */}
        <span className="post-card__read-more">
          Read article <span aria-hidden="true">→</span>
        </span>

        {/* Author + date */}
        <div className="post-card__footer">
          <div className="post-card__author">
            <div className="post-card__avatar" aria-hidden="true">
              {author.avatar}
            </div>
            <span className="post-card__author-name">{author.name}</span>
          </div>
          <time className="post-card__date" dateTime={date}>
            {formatDate(date)}
          </time>
        </div>

      </div>
    </Link>
  )
}

export default PostCard
