import Image from "next/image";

interface Props {
  icon: string;
  onClick?: () => void;
}

const IconBtn = ({ icon, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 flex justify-center items-center"
    >
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
