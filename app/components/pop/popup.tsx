import RoundedBtn from '../button/roundedBtn'

import CloseSVG from '@/public/svg/close.svg'
import LinkSVG from '@/public/svg/link.svg'
import TrashSVG from '@/public/svg/trash.svg'
import { useState } from 'react'


type popupProps = {
  popupType : '삭제완료' | '삭제창' | '공유하기'
  }

const Popup = ({
  popupType
}:popupProps) => {

  const [clipText, setClipText] = useState('example.co.kr/share')

  const handleCopyClipboard = async (text:string) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch (error) {
      console.log(error)
    }
  }

  if(popupType==='삭제창') {
    return (
      <div className='w-[320px] p-5 rounded-2xl font-pretendard border border-gray04'>
        <div className='text-gray07 text-base font-bold'>이 댓글을 삭제하시겠어요?</div>
        <div className='mt-4 flex justify-end '>
          <RoundedBtn text='취소' buttonType='white01' marginRight={true}/>
          <RoundedBtn text='삭제' buttonType='red02' />
        </div>
      </div>
    )
  } else if (popupType==='삭제완료') {
    return (
      <div className='w-[320px] h-[160px] p-5 rounded-2xl font-pretendard border border-gray04'>
        <div className='cursor-pointer flex justify-end'><CloseSVG /></div>
        <div className='flex justify-center mt-4 mb-2'><TrashSVG className='stroke-red05'/></div>
        <div className='flex justify-center text-gray07 font-normal text-base'>댓글이 삭제되었습니다.</div>
      </div>
    )
  } else if (popupType==='공유하기') {
    return (
      <div className='w-[360px] p-5 rounded-2xl font-pretendard border border-gray04'>
        <div className='flex justify-between font-bold text-base'>
          <div>공유하기</div>
          <div className='cursor-pointer'><CloseSVG /></div>
        </div>
        <div className='pt-1 text-gray07 text-sm font-normal'>링크를 복사해 이 게시물을 공유해 보세요!</div>
        <div className='px-3 h-[52px] flex justify-between items-center mt-4 border rounded-md border-gray03'>
          <div className='text-base font-normal text-gray04 flex justify-between'>
            <LinkSVG />
            <div className='pl-2'>example.co.kr/share</div>
          </div>
          <RoundedBtn text='복사' buttonType='red01' onClick={()=>handleCopyClipboard(clipText)}/>
        </div>
      </div>
    )
  }
}

export default Popup