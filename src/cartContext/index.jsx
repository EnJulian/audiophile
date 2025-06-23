import React, { useState } from "react"

/**
 * Shopping Cart Context
 * 
 * This context manages the global shopping cart state across the entire application.
 * It provides functionality to add, remove, and manage cart items with persistence
 * through localStorage.
 * 
 * Features:
 * - Persistent cart storage using localStorage
 * - Add multiple items at once
 * - Add/remove individual items
 * - Clear entire cart
 * - Automatic state synchronization
 */

// Create the cart context for global state management
const CartContext = React.createContext()

/**
 * Cart Context Provider Component
 * 
 * Wraps the application to provide cart functionality to all child components.
 * Manages cart state and provides methods for cart operations.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to wrap
 */
function CartContextProvider({ children }) {
   // Initialize cart state from localStorage or empty array
   // This ensures cart persists between browser sessions
   const [cartArr, setCartArr] = useState(
      JSON.parse(localStorage.getItem('cartArr')) || []
   )

   /**
    * Add multiple items to cart
    * Used when adding products with quantity > 1 from product pages
    * 
    * @param {string} slug - Product identifier
    * @param {number} count - Number of items to add
    */
   const addToCart = (slug, count) => {
      for (let i = 0; i < count; i++) {
         setCartArr(prevState => [...prevState, slug])
      }
   }

   /**
    * Add single item to cart
    * Used for incrementing quantity in cart or adding single items
    * 
    * @param {string} slug - Product identifier
    */
   const addItem = (slug) => {
      setCartArr(prevState => [...prevState, slug])
   }

   /**
    * Remove single item from cart
    * Removes only the first occurrence of the item (decrements quantity by 1)
    * 
    * @param {string} slug - Product identifier
    */
   const removeItem = (slug) => {
      const index = cartArr.findIndex(item => item === slug)
      const newArray = [...cartArr]
      
      // Only remove if item exists in cart
      if (index !== -1) {
         newArray.splice(index, 1)
      }
      
      setCartArr(newArray)
   }

   /**
    * Clear entire cart
    * Used after successful checkout or when user wants to empty cart
    */
   const removeCartItems = () => setCartArr([])

   // Persist cart state to localStorage on every change
   // This ensures cart data survives browser refreshes and sessions
   localStorage.setItem('cartArr', JSON.stringify(cartArr))

   return (
      <CartContext.Provider 
         value={{ 
            cartArr, 
            addToCart, 
            removeCartItems, 
            addItem, 
            removeItem 
         }}
      >
         {children}
      </CartContext.Provider>
   )
}

export { CartContextProvider, CartContext }