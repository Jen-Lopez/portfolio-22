import './Navbar.scss';
import React from 'react'
import PDF from '../media/resume.pdf'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
      <nav className='navbar'>
        <div className='brand'>
          <Link to='/'><span>JL</span></Link>
        </div>
        <ul className='links'>
          <Link to='/about'><span>about</span></Link>
          <Link to='/work'><span>work</span></Link>
          <li><a href={PDF} target='_blank' rel="noopener noreferrer">resume</a></li>
        </ul>
      </nav>
    </>

  )
}
