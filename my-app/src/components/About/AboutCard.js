import React from 'react';

function AboutCard() {
  return (
    <div className=' bg-neutral-100 mt-5 text-gray-800 py-10 px-4 lg:px-20'>
      <div className='container mx-auto flex flex-col lg:flex-row items-center justify-between'>
        <div className='lg:w-1/2'>
          <h3 className='text-2xl font-semibold text-sky-700 mb-2'>About Us</h3>
          <h2 className='text-4xl font-bold text-sky-700 mb-4'>
            We will <span className='text-lime-500'>Find the right Destination for you :)</span>
          </h2>
          <p className='text-gray-700 leading-7 p-1'>
            Founded in 1996 in Amsterdam, Booking.com has grown from a small Dutch start-up to one of the world’s leading digital travel companies. Part of Booking Holdings Inc. (NASDAQ: BKNG), Booking.com’s mission is to make it easier for everyone to experience the world.
            By investing in technology that takes the friction out of travel, Booking.com seamlessly connects millions of travelers to memorable experiences, a variety of transportation options, and incredible places to stay – from homes to hotels, and much more. As one of the world’s largest travel marketplaces for both established brands and entrepreneurs of all sizes, Booking.com enables properties around the world to reach a global audience and grow their businesses.
          </p>
          <button className='bg-sky-700 hover:bg-sky-800 text-white font-semibold py-2 px-6 mt-4 rounded-md'>
            Find More <i className='fas fa-long-arrow-alt-right ml-2'></i>
          </button>
        </div>
        <div className='lg:w-1/2 mt-8 lg:mt-0'>
          <img
            src='images/1664175399898.jpg'
            alt='Destination'
            className='w-full rounded-lg shadow-lg'
          />
          {/* <div className='control-btn absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <button className='bg-white hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-full outline-none border-none'>
              <i className='fas fa-play'></i>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
