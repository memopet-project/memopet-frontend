type buttonProps = {
  text: string
  buttonType: 'red01' | 'red02' | 'gray01' | 'gray02' | 'lightRed01' | 'lightRed02'
  onClick?: ()=>void
}

const MainBtn = ({
  text,
  buttonType,
  onClick,
}:buttonProps) => {

  const buttonColor = () => {
    switch(buttonType){
      case 'red01':
        return "bg-red05 text-white";
      case 'red02' :
        return 'bg-red06 text-white';
      case 'gray01' :
        return 'bg-gray03 text-white';
      case 'gray02' :
        return 'bg-white text-gray04 border-gray02';
      case 'lightRed01':
        return 'bg-white text-red05 border-red05';
      case 'lightRed02' :
        return 'bg-redBlur text-red05 border-red05';
      default :
        return '';
    }
  }

  return (
    <button 
      className={`flex items-center justify-center border border-solid w-[358px] h-[52px] rounded-lg font-pretendard font-semibold ${buttonColor()}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default MainBtn