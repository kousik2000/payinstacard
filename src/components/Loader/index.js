import React from 'react'
import './index.css'

const Loader = () => {
  return (
    <div className='loader-container'>
        <img src="./images/logo.png" className='loader-image animate__animated animate__zoomIn' alt="loading"/>
    </div>
  )
}

export default Loader