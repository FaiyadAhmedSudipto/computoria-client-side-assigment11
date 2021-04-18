import React from 'react';
import SamuelTyler from '../../../images/SamuelTyler.jpg';
import MarieJerry from '../../../images/MarieJerry.jpg';
import AlbertPhilip from '../../../images/AlbertPhilip.jpg';
import JordanBilly from '../../../images/JordanBilly.jpg';
import TeamDetails from '../TeamInfo/TeamDetails';

const teamInfo = [
    {
        name: 'Samuel Tyler',
        about: 'General Manager',
        authorImg: SamuelTyler,
        call: '0123454564'
    },
    {
        name: 'Marie Jerry',
        about: 'Field Technician',
        authorImg: MarieJerry,
        call: '0123452364'
    },
    {
        name: 'Albert Philip',
        about: 'Customer Service Manager',
        authorImg: AlbertPhilip,
        call: '01475824'
    },
    {
        name: 'Jordan Billy',
        about: 'Repair Technician',
        authorImg: JordanBilly,
        call: '0123474124'
    }
    
]


const Team = () => {
    return (
        <section className="doctors">
            <div className="container">
                <div className="text-center  text-dark mb-5">
                    <h2>MEET OUR TEAM</h2>
                    <h5 className="text-muted">All our technicians are fully qualified and licensed. <br /> Moreover, they are incredibly skillful and proficient in various aspects of computer repair.</h5>
                </div>
                <div className="row">
                    {
                        teamInfo.map(doctors => <TeamDetails doctors={doctors} key={doctors.title} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Team;