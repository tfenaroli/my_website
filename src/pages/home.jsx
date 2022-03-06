import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

const Home = () => {
    return (
        <React.Fragment>
            <Row className="mt-5 justify-content-center">
                <Col md={5} xs={10}>
                    <img src="thomas.jpg" className="img-fluid" />
                </Col>
                <Col md={5} xs={10} className="text-center bg-light">
                    <p className="mt-4">
                        I am a '24 at Dartmouth College from Greenwich, CT. At
                        Dartmouth, I'm involved with the Dartmouth Society of
                        Photographers, the Dartmouth Club Golf Team, and the
                        Dartmouth Investment and Philanthropy Program. Outside
                        of school, I am a software developer at Team Legislate
                        and take part in research regarding OnCore Golf's
                        perimeter weighting golf ball technology.
                    </p>
                </Col>
            </Row>
            <Row className="mb-5">
                <Col className="mt-5 d-flex justify-content-center text-center">
                    <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src="linkedin.jpg" />
                        <Card.Body>
                            <Card.Title>LinkedIn</Card.Title>
                            <Button
                                href="https://www.linkedin.com/in/thomas-fenaroli-9066421ab/"
                                variant="primary"
                                target="_blank"
                            >
                                Check it out!
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mt-5 d-flex justify-content-center text-center">
                    <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src="GitHub.jpg" />
                        <Card.Body>
                            <Card.Title>GitHub</Card.Title>
                            <Button
                                href="https://github.com/tfenaroli"
                                variant="primary"
                                target="_blank"
                            >
                                Check it out!
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mt-5 d-flex justify-content-center text-center">
                    <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src="resume.jpg" />
                        <Card.Body>
                            <Card.Title>Resume</Card.Title>
                            <Button href="/" variant="primary" target="_blank">
                                Check it out!
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Home;
