interface Props {
  placeholder?: string;
}

const DefaultInput = ({ placeholder }: Props) => {
  return (
    <input
      placeholder={placeholder}
      className="bg-white border border-[#D4D4D4] rounded-md py-3.5 px-3 placeholder:text-[#B3B3B3]"
    />
  );
};

export default DefaultInput;
