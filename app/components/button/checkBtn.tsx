'use client'

import CheckBtnSVB from '@/public/svg/check.svg'
import { type ChangeEvent, useMemo, useState, useEffect, ReactNode } from 'react';

type buttonProps = {
  name: string;
  checked: boolean;
  onChange: (arg: boolean) => void;
  disabled?: boolean;
  text?: string;
  children?: ReactNode;
}

const CheckBtn = ({
  disabled,
  name,
  text,
  onChange,
  children,
  checked = false,
}: buttonProps) => {
  const [checkValue, setCheckValue] = useState(checked)

  const buttonColor = useMemo(() => {
    return disabled ? 'fill-gray03 stroke-white' : checkValue ? 'fill-red05 stroke-white' : 'fill-white stroke-gray03'
  }, [checkValue, disabled])

  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked)
  }

  useEffect(() => {
    setCheckValue(checked)
  }, [checked])

  return (
    <label className={`cursor-pointer flex items-center flex-nowrap gap-1`}>
      <CheckBtnSVB className={buttonColor} />
      <input type='checkbox' name={name} className='hidden' checked={checkValue} onChange={handleChange}/>
      {children || <span className='leading-6 block text-gray09'>{text}</span>}
    </label>
  )
}

export default CheckBtn