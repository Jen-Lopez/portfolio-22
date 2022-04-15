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
          <li><a>about</a></li>
          <li><a>work</a></li>
          <li><a>resume</a></li>
        </ul>
      </nav>
    </>

  )
}
