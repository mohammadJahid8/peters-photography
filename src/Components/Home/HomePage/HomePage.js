import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeAbout from '../HomeAbout/HomeAbout';
import Services from '../Services/Services';
import './HomePage.css'

const HomePage = () => {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <HomeAbout></HomeAbout>
            <Services></Services>
            <Footer></Footer>
        </>
    );
};

export default HomePage;