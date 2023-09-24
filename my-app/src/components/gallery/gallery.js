import React from 'react'
import HeadTitle from '../HeadTitle/HeadTitle'
import Card from './Card'
import GalleryData from './GalleryData'
import WaveBackground from '../WaveBackground'
function gallery() {
  return (
      <div>
          <HeadTitle />
          <section className='gallery'>
              <div className=' container flex_spacing'>
                  {
                      GalleryData.map((value) => {
                          return <Card images={value.images} title={value.title}  />
                      })
                  }
               
              </div>
          </section>
          <WaveBackground/>
    </div>
  )
}

export default gallery