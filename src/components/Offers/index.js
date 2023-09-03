import React from 'react';
import './index.css';

const Offers = () => {
    const offersBackground = {
        backgroundImage: 'url("./images/Vector-2.png")',
        backgroundSize: 'cover',
        width: '100%',
        height: '100vh',
        position: 'relative',
    };

    return (
        <div className='offers-container' style={offersBackground} >
            <div className="explore-now-container"  data-aos="fade-right">
            <p className='explore-paragraph'>Get 20% off for student</p>
            <h1 className="explore-title">Student discounts available.<br/><span className='explore-title-span'>Get ready for some fun in the sun!</span></h1>
            
            <ul className='explore-unordered-list'>
                <li className='explore-list'>Lorem ipsum dolor sit amet</li>
                <li className='explore-list' >Massa quis natoque sit quam</li>
                <li className='explore-list'>Eros non pellentesque elit </li>
                <li className='explore-list'>tortor id euismod habitant</li>
                <li className='explore-list'>Sed suspendisse id in ultrices</li>
            </ul>
            <button className='explore-button'>Explore More</button>
            </div>
            <div className='offers-image' data-aos="fade-left">
                <img src="./images/Section 173.png" alt="home" className="homepage-image-1"/>
            </div>
        </div>
    );
}

export default Offers;
