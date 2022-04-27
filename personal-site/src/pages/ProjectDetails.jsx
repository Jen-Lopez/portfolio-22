import './ProjectDetails.scss';
import projectDetailsData from '../data/project-details.json';

import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import GH from '../media/github.svg'
import Web from '../media/link.png'
import Video from '../media/video.png'

function ProjectDetails(props) {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/work');
    }

    const { projectName } = props;
    const project = projectDetailsData[projectName];

    return (
        <>
        <div className='project-details content-start container'>
            <button className='project-details-back section-heading' type="button" onClick={handleClick}>← WORK</button>
            <div className='project-details-info'>
                <h1>{project.name}</h1>
                <h2 className='lead'>{project.lead}</h2>
                <Row className='project-details-header' >
                    <Col xs={6} md={4}>
                        <div className='roles'>
                            <h4>Role</h4>
                            <p>{project.roles}</p>
                        </div>
                        <div className='team'>
                            <h4>Team</h4>
                            <p>{project.team}</p>
                        </div>
                        <div className='skills'>
                            <h4>Skills</h4>
                            {project["skills"].map((tool, i) => {
                                return <span className='tool' key={i}>{tool}</span>
                            })}
                        </div>
                        <div className='time'>
                            <h4>Timeframe</h4>
                            <p>{project.timeframe}</p>
                        </div>
                        <div className='links'>
                            {project.links[0] ? <a href={`https://${project.links[0]}`} target={'_blank'} rel="noopener noreferrer"><img src={GH} alt='github icon' width={25}/></a>  : null}
                            {project.links[1] ? <a href={`https://${project.links[1]}`} target={'_blank'} rel="noopener noreferrer"><img src={Web} alt='link icon' width={35}/></a>   : null}
                            {project.links[2] ? <a href={`https://${project.links[2]}`} target={'_blank'} rel="noopener noreferrer"><img src={Video} alt='video icon' width={35}/></a> : null}
                        </div>
                    </Col>
                    <Col xs={12} md={8}>
                        <img className='project-details-poster' src={require(`../media/projects/${project.poster}`)}/>
                    </Col>
                </Row>

                <div className='project-details-body'>
                    <div className='overview'>
                        <h3>Overview</h3>
                        <p>{project.overview}</p>
                    </div>

                    <div className='development'>
                        <h3>Development</h3>
                        <p>{project.dev}</p>
                    </div>

                    <div className='end-product'>
                        <h3>Final Product</h3>
                        <p>{project.final}</p>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default ProjectDetails