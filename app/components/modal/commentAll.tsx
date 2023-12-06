import { useState } from "react"
import CommentEach from "../comment/commentEach"
import ReplyComponent from "../comment/reply"
import { commentInfoType } from "@/app/interfaces"


const CommentAll = () => {

  let tempCommentInfo:commentInfoType[] = [
    {'commentor': '콜리', 'comment': '안녕 코코야 ^_^'},
    {'commentor': '소금이', 'comment': '안녕 코코야 :)'},
    {'commentor': '몽구', 'comment': '저희 강아지도 올해 봄에 강아지별로 떠나갔어요. 마음 잘 추스리시길 바랍니다.. 위로의 말씀 전해요...'},
    {'commentor': '코코', 'comment': '나랑 같은 이름이구나!'},
    {'commentor': '후니', 'comment': '코코야 그곳에서 행복하렴!'},
    {'commentor': '모래', 'comment': '우리 모래도 코코랑 꼭 닮은 왤시코기였는데,, 코코 사진 보면서 많이 생각나네요...'},
  ]

  const [commentInfo, setCommentInfo] = useState<commentInfoType[]>(tempCommentInfo)
  const addComment = (newComment:commentInfoType) => {
    setCommentInfo([...commentInfo, newComment])
  }
  return (
    <div className="border border-solid px-6 py-8 flex flex-col gap-6 bg-white">
      <div className="items-center text-2xl font-bold">
        <span className="text-gray07">따뜻한 한마디</span>
        <span className="text-red05 ml-2">{commentInfo.length}</span>
      </div>
      <section className="p-6 w-full gap-6 bg-grayBlur flex flex-col max-h-[480px] overflow-y-scroll">
        {
          commentInfo.map((commentInfo, i)=>{
           return (
            <CommentEach key={i} commentor={commentInfo.commentor} comment={commentInfo.comment}/>
           ) 
          })
        }
      </section>
      <ReplyComponent commentChange={(newComment)=>addComment(newComment)}/>
    </div>
  )
}

export default CommentAll