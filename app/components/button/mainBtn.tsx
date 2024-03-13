import { useMemo } from 'react';

type buttonProps = {
  text: string
  onClick?: () => void;
  outline?: boolean;
  disabled?: boolean;
  className?: string;
}

const MainBtn = ({ text, onClick, disabled, className, outline = false }: buttonProps) => {
  const buttonColor: string = useMemo(() => {
    return outline 
    ? 'border border-red05 text-red05 bg-white enabled:hover:bg-[#F151391A] disabled:border-gray02 disabled:text-gray04' 
    : 'bg-red05 text-white enabled:hover:brightness-90 disabled:bg-gray03'
  }, [outline])

  return (
    <button 
      className={`flex items-center justify-center w-full h-[52px] rounded-lg font-pretendard font-semibold disabled:cursor-not-allowed ${buttonColor} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default MainBtn