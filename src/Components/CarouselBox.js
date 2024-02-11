import React, { Component } from 'react';
import  Carousel  from 'react-bootstrap/Carousel';
import moonFirst from '../assets/moon(1).png';
import moonSecond from '../assets/moon(2).png';
import moonThirt from '../assets/moon(3).png';


class CarouselBox  extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img 
                            className='d-block img'
                            src={ moonFirst }
                            alt='ship'
                        />
                        <Carousel.Caption>
                            <h3 className='carousel_title'>Black Pearl</h3>
                            <p className='carousel_text'>Lorem ipsum dolore</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            className='d-block img'
                            src={ moonSecond }
                            alt='ninja'
                        />
                        <Carousel.Caption>
                            <h3 className='carousel_title'>Epsos</h3>
                            <p className='carousel_text'>Lorem ipsum dolore</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            className='d-block img'
                            src={ moonThirt }
                            alt='titan'
                        />
                        <Carousel.Caption>
                            <h3 className='carousel_title'>Titan</h3>
                            <p className='carousel_text'>Lorem ipsum dolore</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default CarouselBox;