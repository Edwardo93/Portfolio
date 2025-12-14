import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactGA from 'react-ga4'
import './index.css'
import App from './App.jsx'

// Initialize Google Analytics
// REPLACE 'G-XXXXXXXXXX' WITH YOUR ACTUAL MEASUREMENT ID
ReactGA.initialize('G-05RX88Q60R');

// Send initial page view
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const trackClick = (label) => {
  window.gtag('event', 'click', {
    event_category: 'CTA',
    event_label: label,
  });
};
