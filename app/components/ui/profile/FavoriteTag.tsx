import Image from "next/image";
import { useMemo } from "react";

interface Props {
  bgColor: string;
  children: string;
}

const FavoriteTag = ({ bgColor, children }: Props) => {
  return (
    <div
      className={`h-9 flex items-center gap-1 border border-[#171717] px-3 rounded-[999px] bg-[${bgColor}]`}
    >
      <Image
        src="/svg/like.svg"
        alt="like"
        width={16}
        height={16}
        objectFit="contain"
      />
      <span>{children}</span>
    </div>
  );
};

export default FavoriteTag;
