import React from 'react';
import { Link } from 'react-router-dom';
import errorBg from '../../images/errorBg.jpg'

const NotFound = () => {
    return (
        <div className="justify-content-center pt-5 mt-5">
            <div>
                <h3 class="blockquote-footer px-5">
                    Sorry Page Not Found!<cite title="Source Title"></cite>
                </h3>
                <h3 class="blockquote-footer px-5">
                    <Link to='/home'>Back to home</Link> <cite title="Source Title"></cite>
                </h3>
                <div className="justify-content-center">
                    <img className="justify-content-center img-fluid" style={{ height: '500px' }} src={errorBg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default NotFound;