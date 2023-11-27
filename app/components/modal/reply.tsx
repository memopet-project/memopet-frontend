import RoundedBtn from "../button/roundedBtn"

const ReplyComponent = ({
}) => {
  return (
    <div className="border border-solid border-borderBlack p-5 w-[360px] font-pretendard">
      <input className="border border-solid border-borderBlack py-[14px] px-3 w-full bg-surface outline-none" placeholder="따뜻한 한마디를 남겨주세요" />
      <div className="pt-2 flex items-center justify-end">
        <RoundedBtn text="취소" bgColor="white" marginRight='16px' />
        <RoundedBtn text="남기기" bgColor="red" />
      </div>
      <div className="font-normal text-[13px] text-textGray mt-3">비방·비하·욕설이 담긴 글은 통보 없이 삭제될 수 있습니다.</div>
    </div>
  )
}

export default ReplyComponent