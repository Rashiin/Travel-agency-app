import React from 'react'
import Alitems from '../Destination/Alitems'


function DestinationHome() {
  return (
    <div>
          <section className='popular relative w-full h-auto mt-[20px]'>
              <div className='full_container mt-10 bg-lime-50 '>
                  <div className='heading'>
                      <h1 className=' font-thin p-5 text-center'>Favorite Destination</h1>
                      <div className='line'></div>
                  </div>
                  <div className='content flex flex-wrap flex-row  w-full mb-5'></div>
                  <Alitems/>
              </div>
      </section>
    </div>
  )
}

export default DestinationHome
