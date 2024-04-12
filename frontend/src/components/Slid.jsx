import React, { useState, useEffect, useCallback } from 'react';
import image1 from '../Images/ban1.jpg';
import image2 from '../Images/ban2.jpg';


const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [image1, image2];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 1500);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlide, nextSlide]);

  return (
    <div className="carousel-container">
      <button onClick={prevSlide}></button>
      <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      <button onClick={nextSlide}></button>
    </div>
  );
};

export default Carousel;
