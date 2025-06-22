import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

const RootLayout = () => {
  return (
    <div className="">
        <Navbar />
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayout