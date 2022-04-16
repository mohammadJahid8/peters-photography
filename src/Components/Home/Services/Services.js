import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    console.log(services);
    useEffect(() => {
        fetch('services.json')
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, [])
    return (
        <div>
            <h1 className="text-center mt-5">Our Services</h1>
            <div className="service-container container">
                {
                    services.map((service) => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;