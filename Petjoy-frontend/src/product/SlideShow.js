import React, { useState } from "react";
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
    >
    
      <Carousel.Item>
        <Image
          className='img carousel'
          src='https://plus.unsplash.com/premium_photo-1667563111755-f4a29274374c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
          alt='First slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className='img carousel'
          src='https://images.unsplash.com/photo-1589652717406-1c69efaf1ff8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
          alt='Second slide'
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default SlideShow;