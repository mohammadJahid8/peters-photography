import React from 'react';
import { Link } from 'react-router-dom';
import self2 from '../../../images/self2.jpg';
import './HomeAbout.css'

const HomeAbout = () => {
    return (
        <div className="container">
            <h2 className="title text-center mt-5 mb-5">About me</h2>
            <div className="about-content">
                <div className="">
                    <img src={self2} alt="" />
                </div>
                <div className="description">
                    <div>
                        <h3 className="text">Hi, I'm Peter. Portrait photographer from Bangladesh.</h3>
                        <p>I am a Passionate web developer with 0 years of experience creating solutions to clients' website
                            needs
                            seeking employment at SmartWeb where I can combine my experience in building web portals,
                            applications and ecommerce websites to bring unique attributes to the organization.I am
                            Self-motivated team player seeking a position as a lead web
                            developer with Next Generation Web Development where I can apply my advanced knowledge of web
                            design with my leadership abilities to meet client needs and exceed their expectations.</p>
                        <Link to='/about'>More About me</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;