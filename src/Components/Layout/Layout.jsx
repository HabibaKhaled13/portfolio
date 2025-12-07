import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Whatsapp from '../Whatsapp/Whatsapp'
import NavigationBar from '../NavigationBar/NavigationBar'
import ScrollToTop from '../ScrollToTop/ScrollToTop'


export default function () {
  return (
    <>
        <Navbar/>
        <ScrollToTop/>
 <Outlet/>
 <Footer/>
 <Whatsapp/>
 <NavigationBar/>
    </>


  )
}
