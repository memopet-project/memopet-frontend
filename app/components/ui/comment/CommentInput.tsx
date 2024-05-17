import DefaultInput from "../input/DefaultInput";
import RoundedBtn from "../button/RoundedBtn";

const CommentInput = () => {
  return (
    <div className="w-[360px] bg-[#FAFAFA] border border-[#525252] rounded-lg p-3 flex flex-col gap-2">
      <DefaultInput placeholder="따뜻한 한마디를 남겨주세요" />
      <div className="flex justify-end gap-1">
        <RoundedBtn text="취소" style="outlined" state="disabled" />
        <RoundedBtn text="남기기" />
      </div>
    </div>
  );
};

export default CommentInput;
