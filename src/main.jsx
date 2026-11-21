import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Legal from './Legal.jsx'

const path = window.location.pathname.replace(/\/+$/, '').replace(/\.html$/, '')
const page = path === '/privacidad' ? 'privacidad' : path === '/terminos' ? 'terminos' : null

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {page ? <Legal page={page} /> : <App />}
  </StrictMode>,
)
