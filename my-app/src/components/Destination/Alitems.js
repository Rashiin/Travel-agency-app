import React, { useState } from 'react'
import Dcard from './Dcard'
import Sdata from './Sdata'
function Alitems() {
    const [items,setItem] = useState(Sdata)
  return (
    <>
          <section className='gallery desi '>
              <div className=' container  '>
                  <div className='content flex flex-row flex-wrap gap-1 '>
                      {
                          items.map((item) => {
                              return <Dcard key={item.id} item={item} />
                          })
                      }
               </div>
              </div> 
      </section>
    </>
  )
}

export default Alitems
