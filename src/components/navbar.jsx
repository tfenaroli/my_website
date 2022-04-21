import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

const NavBar = () => {
    return (
        <React.Fragment>
            <Navbar className="navtext" expand="md">
                <Container>
                    <Navbar.Brand />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link className="mx-auto" as={Link} to="/home">
                                HOME
                            </Nav.Link>
                            <Nav.Link className="mx-auto" as={Link} to="/work">
                                WORK
                            </Nav.Link>
                            <Nav.Link
                                className="mx-auto"
                                as={Link}
                                to="/gallery"
                            >
                                GALLERY
                            </Nav.Link>
                            <Nav.Link
                                className="mx-auto"
                                as={Link}
                                to="/contact"
                            >
                                CONTACT
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    );
};

export default NavBar;
