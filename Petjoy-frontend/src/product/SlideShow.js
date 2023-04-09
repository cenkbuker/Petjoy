import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import "./SlideShow.css";
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
      className='mt-3'
    >
    
      <Carousel.Item>
        <Image
          className='img carousel'
          src='https://cdn11.bigcommerce.com/s-5o6frrlm/images/stencil/original/carousel/171/jab-05-2022__73985.jpg?c=2'
          alt='First slide'
        />
        {/* <Carousel.Caption>
          <h3 className='text-dark fs-md-5 slide-title'>
            Excited Pet Accessories
          </h3>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className='img carousel'
          src='https://cdn11.bigcommerce.com/s-5o6frrlm/images/stencil/original/carousel/187/louisdog_fall2022.jpg?c=2'
          alt='Second slide'
        />
        {/* <Carousel.Caption>
          <h3 className='text-dark fs-md-5 slide-title'>
            The Loved Treats
          </h3>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
};

export default SlideShow;