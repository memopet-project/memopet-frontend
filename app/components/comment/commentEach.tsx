import { HiOutlineDotsVertical } from "react-icons/hi";

type CommentEach = {
  commentor: string,
  comment: string,
}

const CommentEach = ({
  commentor,
  comment
}:CommentEach) => {
  return (
    <div className="flex justify-around">
      <div className="rounded-full w-8 h-8 bg-black mr-2"></div>
      <div className="w-full flex flex-col">
        <div className="flex items-center">
          <div className="text-sm font-semibold mr-2">{commentor}</div>
          <div className="text-xs text-gray05">3분전</div>
        </div>
        <div className="text-gray09 font-normal text-sm">{comment}</div>
      </div>
      <div className="flex items-center cursor-pointer">
        <HiOutlineDotsVertical />
      </div>
    </div>
  )
}

export default CommentEach