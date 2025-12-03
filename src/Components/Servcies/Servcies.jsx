import React from 'react'
import web from "../../assets/code.png"
import ui from "../../assets/ui.png"
import grah from "../../assets/grah.png"
import desgin from "../../assets/web-design.png"

export default function Servcies() {
  return (
   <section id="services" className='bg-[#161616] py-20 scroll-mt-20'>
  <div className="mx-auto md:px-14 px-7">
     <div className="flex flex-wrap md:flex-nowrap justify-between items-start">
<div className="md:w-[45%] w-full md:sticky top-30">
<div className="title text-[#CFD1BC]">
  <span className=' text-sm'>بنبرمج أي موقع قبل ما القهوة تبرد</span>
  <h2 className="text-5xl mb-5 mt-3  uppercase text-[#EB1C5F]">Servcies</h2>
  <p className='text-xl'>We provide digital solutions to help your business succeed online. From building responsive websites and creating engaging graphics to designing intuitive interfaces, our services combine creativity and technology to deliver seamless results.</p>
</div>
</div>
<div className="md:w-[50%] w-full ">
<div className="w-full  my-7 border-[#CFD1BC] p-10 border text-[#CFD1BC]  rounded-2xl">
  <div className="icon">
    <img src={web} alt="" className='w-18'/>
  </div>
<h3 className="text-2xl mb-2 mt-3  text-[#EB1C5F]">Web Developer</h3>
<p className='text-xl'>Building websites that run smooth, fast, and efficiently—turning ideas into real, working projects</p>
</div>
<div className="w-full  my-7 border-[#CFD1BC] p-10 border text-[#CFD1BC]  rounded-2xl">
  <div className="icon">
    <img src={ui} alt="" className='w-18'/>
  </div>
<h3 className="text-2xl mb-2 mt-3  text-[#EB1C5F]">UI Design</h3>
<p className='text-xl'>Crafting modern, intuitive interfaces that are easy to use and visually stunning for websites</p>
</div>
<div className="w-full  my-7 border-[#CFD1BC] p-10 border text-[#CFD1BC]  rounded-2xl">
  <div className="icon">
    <img src={grah} alt="" className='w-18'/>
  </div>
<h3 className="text-2xl mb-2 mt-3  text-[#EB1C5F]">Graphic Design</h3>
<p className='text-xl'>Designing eye-catching visuals—logos, banners, social media posts, and more to make your brand stand out.</p>
</div>
<div className="w-full  my-7 border-[#CFD1BC] p-10 border text-[#CFD1BC]  rounded-2xl">
  <div className="icon">
    <img src={desgin} alt="" className='w-18'/>
  </div>
<h3 className="text-2xl mb-2 mt-3  text-[#EB1C5F]">Web Desgin</h3>
<p className='text-xl'>Creating visually appealing and user-friendly websites that leave a lasting impression.</p>
</div>
</div>
     </div>
    </div>
   </section>
  )
}
