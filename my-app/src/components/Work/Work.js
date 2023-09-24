import React from 'react';
import Card from './Card';
import Wdata from './Wdata';

function Work() {
  return (
    <>
      <section className='popular'>
        <div className='container mx-auto'>
          <div className='text-center mb-8'>
            <h1 className='text-3xl font-semibold p-5'>How it Works ?</h1>
            <div className='w-20 h-1 bg-lime-400 mx-auto mt-2'></div>
          </div>
          <div className='flex flex-wrap justify-center -mx-4 gap-2'>
            {Wdata.map((value, index) => (
              <Card
                key={index}
                cover={value.cover}
                title={value.title}
                desc={value.desc}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
