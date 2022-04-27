import './Footer.scss';
import GH from '../media/github.svg'
import LI from '../media/linkedin.svg'
import React from 'react'

export default function Footer() {
  return (
    <>
        <footer className='footer'>
            <div className='waves'>
                <div className='wave wave1'></div>
                <div className='wave wave2'></div>
                <div className='wave wave3'></div>
                <div className='wave wave4'></div>
            </div>
            <div className='info'>
                <p>Made by Jen, &copy; 2022</p>
                <div className='socials'>
                    <a href='https://github.com/Jen-Lopez' target={'_blank'} rel="noopener noreferrer"><img src={GH} alt='github icon'/></a>
                    <a href='https://www.linkedin.com/in/jen-lopez/' target={'_blank'} rel="noopener noreferrer"><img src={LI} alt='linkedin icon'/></a>
                </div>
            </div>
        </footer>
    </>
  )
}
