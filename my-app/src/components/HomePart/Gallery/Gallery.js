import React from 'react'
import Data from './Data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Gallery() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
      };
  return (
    <>
          <section className='collocation mt-10 mb-5'>
              <div className='container mt-5'>
              <Slider {...settings}>
                  {
                      Data.map((value, index) => {
                          return (
                              <div className='box'>
                                  <img src={value.cover} />
                              </div>
                          )
                      })
                      }
                </Slider>
              </div>
      </section>
    </>
  )
}

export default Gallery
