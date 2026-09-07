import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Design system stylesheets (order matters: tokens -> base -> components)
import './styles/tokens.css'
import './styles/base.css'
import './styles/navbar.css'
import './styles/hero.css'
import './styles/sections.css'
import './styles/pricing.css'
import './styles/footer.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
