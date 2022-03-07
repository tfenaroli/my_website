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
                <Col className="text-center">
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
                            <Carousel.Caption>
                                <h3>Greenwich Point</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={gile}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Gile Mountain</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={dartmouth}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Dartmouth v. Yale</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={skip}
                                alt="Fourth slide"
                            />

                            <Carousel.Caption>
                                <h3>Skip</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={vermont}
                                alt="Fifth slide"
                            />

                            <Carousel.Caption>
                                <h3>Winter Cabin</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={skiprunning}
                                alt="Sixth slide"
                            />

                            <Carousel.Caption>
                                <h3>Skip at the Beach</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Gallery;
