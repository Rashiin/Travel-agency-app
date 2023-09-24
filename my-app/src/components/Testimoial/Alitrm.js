import React from 'react'
import Tdata from './Tdata'
import Card from './Card'
function Alitrm() {
  return (
    <>
          <section className='testimoial'>
              <div className=' container'>
                  {
                      Tdata.map((value, index) => {
                          return <Card key={index} {...value} />
                      })
                  }
              </div>
      </section>
    </>
  )
}

export default Alitrm
