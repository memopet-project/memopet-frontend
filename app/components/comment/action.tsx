
interface commentActionProps {
  status : '로그아웃' | '로그인' | '내글'
  deleteComment?: ()=>void,
}
const CommentAction = ({
  status,
  deleteComment
}:commentActionProps) => {
  return (
    <div className="flex px-3 py-2 border border-solid border-gray04 rounded-lg font-pretendard text-sm font-medium items-center justify-center bg-gray01">
      {
        status !=='로그아웃'
        ? (<div className="flex items-center">
            <div className="text-gray07 w-11 px-2">답글</div>
            <div className="w-[1px] h-3 bg-gray03" />
          </div>)
        : null
      }
      {
        status==='내글' 
        ? (<div className="flex items-center cursor-pointer" onClick={deleteComment}>
              <div className="text-gray04 w-11 px-2">삭제</div>
              <div className="w-[1px] h-3 bg-gray03" />
           </div>)
        : null
      }

      <div className="text-statusRed w-11 px-2">신고</div>

    </div>
  )
}

export default CommentAction