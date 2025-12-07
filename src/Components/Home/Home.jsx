import React from 'react'
import MainBanner from '../MainBanner/MainBanner'
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import SectionPortfolio from '../SectionPortfolio/SectionPortfolio'
import TechTools from '../TechTools/TechTools'
import ContactUs from '../ContactUs/ContactUs'
import Counter from '../Counter/Counter'
import Servcies from '../Servcies/Servcies'

export default function Home() {
  return (
<>
<MainBanner/>
<About/>
<Servcies/>
<SectionPortfolio/>
<Counter/>
<Portfolio/>
<TechTools/>
<ContactUs/>
</>
  )
}
