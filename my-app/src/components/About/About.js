import React from 'react';
import AboutCard from './AboutCard';
import HeadTitle from '../HeadTitle/HeadTitle';
import WaveBackground from '../WaveBackground';

function About() {
  return (
    <div>
      <HeadTitle />
      <section className='about top'>
        <div className='container mx-auto'>
          <AboutCard />
        </div>
      </section>
      <section className='feture mt-20 p-5'>
        <div className='flex flex-col md:flex-row justify-center md:justify-between items-center gap-2'>
          <div className='md:pl-30 md:pt-50 w-full md:w-1/2'>
            <h1 className='font-extrabold text'>
              Our <span className='font-thin text-green-500'>Goals</span>
            </h1>
            <p className='text-lg leading-9'>
              Our mission is to save the environment by promoting sustainable tourism practices. If you are interested in traveling to Iran, explore ancient Iran with SURFIRAN tour packages, where you can discover the rich culture and history of this fascinating civilization, through the hospitality of its people. Join us on a journey to uncover Iran’s hidden gems and create memories that will last a lifetime.
            </p>
            <button className='my-btn border-none w-32 h-10 bg-emerald-700 leading-10 shadow-xl text-slate-300 rounded-md mt-5'>
              For More <i className='fas fa-long-arrow-alt-right'></i>
            </button>
          </div>
          <div className='image-1 relative w-full md:w-1/2'>
            <img src='/images/Best Hotel Website Designs.jpg' className='object-cover w-full h-full' alt='Your Alt Text' />
          </div>
        </div>
      </section>
      <WaveBackground />
    </div>
  );
}

export default About;
