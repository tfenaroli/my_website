import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import balloonpopper from "../assets/balloonpopper.jpg";
import illuminate from "../assets/illuminate.jpg";
import animation from "../assets/animation.jpg";

const Work = () => {
    return (
        <React.Fragment>
            <Row className="mt-5">
                <Col className="text-center animate__animated animate__fadeIn">
                    <h1>Projects</h1>
                </Col>
            </Row>
            <Row>
                <Col className="mt-5 text-center d-flex justify-content-center">
                    <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={balloonpopper} />
                        <Card.Body>
                            <Card.Title>Balloon Popper</Card.Title>
                            <Card.Text>
                                Used Pygame library to create bird, kite, and
                                balloon game.
                            </Card.Text>
                            <Button
                                href="https://github.com/tfenaroli/Balloon-Popper"
                                variant="outline-secondary"
                                target="_blank"
                            >
                                Check it out!
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mt-5 text-center d-flex justify-content-center">
                    <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={illuminate} />
                        <Card.Body>
                            <Card.Title>Dartmouth Illuminate</Card.Title>
                            <Card.Text>
                                Created a responsive website for the Dartmouth
                                Society of Photographers.
                            </Card.Text>
                            <Button
                                href="https://github.com/tfenaroli/dartmouthphotographers.com"
                                variant="outline-secondary"
                                target="_blank"
                            >
                                Check it out!
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mt-5 text-center d-flex justify-content-center">
                    <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={animation} />
                        <Card.Body>
                            <Card.Title>Blender Python Scripting</Card.Title>
                            <Card.Text>
                                Used Python scripting in Blender to animate a
                                golf ball along CSV file coordinates for 3-d
                                rendering.
                            </Card.Text>
                            <Button
                                href="https://gist.github.com/tfenaroli/0b08f9dcae8d40c567a6fecb30933d81"
                                variant="outline-secondary"
                                target="_blank"
                            >
                                Check it out!
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col className="mt-5 text-center d-flex justify-content-center">
                    <Card style={{ width: "18rem" }}>
                        <Card.Body>
                            <Card.Title>
                                Breadth-First Search Path Finding
                            </Card.Title>
                            <Card.Text>
                                Used BFS to find shortest path between two spots
                                on Dartmouth's campus.
                            </Card.Text>
                            <Button
                                href="https://github.com/tfenaroli/dartmouth-cs1/tree/main/Lab%204"
                                variant="outline-secondary"
                                target="_blank"
                            >
                                Check it out!
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mt-5 text-center d-flex justify-content-center">
                    <Card style={{ width: "18rem" }}>
                        <Card.Body>
                            <Card.Title>
                                Breadth-First Search Color Matching
                            </Card.Title>
                            <Card.Text>
                                Used BFS to allow for web camera "painting".
                            </Card.Text>
                            <Button
                                href="https://github.com/tfenaroli/dartmouth-cs10/tree/main/PS1"
                                variant="outline-secondary"
                                target="_blank"
                            >
                                Check it out!
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mt-5 text-center d-flex justify-content-center">
                    <Card style={{ width: "18rem" }}>
                        <Card.Body>
                            <Card.Title>
                                QuadTree Collision Detection
                            </Card.Title>
                            <Card.Text>
                                Used QuadTrees to determine if two randomly
                                moving quantities had collided.
                            </Card.Text>
                            <Button
                                href="https://github.com/tfenaroli/dartmouth-cs10/tree/main/PS2"
                                variant="outline-secondary"
                                target="_blank"
                            >
                                Check it out!
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mt-5 text-center d-flex justify-content-center">
                    <Card style={{ width: "18rem" }}>
                        <Card.Body>
                            <Card.Title>Huffman Encoding</Card.Title>
                            <Card.Text>
                                Used Huffman encoding to compress and decompress
                                text files.
                            </Card.Text>
                            <Button
                                href="https://github.com/tfenaroli/dartmouth-cs10/tree/main/PS3"
                                variant="outline-secondary"
                                target="_blank"
                            >
                                Check it out!
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col className="mt-5 text-center d-flex justify-content-center">
                    <Card style={{ width: "18rem" }}>
                        <Card.Body>
                            <Card.Title>
                                Breadth First Search Graph Traversal
                            </Card.Title>
                            <Card.Text>
                                Used BFS to find "degrees of separation" between
                                any two actors.
                            </Card.Text>
                            <Button
                                href="https://github.com/tfenaroli/dartmouth-cs10/tree/main/PS4"
                                variant="outline-secondary"
                                target="_blank"
                            >
                                Check it out!
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mt-5 text-center d-flex justify-content-center">
                    <Card style={{ width: "18rem" }}>
                        <Card.Body>
                            <Card.Title>Viterbi Algorithm</Card.Title>
                            <Card.Text>
                                Used Viterbi Algorithm to train and then tag
                                parts of speech of given text file.
                            </Card.Text>
                            <Button
                                href="https://github.com/tfenaroli/dartmouth-cs10/tree/main/PS5"
                                variant="outline-secondary"
                                target="_blank"
                            >
                                Check it out!
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mt-5 text-center d-flex justify-content-center">
                    <Card style={{ width: "18rem" }}>
                        <Card.Body>
                            <Card.Title>
                                Server and Client Collaborative Editor
                            </Card.Title>
                            <Card.Text>
                                Created a collaborative graphical editor using
                                server/client communication.
                            </Card.Text>
                            <Button
                                href="https://github.com/tfenaroli/dartmouth-cs10/tree/main/PS6"
                                variant="outline-secondary"
                                target="_blank"
                            >
                                Check it out!
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mt-5 text-center d-flex justify-content-center">
                    <Card style={{ width: "18rem" }}>
                        <Card.Body>
                            <Card.Title>Bash Pipelining</Card.Title>
                            <Card.Text>
                                Used a Bash pipeline to sort and organize United
                                States COVID-19 vaccination data.
                            </Card.Text>
                            <Button
                                href="https://github.com/tfenaroli/dartmouth-cs50/tree/main/lab1-tfenaroli"
                                variant="outline-secondary"
                                target="_blank"
                            >
                                Check it out!
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mb-5">
                <Col className="mt-5 text-center d-flex justify-content-center">
                    <Card style={{ width: "18rem" }}>
                        <Card.Body>
                            <Card.Title>Data Structures</Card.Title>
                            <Card.Text>
                                Created set, counters, and hashtable data
                                structures.
                            </Card.Text>
                            <Button
                                href="https://github.com/tfenaroli/dartmouth-cs50/tree/main/lab3-tfenaroli"
                                variant="outline-secondary"
                                target="_blank"
                            >
                                Check it out!
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mt-5 text-center d-flex justify-content-center">
                    <Card style={{ width: "18rem" }}>
                        <Card.Body>
                            <Card.Title>Tiny Search Engine</Card.Title>
                            <Card.Text>
                                Created a crawler, indexer, and querier as
                                components of a tiny search engine.
                            </Card.Text>
                            <Button
                                href="https://github.com/tfenaroli/dartmouth-cs50/tree/main/tse-tfenaroli"
                                variant="outline-secondary"
                                target="_blank"
                            >
                                Check it out!
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Work;
