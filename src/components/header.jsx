import React from "react";
import { Row, Col } from "react-bootstrap";

const Header = () => {
    return (
        <React.Fragment>
            <Row className="mt-4">
                <Col className="text-center">
                    <h1 className="display-1">
                        <b>Thomas Fenaroli</b>
                    </h1>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col className="text-center">
                    <h4>Dartmouth '24</h4>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Header;
