import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <React.Fragment>
            <Navbar className="bg-light" expand="md">
                <Container>
                    <Navbar.Brand />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link className="mx-auto" as={Link} to="/home">
                                Home
                            </Nav.Link>
                            <Nav.Link className="mx-auto" as={Link} to="/work">
                                Work
                            </Nav.Link>
                            <Nav.Link
                                className="mx-auto"
                                as={Link}
                                to="/gallery"
                            >
                                Gallery
                            </Nav.Link>
                            <Nav.Link
                                className="mx-auto"
                                as={Link}
                                to="/contact"
                            >
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    );
};

export default NavBar;
