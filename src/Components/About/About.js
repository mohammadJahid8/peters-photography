import React from 'react';
import './About.css';
import myself from '../../images/jahid.png';
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';


const About = () => {
    return (
        <>
            <Header></Header>
            <div className="container">
                <h2 className="title text-center mt-5 mb-5 fs-1">About me</h2>
                <div className="about-content">
                    <div className="">
                        <img className='aboutMe-img ' src={myself} alt="" />
                    </div>
                    <div className="description">
                        <div>
                            <h3 className="text">Hi, Myself Mohammad Jahid.</h3>
                            <p>I am a Passionate web developer with 0 years of experience creating solutions to clients' website
                                needs
                                seeking employment at SmartWeb where I can combine my experience in building web portals,
                                applications and ecommerce websites to bring unique attributes to the organization.I am
                                Self-motivated team player seeking a position as a lead web
                                developer with Next Generation Web Development where I can apply my advanced knowledge of web
                                design with my leadership abilities to meet client needs and exceed their expectations.</p>

                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default About;