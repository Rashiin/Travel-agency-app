import React from 'react'
import  Cards from './Cards'

function MostPopular() {
  return (
    <div>
          <section className='popular'>
              <div className='full_container'>
                  <div className='heading'>
                      <h1  className=' font-thin p-5 text-center'>Most Popular Hotel</h1>
                      <div className='line'></div>
                  </div>
                  <div className='content'></div>
                  <Cards/>
              </div>
      </section>
    </div>
  )
}

export default MostPopular
