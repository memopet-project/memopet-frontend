import CheckBtnSVB from '@/public/svg/check.svg'

type buttonProps = {
  buttonType: 'checked' | 'default' | 'disabled' 
  onClick?: ()=>void
}

const CheckBtn = ({
  buttonType,
  onClick,
}:buttonProps) => {

  const buttonColor = () => {
    switch(buttonType){
      case 'checked':
        return "fill-red05 stroke-white";
      case 'default' :
        return 'fill-white stroke-gray03';
      case 'disabled' :
        return 'fill-gray03 stroke-white';
      default :
        return '';
    }
  }

  return (
    <CheckBtnSVB className={`cursor-pointer ${buttonColor()} `} onClick={onClick}/>
  )
}

export default CheckBtn