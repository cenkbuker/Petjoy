import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";

const SlideShow = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval={null}
      fade
      className='mt-3 fade-in'
    >
      <Carousel.Item>
        <Image
          className='img'
          src='https://picsum.photos/seed/picsum/1000/300'
          alt='First slide'
        />
        <Carousel.Caption>
          <h3 className='text-light fs-md-5 slide-title'>
            Excited Pet Accessories
          </h3>
          <Link
            className='btn btn-secondary rounded slide-btn '
            to='/products'
          >
            <span className='slide-in'>SHOP ACCESSORIES</span>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className='img'
          src='https://picsum.photos/seed/picsum/1000/300'
          alt='Second slide'
        />

        <Carousel.Caption>
          <h3 className='text-light fs-md-5 slide-title'>
            The Loved Treats
          </h3>
          <Link
            className='btn btn-secondary rounded slide-btn'
            to='/products'
          >
            <span className='slide-in'>SHOP TREATS</span>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default SlideShow;