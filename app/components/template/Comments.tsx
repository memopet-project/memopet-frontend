import CommentInput from "../ui/comment/CommentInput";
import CommentItem from "../ui/comment/CommentItem";

const Comments = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">따뜻한 한마디</h2>
        <button className="h-10 flex items-center gap-2 py-1 px-5 text-[#949494]">
          <span>icon</span>
          <span>모두 보기</span>
        </button>
      </div>
      <ul className="flex gap-2">
        <li>
          <CommentInput />
        </li>
        <li>
          <CommentItem
            name="몽구"
            time="10분 전"
            comment="저희 강아지도 올해 봄에 강아지별로 떠나갔어요. 마음 잘 추스리시길 바랍니다.. 위로의 말씀 전해요.."
          />
        </li>
        <li>
          <CommentItem
            name="코코"
            time="1시간 전"
            comment="나랑 같은 이름이구나! 반가와 :)"
          />
        </li>
      </ul>
    </div>
  );
};

export default Comments;
