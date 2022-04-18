import './Timeline.scss';
import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Amex from '../img/work/amex.png';
import Pd from '../img/work/pd.png';
import Nyu from '../img/work/nyu.jpg';
import Gwc from '../img/work/gwc.png';

export default function Timeline() {
  return (
    <>
        <Accordion className='timeline' flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header className='work-exp-header amex'>
              <img src={Amex} alt='amex logo'/>
              <h1>American Express</h1>
            </Accordion.Header>
            <Accordion.Body>
              <div className='role'>
                <div className='work-info'>
                  <p className='title'>Engineer III</p>
                  <p>New York, NY</p>
                  <p>Feb 2022 - Present</p>
                </div>
                <div className='work-resp'>
                  <div>
                    Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </div>
                  <ul>
                    <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </li>
                    <li> Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </li>
                    <li> Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse </li>
                  </ul>
                </div>
              </div>

              <div className='role'>
                <div className='work-info'>
                  <p className='title'>Software Engineer Intern</p>
                  <p>Remote</p>
                  <p>June 2021 - Aug 2021</p>
                </div>
                <div className='work-resp'>
                  <div>
                    Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </div>
                  <ul>
                    <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </li>
                    <li> Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </li>
                    <li> Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse </li>
                  </ul>
                </div>
              </div>
             
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header className='work-exp-header pd'>
              <img src={Pd} alt='pagerduty logo'/>
              <h1>PagerDuty</h1>
            </Accordion.Header>
            <Accordion.Body>
              <div className='role'>
                <div className='work-info'>
                  <p className='title'>Software Developer Intern</p>
                  <p>Remote</p>
                  <p>Jan 2021 - April 2021</p>
                </div>
                <div className='work-resp'>
                  <div>
                    Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </div>
                  <ul>
                    <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </li>
                    <li> Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </li>
                    <li> Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse </li>
                  </ul>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header className='work-exp-header nyu'>
              <img src={Nyu} alt='nyu logo'/>
              <h1>New York University</h1>
            </Accordion.Header>
            <Accordion.Body>
              <div className='role'>
                <div className='work-info'>
                  <p className='title'>Web Design Tutor</p>
                  <p>New York, NY</p>
                  <p>Oct 2019 - Dec 2021</p>
                </div>
                <div className='work-resp'>
                  <div>
                    Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </div>
                  <ul>
                    <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </li>
                    <li> Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </li>
                    <li> Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse </li>
                  </ul>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header className='work-exp-header gwc'>
              <img src={Gwc} alt='gwc logo'/>
              <h1>Girls Who Code</h1>
            </Accordion.Header>
            <Accordion.Body>
              <div className='role'>
                <div className='work-info'>
                  <p className='title'>SIP Teaching Assistant</p>
                  <p>New York, NY</p>
                  <p>July 2018 - Aug 2018</p>
                </div>
                <div className='work-resp'>
                  <div>
                    Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </div>
                  <ul>
                    <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </li>
                    <li> Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </li>
                    <li> Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse </li>
                  </ul>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>       

        </Accordion>
    </>
  )
}
