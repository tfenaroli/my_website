import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

const NavBar = () => {
    return (
        <React.Fragment>
            <Navbar className="sticky-top navtext border mt-5" expand="md">
                <Container>
                    <Navbar.Brand>Thomas Fenaroli</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse
                        className="justify-content-end"
                        id="basic-navbar-nav"
                    >
                        <Nav className="border">
                            <Nav.Link as={Link} to="/work">
                                work
                            </Nav.Link>
                            <Nav.Link as={Link} to="/about">
                                about
                            </Nav.Link>
                            <Nav.Link as={Link} to="/contact">
                                resume
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    );
};

export default NavBar;
