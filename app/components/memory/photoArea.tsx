import Image from "next/image";
import {Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y } from "swiper/modules";

import 'swiper/css' 
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import MovePictureBtn from '../button/movePictureBtn';


const PhotoArea = ({ photos }:{photos: string[]}) => {
  const tempPhotos = [
    'https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J', 
    'https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-530330473.jpg?crop=0.659xw:0.990xh;0.123xw,0.00779xh&resize=980:*', 
    'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg',
    'https://image.van-go.co.kr/place_main/2022/04/04/12217/035e1737735049018a2ed2964dda596c_750S.jpg',
  ]
  return (
    <div className="flex items-center justify-center">
      <Swiper
        navigation
        pagination
        loop
        modules={[Navigation, Pagination, A11y]}
        className="max-w-[400px] h-[600px] flex items-center justify-center"
      >
        {
          tempPhotos.map((items, i )=>{
           return (
            <SwiperSlide key={i}>
              <Image src={items} alt="dog" width={100} height={100} className="w-full"/>
            </SwiperSlide>
           ) 
          })
        }
        <MovePictureBtn buttonType='prev' />
        <MovePictureBtn buttonType='next' />
      </Swiper>
    </div>
  )
}

export default PhotoArea