import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar";
import Header from "./components/header";
import Home from "./pages/home";
import Work from "./pages/work";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";

const App = () => {
    return (
        <Router>
            <Header />
            <NavBar />
            <Container>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Container>
        </Router>
    );
};

export default App;
