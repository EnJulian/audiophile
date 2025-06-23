import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Global styles and main app component
import './index.css'
import App from './App.jsx'

/**
 * Application Entry Point
 * 
 * This is the main entry point for the Audiophile e-commerce application.
 * It sets up the React application with necessary providers and renders
 * the root App component.
 * 
 * Setup includes:
 * - React StrictMode for development warnings and checks
 * - BrowserRouter for client-side routing
 * - Global CSS styles (Tailwind CSS)
 */

// Create root element and render the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Enable client-side routing for the entire application */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
