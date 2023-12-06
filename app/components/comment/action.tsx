
interface commentActionProps {
  status : '로그아웃' | '로그인' | '내글'
}
const CommentAction = ({
  status
}:commentActionProps) => {
  return (
    <button className="flex px-3 py-2 border border-solid border-gray04 rounded-lg font-pretendard text-sm font-medium items-center justify-center bg-gray01">
      {
        status !=='로그아웃'
        ? (<>
          <div className="text-gray07 px-2">답글</div>
          <div className="w-[1px] h-3 bg-gray03" />
        </>)
        : null
      }
      {
        status==='내글' 
        ? (<>
            <div className="text-gray04 px-2">삭제</div>
            <div className="w-[1px] h-3 bg-gray03" />
          </>)
        : null
      }

      <div className="text-statusRed px-2">신고</div>

    </button>
  )
}

export default CommentAction