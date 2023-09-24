import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PopData from "./PopData";
import Slider from "react-slick";

// const SampleNextArrow = (props) => {
//   const { onClick } = props
//   return (
//     <div className='contreol-btn' onClick={onClick}>
//       <button className='next'>
//         <i className='fa fa-long-arrow-alt-right'></i>
//       </button>
//     </div>
//   )
// }
// const SamplePrevArrow = (props) => {
//   const { onClick } = props
//   return (
//     <div className='contreol-btn' onClick={onClick}>
//       <button className='prev'>
//         <i className='fa fa-long-arrow-alt-left'></i>
//       </button>
//     </div>
//   )
// }

function Cards() {
  //react stick
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 2,
    // nextArrow: <SampleNextArrow />,
    // prevArrow:<SamplePrevArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
        <Slider {...settings}>
      {PopData.map((value) => {
        return (

         
          <div className='cards w-[78%] m-auto'>
            <div className='item' key={value.id}>
              <div className='image'>
                <img src={value.images} alt="carousel" className='mb-3' />
                <i className='fas fa-map-marked-alt   mb-5'>
                <label className=' font-sans  p-5'>{value.country}</label></i>
              </div>
              <div className='rate m-2 flex justify-center mt-[10px] text-green-400'>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
              </div>
              <div className='details'>
                <h3 className=' relative font-extrabold mb-10 text-green-500 after:absolute'>{value.name}</h3>
                <div className='boarder'></div>
                <h4 className=' font-bold text-emerald-600'>${value.price.toLocaleString()}<span className='mx-5 font-thin text-gray-950'>Each Day</span></h4>
              </div>
            </div>
          </div>
        );
      })}
        </Slider>
    </div>
  );
}

export default Cards;