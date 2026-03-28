import { useState, useMemo } from 'react'
import { POSTS, CATEGORIES } from '../data/posts'
 
/**
 * useBlogFilter
 * Returns filtered posts based on search query and active category.
 *
 * @returns {object} { posts, query, setQuery, category, setCategory, categories, resultCount }
 */
export function useBlogFilter() {
  const [query, setQuery]       = useState('')       // search input value
  const [category, setCategory] = useState('All')    // active category tab
 
  // useMemo prevents re-filtering on every render
  // Only recalculates when query or category changes
  const posts = useMemo(() => {
    let result = [...POSTS]
 
    // 1. Filter by category
    if (category !== 'All') {
      result = result.filter((p) => p.category === category)
    }
 
    // 2. Filter by search query (title, excerpt, tags)
    if (query.trim()) {
      const q = query.toLowerCase()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some((tag) => tag.includes(q))
      )
    }
 
    return result
  }, [query, category])
 
  return {
    posts,
    query,
    setQuery,
    category,
    setCategory,
    categories: CATEGORIES,
    resultCount: posts.length,
  }
}
 