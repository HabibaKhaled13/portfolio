import React from 'react'
import style from './SectionPortfolio.module.css'
import { HashLink } from "react-router-hash-link";
export default function SectionPortfolio() {
  return (
    <section className={`w-full h-100 ${style.section} flex justify-center items-center relative`}>

      <div className="title text-center">
        <h2 className="md:text-7xl text-6xl uppercase text-[#c9ccb8a8]">Portfolio</h2>

        <div className="btn mt-6">
          <HashLink
              smooth
            to="#portfolio"
            className="inline-block   bg-white/20 py-3.5 px-7.5 border border-b-0 border-r-0 border-white/50 text-[13px] text-white"
          >
            Take a Look
          </HashLink>
        </div>
      </div>
    </section>
  )
}
