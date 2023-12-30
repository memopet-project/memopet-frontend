type buttonProps = {
  text: string
  direction: 'prev' | 'forward'
  filled : 'white' |  'gray' | 'lightRed' | 'red' | 'darkRed'
  textColor: 'gray' | 'black' | 'red' | 'white'
  border?: boolean
  onClick?: ()=>void
}
import ArrowLeft from '@/public/svg/arrowLeft.svg'
import ArrowRight from '@/public/svg/arrowRight.svg'

const MoveBtn = ({
  text,
  direction,
  filled,
  textColor,
  border,
  onClick,
}:buttonProps) => {

  const directionType = () => {
    if (direction==='prev') {
      return 'flex-row-reverse'
    } else {
      return ''
    }
  }

  const filledType = () => {
    switch(filled){
      case 'white':
        return "";
      case 'gray' :
        return 'bg-gray0.5';
      case 'lightRed':
        return 'bg-redBlur';
      case 'red':
        return 'bg-red05';
      case 'darkRed' :
        return 'bg-redDark'
    }
  }

  const borderType = () => {
    if (border) {
      return 'border border-solid border-gray09'
    } else {
      return ''
    }
  }

  const textColorType = () => {
    switch(textColor){
      case 'black':
        return 'text-gray07 stroke-gray07';
      case 'gray':
        return 'text-gray04 stroke-gray04';
      case 'red':
        return 'text-red05 stroke-red05';
      case 'white':
        return 'text-white stroke-white';
    }
  }

  return (
    <button 
      className={`flex items-center justify-center px-5 py-1 gap-2 rounded-full font-pretendard font-semibold text-base
        ${
          filledType() + ' ' + directionType() + ' ' + borderType() + ' ' + textColorType()
        } 
      `} 
      onClick={onClick}
    > 
      <>{text}</>
      <>{direction==='prev' ? <ArrowLeft className={textColorType()}/> : <ArrowRight className={textColorType()}/>}</>    </button>
  )
}

export default MoveBtn