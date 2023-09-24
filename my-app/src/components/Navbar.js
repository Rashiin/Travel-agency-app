import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
  return (
      <>
            <nav className='navbar bg-slate-800 md:text-center'>
              <div className='container flex_spacing'>
                  <div className='m-icon' onClick={handleClick}>
                      <i className={click? 'fas fa-times' : 'fas fa-bars'}></i>
                  </div>
                  <ul className={click ? 'nav-menu active' : 'nav-menu'}>
     
                  <li><Link to='/' onClick={closeMobileMenu}>Home</Link>  </li>
                  <li> <Link to='/about' onClick={closeMobileMenu}>About</Link>  </li>
                  <li> <Link to='/gallery' onClick={closeMobileMenu}>Gallery</Link>  </li>
                  <li> <Link to='/blog'onClick={closeMobileMenu}>Blog</Link>  </li>
                  <li> <Link to='/destination'onClick={closeMobileMenu}>Destination</Link>  </li>
                  <li>  <Link to='/contact'onClick={closeMobileMenu}>contact Us</Link>  </li>
                  <li>  <Link to='/testimonial'onClick={closeMobileMenu}>Testimoial</Link>  </li>
                
                  </ul>
                  <div className='login flex'>
                      <li>
                          <Link to='/sign-in'>
                              <i className=' far fa-chevron-right'>Sign In</i>
                          </Link>
                      </li>
                      <li>
                          <Link to='/register'>
                              <i className=' far fa-chevron-right'>Register</i>
                          </Link>
                      </li>
                      <li>
                          <Link to='/contact'>
                              <button className='primary-btn bg-none cursor-pointer  outline-none border-none '>Contact</button>
                          </Link>
                      </li>
                   
                  </div>
              </div>
          </nav>
          <header className=' pt-[40px] pr-0 pb-[20px] pl-0 bg-slate-200'>
              <div className='container flex_spacing'>
                  <div className='logo2'>
                      <img className=' w-20' src='/images/travel-agency-logo-bag-with-illustration-icon-island-with-tropical-tree-icon-holiday-icon-vector.jpg' />
                  </div>
                  <div className='contact flex_spacing'>
                      <div className='box flex_spacing'>
                          <div className='icons'>
                              <i className='far fa-clock'></i>
                          </div>
                          <div className='text'>
                              <h3>Hours</h3>
                              <Link to="/contact">Saturday - Wendsday </Link>
                          </div>
                      </div>
                      <div className='box flex_spacing'>
                          <div className='icons'>
                              <i className='fas fa-phone-volume'></i>
                          </div>
                          <div className='text'>
                              <h3>Call</h3>
                              <Link to="/contact">+ 98 912 54 120 67</Link>
                          </div>
                      </div>
                      <div className='box flex_spacing'>
                          <div className='icons'>
                              <i className='far fa-envelope'></i>
                          </div>
                          <div className='text'>
                              <h3>Email</h3>
                              <Link to="/contact">Farahanirashin@gmail.com</Link>
                          </div>
                      </div>
                  </div>
              </div>
          </header>
      </>
  )
}

export default Navbar
