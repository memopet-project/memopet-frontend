interface Props {
  type: "flower" | "comment";
  amount: number;
}

const ThumbIcon = ({ type, amount }: Props) => {
  return (
    <div className="flex items-center gap-0.5 text-[#949494]">
      <span>icon</span>
      <span className="text-xs">{amount}</span>
    </div>
  );
};

export default ThumbIcon;
