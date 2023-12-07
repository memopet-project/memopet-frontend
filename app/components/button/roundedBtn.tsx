type buttonProps = {
  text: string
  buttonType: 'red01' | 'red02' | 'gray01' | 'gray02' | 'white01' | 'white02'
  marginRight?: boolean
  onClick?: ()=>void
}

const RoundedBtn = ({
  text,
  buttonType,
  marginRight,
  onClick
}:buttonProps) => {

  const buttonColor = () => {
    switch(buttonType){
      case 'red01':
        return "bg-red05 text-white border-red05";
      case 'red02' :
        return 'bg-redDark text-white border-redDark';
      case 'gray01' :
        return 'bg-gray03 text-white border-gray03';
      case 'gray02' :
        return 'bg-gray01 text-gray07 border-gray04';
      case 'white01':
        return 'bg-white text-gray04 border-gray02';
      case 'white02' :
        return 'bg-white text-gray07 border-gray03';
    }
  }

  return (
    <div>
      <button 
        className={`px-4 py-0 rounded-full border border-solid text-sm font-medium h-8 font-pretendard ${marginRight ? 'mr-1' : ''} ${buttonColor()}`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  )
}

export default RoundedBtn