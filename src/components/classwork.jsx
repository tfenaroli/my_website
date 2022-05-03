import React from "react";
import { Col, Button, Card } from "react-bootstrap";
import "../App.css";

const Project = (props) => {
    return (
        <React.Fragment>
            <Col className="mt-5 text-center d-flex justify-content-center">
                <Card style={{ width: "18rem" }}>
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>{props.caption}</Card.Text>
                        <Button
                            className="icon"
                            href={props.link}
                            target="_blank"
                            variant="light"
                        >
                            <i className="bi bi-github" />
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default Project;
