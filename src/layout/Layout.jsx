import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WasapBtn from '../components/wasapBtn'

function Layout () {
  return (
    <>
      <Navbar />
      <Outlet />
      <WasapBtn />
      <Footer />
    </>
  )
}

export default Layout
