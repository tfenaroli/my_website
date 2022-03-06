import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";

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
                                src="greenwichpoint.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Greenwich Point</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="gile.jpg"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Gile Mountain</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="dartmouth.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Dartmouth v. Yale</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="skip.jpg"
                                alt="Fourth slide"
                            />

                            <Carousel.Caption>
                                <h3>Skip</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="vermont.jpg"
                                alt="Fifth slide"
                            />

                            <Carousel.Caption>
                                <h3>Winter Cabin</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="skiprunning.jpg"
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
