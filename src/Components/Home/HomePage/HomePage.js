import React from 'react';
import Banner from '../Banner/Banner';
import HomeAbout from '../HomeAbout/HomeAbout';
import Services from '../Services/Services';
import './HomePage.css'

const HomePage = () => {
    return (
        <>
            <Banner></Banner>
            <HomeAbout></HomeAbout>
            <Services></Services>
        </>
    );
};

export default HomePage;