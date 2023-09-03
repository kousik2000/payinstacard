import React from 'react'
import './index.css'
import { AiFillStar } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';

const DestinationCard = (props) => {
    const {eachItem}=props;
    const {imageUrl,title,description}=eachItem;

    const containerStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        width: '100%',
        height: '300px',
        position: 'relative',
    };

  return (
    <div className='destination-card' data-aos="fade-up" >
        <div className='image-rating-exclusive-container'>
        <img src={imageUrl} alt="card" className="card-image" style={containerStyle}/>
        <div className='rating-exclusive-container'>
            <div className='rating-container'>
            <AiFillStar className='icon-1'/>4.8</div>
            <div className='exclusive-container'>EXCLUSIVE</div>
        </div>
        </div>
        <h1 className='destination-card-title'>{title}</h1>
        <div className="more-container">
        <p className='destination-card-description'>{description}</p>
        <BsThreeDots className="icon-2"/>
        </div>
        
    </div>
  )
}

export default DestinationCard