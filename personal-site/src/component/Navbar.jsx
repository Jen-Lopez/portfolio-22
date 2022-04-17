import './Navbar.scss';
import React from 'react'

export default function NavBar() {
  return (
    <>
      <nav className='navbar'>
        <div className='brand'>
          <a href='/'><span>JL</span></a>
        </div>
        <ul className='links'>
          <li><a href='/about'>about</a></li>
          <li><a href='/work'>work</a></li>
          <li><a href='/resume'>resume</a></li>
        </ul>
      </nav>
    </>

  )
}
