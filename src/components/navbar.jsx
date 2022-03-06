import React from "react";
import { Row, Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <React.Fragment>
            <Row className="mt-3">
                <Navbar bg="light" expand="md">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link as={Link} to="/">
                                    Home
                                </Nav.Link>
                                <Nav.Link as={Link} to="/work">
                                    Work
                                </Nav.Link>
                                <Nav.Link as={Link} to="/gallery">
                                    Gallery
                                </Nav.Link>
                                <Nav.Link as={Link} to="/contact">
                                    Contact
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Row>
        </React.Fragment>
    );
};

export default NavBar;
