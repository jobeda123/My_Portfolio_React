import React from 'react';
import { Card } from 'react-bootstrap';
import './ProjectDetail.css';
import { faCoffee, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ProjectDetail = (props) => {
    const { name, type, description, stack, liveLink, picture, github } = props.project;

    return (
        <div className="col-md-6">
            <Card className="mt-5" style={{ width: '32rem', textAlign: 'left', padding: "5px" }}>
                <Card.Img className="img-fluid" variant="top" style={{ height: "15rem" }} src={picture} />
                <Card.Body style={{ backgroundColor: "white", color: "black" }}>
                    <Card.Title style={{overflow: "hidden"}} className="">{name}</Card.Title>
                    <Card.Text className="">{type}</Card.Text>
                    <Card.Text>
                        <ul className="">
                            {
                                description.map(description => <li>{description}</li>)
                            }
                        </ul>
                    </Card.Text>
                    <Card.Text className="row d-flex justify-content-center">
                        {
                            stack.map(description =>
                                <p style={{ border: "2px solid rgb(55, 176, 224)", borderRadius: "10px", width: "100px", color: "black", padding: "5px", marginRight: "10px", fontSize: "14px" }} >
                                    {description}</p>)
                        }
                        <div className="project-icon d-flex justify-content-center">
                            <a target="_blank" href={github}><FontAwesomeIcon className="icon active-icon" icon={faGithubSquare} /></a>
                            <a style={{fontSize: "32px"}} target="_blank" href={liveLink}><FontAwesomeIcon className="icon active-icon" icon={faExternalLinkAlt} /></a>
                            {/* <a target="_blank" href={liveLink}><FontAwesomeIcon className="icon active-icon" icon={faGithubSquare} /></a> */}
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProjectDetail;