import React from 'react';
import './index.css';

const Testimonial = () => {
    const testimonialData = [
        {
            id: 1,
            imageUrl: "./images/v1_327.png",
            name: 'Corey Korsgaard',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
            id: 2,
            imageUrl: "./images/v1_336.png",
            name: 'Corey Korsgaard',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
            id: 3,
            imageUrl: "./images/v1_345.png",
            name: 'Corey Korsgaard',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        }
    ];

    return (
        <div className='testimonial-container' data-aos="fade-up">
            <h1 className='testimonial-title'>Testimonials</h1>
            <div className='testimonial-comment-container'>
                {testimonialData.map(eachItem => (
                    <div key={eachItem.id} className='container'>
                        <div className='testimonial-image' style={{ backgroundImage: `url(${eachItem.imageUrl})` }}></div>
                        <h1 className='testimonial-card-head'>{eachItem.name}</h1>
                        <hr className='testimonial-hr' />
                        <p className='testimonial-card-paragraph'>{eachItem.description}</p>
                    </div>
                ))}
            </div>
            <h1 className='final-head'>Student Special: Discounted rates on tropical getaways!</h1>
            <p className='final-paragraph'>Let’s embody your beautiful ideas together, simplify the way you visualize your next big things.</p>
            <div className='final-list-container'>
                <p className="final-list">Privacy Policy</p>
                <p className="final-list">Terms of Use</p>
                <p className="final-list">Sales and Refunds</p>
                <p className="final-list">Legal</p>
                <p className="final-list">About</p>
                <p className="final-list">Schedules</p>
                <p className="final-list">Pricing</p>
                <p className="final-list">Membership</p>
                <p className="final-list">Joins</p>
            </div>
        </div>
    );
}

export default Testimonial;
