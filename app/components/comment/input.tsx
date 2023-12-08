import RoundedBtn from "../button/roundedBtn"
import { ChangeEvent, useState } from 'react'

const CommentInput = () => {

  const [inputVal, setInputVal] = useState('')
  const handleChangeInput = (e:ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value)
  }
  return (
    <div className="w-[368px]">
      <input 
        className="mb-2 w-full border border-solid border-gray03 h-14 px-3 flex items-center font-pretendard font-normal rounded-md focus:border-gray07" 
        onChange={handleChangeInput}
      />
      <div className="flex justify-end">
        <RoundedBtn buttonType="white01" text="취소" marginRight={true}/>
        {
         inputVal.length === 0 
         ?
         <RoundedBtn buttonType="gray01" text="등록" />
         :
         <RoundedBtn buttonType="red01" text="등록" />
        }
      </div>
    </div>
  )
}

export default CommentInput