import React from 'react'
import InputCloseSVG from '@/public/svg/inputClose.svg'

type InputCloseBtnProps = {
  clickBtn: () => void,
  addClass: string,
}

const InputCloseBtn = ({
  clickBtn,
  addClass
}:InputCloseBtnProps) => {
  return (
    <div className={`rounded-full bg-gray02 cursor-pointer w-6 h-6 flex items-center justify-center ${addClass}`} onClick={clickBtn}>
      <InputCloseSVG className='w-3 h-3 ' />
    </div>
  )
}

export default InputCloseBtn