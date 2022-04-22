import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import resume from "../assets/Thomas_Fenaroli_Resume.pdf";
import "../App.css";

const NavBar = () => {
    return (
        <React.Fragment>
            <Navbar className="py-4 sticky-top border nav" expand="md">
                <Container>
                    <Navbar.Brand>thomas fenaroli</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse
                        className="justify-content-end"
                        id="basic-navbar-nav"
                    >
                        <Nav>
                            <Nav.Link as={Link} to="/work">
                                work
                            </Nav.Link>
                            <Nav.Link as={Link} to="/about">
                                about
                            </Nav.Link>
                            <Nav.Link href={resume} target="_blank">
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
