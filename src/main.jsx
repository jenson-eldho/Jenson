import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Always begin at the Hero (top) on every refresh / reopen.
// Disable the browser's automatic scroll restoration, then force the top.
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}
const resetScroll = () => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
resetScroll()
window.addEventListener('load', resetScroll)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
