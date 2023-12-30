import RoundedBtn from "../button/roundedBtn"
import ErrorSVG from '@/public/svg/error.svg'

import { ChangeEvent, useState, useRef, useEffect } from 'react'
import InputCloseBtn from "../button/inputCloseBtn"

type CommentInputProps = {
  inputType: '댓글' | '게시판'
}
const CommentInput = ({
  inputType
}:CommentInputProps) => {

  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const [inputVal, setInputVal] = useState('')
  const [isError, setIsError] = useState(false)
  
  const autoResize = () => {
    const textarea = textAreaRef.current
    
    if (textarea) {
      const textAreaLines = textarea.value.split('\n').length
      textarea.style.height = 'auto'
      if ( textAreaLines < 4) {
        textarea.style.height = `${textarea.scrollHeight}px`
      }
    }
  }

  const handleChangeInput = (e:ChangeEvent<HTMLInputElement>) => {
    if (isError && !inputVal) {
      setIsError(false)
    }
    setInputVal(e.target.value)
  }

  const handleChangeTextarea = (e:ChangeEvent<HTMLTextAreaElement>) => {
    if (isError && !inputVal) {
      setIsError(false)
    }
    setInputVal(e.target.value)
  }


  const submitComment = () => {
    if (inputVal) {

    } else {
      setIsError(true)
    }
  }

  useEffect(() => {
    autoResize()
  }, [inputVal])
  


  if(inputType==='게시판'){
    return (
      <div className="w-[368px] p-3 relative rounded-lg border border-solid border-gray07 font-pretendard hover:shadow-[0px_4px_0px_0px_rgba(23,23,23,1)] transition-all duration-300">
        <textarea 
          className="mb-2 w-full border border-solid border-gray03 pl-3 pr-10 py-[14px] flex items-center font-normal rounded-md focus:outline-none focus:border-red05 resize-none" 
          onChange={handleChangeTextarea}
          placeholder="따뜻한 한마디를 남겨주세요"
          value={inputVal}
          ref={textAreaRef}
          maxLength={60}
        />
        {inputVal.length!==0 && <InputCloseBtn clickBtn={()=>{setInputVal('')}} addClass='absolute top-6 right-5'/>}
        {isError && (<div className="mt-1 mb-2 text-errorRed flex items-center"><ErrorSVG className='mr-1'/>한 글자 이상 입력해 주세요.</div>) }
        <div className="flex justify-end">
          <RoundedBtn buttonType={inputVal ? "white02" : "white01"} text="취소" marginRight={true} onClick={()=>{setInputVal('')}}/>
          <RoundedBtn buttonType="red01" text="남기기" onClick={submitComment} />
        </div>
      </div>
    )
  } else {
    return (
      <div className="w-[368px] font-pretendard">
        <input 
          className="mb-2 w-full border border-solid border-gray03 h-14 px-3 flex items-center font-normal rounded-md focus:outline-none focus:border-red05" 
          onChange={handleChangeInput}
          placeholder="댓글을 작성해 주세요"
          value={inputVal}
        />
        <div className="flex justify-end">
          <RoundedBtn buttonType="white01" text="취소" marginRight={true} onClick={()=>{setInputVal('')}}/>
          {
           inputVal.length === 0 
           ?
           <RoundedBtn buttonType="gray01" text="등록" />
           :
           <RoundedBtn buttonType="red01" text="등록" onClick={submitComment} />
          }
        </div>
      </div>
    )
  }
 
}

export default CommentInput