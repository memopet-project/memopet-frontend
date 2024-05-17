import Image from "next/image";

interface Props {
  type?: string;
  amount: number;
}

const LikeButton = ({ type, amount }: Props) => {
  return (
    <button className="h-10 flex items-center gap-2 border border-white py-1 px-6 rounded-[999px]">
      <Image src="/svg/like.svg" alt="like" width={24} height={24} />
      <span>{amount}</span>
    </button>
  );
};

export default LikeButton;
