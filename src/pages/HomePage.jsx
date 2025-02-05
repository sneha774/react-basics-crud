import React from 'react'
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import Listings from '../components/Listings';
import ActionFooter from '../components/ActionFooter';

const Home = () => {
    return (
        <>
            <Hero />
            <HomeCards />
            <Listings isHome={true} />
            <ActionFooter />
        </>
    )
}

export default Home
