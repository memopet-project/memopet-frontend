type buttonProps = {
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
}:buttonProps) => {
  return (
    <div>
      <button 
        className={`px-4 py-0 rounded-full border border-solid text-sm font-medium h-8 font-pretendard ${marginRight ? 'mr-1' : ''}
          ${
            bgColor==='red' ? 
              'bg-red05 text-white' :
            bgColor==='gray' ? 
              'bg-gray03 text-white' 
            : 'bg-white text-[#404040] border-gray03'} `
          }
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  )
}

export default RoundedBtn