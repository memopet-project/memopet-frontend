'use client'
import Error from '@/public/svg/error.svg'
import Pass from '@/public/svg/pass.svg'
import Visibility from '@/public/svg/visibility.svg'
import VisibilityOff from '@/public/svg/visibility_off.svg'
import { ChangeEvent, useEffect, useState } from 'react'

type Props = {
  label: string;
  discription?: string;
  validate?: { msg: string; status: boolean | null };
  validateMsg?: string;
  placeholder: string;
  type: HTMLInputElement['type'];
  value: HTMLInputElement['value'];
  buttonLabel?: string;
  name: string;
  onClick?: () => void;
}

const LabelInput = ({ label, validate, type, discription, value, placeholder, buttonLabel, onClick, name }: Props) => {
  const textClass = 'font-pretendard text-[13px] font-normal'
  const iconClass = 'mr-1 w-4 h-4'

  const [inputType, setInputType] = useState(type)
  const [inputValue, setInputValue] = useState(value)
  const [validation, setValidation] = useState(validate)
  const [colors, setColors] = useState('text-statusGreen')
  const [borders, setBorders] = useState('border-gray07')
  const [useButton, setUseButton] = useState(false)

  function handleClick() {
    if (type === 'password') {
      setInputType((val: string) => val === 'password' ? 'text' : 'password')
      return;
    }

    if (onClick) {
      onClick
    }
  }

  useEffect(() => {
    setValidation(validate)
    if (validate?.status) {
      setColors('text-statusGreen')
      setBorders('border-gray07')
    } else {
      setColors('text-red05')
      setBorders('border-red05')
    }
  }, [validate])

  useEffect(() => {
    setUseButton(!!buttonLabel || type === 'password')
  }, [buttonLabel, type])

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value)
    setValidation({ msg: '', status: null })
    setColors('text-statusGreen')
    setBorders('border-gray07')
  }

  return (
    <>
      <p className='flex row flex-nowrap justify-between items-center mb-1'>
        <span className='text-sm text-gray09 leading-[21px]'>
          {label}
        </span>
        {discription && <span className={`${textClass} text-gray05`}>
          {discription}
        </span>}
      </p>

      <div className={`justify-between rounded-md border py-[9.5px] px-3 flex w-full ${borders}`}>
        <input
          placeholder={placeholder}
          type={inputType}
          value={inputValue}
          onChange={handleChange}
          name={name}
          className='focus:border-none border-none focus:outline-none w-full'
        />
        {
          useButton &&
          (<button 
            onClick={handleClick} 
            className={
              type !== 'password'
                ? 'bg-gray03 rounded-[999px] px-4 py-[5.5px] font-medium text-sm font-pretendard text-white whitespace-nowrap ml-2' 
                : 'w-6 h-6'
            }>
            {
              type === 'password' 
                ? (inputType === 'password' ? <VisibilityOff /> : <Visibility />) 
                : buttonLabel
            }
          </button>)
        }
      </div>

      {
        (validation?.status !== null && validation !== undefined) &&
        <p className={`flex row flex-nowrap items-center justify-start mt-1 text-[13px] ${colors}`}>
          {validation?.status === false
            ? <Error className={`${textClass} ${iconClass}`} />
            : <Pass className={`${textClass} ${iconClass}`} />}
          {validation.msg}
        </p>
      }
    </>
  )
}

export default LabelInput