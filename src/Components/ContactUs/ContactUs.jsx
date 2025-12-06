import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function ContactUs() {
  return (
<>
<section id="contact" className='scroll-mt-5 md:py-20 py-12'>
  <div className="mx-auto md:px-14 px-7">
<div className="flex justify-between flex-wrap">
  <div className="md:w-1/2 w-full">
  

<form className=" py-5 px-10 mx-auto text-black  border border-blactext-black rounded-2xl">
  
  <div className="text mt-5 mb-8">
   <span className='text-[#EB1C5F] text-sm'>علشان نوصل لبعض</span>
    <h2 className='text-black text-5xl'>Contact</h2>
    <p className='mt-3'>Let's collaborate together and achieve awesome ideas!</p>
  </div>
  
    <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-7 group">
        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
        <label htmlFor="floating_first_name" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">First name</label>
    </div>
    <div className="relative z-0 w-full mb-7 group">
        <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
        <label htmlFor="floating_last_name" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Last name</label>
    </div>
  </div>
  
  <div className="relative z-0 w-full mb-7 group">
      <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
      <label htmlFor="floating_email" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email address</label>
  </div>

    <div className="relative z-0 w-full mb-7 group">
        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
        <label htmlFor="floating_phone" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Phone number</label>
    </div>

  <button type="submit" className=" my-7 text-white bg-[#EB1C5F] transition-all duration-300 hover:bg-[#0A0A0A] rounded-lg w-full box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Get in Touch</button>
</form>

  </div>
  <div className="md:w-[44%] w-full">
  <div className="info">
    <div className="text mt-16 mb-8">
      <span className='text-[#EB1C5F] text-sm'>Connect With Me</span>
      <h2 className='text-black text-3xl '>Let's Stay Connected
</h2>
<p className='mt-4'>I’d love to stay connected! Whether you have a project in mind, a question, or just want to say hi, feel free to reach out. I’m always happy to connect, collaborate, and explore new opportunities together.</p>
    </div>
    <div className="flex flex-wrap gap-3">
 <ul className="flex gap-x-2">
                <li>
                  <Link to="https://www.instagram.com/habiba_khaled38/">
                    <FaInstagram className="bg-[#d51b57] text-neutral-100 text-[40px] p-[10px] rounded-full transation-all duration-300 hover:bg-[#353535]" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FaFacebook className="bg-[#d51b57] text-neutral-100 text-[40px] p-[10px] rounded-full transation-all duration-300 hover:bg-[#353535]" />
                  </Link>
                </li>

                <li>
                  <Link to="https://www.linkedin.com/in/habiba-khaled13/">
                    <FaLinkedin className="bg-[#d51b57] text-neutral-100 text-[40px] p-[10px] rounded-full transation-all duration-300 hover:bg-[#353535]" />
                  </Link>
                </li>
              </ul>

 

    </div>
 
  </div>
  </div>
</div>
  </div>
</section>

</>
  )
}
