import CommentAction from './action'
import VerticalDotsSVG from '@/public/svg/verticalDots.svg'
import { useState } from 'react'

interface commentActionStatus {
  status : '로그아웃' | '로그인' | '내글'
}

const CommentItem = ({
  status
}:commentActionStatus) => {

  const [isModal, setIsModal] = useState(true);
  const [modalType, setModalType] = useState<commentActionStatus['status']>('로그인');
  const clickDots = () => { setIsModal(()=>!isModal)}
  return (
    <div className="px-5 py-4 w-[360px] border border-solid border-gray07 relative">
      <header className="flex justify-between">
        <div className='flex items-center'>
          <div className="w-8 h-8 bg-yellow-50 rounded-full border border-gray09" />
          <div className='text-base text-gray09 font-bold ml-3'>몽구</div>
          <div className='text-xs text-gray05 font-normal ml-2'>방금 전</div>
        </div>
        <VerticalDotsSVG className='cursor-pointer' onClick={clickDots}/>
        {
          isModal && <div className='absolute right-2 top-11'><CommentAction status={status}/></div>
        }
      </header>
      <main className='w-full mt-3 text-gray09 text-base'>
        본문 텍스트의 줄 길이는 공백 및 기호를 포함하여 일반적으로 40-60자 사이가 일반적이므로 최대 60자까지
      </main>
    </div>
  )
}

export default CommentItem