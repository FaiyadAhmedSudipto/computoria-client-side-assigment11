import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router';
import "./ServiceDetail.css"

const ServiceDetail = ({ event }) => {
    // const deleteEvent = id => {}
    const history = useHistory()
    const handleBook = (_id) => {
        history.push(`/book/${_id}`);
    }
    return (
        <div className="justify-content-center">
            <div className="col-md-4  pb-5">
                <div className="card" style={{ width: '18rem' }}>
                    {/* <img style={{ height: '100px' }} class="card-img-top" src={service.img} alt="" /> */}
                    <img class="card-img-top" src={event.imageURL} alt="" />
                    <div class="card-body">
                        <h5 className="card-title mt-3 mb-3">{event.productName}</h5>
                        <p className="card-text">{event.details}</p>
                        <button className="col btn btn-dark-blue" onClick={() => handleBook(event._id)}>Order It</button>
                        {/* <button class="btn-dark-blue button" onClick={() => handleBook(event._id)}>Order It</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;