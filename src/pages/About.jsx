import './About.scss';
import PP from '../media/profile.png'
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
                Hey there! I'm Jen, a Software Engineer based in <span className='highlight'>NYC</span>&#x26A1; I'm a graduate of New York University, 
                where I received my B.A. in Computer Science and minors in Psychology and Web Applications.
                </p>
                <p>
                I am passionate about empowering underrepresented communities in tech through  <span className='highlight'>CS education</span>. 
                By fostering diversity in the field, we can create more meaningful and widespread impact that truly serve and benefit all users.
                </p>
                <p>
                I have experience in both front-end and back-end technologies, allowing me to design and build web applications from <span className='highlight'>start to finish</span>. 
                Currently, I am expanding my skills to include mobile development, particularly for iOS, and am open to exploring related opportunities.
                </p>
              </div>
              <div className='spare-time'>
                <h3 className='section-heading'>In my spare time, catch me...</h3>
                <ul>
                  <li> swimming &#128037; </li>
                  <li> rewatching my favorite shows &#128250;</li>
                  <li> exploring cities with my doge &#128062; </li>
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
