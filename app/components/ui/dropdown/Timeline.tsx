import Image from "next/image";

const Timeline = () => {
  return (
    <button className="w-[120px] h-[42px] px-3 flex justify-between items-center gap-2">
      <span className="font-bold text-xl">2023</span>
      <Image
        src="/svg/arrowDown.svg"
        alt="down"
        width={24}
        height={24}
        objectFit="contain"
      />
    </button>
  );
};

export default Timeline;
