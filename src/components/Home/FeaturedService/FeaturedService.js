import React from 'react';
import { useHistory } from 'react-router';
import CEO from '../../../images/CEO.jpg'

const FeaturedService = () => {
    const history = useHistory()
    const handleFeaturedServices = () => {
        history.push(`/customer`);
    }
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-6 align-self-center">
                        <h1>Learn More From Our CEO</h1>
                        <p className="text-secondary my-5">
                            Computoria is one of the leading computer repair companies in the US providing services for individuals and businesses. No matter what kind of a PC you have, we can fix it. We have a lot of services for you. Such as Data Recovery, HDD/SDD Repair, Assembling Personal Computer, Laptop Repair/Computer Repair,Cleaning Laptop with Repairing Thermal Paste! We also purchase and resell Old Computers and Laptops.You can find Operating System from us with other software management.All our technicians are fully qualified and licensed. Moreover, they are incredibly skillful and proficient in various aspects of computer repair. So, feel free to connect with us!!
                        </p>
                        <button className="btn btn-brand" onClick={handleFeaturedServices}>Book A Service Now</button>
                        {/* <button class="btn btn-facebook">Facebook</button>  */}
                    </div>
                    <div className="col-md-6 mb-4 m-md-0">
                        <img className="img-fluid" src={CEO} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;