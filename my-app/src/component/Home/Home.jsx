import React from 'react'
import racing from '../../img/racing.jpeg';
import slide5 from '../../img/slide5.jpeg'
import drift from '../../img/drift.jpeg'
import side from '../../img/side_shot.jpeg'
import slide from '../../img/slide.jpeg'
import {Carousel} from 'react-bootstrap'

export const Home = () => {
  

  
    return (
        <div className='hero'>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slide5}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={racing}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={side}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slide}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={drift}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
  )
}
