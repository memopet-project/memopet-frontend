import { useState } from "react"
import HeartEmpty from '../../../public/svg/heartEmpty.svg'
// import HeartFilled from '@/public/svg/heart_filled.svg'


const Article = () => {
  const [isFlower, setIsFlower] = useState(false)
  const tempContent = `어제 복실이랑 또아 인증샷을 찍는데 끼어든 '입만 웃는 그놈', 그리고 끝까지 카메라에 나오려고 애쓰는 짱플루언서...

  "그 애는 항상 웃고 있었어요. 근데 눈은 웃질 않았죠... 기묘한 아이였어요..."
          `
  return (
    <div className="bg-white flex p-5 gap-6 w-[864px] items-end">
      <div className="bg-subRed min-w-[400px] h-[600px]"></div>
      <div className="border-b-[1px] border-borderGray">
        <header className="py-4 flex flex-col ">
          <div className="text-[13px] text-textdarkgray mb-1">2023. 11. 29</div>
          <div className="text-lg font-bold">입만 웃는 기묘한 뇨속..</div>
        </header>
        <div className="whitespace-pre-wrap text-base leading-normal">{tempContent}</div>
      </div>
    </div>
  )
}

export default Article