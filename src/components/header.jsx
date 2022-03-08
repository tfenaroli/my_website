import React from "react";
import { Row, Col } from "react-bootstrap";

const Header = () => {
    return (
        <React.Fragment>
            <Row className="mt-4">
                <Col className="text-center">
                    <p className="display-4">
                        <b>Thomas Fenaroli</b>
                    </p>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col className="text-center">
                    <p>Dartmouth '24</p>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Header;
