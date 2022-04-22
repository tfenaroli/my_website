import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const Footer = () => {
    return (
        <React.Fragment>
            <hr></hr>
            <Row>
                <Col className="text-center mt-2 fs-3">
                    <p>let's connect.</p>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <p className="text-break text-muted fs-5">
                        thomas.s.fenaroli.24@dartmouth.edu - (203)-832-5002
                    </p>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col xs={4} className="mt-2 mb-4 d-flex justify-content-center">
                    <Button
                        className="mx-2"
                        variant="light"
                        href="https://github.com/tfenaroli"
                        target="_blank"
                    >
                        <i className="bi bi-github" />
                    </Button>

                    <Button
                        className="mx-2"
                        variant="light"
                        href="https://www.instagram.com/tfen_/"
                        target="_blank"
                    >
                        <i className="bi bi-instagram" />
                    </Button>

                    <Button
                        className="mx-2"
                        variant="light"
                        href="https://www.facebook.com/thomas.fenaroli.14/"
                        target="_blank"
                    >
                        <i className="bi bi-facebook" />
                    </Button>

                    <Button
                        className="mx-2"
                        variant="light"
                        href="https://www.linkedin.com/in/thomasfenaroli/"
                        target="_blank"
                    >
                        <i className="bi bi-linkedin" />
                    </Button>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Footer;
