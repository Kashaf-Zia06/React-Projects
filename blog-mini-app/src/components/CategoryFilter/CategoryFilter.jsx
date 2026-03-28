// src/components/CategoryFilter/CategoryFilter.jsx
// ─────────────────────────────────────────────────────────
// Row of pill buttons for filtering posts by category.
// Active state is controlled by the parent (lifted state).
// ─────────────────────────────────────────────────────────
import './CategoryFilter.css'

/**
 * CategoryFilter component
 *
 * @param {object}   props
 * @param {string[]} props.categories  - List of category strings
 * @param {string}   props.active      - Currently selected category
 * @param {function} props.onSelect    - Called with category string on click
 */
function CategoryFilter({ categories, active, onSelect }) {
  return (
    <div className="cat-filter" role="tablist" aria-label="Filter by category">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`cat-filter__btn ${active === cat ? 'cat-filter__btn--active' : ''}`}
          onClick={() => onSelect(cat)}
          role="tab"
          aria-selected={active === cat}
          type="button"
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
