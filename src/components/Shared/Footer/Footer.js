import React from 'react';
import './Footer.css';
// import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from '../FooterCol/FooterCol';

const Footer = () => {
    const noNamed = [
        {name: "Reliable Services" , link: "/emergency"},
        {name: "Skilled Personal" , link: "/checkup"},
        {name: "Licensed & Certified" , link: "/personal-treatment"}
    ]
    const ourAddress = [
        {name: "Phoenix - 14525 America"},
        {name: "London"},
       
    ]
    const technicians = [
        {name: "David William (CEO)" , link: "/emergency"},
        {name: "Samuel Tyler" , link: "/checkup"},
        {name: "Marie Jerry" , link: "/personal-treatment"},
        {name: "Albert Philip" , link: "/tooth-extract"},
        {name: "Jordan Billy" , link: "/checkup"}
    ]
    const services = [
        {name: "Data Recovery & Repair" , link: "/emergency"},
        {name: "Assembling Personal Computer" , link: "/checkup"},
        {name: "Laptop Repair/Computer Repair" , link: "/personal-treatment"},
        {name: "Cleaning Laptop" , link: "/tooth-extract"},
        {name: "Purchase & Resell" , link: "/checkup"},
        {name: "OS Management" , link: "/checkup"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Oral Health" menuItems={technicians}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com" target="blank"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com" target="blank"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com" target="blank"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-3">
                            <h6>Call now</h6>
                            <button className="btn btn-light">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;