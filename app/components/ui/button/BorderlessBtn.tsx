import Image from "next/image";

interface Props {
  type?: "grey" | "red";
  state?: "default" | "disalbed";
  icon: string;
  text: string;
}

const BorderlessBtn = ({
  type = "grey",
  state = "default",
  icon,
  text,
}: Props) => {
  return (
    <button className="h-10 flex items-center gap-2 py-1 px-5 text-[#949494]">
      <Image
        src={`/svg/${icon}.svg`}
        alt={icon}
        width={24}
        height={24}
        objectFit="contain"
      />
      <span>{text}</span>
    </button>
  );
};

export default BorderlessBtn;
