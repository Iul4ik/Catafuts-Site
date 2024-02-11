import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import { Button, Card, Container } from 'react-bootstrap';
import junior from '../assets/junior.jpg';
import middle from '../assets/middle.jpg';
import senior from '../assets/senior.jpg';

class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />
                <Container className='home-container' >
                    <h2 className='text-center m-4 '>Our team</h2>
                    <div className='home-content'>

                        <Card bg='danger' >
                            <Card.Img
                                variant='top'
                                src={junior}
                            />
                            <Card.Body>
                                <Card.Title>Junior Front-end Developer</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odio quibusdam iusto ea.

                                </Card.Text>
                                <Button variant='primary'>About team</Button>
                            </Card.Body>
                        </Card>
                        <Card bg='info'>

                            <Card.Body>
                                <Card.Title>Middle Front-end Developer</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odio quibusdam iusto ea.
                                </Card.Text>
                                <Button variant='primary'>About team</Button>
                            </Card.Body>
                            <Card.Img
                                variant='bottom'
                                src={middle}
                            />
                        </Card>
                        <Card bg='danger' >
                            <Card.Img
                                variant='top'
                                src={senior}
                            />
                            <Card.Body>
                                <Card.Title>Senior Front-end Developer</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odio quibusdam iusto ea.
                                </Card.Text>
                                <Button variant='primary'>About team</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>
            </>
        );
    }
}
export default Home;