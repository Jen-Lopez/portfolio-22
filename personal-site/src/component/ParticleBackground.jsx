import './ParticleBackground.scss';
import React from 'react'


export default function ParticleBackground() {

  return (
    <>
    <div className='particles-container'>
    <div className='particle-row'>
        <div className='cluster'>
          <span className='big' style={{ "--i": 1 }}></span>
          <span className='med' style={{ "--i": 2 }}></span>
          <span className='small' style={{ "--i": 3 }}></span>
          <span className='big' style={{ "--i": 4 }}></span>
        </div>
        <div className='cluster'>
          <span className='big' style={{ "--i": 1 }}></span>
          <span className='med' style={{ "--i": 2 }}></span>
          <span className='small' style={{ "--i": 3 }}></span>
        </div>
        <div className='cluster'>
          <span className='big' style={{ "--i": 1 }}></span>
          <span className='med' style={{ "--i": 2 }}></span>
          <span className='small' style={{ "--i": 3 }}></span>
        </div>
      </div>
      <div className='particle-row'>
        <div className='cluster'>
          <span className='big' style={{ "--i": 1 }}></span>
          <span className='med' style={{ "--i": 2 }}></span>
          <span className='small' style={{ "--i": 3 }}></span>
          <span className='big' style={{ "--i": 4 }}></span>
        </div>
        <div className='cluster'>
          <span className='big' style={{ "--i": 1 }}></span>
          <span className='med' style={{ "--i": 2 }}></span>
          <span className='small' style={{ "--i": 3 }}></span>
        </div>
        <div className='cluster'>
          <span className='big' style={{ "--i": 1 }}></span>
          <span className='med' style={{ "--i": 2 }}></span>
          <span className='small' style={{ "--i": 3 }}></span>
        </div>
      </div>
    </div>
   
    </>
  )
}
