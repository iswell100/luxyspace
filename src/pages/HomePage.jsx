import React from 'react'

import Header from '../parts/Header'
import Hero from '../parts/Hero'
import JustArrive from '../parts/HomePage/JustArrive'
import BrowseRoom from '../parts/HomePage/BrowseRoom'
import Clients from '../parts/Clients'
import Sitemap from '../parts/Sitemap'
import Footer from '../parts/Footer'

export default function HomePage() {
  return (
    <>
      <Header /> 
      <Hero />
      <BrowseRoom />
      <JustArrive />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  )
}
