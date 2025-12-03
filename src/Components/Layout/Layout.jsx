import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Whatsapp from '../Whatsapp/Whatsapp'
import NavigationBar from '../NavigationBar/NavigationBar'

export default function () {
  return (
    <>
        <Navbar/>
 <Outlet/>
 <Footer/>
 <Whatsapp/>
 <NavigationBar/>
    </>


  )
}
