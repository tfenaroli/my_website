import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Header from "../components/header";
import thomas from "../assets/thomas.jpg";
import linkedin from "../assets/linkedin.jpg";
import github from "../assets/github.jpg";
import resume from "../assets/resume.jpg";
import pdf from "../assets/Thomas_Fenaroli_Resume.pdf";

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <Row className="mt-5 justify-content-center">
                <Col md={5} xs={10}>
                    <img src={thomas} className="img-fluid" alt="thomasimg" />
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
                    <Card style={{ width: "12rem" }}>
                        <Card.Img variant="top" src={linkedin} />
                        <Card.Body>
                            <Button
                                href="https://www.linkedin.com/in/thomas-fenaroli-9066421ab/"
                                variant="secondary"
                                target="_blank"
                            >
                                LinkedIn
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mt-5 d-flex justify-content-center text-center">
                    <Card style={{ width: "12rem" }}>
                        <Card.Img variant="top" src={github} />
                        <Card.Body>
                            <Button
                                href="https://github.com/tfenaroli"
                                variant="secondary"
                                target="_blank"
                            >
                                GitHub
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mt-5 d-flex justify-content-center text-center">
                    <Card style={{ width: "12rem" }}>
                        <Card.Img variant="top" src={resume} />
                        <Card.Body>
                            <Button
                                href={pdf}
                                variant="secondary"
                                target="_blank"
                            >
                                Resume
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Home;
