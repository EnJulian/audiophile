import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Category from '../../pages/category-page.jsx/categories'
import Home from '../../pages/home'
import ProductPage from '../../pages/products/main-product-page'
import categoriesData from '../../data/categories'
import data from '../../data/data'
import Checkout from '../../pages/checkout/checkout-checkout'
import Success from '../../pages/checkout/successful'
import ScrollToTop from '../scroll-restoration'
import PageNotFound from '../../pages/page-not-found/not-found'

export default function Main() {
  const categoriesRoutes = categoriesData.map(category =>
    <Route key={category} path={`/${category}`}
      element={<Category categoryName={category} />} />
  )
  const productsRoutes = data.map(({ slug }) =>
    <Route key={slug} path={`/${slug}`}
      element={<ProductPage productId={slug} />} />
  )
  
  return (
    <main className="flex-grow">
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        {categoriesRoutes}
        {productsRoutes}
        <Route path='/checkout' element={<Checkout />} />
      <Route path='/success' element={<Success />} />
      <Route path="/404" element={<PageNotFound />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </main>
  )
}