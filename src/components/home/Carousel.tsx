import React from 'react';
import { useCarousel } from '../../hooks/useCarousel';
import '../../styles/home/carousel.css';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const { currentSlide } = useCarousel(images);

  return (
    <div className="carousel">
      {images.map((src, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img src={src} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
