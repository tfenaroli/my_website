import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "animate.css/animate.css";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import Work from "./pages/work";
import About from "./pages/about";
import Gallery from "./pages/gallery";

const App = () => {
	return (
		<Router>
			{/* <Header /> */}
			<NavBar />
			<Container>
				<Routes>
					<Route path="/">
						<Route index element={<Work />} />
						{/* <Route path="home" element={<Home />} /> */}
						<Route path="work" element={<Work />} />
						<Route path="about" element={<About />} />
						<Route path="gallery" element={<Gallery />} />
						{/* <Route path="contact" element={<Contact />} /> */}
					</Route>
				</Routes>
			</Container>
		</Router>
	);
};

export default App;
