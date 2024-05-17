import Ticker from "../ui/dropdown/Ticker";

const Months = () => {
  return (
    <ul className="flex flex-col items-end gap-12 px-4 py-6 border-r border-[#D4D4D4]">
      <li>
        <Ticker month={5} state="selected" />
      </li>
      <li>
        <Ticker month={4} state="disabled" />
      </li>
      <li>
        <Ticker month={3} />
      </li>
      <li>
        <Ticker month={2} />
      </li>
      <li>
        <Ticker month={12} />
      </li>
    </ul>
  );
};

export default Months;
