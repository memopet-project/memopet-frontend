interface Props {
  state?: "enabled" | "disabled" | "selected";
  month: number;
}

const Ticker = ({ state, month }: Props) => {
  return (
    <button className="flex items-center gap-1">
      {state === "selected" ? (
        <span className="w-1 h-1 bg-[#F15139] rounded-[50%]"></span>
      ) : null}
      <span
        className={`font-semibold text-[${
          state === "disabled" ? "#B3B3B3" : "#171717"
        }]`}
      >
        {month}월
      </span>
    </button>
  );
};

export default Ticker;
