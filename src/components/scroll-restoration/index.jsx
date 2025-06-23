import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scroll Restoration Component
 * 
 * This utility component automatically scrolls the page to the top
 * whenever the route changes. This provides a better user experience
 * by ensuring users start at the top of each new page.
 * 
 * This is particularly important for e-commerce sites where users
 * navigate between product pages and categories frequently.
 * 
 * Usage: Place this component inside the Router but outside of Routes
 * to ensure it runs on every route change.
 */
export default function ScrollToTop() {
   // Get current pathname to detect route changes
   const { pathname } = useLocation()

   // Scroll to top whenever the pathname changes
   useEffect(() => {
      // Smooth scroll to top of page for better user experience
      window.scrollTo({
         top: 0,
         left: 0,
         behavior: 'smooth'
      })
   }, [pathname]) // Dependency array ensures this runs on route changes

   // This component doesn't render anything visible
   return null
}
