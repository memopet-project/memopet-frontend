import Image from "next/image";

interface Props {
  type: "flower" | "like" | "comment";
  amount: number;
}

const MemoryActionBtn = ({ type, amount }: Props) => {
  return (
    <button className="flex items-center gap-1 text-[#525252]">
      <Image
        src={`/svg/${type}.svg`}
        alt={type}
        width={24}
        height={24}
        objectFit="contain"
      />
      <span>{amount}</span>
    </button>
  );
};

export default MemoryActionBtn;
