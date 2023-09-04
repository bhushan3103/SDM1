import React from 'react'

import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <wrapper>
      <div className='footer1'>


        < span className='text3'>
          Ready to get Started..?
        </span>
        <span className='text4'>
          Talk to us Today..!
        </span>

        <div className='footer-button1'>
          <NavLink to="/createuser" >
            <button className='navbar-button' style={{ fontSize: '16px' }}>Get Started</button>
          </NavLink>
        </div>

      </div>
      <footer>
        <div className='container grid grid-four-column'>
          <div className='footer-about'>
            <h4>Fit and Fab Gym</h4>
            <p>Gym</p>
          </div>

          <div className='footer-about'>
            <h4>Fit and Fab Gym</h4>
            <p>Gym</p>
          </div>
      


        </div>

      </footer>
    </wrapper>
  )
}

export default Footer;