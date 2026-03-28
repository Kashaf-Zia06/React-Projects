export function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString('en-US', {
    year:  'numeric',
    month: 'long',
    day:   'numeric',
  })
}
 
/**
 * Format read time as a friendly string.
 * e.g. 8 → "8 min read"
 *
 * @param {number} minutes
 * @returns {string}
 */
export function formatReadTime(minutes) {
  return `${minutes} min read`
}
 
/**
 * Truncate a string to a max length and add ellipsis.
 *
 * @param {string} str
 * @param {number} maxLength
 * @returns {string}
 */
export function truncate(str, maxLength = 120) {
  if (str.length <= maxLength) return str
  return str.slice(0, maxLength).trimEnd() + '…'
}