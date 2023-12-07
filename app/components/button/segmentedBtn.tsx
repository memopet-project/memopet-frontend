import { useState } from "react"

type buttonProps = {
  clickedType: 'male' | 'female' | 'etc'
  onClick?: ()=>void
}

const SegmentedBtn = ({
  clickedType,
  onClick,
}:buttonProps) => {

  const [gender, setGender] = useState<typeof clickedType>('male')
  const clickGenderBtn = (clickedGender:typeof clickedType) => {
    setGender(clickedGender)
  }

  const defaultStyle = 'w-[128px] h-[52px] flex justify-center items-center border border-solid border-gray07 rounded-md font-semibold '
  return (
    <div className="flex gap-2">
      <button 
        className={`${defaultStyle + (gender==='male' ? 'text-white bg-gray07' : 'text-gray07 bg-white hover:bg-gray0.5')}`}
        onClick={()=>clickGenderBtn('male')}
      >수컷</button>
      <button 
        className={`${defaultStyle + (gender==='female' ? 'text-white bg-gray07' : 'text-gray07 bg-white hover:bg-gray0.5')}`}
        onClick={()=>clickGenderBtn('female')}
      >암컷</button>
      <button 
        className={`${defaultStyle + (gender==='etc' ? 'text-white bg-gray07' : 'text-gray07 bg-white hover:bg-gray0.5')}`}
        onClick={()=>clickGenderBtn('etc')}
      >기타</button>
    </div>
  )
}

export default SegmentedBtn