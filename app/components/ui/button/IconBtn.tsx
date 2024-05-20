import Image from "next/image";

interface Props {
  icon: string;
}

const IconBtn = ({ icon }: Props) => {
  return (
    <button className="w-10 h-10 flex justify-center items-center">
      <Image
        src={`/svg/${icon}.svg`}
        alt={icon}
        width={24}
        height={24}
        objectFit="contain"
      />
    </button>
  );
};

export default IconBtn;
