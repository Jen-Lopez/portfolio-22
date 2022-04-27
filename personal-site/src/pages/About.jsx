import './About.scss';
import PP from '../media/about/profile.png'
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Gallery from '../component/Gallery'

export default function About() {
  return (
    <>
      <div className='about content-start container'>
        <div className='about-me'>
          <h1 className='section-heading'>About Me</h1>
          <Row>
            <Col md={7} className='info'>
              <div>
                <p>
                Hey there! I'm Jen, a Software Engineer based in <span className='highlight'>NYC</span>&#x26A1; I'm a recent graduate from New York University, 
                where I received my B.A. in Computer Science and minors in Psychology and Web Applications.
                </p>
                <p>
                I'm passionate about <span className='highlight'>uplifting</span> underrepresented communities in tech through CS Education. With diverse perspectives, 
                we have greater opportunities to build <span className='highlight'>impactful products</span> that reach more people.
                </p>
                <p>
                I've worked with a wide variety of frontend, backend, &amp; mobile technologies, primarily specializing in <span className='highlight'> full-stack </span>
                development.
                </p>
              </div>
              <div className='spare-time'>
                <h3 className='section-heading'>In my spare time, catch me...</h3>
                <ul>
                  <li> binge-watching shows &amp; movies I've missed out on </li>
                  <li> learning how to cook + bake with my &#10024;<span className='highlight'>airfryer</span>&#10024; </li>
                  <li> exploring nyc with my doge </li>
                </ul>
              </div>
            </Col>
            <Col md={5} className='profile'>
              <img className='grey-rounded-border' src={PP} alt='profile image'/>
            </Col>
          </Row>
        </div>
        <div className='about-gallery'>
          <h1 className='section-heading'>Random</h1>
          <Gallery/>
        </div>
      </div>
    </>
  )
}
