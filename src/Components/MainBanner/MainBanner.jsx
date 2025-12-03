import React from 'react'
import { DiCssTricks } from "react-icons/di";
import { FaArrowTrendUp } from "react-icons/fa6";
import styles from "./MainBanner.module.css";
import DecryptedText from "../DecryptedText/DecryptedText";
import { Link } from 'react-router-dom';


export default function MainBanner() {
  return (
<section className={`${styles.section} w-full md:h-screen h-[80vh] ` }>
        <div className="title text-center text-[#CFD1BC] flex flex-col  md:h-screen h-[80vh] justify-center items-center md:px-14 px-7">
          <span className='font-boldtext-[#837F78]'>شغل بيعيش … مش بس يتصمّم</span>
  <div className='my-5'>
<DecryptedText
  text="Fullstack Developer"
  animateOn="view"
  revealDirection="start"
  className='text-[#EB1C5F]  uppercase  font-bold'
/>
</div>

<p>Frontend Developer (React.js & Next.js) and Backend Developer (PHP & Laravel)<br/>Interactive, Responsive, User-Friendly, Dynamic, Modern.
</p>

</div>

    </section>
  )
}



  

