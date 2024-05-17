interface Props {
  bgColor: string;
  children: string;
}

const FavoriteTag = ({ bgColor, children }: Props) => {
  return (
    <div
      className={`bg-[${bgColor}] h-9 flex items-center gap-1 border border-[#171717] px-3 rounded-[999px]`}
    >
      <span>icon</span>
      <span>{children}</span>
    </div>
  );
};

export default FavoriteTag;
