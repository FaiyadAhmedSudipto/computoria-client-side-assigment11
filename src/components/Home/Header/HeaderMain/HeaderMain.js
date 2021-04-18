import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './HeaderMain.css'

const HeaderMain = () => {
    const history = useHistory()
    const handleHeader = () => {
        history.push(`/customer`);
    }

    return (
        <main style={{height:'700px'}} className="row d-flex align-items-center headerMain">
            <div className="col-md-3 offset-md-1">
                <h1 className="fw-bold fs-1">Computoria</h1>
                <p className="text-secondary text-start">Computoria is one of the leading computer repair companies in the US providing services for individuals and businesses. No matter what kind of a PC you have, we can fix it.</p>
                {/* <button className="btn btn-brand">GET APPOINTMENT</button> */}
                {/* <button className="button" onClick={handleHeader}>Create An Account</button> */}
                <button class="button" onClick={handleHeader}><span>Visit Now</span></button>
            </div>
        </main>
    );
};

export default HeaderMain;