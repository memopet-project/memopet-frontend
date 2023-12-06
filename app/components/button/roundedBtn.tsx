type ButtonProps = {
  text: string
  bgColor: "white" | "gray" | "red"
  marginRight?: boolean
  onClick?: ()=>void
}
const RoundedBtn = ({
  text,
  bgColor,
  marginRight,
  onClick
}:ButtonProps) => {
  return (
    <div>
      <button 
        className={`px-4 py-0 rounded-full border border-solid text-sm font-medium h-8 font-pretendard ${marginRight ? 'mr-1' : ''}
          ${
            bgColor==='red' ? 
              'bg-mainRed text-white' :
            bgColor==='gray' ? 
              'bg-maingray text-white' 
            : 'bg-white text-[#404040] border-maingray'} `
          }
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  )
}

export default RoundedBtn