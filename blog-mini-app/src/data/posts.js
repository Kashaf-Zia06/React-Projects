export const CATEGORIES = [
  'All',
  'JavaScript',
  'React',
  'CSS',
  'Performance',
  'Career',
]
 
export const POSTS = [
  {
    id: 1,
    slug: 'understanding-react-hooks',
    title: 'Understanding React Hooks Once and For All',
    excerpt:
      'Hooks changed how we write React. This guide breaks down useState, useEffect, and custom hooks with real examples.',
    content: `
## What Are Hooks?
 
Hooks are functions that let you "hook into" React state and lifecycle features from function components. Before hooks, only class components could manage state.
 
## useState — Managing State
 
The most basic hook. It returns a pair: the current state value and a function to update it.
 
\`\`\`jsx
import { useState } from 'react'
 
function Counter() {
  const [count, setCount] = useState(0)  // 0 is the initial value
 
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
    </div>
  )
}
\`\`\`
 
> **Key rule**: Never mutate state directly. Always use the setter function.
 
## useEffect — Side Effects
 
useEffect runs *after* the component renders. Use it for fetching data, subscriptions, or DOM changes.
 
\`\`\`jsx
import { useState, useEffect } from 'react'
 
function UserProfile({ userId }) {
  const [user, setUser] = useState(null)
 
  useEffect(() => {
    // This runs after every render where userId changes
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => setUser(data))
 
    // Cleanup function (runs before next effect or unmount)
    return () => {
      console.log('Cleanup!')
    }
  }, [userId]) // dependency array — only re-run when userId changes
 
  if (!user) return <p>Loading…</p>
  return <h2>{user.name}</h2>
}
\`\`\`
 
## Custom Hooks
 
You can extract hook logic into reusable functions. By convention, they start with "use".
 
\`\`\`jsx
// hooks/useLocalStorage.js
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : initialValue
  })
 
  const setAndStore = (newValue) => {
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }
 
  return [value, setAndStore]
}
 
// Usage in any component:
const [theme, setTheme] = useLocalStorage('theme', 'dark')
\`\`\`
 
## Rules of Hooks
 
1. Only call hooks **at the top level** — not inside loops, conditions, or nested functions.
2. Only call hooks **from React functions** — not regular JS functions.
 
## Summary
 
| Hook | Purpose |
|---|---|
| useState | Local component state |
| useEffect | Side effects & lifecycle |
| useContext | Consume context |
| useRef | DOM refs & mutable values |
| Custom | Reusable stateful logic |
 
Hooks make your components smaller, more testable, and easier to share logic across.
    `,
    author: { name: 'Aisha Malik', avatar: '👩‍💻', role: 'Senior Frontend Engineer' },
    category: 'React',
    date: '2026-03-10',
    readTime: 8,
    tags: ['react', 'hooks', 'javascript', 'state'],
    coverEmoji: '🪝',
    featured: true,
  },
  {
    id: 2,
    slug: 'css-grid-vs-flexbox',
    title: 'CSS Grid vs Flexbox: When to Use Which',
    excerpt:
      'Both are powerful layout tools but they solve different problems. Learn which to reach for and when to combine them.',
    content: `
## The Core Difference
 
**Flexbox** is one-dimensional — it lays items out in a row OR a column.
 
**Grid** is two-dimensional — it handles rows AND columns simultaneously.
 
That's the entire mental model. Everything else follows from it.
 
## When to Use Flexbox
 
Use flexbox when you have a **linear sequence of items** and want to control how they sit on that one axis.
 
\`\`\`css
/* Nav bar — items in a row */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
 
/* Centering a single element */
.centered {
  display: flex;
  align-items: center;
  justify-content: center;
}
 
/* Card footer — push last item to end */
.card-footer {
  display: flex;
  gap: .5rem;
}
.card-footer .price {
  margin-left: auto; /* pushes to far right */
}
\`\`\`
 
## When to Use Grid
 
Use Grid when you have a **two-dimensional layout** — like a page layout, a card grid, or a dashboard.
 
\`\`\`css
/* Classic page layout */
.page {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 260px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
 
/* Responsive card grid — no media queries needed! */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}
\`\`\`
 
## Using Both Together
 
This is the real power move. Use Grid for the macro layout, Flexbox for the micro layout inside components.
 
\`\`\`css
/* Grid handles the overall page structure */
.layout {
  display: grid;
  grid-template-columns: 1fr 3fr;
}
 
/* Flexbox handles items inside a grid cell */
.sidebar {
  display: flex;
  flex-direction: column;
  gap: .5rem;
}
\`\`\`
 
## Quick Decision Guide
 
| Scenario | Tool |
|---|---|
| Nav bar | Flexbox |
| Card grid | Grid |
| Button with icon | Flexbox |
| Dashboard layout | Grid |
| Centering one item | Flexbox |
| Magazine layout | Grid |
 
## The Golden Rule
 
> If you're thinking about rows **and** columns at the same time → Grid.  
> If you're thinking about one axis → Flexbox.
    `,
    author: { name: 'Omar Farooq', avatar: '🧑‍🎨', role: 'UI/UX Engineer' },
    category: 'CSS',
    date: '2026-03-05',
    readTime: 6,
    tags: ['css', 'layout', 'grid', 'flexbox'],
    coverEmoji: '📐',
    featured: true,
  },
  {
    id: 3,
    slug: 'javascript-async-await',
    title: 'Async/Await: Writing Asynchronous JavaScript Clearly',
    excerpt:
      'Promises were a step forward. Async/await made async code read like synchronous code. Here is everything you need.',
    content: `
## The Problem Async/Await Solves
 
Callback hell was real. Promises helped but chaining got messy. Async/await gives us a way to write asynchronous code that reads top-to-bottom like synchronous code.
 
## Basic Syntax
 
\`\`\`javascript
// Old way — promise chain
fetch('/api/user')
  .then(res => res.json())
  .then(user => {
    return fetch(\`/api/posts?userId=\${user.id}\`)
  })
  .then(res => res.json())
  .then(posts => console.log(posts))
  .catch(err => console.error(err))
 
// New way — async/await
async function getUserPosts() {
  try {
    const userRes = await fetch('/api/user')
    const user = await userRes.json()
 
    const postsRes = await fetch(\`/api/posts?userId=\${user.id}\`)
    const posts = await postsRes.json()
 
    console.log(posts)
  } catch (err) {
    console.error('Something went wrong:', err)
  }
}
\`\`\`
 
## In React Components
 
\`\`\`jsx
function BlogPosts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
 
  useEffect(() => {
    // Define async function inside useEffect
    async function fetchPosts() {
      try {
        const res = await fetch('https://api.example.com/posts')
        if (!res.ok) throw new Error('Network response was not ok')
        const data = await res.json()
        setPosts(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false) // runs whether success or error
      }
    }
 
    fetchPosts()
  }, []) // empty array = run once on mount
 
  if (loading) return <Spinner />
  if (error)   return <ErrorMessage message={error} />
  return <PostList posts={posts} />
}
\`\`\`
 
## Parallel Requests with Promise.all
 
\`\`\`javascript
// Sequential — slow (waits for each one)
const user    = await fetchUser(id)
const posts   = await fetchPosts(id)
const friends = await fetchFriends(id)
 
// Parallel — fast (all fire at once)
const [user, posts, friends] = await Promise.all([
  fetchUser(id),
  fetchPosts(id),
  fetchFriends(id),
])
\`\`\`
 
## Error Handling Patterns
 
\`\`\`javascript
// Option 1: try/catch (recommended)
async function safeLoad() {
  try {
    const data = await riskyOperation()
    return { data, error: null }
  } catch (error) {
    return { data: null, error }
  }
}
 
// Option 2: .catch() on the await
const data = await riskyOperation().catch(err => null)
\`\`\`
 
## Key Points
 
- **async** functions always return a Promise
- **await** can only be used inside async functions
- Always wrap await calls in **try/catch**
- Use **Promise.all** for independent parallel requests
- The **finally** block always runs — great for cleanup
    `,
    author: { name: 'Zara Ahmed', avatar: '👩‍🔬', role: 'JavaScript Developer' },
    category: 'JavaScript',
    date: '2026-02-28',
    readTime: 7,
    tags: ['javascript', 'async', 'promises', 'es6'],
    coverEmoji: '⚡',
    featured: false,
  },
  {
    id: 4,
    slug: 'react-performance-tips',
    title: '5 React Performance Tips That Actually Matter',
    excerpt:
      'Most React apps are fast enough. But when they are not, these are the five techniques that move the needle.',
    content: `
## 1. React.memo — Skip Unnecessary Re-renders
 
By default, React re-renders a child whenever the parent re-renders, even if the child's props haven't changed. \`React.memo\` prevents this.
 
\`\`\`jsx
// Without memo — re-renders every time parent does
function ExpensiveList({ items }) {
  return <ul>{items.map(i => <li key={i.id}>{i.name}</li>)}</ul>
}
 
// With memo — only re-renders if 'items' prop changes
const ExpensiveList = React.memo(function ExpensiveList({ items }) {
  return <ul>{items.map(i => <li key={i.id}>{i.name}</li>)}</ul>
})
\`\`\`
 
> Don't add memo everywhere. Profile first, optimize second.
 
## 2. useMemo — Cache Expensive Calculations
 
\`\`\`jsx
function ProductPage({ products, filterText }) {
  // ❌ Recalculates on every render
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(filterText.toLowerCase())
  )
 
  // ✅ Only recalculates when products or filterText changes
  const filtered = useMemo(
    () => products.filter(p =>
      p.name.toLowerCase().includes(filterText.toLowerCase())
    ),
    [products, filterText]
  )
 
  return <ProductList items={filtered} />
}
\`\`\`
 
## 3. useCallback — Stable Function References
 
\`\`\`jsx
function Parent() {
  const [count, setCount] = useState(0)
 
  // ❌ New function reference every render → child always re-renders
  const handleDelete = (id) => setItems(items.filter(i => i.id !== id))
 
  // ✅ Same reference unless dependencies change
  const handleDelete = useCallback(
    (id) => setItems(items.filter(i => i.id !== id)),
    [items]
  )
 
  return <MemoizedChild onDelete={handleDelete} />
}
\`\`\`
 
## 4. Code Splitting with lazy()
 
Don't load code for routes the user hasn't visited yet.
 
\`\`\`jsx
import { lazy, Suspense } from 'react'
 
// Bundle is split — Dashboard loads only when navigated to
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Settings  = lazy(() => import('./pages/Settings'))
 
function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings"  element={<Settings />} />
      </Routes>
    </Suspense>
  )
}
\`\`\`
 
## 5. Virtualize Long Lists
 
Rendering 10,000 DOM nodes kills performance. Only render what's visible.
 
\`\`\`jsx
// npm install react-window
import { FixedSizeList } from 'react-window'
 
function BigList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>{items[index].name}</div>
  )
 
  return (
    <FixedSizeList height={600} width="100%" itemCount={items.length} itemSize={50}>
      {Row}
    </FixedSizeList>
  )
}
\`\`\`
 
## When to Optimize
 
1. **Measure first** — use React DevTools Profiler
2. **Identify bottlenecks** — don't guess
3. **Apply targeted fixes** — not blanket memoization
4. **Re-measure** — confirm the improvement
 
Premature optimization is the root of all evil. Write clear code first.
    `,
    author: { name: 'Hassan Qureshi', avatar: '🧑‍💻', role: 'React Architect' },
    category: 'Performance',
    date: '2026-02-20',
    readTime: 9,
    tags: ['react', 'performance', 'optimization', 'memo'],
    coverEmoji: '🚀',
    featured: false,
  },
  {
    id: 5,
    slug: 'git-workflow-for-teams',
    title: 'Git Workflow Every Dev Team Should Follow',
    excerpt:
      'Messy git history costs hours every week. A clean, consistent workflow protects your team and makes deployments safe.',
    content: `
## Why Workflow Matters
 
Bad git habits compound. A messy history makes debugging harder, code reviews slower, and rollbacks terrifying. A clean workflow costs nothing and saves everything.
 
## The Branch Model
 
\`\`\`
main           ←── always deployable, protected
  └── develop  ←── integration branch
        ├── feature/user-auth
        ├── feature/dark-mode
        └── fix/navbar-overflow
\`\`\`
 
**Rules:**
- **main** — production code only. No direct pushes.
- **develop** — integrates completed features.
- **feature/\*** — one feature per branch.
- **fix/\*** — bug fixes.
 
## Branch Naming Convention
 
\`\`\`bash
# Features
git checkout -b feature/user-authentication
git checkout -b feature/blog-search
 
# Bug fixes
git checkout -b fix/login-redirect
git checkout -b fix/mobile-nav
 
# Hotfixes on production
git checkout -b hotfix/payment-crash
\`\`\`
 
## Commit Message Format
 
Follow **Conventional Commits**:
 
\`\`\`bash
# Format: type(scope): description
feat(auth): add Google OAuth login
fix(nav): correct mobile dropdown z-index
docs(readme): update deployment instructions
style(button): adjust hover transition timing
refactor(api): extract fetch helper to utils
test(counter): add increment edge case tests
chore(deps): upgrade react to 18.3.1
\`\`\`
 
## The Daily Workflow
 
\`\`\`bash
# 1. Start your day — sync with remote
git checkout develop
git pull origin develop
 
# 2. Create your feature branch
git checkout -b feature/comment-system
 
# 3. Work. Commit often with clear messages.
git add src/components/Comments.jsx
git commit -m "feat(comments): add comment list component"
 
git add src/components/CommentForm.jsx
git commit -m "feat(comments): add comment submission form"
 
# 4. Before pushing, rebase to stay current
git fetch origin
git rebase origin/develop
 
# 5. Push your branch
git push origin feature/comment-system
 
# 6. Open a Pull Request on GitHub/GitLab
# — describe what changed and why
# — request a reviewer
# — wait for approval before merging
\`\`\`
 
## Pull Request Template
 
\`\`\`markdown
## What does this PR do?
Adds a comment system to blog posts.
 
## How to test
1. Navigate to any blog post
2. Scroll to the bottom
3. Submit a comment
4. Verify it appears in the list
 
## Screenshots
[attach screenshots]
 
## Checklist
- [ ] Tests pass
- [ ] Reviewed own code
- [ ] No console.log left in
\`\`\`
 
## Golden Rules
 
1. **Commit early, commit often** — small commits are easy to revert
2. **Never force-push to shared branches**
3. **Pull before you push** — always sync first
4. **One PR per feature** — keep reviews focused
5. **Delete branches after merging** — keep it clean
    `,
    author: { name: 'Bilal Chaudhry', avatar: '🧑‍🔧', role: 'DevOps Engineer' },
    category: 'Career',
    date: '2026-02-14',
    readTime: 7,
    tags: ['git', 'workflow', 'teams', 'devops'],
    coverEmoji: '🌿',
    featured: false,
  },
  {
    id: 6,
    slug: 'building-design-systems',
    title: 'Building a Design System in React from Scratch',
    excerpt:
      'A design system is not just a component library. It is a shared language between designers and developers. Here is how to build one.',
    content: `
## What Is a Design System?
 
A design system is a collection of:
- **Design tokens** (colors, spacing, typography)
- **Components** (Button, Card, Input, Modal)
- **Patterns** (how components combine)
- **Documentation** (why, not just what)
 
## Step 1: Design Tokens
 
Define your visual foundation as CSS variables. Everything else references these.
 
\`\`\`css
/* tokens.css */
:root {
  /* Colors */
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-gray-50:  #f9fafb;
  --color-gray-900: #111827;
 
  /* Typography */
  --font-sans:  'Inter', sans-serif;
  --font-mono:  'JetBrains Mono', monospace;
  --text-sm:    0.875rem;
  --text-base:  1rem;
  --text-lg:    1.125rem;
  --text-xl:    1.25rem;
 
  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-4: 1rem;
  --space-8: 2rem;
 
  /* Borders */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
}
\`\`\`
 
## Step 2: Base Components
 
\`\`\`jsx
// components/Button/Button.jsx
/**
 * Button — primary interactive element.
 * Variants: primary | secondary | ghost | danger
 */
function Button({ children, variant = 'primary', size = 'md', disabled, onClick }) {
  const classes = [
    'btn',
    \`btn--\${variant}\`,
    \`btn--\${size}\`,
    disabled && 'btn--disabled',
  ].filter(Boolean).join(' ')
 
  return (
    <button className={classes} onClick={onClick} disabled={disabled} type="button">
      {children}
    </button>
  )
}
 
// components/Button/index.js
export { Button }
\`\`\`
 
## Step 3: Composition Patterns
 
\`\`\`jsx
// Compound component pattern — Card
function Card({ children, className }) {
  return <div className={\`card \${className || ''}\`}>{children}</div>
}
Card.Header  = ({ children }) => <div className="card__header">{children}</div>
Card.Body    = ({ children }) => <div className="card__body">{children}</div>
Card.Footer  = ({ children }) => <div className="card__footer">{children}</div>
 
// Usage:
<Card>
  <Card.Header>
    <h2>Post Title</h2>
  </Card.Header>
  <Card.Body>
    <p>Content here…</p>
  </Card.Body>
  <Card.Footer>
    <Button>Read More</Button>
  </Card.Footer>
</Card>
\`\`\`
 
## Step 4: Document Everything
 
Every component needs:
1. **Purpose** — what problem it solves
2. **Props** — what it accepts
3. **Examples** — at least 3 usage scenarios
4. **Don'ts** — common misuse patterns
 
## Recommended Tools
 
| Tool | Purpose |
|---|---|
| Storybook | Component documentation & visual testing |
| Chromatic | Visual regression testing |
| Figma Tokens | Sync design tokens from Figma |
| Changesets | Manage versioning & changelog |
 
## Key Principles
 
- **Consistent naming** — Button not Btn, Modal not Dialog
- **Composable** — components work together naturally  
- **Accessible** — ARIA attributes, keyboard navigation, focus management
- **Documented** — if it's not documented, it doesn't exist
- **Versioned** — breaking changes are communicated clearly
    `,
    author: { name: 'Sana Riaz', avatar: '👩‍🎨', role: 'Design Systems Lead' },
    category: 'React',
    date: '2026-02-08',
    readTime: 10,
    tags: ['react', 'design-systems', 'components', 'css'],
    coverEmoji: '🎨',
    featured: false,
  },
]
 
/**
 * Get a single post by its URL slug.
 * Returns undefined if not found (handled by NotFound page).
 */
export function getPostBySlug(slug) {
  return POSTS.find((post) => post.slug === slug)
}
 
/**
 * Get posts filtered by category.
 * 'All' returns the full list.
 */
export function getPostsByCategory(category) {
  if (category === 'All') return POSTS
  return POSTS.filter((post) => post.category === category)
}
 
/**
 * Search posts by title, excerpt, or tags.
 */
export function searchPosts(query) {
  const q = query.toLowerCase().trim()
  if (!q) return POSTS
  return POSTS.filter(
    (post) =>
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.tags.some((tag) => tag.includes(q))
  )
}