import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");

    useEffect(() => {
        fetch('https://salty-stream-67621.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="fw-bold">OUR CUSTOMERS EXPERIENCE</h2>
                    <h5 className="text-muted">We Believe that customers are the main part of an company.<br /> So we try our best to ensure the most valuable services for you!</h5>
                </div>
                <div className="card-deck mt-5 row">
                    {
                        reviews.map(review => <Testimonial review={review} key={review.name} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;