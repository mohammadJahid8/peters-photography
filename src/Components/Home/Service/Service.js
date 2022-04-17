import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { img, name, price, description } = service;
    return (
        <div className='service-card'>
            <div>
                <img src={img} alt="" />
                <div className='card-info'>
                    <h4>{name}</h4>
                    <p className='fs-5'>Cost:${price}</p>
                    <p>{description}</p>
                </div>
                <Link to="/checkout">Checkout</Link>
            </div>
        </div>
    );
};

export default Service;