import React from 'react'
import './index.css'

const commentsData = [
    {
        id:1,
        imageUrl:"./images/v1_168.png",
        name:"Jenny Wilson",
        comment:"Lorem ipsum dolor sit amet, consectetur adipiscing..."
    },
    {
        id:2,
        imageUrl:"./images/v1_177.png",
        name:"Jenny Wilson",
        comment:"Lorem ipsum dolor sit amet, consectetur adipiscing..."
    },
    {
        id:3,
        imageUrl:"./images/v1_186.png",
        name:"Jenny Wilson",
        comment:"Lorem ipsum dolor sit amet, consectetur adipiscing..."
    }
]

const aboutBackground ={
    backgroundImage:'url("./images/about.png")'
}

const About = () => {
  return (
    <div className="about-background-container" data-aos="zoom-in" style={aboutBackground}>
        <div className="comments-container">
            <ul className="cards">
                {commentsData.map(eachData=>{
                    return(
                    <li className='comment-card'>
                        <img src={eachData.imageUrl} alt="comment" className="comment-image"/>
                        <div>
                            <h1 className='comment-card-title'>{eachData.name}</h1>
                            <p className='comment-card-description'>{eachData.comment}</p>
                        </div>
                    </li>
                    )
                })}
            </ul>
        </div>
        <div className="explore-now-container">
            <h1 className="explore-title">Tropical Adventure<br/><span className='explore-title-span'>for Students.</span></h1>
            <p className='explore-paragraph'>Student Tropical Vacation: Relax and Recharge</p>
            <ul className='explore-unordered-list'>
                <li className='explore-list'>Lorem ipsum dolor sit amet</li>
                <li className='explore-list' >Massa quis natoque sit quam</li>
                <li className='explore-list'>Eros non pellentesque elit </li>
                <li className='explore-list'>tortor id euismod habitant</li>
                <li className='explore-list'>Sed suspendisse id in ultrices</li>
            </ul>
            <button className='explore-button'>Explore More</button>
        </div>
    </div>
  )
}

export default About