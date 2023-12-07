import RoundedBtn from "../button/roundedBtn"
import { ChangeEvent, useState } from 'react'

interface commentActionProps {
  status : '로그아웃' | '로그인' | '내글'
}
const CommentInput = () => {

  const [inputVal, setInputVal] = useState('')
  const handleChangeInput = (e:ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value)
  }
  return (
    <div>
      <input className="mb-2" onChange={handleChangeInput}/>
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