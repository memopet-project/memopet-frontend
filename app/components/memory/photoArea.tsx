import {Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css' 
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import useCarousel from "@/app/utils/useCarousel";

const PhotoArea = ({ photos }:{photos: string[]}) => {
  const tempPhotos = [
    'aa', 'bb', 'cc','dd'
  ]
  const { currentIndex, goToNextSlide, goToPrevSlide } = useCarousel(tempPhotos)
  return (
    <div className="carousel">
      <button onClick={goToPrevSlide}>이전</button>
      <div className="slide-container">
        {photos.map((item, index:number) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
      <button onClick={goToNextSlide}>다음</button>
    </div>
  )
}

export default PhotoArea