type ButtonProps = {
  text: string
  bgColor: "white" | "gray" | "red"
  marginRight?: string
}
const RoundedBtn = ({
  text,
  bgColor,
  marginRight
}:ButtonProps) => {
  return (
    <div>
      <button className={`px-4 py-0 rounded-full border border-solid text-sm font-medium h-8 font-pretendard mr-[${marginRight}]
        ${
          bgColor==='red' ? 
            'bg-mainRed text-white' :
          bgColor==='gray' ? 
            'bg-maingray text-white' 
          : 'bg-white text-[#404040] border-maingray'} `
        }>
        {text}
      </button>
    </div>
  )
}

export default RoundedBtn