import React from 'react';

const NewsInfo = (props) => {
    const { title, description, author, search, date, img } = props.blog;
    return (
        <div className="card shadow-sm">
            <div className="container card-body">
                <img class="card-img-top" src={img} alt="" />
                <h4 className='mt-3'>{title}</h4>
                <h6 className="text-secondary fst-italic">{author}--{date}</h6>
                <p className="card-text text-muted mt-4">{description}</p>
                {/* <button class="btn btn-outline-light" type="button" ><a href={`https://google.com/${search}`} target="blank">Explore More</a> </button> */}
                <button class="btn btn-outline-light" type="button" ><a href="https://google.com/" target="blank">Explore More</a> </button>
            </div>

        </div>
    );
};

export default NewsInfo;