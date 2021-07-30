import React from "react";
import { Card } from "react-bootstrap";

const BlogDetail = (props) => {
  const { title, image, link } = props.blog;
  return (
    <div className="col-md-4 mt-5">
      <Card style={{ width: "20rem", height: "18rem", overflow: "hidden" }}>
        <Card.Img variant="top" src={image} alt="not found" height="150rem" />
        <Card.Body>
          <Card.Title style={{ overflow: "hidden" }}>{title}</Card.Title>
          <Card.Link target="_blank" href={link}>
            Read Blog
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogDetail;
