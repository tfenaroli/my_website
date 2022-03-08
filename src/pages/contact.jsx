import React from "react";
import { Row, Col } from "react-bootstrap";

const Contact = () => {
    return (
        <React.Fragment>
            <Row className="mt-5">
                <Col className="text-center">
                    <h1 className="text-wrap">
                        thomas.s.fenaroli.24@dartmouth.edu
                    </h1>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col className="text-center">
                    <h1 className="text-wrap">tfenaroli@icloud.com</h1>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col className="text-center">
                    <h1 className="text-wrap">(203)-832-5002</h1>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Contact;
