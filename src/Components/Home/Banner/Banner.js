import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banner1 from '../../../images/banner/banner1.png';
import banner2 from '../../../images/banner/banner2.png';
import banner3 from '../../../images/banner/banner3.png';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel className='carousel' activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Welcome to Jahid Photography</h3>
                    <p>Capturing Life’s Priceless Moments..</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Looking Twice.
                    </h3>
                    <p>To capture ten thousand words in the blink of a moment..</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Photography is a Way of Feeling.
                        .</h3>
                    <p>
                        Because every picture tells a story, let me help you tell yours.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}


export default Banner;