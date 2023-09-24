import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Sdata from './Sdata'

function Dcard({item:{id,images,title}}) {
  return (
    <>
          <div className='items  '>
              <div className='img mb-1'>
                  <img src={images}/>
                  <Link to={`/singlepage/${id}`} className='blogItem-link'>
                    <i className='fas fa-external-link-alt'></i>
                  </Link>
              </div>
              <div className='title'>
                  <h4 className=' font-light p-1'>{title}</h4>
              </div>
      </div>
    </>
  )
}

export default Dcard
