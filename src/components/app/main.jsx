import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

// Page components
import Category from '../../pages/category-page.jsx/categories'
import Home from '../../pages/home'
import ProductPage from '../../pages/products/main-product-page'
import Checkout from '../../pages/checkout/checkout-checkout'
import Success from '../../pages/checkout/successful'
import PageNotFound from '../../pages/page-not-found/not-found'

// Data imports for dynamic routing
import categoriesData from '../../data/categories'
import data from '../../data/data'

// Utility components
import ScrollToTop from '../scroll-restoration'

/**
 * Main Content Router Component
 * 
 * This component handles all the routing logic for the application.
 * It dynamically generates routes for categories and products based on data,
 * ensuring the routing stays in sync with available products and categories.
 * 
 * Route Structure:
 * - / : Homepage with featured products
 * - /{category} : Category pages (headphones, speakers, earphones)
 * - /{product-slug} : Individual product detail pages
 * - /checkout : Shopping cart checkout process
 * - /success : Order confirmation page
 * - /404 : Page not found
 * - * : Catch-all redirect to 404
 */
export default function Main() {
  // Dynamically generate category routes from available categories
  // This ensures we have routes for all product categories in our data
  const categoriesRoutes = categoriesData.map(category =>
    <Route 
      key={category} 
      path={`/${category}`}
      element={<Category categoryName={category} />} 
    />
  )
  
  // Dynamically generate product routes from product data
  // Each product gets its own route based on its slug for SEO-friendly URLs
  const productsRoutes = data.map(({ slug }) =>
    <Route 
      key={slug} 
      path={`/${slug}`}
      element={<ProductPage productId={slug} />} 
    />
  )
  
  return (
    <main className="flex-grow">
      {/* Ensures page scrolls to top on route changes */}
      <ScrollToTop />
      
      <Routes>
        {/* Homepage route */}
        <Route path='/' element={<Home />} />
        
        {/* Dynamic category routes (headphones, speakers, earphones) */}
        {categoriesRoutes}
        
        {/* Dynamic product detail routes */}
        {productsRoutes}
        
        {/* Checkout flow routes */}
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/success' element={<Success />} />
        
        {/* Error handling routes */}
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </main>
  )
}