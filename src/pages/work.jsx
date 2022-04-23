import React from "react";
import { Image, Container, Row, Col, Card, Button } from "react-bootstrap";
import Project from "../components/project";
import balloonpopper from "../assets/balloonpopper.png";
import dalichat from "../assets/dalichat.png";
import notes from "../assets/notes.png";
import website from "../assets/website.png";
import illuminate from "../assets/illuminate.png";
import animation from "../assets/animation.png";
import vitalize from "../assets/vitalize.png";
import legislate from "../assets/legislate.png";
import thomas from "../assets/thomas.jpg";
import "../App.css";

const Work = () => {
    // const getData = () => {
    //     // let contributions = 2;
    //     fetch("https://api.github.com/users/tfenaroli/contributions")
    //         .then((response) => response.json()) //Converting the response to a JSON object
    //         .then((response) => {
    //             console.log("hi");
    //             // repos = response.public_repos;
    //             console.log(response);
    //         })
    //         .catch((error) => console.error(error));
    //     // console.log("repos is: " + repos);
    //     // return repos;
    // };
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
                            Economics.{" "}
                            <span className="dartmouth">
                                @Dartmouth College
                            </span>{" "}
                            and developing software{" "}
                            <span className="teamlegislate">
                                @Team Legislate
                            </span>
                            .
                        </p>
                    </Col>
                    {/* <Col
                        md={4}
                        className="d-flex align-items-center animate__animated animate__flipInY animate__slow"
                    >
                        <p className="text-muted fs-1 text-bold">32</p>
                        <p className="text-muted fs-4 text-bold">
                            Contributions
                        </p>
                    </Col> */}
                </Row>

                {/* <h1>{getData()}</h1> */}

                <Row className="mt-5 justify-content-center">
                    <Col
                        className="animate__animated animate__fadeIn"
                        md={5}
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
                        <p className="fs-3">who I've worked with.</p>
                    </Col>
                </Row>
                <Row className="mt-4 d-flex justify-content-center">
                    <Col xs={6} md={3} className="">
                        <Image fluid="true" src={vitalize} />
                    </Col>
                    <Col xs={6} md={3} className="">
                        <Image fluid="true" src={legislate} />
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col className="text-center animate__animated animate__fadeIn">
                        <h1>projects.</h1>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-between">
                    <Project
                        title="DALIChat"
                        caption="Developed a responsive multi-page social
                                    media web application with user
                                    authentication, posting, and commenting
                                    features."
                        link="https://github.com/tfenaroli/dalichat"
                        tools="HTML, CSS,
                                    JavaScript, ReactJS, React Router,
                                    React-Bootstrap, and Firebase"
                        image={dalichat}
                    />
                    <Project
                        title="Notes App"
                        caption="Developed a mobile notes application with
                                    posting, editing, and deleting features.
                                   "
                        link="https://github.com/tfenaroli/notes_app"
                        tools="JavaScript, ReactJS, React
                                    Native, and React Navigation."
                        image={notes}
                    />
                    <Project
                        title="Dartmouth Illuminate"
                        caption="Created a responsive website for the
                                    Dartmouth Society of Photographers."
                        link="https://github.com/tfenaroli/dartmouthphotographers.com"
                        tools="HTML, CSS"
                        image={illuminate}
                    />
                    <Project
                        title="Blender Python Scripting"
                        caption="Used Python scripting in Blender to animate
                                    a golf ball along CSV file coordinates for
                                    3-d rendering."
                        link="https://gist.github.com/tfenaroli/0b08f9dcae8d40c567a6fecb30933d81"
                        tools="Python, MatLab"
                        image={animation}
                    />
                    <Project
                        title="Balloon Popper"
                        caption="Used Pygame library to create bird, kite,
                                    and balloon game."
                        link="https://github.com/tfenaroli/Balloon-Popper"
                        tools="Python, Pygame"
                        image={balloonpopper}
                    />

                    <Project
                        title="Personal Website"
                        caption="This website!"
                        link="https://github.com/tfenaroli/personal_website"
                        tools="HTML, CSS,
                                    JavaScript, ReactJS, React Router,
                                    React-Bootstrap."
                        image={website}
                    />
                </Row>
                <Row className="mt-5">
                    <Col className="text-center animate__animated animate__fadeIn">
                        <h1>classwork.</h1>
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
                                    Used BFS to find shortest path between two
                                    spots on Dartmouth's campus.
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
                                    Used Huffman encoding to compress and
                                    decompress text files.
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
                    <Col className="mt-5 text-center d-flex justify-content-center">
                        <Card style={{ width: "18rem" }}>
                            <Card.Body>
                                <Card.Title>
                                    Breadth First Search Graph Traversal
                                </Card.Title>
                                <Card.Text>
                                    Used BFS to find "degrees of separation"
                                    between any two actors.
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
                                    Created a collaborative graphical editor
                                    using server/client communication.
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
                                    Used a Bash pipeline to sort and organize
                                    United States COVID-19 vaccination data.
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
            </Container>
        </React.Fragment>
    );
};

export default Work;
