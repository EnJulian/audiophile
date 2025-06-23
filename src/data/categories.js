import data from './data'

/**
 * Categories Data Processing
 * 
 * This module processes the product data to extract unique categories
 * and arranges them in a specific order for the navigation and routing.
 * 
 * Process:
 * 1. Extract all category names from product data
 * 2. Remove duplicates using Set
 * 3. Reorder categories (moves first category to the end)
 * 
 * This ensures consistent category ordering across the application.
 */

// Extract category names from all products
const categories = data.map(({ category }) => category)

// Remove duplicates to get unique categories only
const categoriesArr = [...new Set(categories)]

// Reorder categories - move the first category to the end
// This creates a specific display order for the navigation
categoriesArr.push(categoriesArr.splice(0, 1)[0])

export default categoriesArr