import React, { useEffect, useState } from 'react';
import { css } from "@emotion/core";
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
    
    const [events, setEvents] = useState([]);

    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");

    useEffect(() => {
        fetch('https://salty-stream-67621.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h2 className="fw-bold">OUR SERVICES</h2>
                <h5 className="text-muted">We provide various computer repair services and solutions for our
                <br />new and regular customers. Feel free to find out more below.</h5>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-3 pt-3">
                    {
                        events.map(event => <ServiceDetail event={event}></ServiceDetail>)
                        // serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                    }
                </div>
            </div>
        </section >
    );
};

export default Services;