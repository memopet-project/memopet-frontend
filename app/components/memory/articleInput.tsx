import { ChangeEvent, useState } from 'react'
import RoundedBtn from '../button/roundedBtn'
import { commentInfoType, userInfoType } from '@/app/interfaces'

interface InputProps {
  userInfo: userInfoType,
  addComment: ({ }: commentInfoType) => void
}

const ArticleInput = ({
  userInfo,
  addComment
}: InputProps) => {
  const [inputValue, setInputValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleFocusChange = (focusStatus: boolean) => {
    setIsFocused(focusStatus)
  }

  const cancelReply = () => {
    setInputValue('')
  }

  const submitReply = () => {
    if (inputValue.length === 0) {
      alert('댓글이 비어있습니다.')
    }
    else {
      addComment({
        id: Math.floor(Math.random() * 100),
        commentor: userInfo.nickname,
        imgUrl: userInfo.profileImg,
        comment: inputValue
      })
      setInputValue('')
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      submitReply();
    }
  };

  return (
    <div className='relative w-[400px]'>
      <input
        placeholder='답글을 작성해 주세요'
        onFocus={() => handleFocusChange(true)}
        onBlur={() => handleFocusChange(inputValue !== '')}
        type='text'
        className='mb-2 px-3 text-base font-normal flex items-center border border-solid border-gray03 rounded-md w-full h-14 font-pretendard focus:outline-none focus:border-red05'
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <div className={`flex gap-1 justify-end ${isFocused ? 'block' : 'hidden'}`}>
        <RoundedBtn buttonType='white02' text='취소' onClick={cancelReply} />
        <RoundedBtn buttonType={inputValue.length ? 'red01' : 'gray01'} text='등록' onClick={submitReply} />
      </div>
    </div>
  )
}

export default ArticleInput