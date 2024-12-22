import { useEffect, useState } from 'react';

export const useCarousel = (images: string[], intervalTime: number = 3000) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [images, intervalTime]);

  return { currentSlide };
};
