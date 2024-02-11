import React, { Component } from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
// import { First } from 'react-bootstrap/esm/PageItem';
import design from '../assets/design.png';
import team from '../assets/team.png';
import programming from '../assets/programming.png';
import frameworks from '../assets/framework.png';
import libraries from '../assets/libraries.png';
class About extends Component {
    render() {
        return (
            <Container className='about'>
                <Tab.Container id='ledt-tabs-example' defaultActiveKey="first" >
                    <Row>
                        <Col sm={3}>
                            <Nav variant='pills' className='flex-column mt-2'>
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>

                        <Col sm={9}>
                            <Tab.Content>

                                <Tab.Pane eventKey="first">
                                    <img className='img-about' src={design} />
                                    <h1>Post about Design</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Voluptas tempora, delectus ratione expedita ullam praesentium?
                                    </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                    <img className='img-about' src={team} />
                                    <h1>Post about Team </h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Voluptas tempora, delectus ratione expedita ullam praesentium?
                                    </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="third">
                                    <img className='img-about' src={programming} />
                                    <h1>Post about Programming</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Voluptas tempora, delectus ratione expedita ullam praesentium?
                                    </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="fourth">
                                    <img className='img-about' src={frameworks} />
                                    <h1>Post about Frameworks</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Voluptas tempora, delectus ratione expedita ullam praesentium?
                                    </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="fifth">
                                    <img className='img-about' src={libraries} />
                                    <h1>Post about Libraries</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Voluptas tempora, delectus ratione expedita ullam praesentium?
                                    </p>
                                </Tab.Pane>
                                
                            </Tab.Content>
                        </Col>

                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default About;