import { CiSearch } from "react-icons/ci";
import { GoArrowRight } from "react-icons/go";

const Header = () => {
  let iconStyle = {'width':'24px', 'height': '24px'};
  return (
    <header className="bg-transparent w-sreen h-20 flex justify-center">
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