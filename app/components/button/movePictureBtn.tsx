import PicRightSVG from '@/public/svg/picRight.svg'
import PicLeftSVG from '@/public/svg/picLeft.svg'
import { useSwiper } from 'swiper/react'

interface buttonType {
  buttonType: 'prev' | 'next'
}

const MovePictureBtn = ({buttonType}:buttonType) => {
  const swiper = useSwiper();
 

  if (buttonType==='prev') {
    return (
      <button 
        className="ml-2 cursor-pointer z-40 absolute top-1/2 flex items-center justify-center rounded-full"
        onClick={()=> swiper.slidePrev()}
      >
        <PicLeftSVG className='opacity-50 hover:opacity-80 '/>
      </button>
    )
  } else {
    return (
      <button 
        className="mr-2 cursor-pointer flex items-center absolute top-1/2 z-40 right-0 justify-center rounded-full"
        onClick={()=> swiper.slideNext()}
      >
        <PicRightSVG className='opacity-50 hover:opacity-80 '/>
      </button>
    )
  }
}

export default MovePictureBtn