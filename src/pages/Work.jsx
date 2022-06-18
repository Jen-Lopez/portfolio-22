import './Work.scss';
import React from 'react'
import Timeline from '../component/Timeline';
import Projects from '../component/Projects';

export default function Work() {
  return (
    <>
      <div className='work content-start container'>
        <div className='experience'>
          <h1 className='section-heading'>Experience</h1>
          <Timeline/>
        </div>
        <div className='projects'>
          <h1 className='section-heading'>Projects</h1>
          <Projects/>
        </div>
      </div>
    </>
  )
}
