import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { img, name, price, description } = service;
    return (
        <div className='service-card'>
            <div>
                <img src={img} alt="" />
                <h2>{name}</h2>
                <p>Price:{price}</p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;