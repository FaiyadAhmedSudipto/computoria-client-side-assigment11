import React from 'react';

const Testimonial = ({ review }) => {
    // const {quote,name,from, date } = props.review;
    return (
        <div className=" col-md-4 mt-4">
            <div className="card shadow-lg bg-body rounded">
                <div className="card-body">
                    <p className="card-text">{review.quote}</p>
                    <h5 className="card-text text-dark">{review.name}</h5>
                    <p className="card-text text-muted">{review.date}, {review.from}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;