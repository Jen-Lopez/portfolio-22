import './Header.scss';
import React from 'react'
import Particles from './Particles'

export default function Header() {
  return (
    <>
    <header>
        <div className='particles-container'>
            <Particles clusters={[5,3,2]}/>
            <Particles clusters={[2,1,3]}/>
        </div>
        <div className='header-name'>
          <div className='lead'>
            Hi!
          </div>
          <div className='name'>
            I'm Jen Lopez
          </div>
          <p className='title'>Software Engineer @ AMEX</p>
        </div>
      
    </header>
    </>
  )
}
