import React, { useState } from 'react';
import './index.css'
import DestinationCard from '../DestinationCard'
import { BsArrowLeft,BsArrowRight } from 'react-icons/bs';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const desDetail =[
    {
        id:1,
        imageUrl:'./images/v1_204.png',
        title:'Harvard University',
        description:"Cambridge, Massachusetts, UK",
    },
    {
        id:2,
        imageUrl:'./images/v1_217.png',
        title:'Harvard University',
        description:"Cambridge, Massachusetts, UK",
    },
    {
        id:3,
        imageUrl:'./images/v1_230.png',
        title:'Harvard University',
        description:"Cambridge, Massachusetts, UK",
    },
    {
        id:4,
        imageUrl:'./images/v1_243.png',
        title:'Harvard University',
        description:"Cambridge, Massachusetts, UK",
    },
]

const Destinations = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false, 
        slidesToShow:3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        arrows: false,
        beforeChange: (current, next) => {
            setCurrentSlide(next);
        },
        responsive: [
          {
            breakpoint: 720,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplaySpeed: 3000,
              cssEase: 'linear'
            },
          },
          {
            breakpoint: 952,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              autoplaySpeed: 3000,
              cssEase: 'linear'
            },
          },
        ],
      };
  return (
    <div className='destinations-container' data-aos="fade-up">
        <h1 className='destinations-title'>Our Destinations</h1>
        <div className="destinations-card-container">
            <Slider {...settings}>
                {desDetail.map((eachItem) => (
                    <DestinationCard eachItem={eachItem} key={eachItem.id}/>
                ))}
            </Slider>
        </div>
        <div className="slide-numbers">
            <BsArrowLeft/> {currentSlide + 1}/{desDetail.length} <BsArrowRight/>
        </div>
    </div>
  )
}

export default Destinations