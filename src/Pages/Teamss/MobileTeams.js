import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Team.css"
import MobileTeamsCard from './MobileTeamsCard';
function MobileTeams({reviews}) {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        swip:true,
        autoplay:true,
        autoplaySpeed:3000,
        focusOnSelect:true,
        slidesToScroll: 1,

        responsive: [
          {
            breakpoint: 1000, // Apply these settings when screen size is 1000px or smaller
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 620, // Apply these settings when screen size is 620px or smaller
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 550, // Apply these settings when screen size is 550px or smaller
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <>
    <div className='leader-ele'>
      <h2  style={{
              color: "gray",
              fontSize: 30,
              display: "flex",
              justifyContent: "center",
              fontWeight: 400,
              marginTop: 10,
            }}> Leadership Team</h2>
      
      <p  style={{
              color: "#666666",
              fontSize: 14,
              display: "flex",
              justifyContent: "center",
              fontWeight: 400,
              marginTop: 10,
            }}>vision and courage to create</p>
    </div>
  <Slider {...settings}>
         {reviews.map((card) => (
        <div key={card.id}>
          <MobileTeamsCard card={card}/>
        </div>
      ))}
    </Slider> 
    </>
  )
}

export default MobileTeams