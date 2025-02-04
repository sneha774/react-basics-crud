import React from 'react'

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import Listings from './components/Listings';
import ActionFooter from './components/ActionFooter';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <Listings />
      <ActionFooter />
    </>
  )
}

export default App
