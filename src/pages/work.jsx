import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import Project from "../components/project";
import balloonpopper from "../assets/balloonpopper.png";
import dalichat from "../assets/dalichat.png";
import memry from "../assets/memry.png";
import animation from "../assets/animation.png";
import vitalize from "../assets/vitalize.png";
import dali from "../assets/dali.png";
import zeal from "../assets/zeal.png";
import appian from "../assets/appian.png";
import wealthfront from "../assets/wealthfront.png";
import mdme from "../assets/mdme.jpg";
import thomas from "../assets/thomas.jpg";
import textbot from "../assets/textbot.png";

import "../App.css";

const Work = () => {
    return (
        <React.Fragment>
            <Container>
                <Row className="mt-4">
                    <Col md={8} className="animate__animated animate__fadeIn">
                        <p className="bigtext">
                            <b>student and software engineer.</b>
                        </p>
                        <p className="fs-3">
                            currently studying Computer Science Modified with
                            Economics{" "}
                            <span className="dartmouth">
                                @ Dartmouth College
                            </span> and developing software{" "}
                            <span className="dali">@ DALI Lab</span>.
							 incoming software engineer <span className="wealthfront">@ Wealthfront</span>.
                        </p>
                    </Col>
                </Row>

                <Row className="mt-5 justify-content-center">
                    <Col
                        className="animate__animated animate__fadeIn"
                        lg={4}
                        xs={10}
                    >
                        <Image
                            src={thomas}
                            className="img-fluid"
                            alt="thomasimg"
                        />
                    </Col>
                </Row>

				<Row className="mt-5">
                    <Col className="text-center">
                        <p className="fs-3">incoming SWE @</p>
                    </Col>
                </Row>

				<Row className="mt-4 d-flex align-items-center justify-content-center">
					<Col xs={6} md={3} className="text-center">
						<a
							href="https://wealthfront.com/"
							target="_blank"
							rel="noreferrer"
						>
							<Image
								className="company"
								fluid="true"
								src={wealthfront}
							/>
						</a>
					</Col>
				</Row>

                <Row className="mt-5">
                    <Col className="text-center">
                        <p className="fs-3">who I've worked with.</p>
                    </Col>
                </Row>

				<Row className="mt-4 d-flex align-items-center justify-content-center">
					<Col xs={6} md={3} className="text-center">
						<a
							href="https://appian.com/"
							target="_blank"
							rel="noreferrer"
						>
							<Image
								className="company"
								fluid="true"
								src={appian}
							/>
						</a>
					</Col>
					<Col xs={6} md={3} className="text-center">
                        <a
                            href="http://dali.dartmouth.edu/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image
                                className="company"
                                fluid="true"
                                src={dali}
                            />
                        </a>
                    </Col>
				</Row>

                <Row className="mt-4 d-flex align-items-center justify-content-center">
					<Col xs={6} md={3} className="text-center">
                        <a
                            href="http://getzeal.co/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image
                                className="company"
                                fluid="true"
                                src={zeal}
                            />
                        </a>
                    </Col>
					<Col xs={6} md={3} className="">
                        <a
                            href="https://vitalizecare.co/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image
                                className="company"
                                fluid="true"
                                src={vitalize}
                            />
                        </a>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col className="text-center animate__animated animate__fadeIn">
                        <h1>projects.</h1>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-between">
					<Project
						title="Measuring Digital Media Exposure"
						caption="Developed (with the DALI Lab) a web application for the Dartmouth Geisel School of Medicine to monitor
						adolescent digital media usage and display that information to researchers in a visual format."
						link="https://github.com/dali-lab/measuring-digital-media-exposure-frontend"
						tools="React.js, Firebase"
						image={mdme}
					/>
					<Project
						title="Memry"
						caption="Developed a full-stack mobile application with the DALI Lab that gamifies activities for Alzheimer’s
						 patients and caregivers to improve patient quality of life."
						link="https://github.com/dali-lab/memry-frontend"
						tools="React Native, Expo, Express.js, Node.js, Cloud Firestore"
						image={memry}
					/>
					<Project
						title="Text Bot"
						caption="Built an SMS bot that texts my cell phone a word of the day every morning."
						link="https://github.com/tfenaroli/text-bot"
						tools="Python, AWS Lambda, AWS EventBridge"
						image={textbot}
					/>
                    <Project
                        title="DALIChat"
                        caption="Developed a responsive multi-page social
                                    media web application with user
                                    authentication, posting, and commenting
                                    features."
                        link="https://github.com/tfenaroli/dalichat"
                        tools="HTML, CSS,
                                    JavaScript, React.js, React-Bootstrap, Firebase"
                        image={dalichat}
                    />
                    <Project
                        title="Blender Python Scripting"
                        caption="Used Python scripting in Blender to animate
                                    a golf ball along CSV file coordinates for
                                    3-dimensional rendering."
                        link="https://gist.github.com/tfenaroli/0b08f9dcae8d40c567a6fecb30933d81"
                        tools="Python, MatLab"
                        image={animation}
                    />
                    <Project
                        title="Balloon Popper"
                        caption="Used the Pygame library to create a bird, kite,
                                    and balloon game."
                        link="https://github.com/tfenaroli/Balloon-Popper"
                        tools="Python, Pygame"
                        image={balloonpopper}
                    />
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default Work;
