import React from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
import "../App.css";

const Project = (props) => {
    return (
        <React.Fragment>
            <Col md={6} className="mt-5">
                <Image
                    className="border projectimg"
                    fluid="true"
                    src={props.image}
                />
                <Row className="mt-3">
                    <Col xs={10}>
                        <h3 className="my-0">{props.title}</h3>
                    </Col>
                    <Col xs={2} className="d-flex justify-content-end">
                        <Button
                            className="icon"
                            href={props.link}
                            target="_blank"
                            variant="light"
                        >
                            <i className="bi bi-github" />
                        </Button>
                    </Col>
                </Row>

                <p className="mt-2 text-muted">{props.tools}</p>
                <p className="fs-5">{props.caption}</p>
            </Col>
        </React.Fragment>
    );
};

export default Project;
