import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "../App.css";

const Project = (props) => {
    return (
        <React.Fragment>
            <Col md={6} className="mt-5">
                <div class="img__wrap">
                    {/* <Image
                        className="img__img border"
                        fluid="true"
                        src={props.image}
                    /> */}
                    <p class="img__description p-3 fs-3">{props.caption}</p>

                    <Image
                        className="border img__img"
                        fluid="true"
                        src={props.image}
                    />
                </div>
                <Row className="mt-3">
                    <Col xs={10}>
                        <h3 className="my-0">{props.title}</h3>
                    </Col>
                    <Col xs={2} className="d-flex justify-content-end">
                        <Button
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
