import './Projects.scss';
import projectData from '../data/projects.json';
import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card } from 'react-bootstrap';

export default function Projects() {
  const projects = projectData["projects"];

  return (
    <>
      <Row xs={1} md={2} className="g-4">
        {projects.map((proj, i) => (
          <Col key={i}>
            <Link className="project-url" to={`${proj.url}`}>
              <Card className='project'>
                <Card.Img className='project-img' variant="top" src={require(`../media/projects/${proj.thumbnail}`)}/>
                <Card.Body>
                  <Card.Title className='project-name'>{proj.name}</Card.Title>
                  <div className='project-tech'>
                    {proj["tech"].map((tech, j) => {
                      return <span className='tool' key={j}>{tech}</span>
                    })}
                  </div>
                  <Card.Text className='project-description'>
                    {proj.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}
