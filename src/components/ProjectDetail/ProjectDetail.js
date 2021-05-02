import React from 'react';
import { Card } from 'react-bootstrap';
import './ProjectDetail.css';

const ProjectDetail = (props) => {
    const { name, type, description, stack, liveLink, picture } = props.project;

    return (
        <Card style={{ width: '32rem', textAlign: 'left', marginLeft:"110px", marginTop:"50px" }}>
            <Card.Img variant="top" style={{ height: "15rem" }} src={picture} />
            <Card.Body style={{ backgroundColor: "#595775", color: "white"}}>
                <Card.Title className="ps-3 pt-4">{name}</Card.Title>
                <Card.Text className="ps-3">{type}</Card.Text>
                <Card.Text>
                    <ul className="ps-5">
                        {
                            description.map(description => <li>{description}</li>)
                        }
                    </ul>
                </Card.Text>
                <Card.Text className="ps-5 row d-flex pt-4">
                    {
                        stack.map(description => 
                        <p className="ps-3" style={{borderRadius: "10px", width: "100px",backgroundColor:"#583E2E", padding: "10px", marginRight: "10px", fontSize: "14px"}} >
                            {description}</p>)
                    }

                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ProjectDetail;