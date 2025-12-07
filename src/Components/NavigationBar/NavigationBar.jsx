import React from 'react'
import {Link} from 'react-router-dom'
import img1 from "../../assets/homeicon.png"
import img2 from "../../assets/abouticon.png"
import img3 from "../../assets/services.png"
import img4 from "../../assets/codeicon.png"
import img5 from "../../assets/contactus.png"
import { HashLink } from 'react-router-hash-link'


export default function NavigationBar() {
  return (
<>
<section className='md:hidden'>


<div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-[#1a1a1a]  ">
    <div className="h-full justify-around flex mx-auto font-medium">

        <Link to="/" className="inline-flex flex-col items-center justify-center  hover:bg-gray-900">
         
     <img src={img1} className='w-6'alt="home" />

            <span className="text-sm text-neutral-400   ">Home </span>
        </Link>
        <HashLink to="/#about" className="inline-flex flex-col items-center justify-center  hover:bg-gray-900">
                    <img src={img2} className='w-6 'alt="about" />

            <span className="text-sm text-neutral-400   ">About</span>
        </HashLink>
        <HashLink to="/#services" className="inline-flex flex-col items-center justify-center  hover:bg-gray-900">
                      <img src={img3} className='w-6'alt="Services" />

            <span className="text-sm text-neutral-400   ">Services</span>
        </HashLink>
           <Link to="/work" className="inline-flex flex-col items-center justify-center  hover:bg-gray-900">
                      <img src={img4} className='w-6'alt="work" />

            <span className="text-sm text-neutral-400   ">Work </span>
        </Link>
           <HashLink to="/#contact" className="inline-flex flex-col items-center justify-center  hover:bg-gray-900">
                      <img src={img5} className='w-6'alt="contact" />

            <span className="text-sm text-neutral-400   ">Contact </span>
        </HashLink>
    </div>
</div>

</section>

</>
  )
}
