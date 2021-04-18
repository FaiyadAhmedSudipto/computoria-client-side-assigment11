import React from 'react';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import support from '../../../images/support.png'
import like from '../../../images/like.png'
import certified from '../../../images/certified.png'
import FeaturesInfo from '../FeaturesInfo/FeaturesInfo';

const infosData = [
    {
        title: 'Reliable Services',
        description: 'Every service our computer technicians provide is guaranteed to be prompt & reliable.',
        // icon: faClock,
        icon: support,
        background: 'light'
    },
    {
        title: 'Skilled Personal',
        description: 'All the experts at Fixoria have the skills & experience to get the job done right.',
        // icon: faMapMarker,
        icon: like,
        background: 'light'
    },
    {
        title: 'Licensed & Certified',
        description: "For your safety and peace of mind, we're fully licensed, certified, and insured!",
        // icon: faPhone,
        icon: certified,
        background: 'light'
    }
]
const Features = () => {
    return (
        // <section className="d-flex justify-content-center">
        <section className="mt-5 mb-3">
            <div className="text-center">
                <h2 className="fw-bold">WHY CHOOSE US</h2>
                <h5 className="text-muted">There are dozens of reasons why our clients choose Computoria <br /> as their computer service provider of choice.</h5>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row ">
                    {
                        infosData.map(info => <FeaturesInfo info={info} key={info.title}></FeaturesInfo>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Features;