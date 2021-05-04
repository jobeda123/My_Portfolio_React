import React from 'react';
import { Card } from 'react-bootstrap';

const BlogDetail = () => {
    return (
        <div className="col-md-4 mt-5">
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" alt="not found" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default BlogDetail;