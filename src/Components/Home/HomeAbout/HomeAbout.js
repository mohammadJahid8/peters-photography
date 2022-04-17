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
                        <p>I love to click mostly the natural ones or the ones that gives me a perfect satisfaction of where I am in. To get good shots, one needs to understand a few concepts of photography like lighting techniques, backgrounds, arrangements and so on, so that when the outcome is done, you get a wonderful shot. Practicing is another method to get your shots to the perfect, the more you practice on your choice of interest, the more better your shots would become. In order to make my shots good , I did take up short courses to learn in detail so that I understand how to take good shots and great snaps that look natural and wonderful.</p>
                        <Link to='/about'>More About me</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;