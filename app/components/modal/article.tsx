import { useState } from "react"
import FlowerSVG from '../../../public/svg/flowerEmpty.svg'
import CommentSVG from '../../../public/svg/comment.svg'
import VerticalDotsSVG from '../../../public/svg/verticalDots.svg'
import ShareSVG from '../../../public/svg/share.svg'

const Article = () => {
  const [isFlower, setIsFlower] = useState(false)
  const [commentOn, setCommentOn] = useState(false)
  const tempContent = `어제 복실이랑 또아 인증샷을 찍는데 끼어든 '입만 웃는 그놈', 그리고 끝까지 카메라에 나오려고 애쓰는 짱플루언서...

  "그 애는 항상 웃고 있었어요. 근데 눈은 웃질 않았죠... 기묘한 아이였어요..."`

  const tempHashtag = [
    '웰시코기', '산책왕', '강아지모델', '모델본능', '짱플루언서', '갱얼쥐'
  ]
  return (
    <div className="bg-white flex p-5 gap-6 w-[864px] items-end">
      <div className="bg-subRed min-w-[400px] h-[600px]"></div>
      <div className="">
        <header className="py-4 flex flex-col ">
          <div className="text-[13px] text-textdarkgray mb-1">2023. 11. 29</div>
          <div className="text-lg font-bold">입만 웃는 기묘한 뇨속..</div>
        </header>
        <div className="whitespace-pre-wrap text-base leading-normal">{tempContent}</div>
        <div className="flex flex-wrap gap-1 mt-4 pb-2 border-b-borderGray border-solid">
          {
            tempHashtag.map((tag,i)=>{
              return (
                <div className="py-[2px] px-3 flex items-center justify-center text-textdarkgray bg-hashTag rounded-full" key={i}>{'#' + tag}</div>
              )
            })
          }
        </div>
        <div className="w-full h-[1px] bg-borderGray" />
        <div className="flex justify-between items-center w-full h-10">
          <div className="flex">
            <FlowerSVG className='w-10 '/>
            <CommentSVG className='w-10 ' />
            <ShareSVG className='w-10' />
          </div>
          <div className="w-10 h-10 flex justify-center items-center cursor-pointer"><VerticalDotsSVG /></div>
        </div>
      </div>
    </div>
  )
}

export default Article