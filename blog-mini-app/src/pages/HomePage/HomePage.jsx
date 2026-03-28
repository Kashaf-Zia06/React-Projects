import PostCard       from '../../components/PostCard/PostCard'
import SearchBar      from '../../components/SearchBar/SearchBar'
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter'
import { useBlogFilter } from '../../hooks/useBlogFilter'
import './HomePage.css'

/**
 * HomePage
 * Shows:
 *  - Hero headline
 *  - Search bar + category filter
 *  - Responsive card grid
 *  - Empty state if no results
 */
function HomePage() {
  // All filter logic is in the custom hook
  const {
    posts,
    query,
    setQuery,
    category,
    setCategory,
    categories,
    resultCount,
  } = useBlogFilter()

  return (
    <main className="home">

      {/* ── Hero ── */}
      <header className="home__hero">
        <span className="home__label">React Lab — Project 11</span>
        <h1 className="home__title">
          Ideas worth <em>reading.</em>
        </h1>
        <p className="home__subtitle">
          Practical articles on React, JavaScript, CSS, and the craft of
          building for the web — written by developers, for developers.
        </p>
      </header>

      {/* ── Search + Filter Controls ── */}
      <section className="home__controls" aria-label="Filter posts">

        {/* Top row: search + result count */}
        <div className="home__controls-row">
          {/* SearchBar is a controlled component — we pass value and setter */}
          <SearchBar value={query} onChange={setQuery} />
          <span className="home__result-count">
            {resultCount} {resultCount === 1 ? 'post' : 'posts'}
          </span>
        </div>

        {/* Category filter pills */}
        <CategoryFilter
          categories={categories}
          active={category}
          onSelect={(cat) => {
            setCategory(cat)
            setQuery('') // reset search when switching category
          }}
        />

      </section>

      {/* ── Post Grid ── */}
      <section
        className="home__grid"
        aria-label="Blog posts"
        aria-live="polite"         /* announces changes to screen readers */
        aria-atomic="false"
      >
        {posts.length > 0 ? (
          // .map() renders one PostCard per post
          // key={post.id} is required for React's reconciliation
          posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))
        ) : (
          /* ── Empty state when search/filter has no results ── */
          <div className="home__empty" role="status">
            <div className="home__empty-emoji">🔍</div>
            <h3>No posts found</h3>
            <p>
              No results for &ldquo;{query}&rdquo;
              {category !== 'All' ? ` in ${category}` : ''}.
              Try a different search or category.
            </p>
          </div>
        )}
      </section>

    </main>
  )
}

export default HomePage
