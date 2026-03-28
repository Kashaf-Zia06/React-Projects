import { Routes, Route } from 'react-router-dom'

// Layout components (always visible)
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

// Pages (rendered depending on current route)
import HomePage       from './pages/HomePage/HomePage'
import PostDetailPage from './pages/PostDetailPage/PostDetailPage'
import AboutPage      from './pages/AboutPage/AboutPage'
import NotFoundPage   from './pages/NotFoundPage/NotFoundPage'

/**
 * App — root component
 *
 * Structure:
 *   <Navbar />        ← always shown
 *   <Routes>          ← only one route renders at a time
 *     <Route ... />
 *   </Routes>
 *   <Footer />        ← always shown
 */
function App() {
  return (
    <>
      {/* Sticky navigation — rendered on every page */}
      <Navbar />

      {/*
        Routes — React Router renders the first matching <Route>.
        Order matters: more specific routes should come before catch-alls.
      */}
      <Routes>

        {/* Home — list of all blog post cards */}
        <Route path="/" element={<HomePage />} />

        {/*
          Post detail — :slug is a URL parameter.
          e.g. /post/understanding-react-hooks
          useParams() in PostDetailPage reads this slug.
        */}
        <Route path="/post/:slug" element={<PostDetailPage />} />

        {/* About page */}
        <Route path="/about" element={<AboutPage />} />

        {/*
          Catch-all — matches any path not handled above.
          Must always be last.
        */}
        <Route path="*" element={<NotFoundPage />} />

      </Routes>

      {/* Footer — rendered on every page */}
      <Footer />
    </>
  )
}

export default App
