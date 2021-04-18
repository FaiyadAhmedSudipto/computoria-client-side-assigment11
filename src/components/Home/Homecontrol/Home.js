import React from 'react';
import Services from '../Services/Services';
import Features from '../Features/Features';
import FeaturedService from '../FeaturedService/FeaturedService';
import Navbar from '../../Shared/Navbar/Navbar';
import HeaderMain from '../Header/HeaderMain/HeaderMain';
import Header from '../Header/HeaderControl/Header';
import Testimonials from '../Testimonials/Testimonials';
import News from '../News/News';
import Team from '../Team/Team';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <HeaderMain />
            <Features />
            <Services />
            <FeaturedService />
            <Testimonials />
            <News />
            <Team />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;