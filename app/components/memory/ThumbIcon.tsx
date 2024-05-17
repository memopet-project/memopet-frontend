import Image from "next/image";

interface Props {
  type: "flower" | "like" | "comment";
  amount: number;
}

const ThumbIcon = ({ type, amount }: Props) => {
  return (
    <div className="flex items-center gap-0.5 text-[#949494]">
      <Image
        src={`/svg/${type}.svg`}
        alt={type}
        width={16}
        height={16}
        objectFit="contain"
      />
      <span className="text-xs">{amount}</span>
    </div>
  );
};

export default ThumbIcon;
