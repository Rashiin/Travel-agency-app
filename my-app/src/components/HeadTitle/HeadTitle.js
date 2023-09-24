import React from 'react'
import { Link, useLocation } from 'react-router-dom/cjs/react-router-dom.min'

function HeadTitle() {
    const location = useLocation()
  return (
      <div>
          <section className='heading-img'>
              <div className=' container'>
                  <h1>{ location.pathname.split("/")[1]}</h1>
                  <button>
                      <Link to='/'>Home / </Link>
                      <span>{ location.pathname.split("/")[1]}</span>
                  </button>
              </div>
          </section>
    </div>
  )
}

export default HeadTitle