import React,{useState} from 'react'
import './index.css'


import { BiPlus,BiMinus } from 'react-icons/bi';

const BookingPage = () => {
    const [starValue,setStarValue] = useState(1)
    const [roomValue,setRoomValue] = useState(1)

    const incrementStarValue = () => {
        setStarValue(starValue + 1);
    };

    const decrementStarValue = () => {
        if (starValue > 1) {
            setStarValue(starValue - 1);
        }else{
            setStarValue(1);
        }
    };

    const incrementRoomValue = () => {
        setRoomValue(roomValue + 1);
    };

    const decrementRoomValue = () => {
        if (starValue > 1) {
            setRoomValue(roomValue - 1);
        }else{
            setRoomValue(1);
        }
    };

  return (
    <div className="bookings-container" data-aos="zoom-in">
        <div className='home-image-container booking-image top'>
            <img src="./images/Section 173-1.png" alt="home" className="homepage-image-1"/>
        </div>
        <div className='input-container'>
            <div className='input-card-container'>
                <h1 className='booking-title'> Book Now</h1>
                <p className='booking-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <label htmlFor='city' className='label'>CITY</label><br/>
                <input type="text" placeholder='Enter city' id="city" className='city-input'/>
                <div className='arrival-departure-container'>
                    <div>
                    <label htmlFor='date-1' className='label'>Arrival</label><br/>
                    <input type="date" id="date-1" className='date-input'/>
                    </div>
                    <div>
                    <label htmlFor='date-2' className='label'>Departure</label><br/>
                    <input type="date" id="date-2" className='date-input'/>
                    </div>
                </div>
                <div className='star-room-container'>
                    <div>
                        <label htmlFor='star' className='label'>STAR</label><br/>
                        <div className='star-container' id="star">
                        <BiPlus className="icon-3" onClick={incrementStarValue}/><p className='number'>{starValue}</p><BiMinus onClick={decrementStarValue} className="icon-4"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='room' className='label'>ROOM</label><br/>
                        <div className='star-container' id="room">
                        <BiPlus className="icon-3" onClick={incrementRoomValue}/><p className='number'>{roomValue}</p><BiMinus onClick={decrementRoomValue} className="icon-4"/>
                        </div>
                    </div>
                </div>
                <button className="book-button">BOOK NOW</button>
            </div>
        </div>
        <div className='home-image-container booking-image bottom'>
            <img src="./images/Section 173-1.png" alt="home" className="homepage-image-1"/>
        </div>
    </div>
  )
}

export default BookingPage