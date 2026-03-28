import { NavLink } from 'react-router-dom'
import './Navbar.css'

/**
 * Navbar component
 * Renders the site logo and navigation links.
 * NavLink automatically adds the "active" class to the current route.
 */
function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar__inner">

        {/* Logo — links back to home */}
        <NavLink to="/" className="navbar__logo" aria-label="The React Blog — Home">
          <span className="navbar__logo-dot" aria-hidden="true" />
          The React Blog
        </NavLink>

        {/* Navigation links */}
        <ul className="navbar__links">
          <li>
            {/* NavLink applies className based on active state */}
            <NavLink
              to="/"
              end                         /* "end" means only exact "/" matches */
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            {/* CTA button — styled differently */}
            <a href="#" className="navbar__cta" aria-label="Write a post">
              ✏️ Write
            </a>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar
