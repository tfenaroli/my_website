import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "animate.css/animate.css";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import Work from "./pages/work";
import About from "./pages/about";

const App = () => {
	return (
		<Router>
			<NavBar />
			<Container>
				<Routes>
					<Route path="/">
						<Route index element={<Work />} />
						<Route path="work" element={<Work />} />
						<Route path="about" element={<About />} />
					</Route>
				</Routes>
			</Container>
			<Footer />
		</Router>
	);
};

export default App;
