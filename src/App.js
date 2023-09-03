import React,{useEffect} from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Destinations from './components/Destinations'
import Offers from './components/Offers'
import BookingPage from './components/BookingPage'
import Testimonial from './components/Testimonial'

import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

  useEffect(() => {
    AOS.init({ once: true,duration: 2000 });
  }, []);

  return (
    <div className='main-container'>
      <Header />
      <Home />
      <About />
      <Destinations/>
      <Offers/>
      <BookingPage/>
      <Testimonial/>
    </div>
  )
}

export default App