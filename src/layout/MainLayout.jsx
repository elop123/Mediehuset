import React from 'react'
import { NavBar } from '../components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer/Footer'
import { HeaderImage } from '../components/HeaderImage/HeaderImage'

export const Mainlayout = () => {
  return (
    
    <>
    <NavBar />
    <Outlet />
    <Footer />
    </>
  )
}
