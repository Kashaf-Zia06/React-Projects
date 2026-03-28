import './SearchBar.css'

/**
 * SearchBar component
 *
 * @param {object}   props
 * @param {string}   props.value    - Current search query (controlled)
 * @param {function} props.onChange - Called with new string value on input
 */
function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar" role="search">
      {/* Search icon */}
      <span className="search-bar__icon" aria-hidden="true">🔍</span>

      {/* Controlled input */}
      <input
        type="text"
        className="search-bar__input"
        placeholder="Search posts…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search blog posts"
      />

      {/* Clear button — only visible when there is a query */}
      {value && (
        <button
          className="search-bar__clear"
          onClick={() => onChange('')}
          aria-label="Clear search"
          type="button"
        >
          ✕
        </button>
      )}
    </div>
  )
}

export default SearchBar
