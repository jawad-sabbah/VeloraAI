import React from 'react'
import Navbar from '../components/NavBar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Reviews from '../components/Reviews'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Reviews />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}

export default Home