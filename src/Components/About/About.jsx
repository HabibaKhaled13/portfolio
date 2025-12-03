import React from 'react'
import { Link } from 'react-router-dom'
import { GoDotFill } from "react-icons/go";
import about from "../../assets/about-me.png"
export default function About() {
  return (
<section id='about' className='bg-[#F7F7F7] scroll-mt-20'>
        <div className="flex flex-wrap md:justify-between  ">
        <div className="title text-neutral-700 md:w-[52%] md:my-0 my-9 md:px-14 px-7 self-center">
          <span className='text-sm font-bold'>حكايتي هنا خد نبذه عني</span>
<h2 className="relative text-5xl font-bold mb-4 mt-2  text-[#EB1C5F]  ">
  About Me.
</h2>

            <p className='  mb-4'>I'm a Front-End Developer with knowledge in designing, developing, and deploying web applications using HTML5, CSS3, Bootstrap, Tailwind CSS, JavaScript,TypeScript, React JS , NextJs nd Seeking a challenging opportunity as a Software Engineer in a company with a good reputation that will add to my Knowledge, Skills, and Experience on a day-to-day basis.</p>
            <p className=' '>I also work with WordPress and Shopify to build and customize dynamic, high-performing websites and eCommerce stores — including hands-on experience with EasyOrders for managing and optimizing online orders.</p>
        <div className="btn mt-6">
                <Link to="" className="bg-[#0D0D0D] hover:text-black hover:bg-[#d8d4cd] transition-all duration-300 text-[#D8D9C4]  inline-block py-3 px-6 font-semibold rounded-full">
              <GoDotFill className='inline me-1 text-[#8CD62F] ' />
  Download My CV
                </Link>
            </div>
   
        </div>
        <div className=" md:w-[45%]">
        <img src={about} alt="about me" className='w-full' />
        </div>
        </div>

</section>
  )
}
