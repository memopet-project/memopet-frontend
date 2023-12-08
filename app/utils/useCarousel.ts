import { useState } from 'react';

const useCarousel = (items:string[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    if(currentIndex < items.length - 1 ) {
      setCurrentIndex(prevIndex => prevIndex +1)
    } else {
      setCurrentIndex(0)
    }
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const goToPrevSlide = () => {
    if(currentIndex < items.length -1){
      setCurrentIndex(prevIndex => prevIndex -1)
    } else {
      setCurrentIndex(items.length-1)
    }
  };

  return {
    currentIndex,
    goToNextSlide,
    goToPrevSlide,
  };
};

export default useCarousel;