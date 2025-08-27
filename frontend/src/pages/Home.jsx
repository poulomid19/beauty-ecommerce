import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Products from '../components/popular/Products'
import Bestseller from '../components/Bestseller/Bestseller'
import Collection from '../components/collections/Collection'
import Testimonial from '../components/Testimonial/Testimonial'
import Feature from '../components/features/Feature'
import Footer from '../components/footers/Footer'
import Homebanner from '../components/Homebanner/Homebanner'



const Home = () => {
  return (
    <>
       <Navbar/>
       <Hero/>
       <Products/>
       <Bestseller/>
       <Collection/>
       <Testimonial/>
       <Homebanner/>
       <Feature/>
       <Footer/>
    </>
  )
}

export default Home