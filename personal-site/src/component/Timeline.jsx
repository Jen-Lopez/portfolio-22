import './Timeline.scss';
import workData from '../data/experiences.json';
import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

export default function Timeline() {
  const experiences = workData["experiences"];

  return (
    <>
      <Accordion className='timeline' flush>
        {experiences.map((exp, i) => {
          return <Accordion.Item eventKey={`${i}`} key={i}>
            <Accordion.Header className={`work-exp-header ${exp.class}`}>
              <img src={require(`../media/work/${exp.thumbnail}`)}/>
              <h1>{exp.company}</h1>
            </Accordion.Header>
            <Accordion.Body>
              {exp["positions"].map((role, k) => {
                return <div className='role' key={k}>
                  <div className='work-info'>
                    <p className='title'>{role.title}</p>
                    <p>{role.location}</p>
                    <p>{role.start} - {role.end}</p>
                  </div>

                  <div className='work-resp'>
                      <div>
                        {role.description}
                      </div>
                      <ul>
                        {role["achievements"].map((listItem, j) => {
                          return <li key={j}>{listItem}</li>
                        })}
                      </ul>
                  </div>
                </div>
              })}
            </Accordion.Body>
          </Accordion.Item>
        })}
      </Accordion>
    </>
  )
}
