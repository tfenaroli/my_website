import React from "react";
import { Col, Button, Image } from "react-bootstrap";

const Project = (props) => {
    return (
        <React.Fragment>
            <Col md={6} className="mt-5">
                <Image className="border" fluid="true" src={props.image} />
                <h3 className="mt-4">{props.title}</h3>
                <p className="mt-2 text-muted">{props.tools}</p>
                <p className="fs-5">{props.caption}</p>
                <Button
                    href={props.link}
                    target="_blank"
                    variant="outline-dark"
                >
                    Check it out!
                </Button>
            </Col>
            {/* <Col className="mt-5 text-center d-flex justify-content-center">
                <Card style={{ width: "18rem" }}>
                    <a href={props.link} target="_blank">
                        <Card.Img variant="top" src={props.image} />
                    </a>
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>{props.caption}</Card.Text>
                    </Card.Body>
                </Card>
            </Col> */}
        </React.Fragment>
    );
};

export default Project;
