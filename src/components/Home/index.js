import React,{useEffect} from 'react'
import './index.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(() => {
    AOS.init({ once: true,duration: 2000 });
  }, []);

  return (
    <div className="home-background-container">
        <div className="home-text-container" data-aos="fade-right">
            <p className='start-text'>Discover the beauty of the tropics</p>
            <h1 className='title'>Tropical <br/> Destinations <br/><span className='title-span'>For Student</span></h1>
            <p className='end-text'>Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer rutrum nisi. A nec nisl vitae </p>
            <button className="sign-up-button">SIGN UP</button>
        </div>    
        <div className='home-image-container' data-aos="fade-left">
            <img src="./images/Section 172.png" alt="home" className="homepage-image-1"/>
        </div>
    </div>

  )
}

export default Home