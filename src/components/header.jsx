import React from "react";
import { Row, Col } from "react-bootstrap";

const Header = () => {
    return (
        <React.Fragment>
            <Row className="mt-5">
                <Col className="text-center animate__animated animate__fadeIn">
                    <p className="display-4">
                        <b>Thomas S. Fenaroli</b>
                    </p>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col className="text-center animate__animated animate__fadeIn">
                    <p>Dartmouth '24</p>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Header;
