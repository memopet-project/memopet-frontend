'use client'
import Error from '@/public/svg/error.svg'
import Pass from '@/public/svg/pass.svg'
import Visibility from '@/public/svg/visibility.svg'
import VisibilityOff from '@/public/svg/visibility_off.svg'
import Close from '@/public/svg/close_12.svg'
import { ChangeEvent, useEffect, useState } from 'react'

type Props = {
  label: string;
  placeholder: string;
  type: HTMLInputElement['type'];
  value: HTMLInputElement['value'];
  name: string;
  validate: { msg: string; status: boolean | null };
  labelClass?: string;
  description?: string;
  buttonLabel?: string;
  hide?: boolean;
  onChange: (value: ChangeEvent<HTMLInputElement>['target']['value']) => void;
  onClick?: () => void;
  onBlur?: () => void;
}

const LabelInput = ({ label, placeholder, validate, type, value, name, onChange, ...props }: Props) => {
  const textClass = 'font-pretendard text-[13px] font-normal'
  const iconClass = 'mr-1 w-4 h-4'

  const [inputType, setInputType] = useState(type)
  const [inputValue, setInputValue] = useState(value)
  const [validation, setValidation] = useState(validate)
  const [colors, setColors] = useState('text-statusGreen')
  const [borders, setBorders] = useState('border-gray07')
  const [useSideSlot, setUseSideSlot] = useState(false)
  
  const initValidate = { msg: '', status: null }

  function handleClick() {
    if (type === 'password') {
      setInputType((val: string) => val === 'password' ? 'text' : 'password')
      return;
    }

    if (props.onClick) {
      props.onClick()
    }
  }

  function handleChange(val: ChangeEvent<HTMLInputElement>['target']['value']) {
    onChange(val)
    setValidation(structuredClone(initValidate))
    setColors('text-statusGreen')
    setBorders('border-gray07')
  }

  useEffect(() => {
    setValidation(validate)

    if (validate?.status === false) { // 유효성 검사 통과 실패 시, ui class 핸들링
      setColors('text-red05')
      setBorders('border-red05')
      return;
    }

    setColors('text-statusGreen')
    setBorders('border-gray07')
  }, [validate])

  useEffect(() => {
    setUseSideSlot(!!props.buttonLabel || type === 'password')

  }, [props.buttonLabel, type])

  useEffect(() => {
    setInputValue(value)
  }, [value])

  return (
    (props.hide === undefined || props.hide) && <fieldset>
      <p className='flex row flex-nowrap justify-between items-center mb-1'>
        <span className={`text-sm text-gray09 leading-[21px] ${props.labelClass}`}>
          {label}
        </span>
        {props.description && <span className={`${textClass} text-gray05`}>
          {props.description}
        </span>}
      </p>

      <label className={`justify-between rounded-md border px-3 ${props.buttonLabel ? 'py-[9.5px]' : 'py-[13px]'} flex w-full ${borders}`}>
        <input
          placeholder={placeholder}
          type={inputType}
          value={inputValue}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={props.onBlur}
          name={name}
          className='focus:border-none border-none focus:outline-none w-full'
        />
        {((type !== 'password' && inputValue) || useSideSlot) && 
        <div className='flex items-center ml-2'>
          {
            (type !== 'password' && inputValue) && 
            <button 
              type='button'
              onClick={() => handleChange('')} 
              className='bg-gray02 rounded-full w-6 h-6 p-[6px]'
            >
              <Close className='text-gray05 w-3 h-3' />
            </button>
          }
          {
            useSideSlot &&
            <button 
              onClick={handleClick}
              type="button"
              disabled={type !== 'password' && !validation?.status}
              className={
                type !== 'password'
                  ? 'rounded-[999px] px-4 py-[5.5px] font-medium text-sm font-pretendard text-white whitespace-nowrap ml-2 bg-red05 disabled:bg-gray03'
                  : 'w-6 h-6'
              }>
              {
                type === 'password' 
                  ? (inputType === 'password' ? <VisibilityOff /> : <Visibility />) 
                  : props.buttonLabel
              }
            </button>
          }
        </div>
        }
      </label>

      {
        validation?.status !== null &&
        <p className={`flex row flex-nowrap items-center justify-start mt-1 text-[13px] ${colors}`}>
          {validation?.status === false
            ? <Error className={`${textClass} ${iconClass}`} />
            : (validation.msg && <Pass className={`${textClass} ${iconClass}`} />)}
          {validation.msg}
        </p>
      }
    </fieldset>
  )
}

export default LabelInput