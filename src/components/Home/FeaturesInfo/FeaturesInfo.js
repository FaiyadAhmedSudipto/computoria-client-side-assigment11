import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './FeaturesInfo.css';


const FeaturesInfo = ({ info }) => {
    return (
        <div className="col-md-4 mt-2">
            <div className={`justify-content-center bg-${info.background}`}>
                <img className="mt-4 px-3" src={info.icon} style={{ width: '30%' }} alt="..." />
                {/* <FontAwesomeIcon className="info-icon" icon={info.icon}></FontAwesomeIcon> */}
                <div >
                    <h5 class="card-title mt-4 px-3">{info.title}</h5>
                    <p class="card-text px-3">{info.description}</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturesInfo;