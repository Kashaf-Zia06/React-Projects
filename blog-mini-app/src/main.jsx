import React    from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'

// Global styles — imported once here, apply everywhere
import './index.css'

ReactDOM
  .createRoot(document.getElementById('root')) // target the #root div in index.html
  .render(
    // StrictMode activates extra development checks (double-renders in dev only)
    <React.StrictMode>
      {/* BrowserRouter enables client-side routing via the History API */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )
