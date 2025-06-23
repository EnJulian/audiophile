import React from 'react'

// Context provider for managing shopping cart state across the application
import { CartContextProvider } from './cartContext'

// Main application layout components
import Main from './components/app/main'
import Header from './components/app/header'
import Footer from './components/app/footer'

/**
 * Root App Component
 * 
 * This is the main application component that sets up the overall layout structure.
 * It wraps the entire app with the CartContextProvider to enable cart functionality
 * throughout all child components.
 * 
 * Layout Structure:
 * - Header: Navigation, logo, and cart icon
 * - Main: Dynamic content area with routing
 * - Footer: Company info and links
 */
function App() {
   return (
      <CartContextProvider>
         {/* Top navigation and branding */}
         <Header />
         
         {/* Main content area - handles all page routing */}
         <Main />
         
         {/* Footer with company information and links */}
         <Footer />
      </CartContextProvider>
   )
}

export default App
