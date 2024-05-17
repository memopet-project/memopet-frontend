interface Props {
  style?: "filled" | "outlined" | "white";
  state?: "enabled" | "disabled";
  text: string;
}

const RoundedBtn = ({ style = "filled", state = "enabled", text }: Props) => {
  return (
    <button
      className={`h-8 px-4 bg-[#F15139] text-white rounded-[999px] flex justify-center items-center text-sm`}
    >
      {text}
    </button>
  );
};

export default RoundedBtn;
