import './Timeline.scss';
import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Amex from '../img/work/amex.png';
import Pd from '../img/work/pd.png';

export default function Timeline() {
  return (
    <>
      <div className='timeline'>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header className='work-exp-header amex'>
              <img src={Amex} alt='amex logo'/>
              <h1>American Express</h1>
            </Accordion.Header>
            <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
            </Accordion.Body>
          </Accordion.Item>


          <Accordion.Item eventKey="1">
            <Accordion.Header className='work-exp-header pd'>
              <img src={Pd} alt='pagerduty logo'/>
              <h1>PagerDuty</h1>
            </Accordion.Header>
            <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
            </Accordion.Body>
          </Accordion.Item>

    

       


        </Accordion>
      </div>
    </>
  )
}
