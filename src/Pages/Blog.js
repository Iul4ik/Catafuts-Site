import React, { Component } from 'react';
import { Card, Col, Container, Row, ListGroup, } from 'react-bootstrap';
import html from "../assets/html.png";
import sass from "../assets/sass.png";
import python from "../assets/python.png";
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";
import c from "../assets/c.png";
class Blog extends Component {
    render() {
        return (
            <Container className='blog'>
                <Row>
                    
                    <Col md="9">

                        <Card className="m-5">
                            <img
                                width={150}
                                height={150}
                                className='mr-3'
                                src={html}
                            />
                            <Card.Body>
                                <h5>Html/Css</h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Explicabo voluptatem quod esse magnam earum dolore corrupti,
                                    sint ab perspiciatis perferendis quis incidunt ipsam sed at
                                    reprehenderit expedita alias necessitatibus ullam.
                                </p>
                            </Card.Body>

                        </Card>

                        <Card className="m-5">
                            <img
                                width={150}
                                height={150}
                                className='mr-3'
                                src={sass}
                            />
                            <Card.Body>
                                <h5>Sass</h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Explicabo voluptatem quod esse magnam earum dolore corrupti,
                                    sint ab perspiciatis perferendis quis incidunt ipsam sed at
                                    reprehenderit expedita alias necessitatibus ullam.
                                </p>
                            </Card.Body>

                        </Card>

                        <Card className="m-5">
                            <img
                                width={150}
                                height={150}
                                className='mr-3'
                                src={python}
                            />

                            <Card.Body>
                                <h5>Python</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Explicabo voluptatem quod esse magnam earum dolore corrupti,
                                    sint ab perspiciatis perferendis quis incidunt ipsam sed at
                                    reprehenderit expedita alias necessitatibus ullam.
                                </p>
                            </Card.Body>

                        </Card>

                        <Card className="m-5">
                            <img
                                width={150}
                                height={150}
                                className='mr-3'
                                src={java}
                            />

                            <Card.Body>
                                <h5>Java</h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Explicabo voluptatem quod esse magnam earum dolore corrupti,
                                    sint ab perspiciatis perferendis quis incidunt ipsam sed at
                                    reprehenderit expedita alias necessitatibus ullam.
                                </p>
                            </Card.Body>

                        </Card>

                        <Card className="m-5">
                            <img
                                width={150}
                                height={150}
                                className='mr-3'
                                src={javascript}
                            />

                            <Card.Body>
                                <h5>JavaScript</h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Explicabo voluptatem quod esse magnam earum dolore corrupti,
                                    sint ab perspiciatis perferendis quis incidunt ipsam sed at
                                    reprehenderit expedita alias necessitatibus ullam.
                                </p>
                            </Card.Body>

                        </Card>

                        <Card className="m-5">
                            <img
                                width={150}
                                height={150}
                                className='mr-3'
                                src={c}
                            />

                            <Card.Body>
                                <h5>C++</h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Explicabo voluptatem quod esse magnam earum dolore corrupti,
                                    sint ab perspiciatis perferendis quis incidunt ipsam sed at
                                    reprehenderit expedita alias necessitatibus ullam.
                                </p>
                            </Card.Body>

                        </Card>

                    </Col>

                    <Col md="3">
                        <h5 className="text-center mt-5" >Categories</h5>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>Html/Css</ListGroup.Item>
                                <ListGroup.Item>Sass</ListGroup.Item>
                                <ListGroup.Item>Python</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                                <ListGroup.Item>JavaScript</ListGroup.Item>
                                <ListGroup.Item>C++</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className='mt-3 bg-light'>
                            <Card.Body>
                                <Card.Title>Side widget</Card.Title>
                                <Card.Text>                                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatem quod esse magnam earum dolore corrupti, sint ab perspiciatis perferendis quis incidunt ipsam sed at reprehenderit expedita alias necessitatibus ullam.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Blog;