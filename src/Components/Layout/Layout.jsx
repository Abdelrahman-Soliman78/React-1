// import React from 'react'
import Navebar from '../Navebar/Navebar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <>
    <Navebar/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}
