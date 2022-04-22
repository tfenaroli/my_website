import React from "react";
import { Col, Card, Button } from "react-bootstrap";

const Project = (props) => {
    return (
        <React.Fragment>
            <Col className="mt-5 text-center d-flex justify-content-center">
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={props.image} />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>{props.caption}</Card.Text>
                        <Button
                            href={props.link}
                            variant="outline-secondary"
                            target="_blank"
                        >
                            Check it out!
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default Project;
