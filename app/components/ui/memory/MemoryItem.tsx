import MemoryThumbIcon from "./MemoryThumbIcon";

interface Props {
  thumb: string;
  date: string;
  title: string;
}

const MemoryItem = ({ thumb, date, title }: Props) => {
  return (
    <div className="border border-[#525252] rounded-xl p-2 bg-white">
      <img src={thumb} className="border border-[#949494] rounded-lg" />
      <div className="flex flex-col gap-0.5 px-2 py-3">
        <div className="flex justify-between items-center">
          <p className="text-[13px] text-[#737373]">{date}</p>
          <div className="flex gap-2">
            <MemoryThumbIcon type="flower" amount={45} />
            <MemoryThumbIcon type="comment" amount={8} />
          </div>
        </div>
        <p className="font-medium">{title}</p>
      </div>
    </div>
  );
};

export default MemoryItem;
