import React from 'react'
import imgs from "../../assets/whatsapp.png"
import { Link } from 'react-router-dom'

export default function Whatsapp() {
 return (
   <>
<div className='fixed md:bottom-0 bottom-16 right-0  z-20 flex items-center'>
<Link to="https://wa.me/201276869700
">
<img src={imgs} alt="whatsapp icon" className='w-22 whats-btn'/>
</Link>
</div>
   
   </>
  )
}
