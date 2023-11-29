import { ChangeEvent, useEffect, useState } from "react"
import RoundedBtn from "../button/roundedBtn"
import { commentInfoType } from "@/app/interfaces"

type ReplyComponent = {
  commentChange: ({}:commentInfoType)=>void
}

const ReplyComponent = ({
  commentChange
}:ReplyComponent) => {

  const [inputVal, setInputVal] = useState('');
  const [isInput, setIsInput] = useState(false);
  const handleChangeInput = (e:ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value)
  }

  useEffect(()=>{
    if (inputVal.length === 0) {
      setIsInput(false)
    } else {
      setIsInput(true)
    }
  },[inputVal]);

  const submitReply = () => {
    if(inputVal.length === 0){
      alert('댓글이 비어있습니다.')
    } else {
      commentChange({commentor:'글쓴이', comment:inputVal})
      setInputVal('')
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    
    if (e.key === 'Enter') {
      submitReply(); 
    }
  };

  return (
    <div className="w-full font-pretendard">
      <input 
        className="border border-solid border-maingray py-[14px] px-3 w-full bg-white outline-none font-pretendard" 
        placeholder="따뜻한 한마디를 남겨주세요" 
        onChange={handleChangeInput}
        value={inputVal}
        onKeyDown={handleKeyDown}
      />
      <div className="pt-2 flex items-center justify-end">
        <RoundedBtn text="취소" bgColor="white" marginRight={true} />
        <RoundedBtn text="남기기" bgColor={isInput ? "red" : 'gray' } onClick={submitReply} />
      </div>
      <div className="font-normal text-[12px] text-textGray mt-4 tracking-[-0.25px] leading-6">비방·비하·욕설이 담긴 글은 통보 없이 삭제될 수 있습니다.</div>
    </div>
  )
}

export default ReplyComponent