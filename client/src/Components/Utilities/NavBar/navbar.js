import React from 'react'
import './navbar.css'
import Logo from '../../../images/logo.svg'
import { Button } from 'bootstrap'


const navbar = () => {
  return (
    <div>
      {/* navbar */}
      <nav className='main-nav'>
            {/*1 logo part */}
            <div className='logo'>
                <img src={Logo} alt='Logo' style={{height:'70px', marginTop:'-2rem'}}/>
                <h2>
                <span>C</span>oolie
                <span>W</span>ale
                </h2>
            </div>
            {/*2 menu part */}
            <div className='menu-link'>
              <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="#">AboutUs</a>
                </li>
                <li>
                    <a href="#">Safety</a>
                </li>
                <li>
                    <a href="#">ContactUs</a>
                </li>
              </ul>
            </div>

            {/*3 language changing part*/}
            <div className='language'>
                <div class="input-group">
                  <button type="button" class="btn btn-outline-secondary" style={{height:'3rem', fontWeight:'400', letterSpacing:'0.04rem',fontSize:'1.5rem'}}>Language</button>
                  <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                    <span class="visually-hidden"></span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item" href="#">English</a></li>
                    <li><a class="dropdown-item" href="#">Hindi</a></li>
                    <li><a class="dropdown-item" href="#">Marathi</a></li>
                    <li><a class="dropdown-item" href="#">Telgu</a></li>
                  </ul>
                </div>
            </div>

            {/* desktop app part*/}
            <div className='menu-app'>
                <button type="button" style={{color:'black', backgroundColor:'white',borderColor:'red', width:'15rem', height:'4rem',fontWeight:'400', letterSpacing:'0.04rem',fontSize:'1.6rem'}} class="btn btn-secondary btn-lg">Download App</button>
            </div>
       </nav>
    </div>
  )
}

export default navbar
