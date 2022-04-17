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
            <h2 className="text-center mt-5 shoot-title mb-4">I SHOOT</h2>
            <div className="service-container container">
                {
                    services.map((service) => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;