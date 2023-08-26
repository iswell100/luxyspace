import React from 'react'

import Header from '../parts/Header'
import Breadcrumb from '../components/Breadcrumb/Index'


// import JustArrive from '../parts/HomePage/JustArrive'
// import BrowseRoom from '../parts/HomePage/BrowseRoom'
import Clients from '../parts/Clients'
import Sitemap from '../parts/Sitemap'
import Footer from '../parts/Footer'
import ProductDetails from '../parts/Details/ProductDetails'
import Suggestion from '../parts/Details/Suggestion'

export default function HomePage() {
  return (
    <>
      <Header theme="black" /> 
      <Breadcrumb list={[
        { url: "/", name: "Home"},
        { url: "/categories/91231", name: "Office Room"},
        { url: "/categories/91231/products/7888", name: "Detail"},
      ]} />

      <ProductDetails />
      <Suggestion />
      
      <Clients />
      <Sitemap />
      <Footer />
    </>
  )
}
