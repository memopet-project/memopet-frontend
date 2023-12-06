'use client'
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GoArrowRight } from "react-icons/go";

const Header = () => {
  let iconStyle = {'width':'24px', 'height': '24px'};
  const [scrollPosition, setScrollPosition] = useState('bg-transparent')
  

  useEffect(()=>{
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      if(currentPosition === 0) {
        setScrollPosition('bg-transparent');
      }
      else {
        setScrollPosition('bg-blue-100');
      }
    };
    window.addEventListener('scroll', handleScroll);
  },[])

  return (
    <header className={`w-screen h-20 flex justify-center fixed left-0 right-0 ${scrollPosition}`}>
      <div className="w-[1160px] items-center p-6 font-header flex justify-between">
        memopet
        <div className="h-10 w-[248px] flex gap-3">
          <div className="h-10 w-10 flex items-center justify-center">
            <CiSearch style={{'color':'black', ...iconStyle}}/>
          </div>
          <button className="flex font-pretendard font-semibold text-white bg-mainRed px-5 py-1 w-36 rounded-full items-center justify-between">
            <GoArrowRight style={iconStyle}/> 추억 올리기
          </button>
          <div className="h-10 w-10 bg-black rounded-full"></div>
        </div>
      </div>
    </header>
  )
}

export default Header