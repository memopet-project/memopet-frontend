import Image from "next/image";
import IconBtn from "../button/IconBtn";

interface Props {
  name: string;
  time: string;
  comment: string;
}

const CommentItem = ({ name, time, comment }: Props) => {
  return (
    <div className="w-[360px] bg-white border border-[#525252] rounded-lg py-4 px-5 flex flex-col gap-3 relative">
      <IconBtn icon="moreVertical" />
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/images/memory/1.png"
            alt="profile"
            width={32}
            height={32}
            className="w-8 h-8 rounded-[999px] border-[0.5px] border-[#171717] object-cover"
          />
          <div className="flex items-center gap-1">
            <span className="font-bold">{name}</span>
            <span className="text-[13px] text-[#949494]">{time}</span>
          </div>
        </div>
      </div>
      <p>{comment}</p>
    </div>
  );
};

export default CommentItem;
