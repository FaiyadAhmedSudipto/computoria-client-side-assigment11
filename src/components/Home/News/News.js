import React from 'react';
import security from '../../../images/security.jpg';
import clean from '../../../images/clean.jpg';
import speed from '../../../images/speed.jpg';
import './News.css'
import NewsInfo from '../NewsInfo/NewsInfo';


const blogData = [
    {
        title: 'Top 10 Network Security Tips from Our Experts',
        description: 'The internet has become a space riddled with malicious links...',
        author: 'Marie Jerry',
        img: security,
        date: '23 March 2021',
        search: 'computer-security-tips'
    },
    {
        title: 'How To Clean Your PC from Viruses',
        description: 'There’s nothing quite like realizing your Windows PC, Mac, or laptop...',
        author: 'Samuel Tyler',
        img: clean,
        date: '23 Jan 2020',
        search: 'computer-security-tips'
    },
    {
        title: 'How to Speed Up Your Old MacOS Laptop',
        description: 'Remember the feeling of a brand new Mac? A Mac without rainbow...',
        author: 'Albert Philip',
        img: speed,
        date: '14 April 2021',
        search: 'computer-security-tips'
    },
]

const News = () => {
    return (
        <section className="blogs my-5">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="fw-bold">LATEST NEWS</h2>
                    <h5 className='text-secondary'>Check out the latest publications by our team.</h5>
                </div>
                <div className="card-deck mt-5">
                    {
                        blogData.map(blog => <NewsInfo blog={blog} key={blog.title} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default News;