import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import greenwichpoint from "../assets/greenwichpoint.jpg";
import gile from "../assets/gile.jpg";
import dartmouth from "../assets/dartmouth.jpg";
import skip from "../assets/skip.jpg";
import vermont from "../assets/vermont.jpg";
import skiprunning from "../assets/skiprunning.jpg";

const Gallery = () => {
    return (
        <React.Fragment>
            <Row className="mt-5">
                <Col className="text-center animate__animated animate__fadeIn">
                    <h1>Here are some of my photos!</h1>
                </Col>
            </Row>
            <Row className="mt-5 mb-5 justify-content-center">
                <Col md={8}>
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={greenwichpoint}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={gile}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={dartmouth}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={skip}
                                alt="Fourth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={vermont}
                                alt="Fifth slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={skiprunning}
                                alt="Sixth slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Gallery;
