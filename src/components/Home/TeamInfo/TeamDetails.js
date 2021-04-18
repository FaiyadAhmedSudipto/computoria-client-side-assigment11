import React from 'react';
import img from '../../../images/doctor-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import "./TeamDetails.css"


const TeamDetails = (props) => {
    const { name, about, authorImg, call } = props.doctors;
    return (
        <div className="col-md-3 text-center">
            <div class="card" style={{ width: '16rem' }}>
                <img src={authorImg} style={{height: "120%"}} className="img-fluid mb-3 card-img-top" alt="" />
                <div class="card-body">
                    <h4>{name}</h4>
                    <p class="card-text">{about}</p>
                    <button className="button"> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt} /> +88-{call} </button>
                </div>
            </div>
        </div>

    );
};

export default TeamDetails;