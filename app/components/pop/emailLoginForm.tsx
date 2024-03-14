'use client'

import { useState } from 'react'
import type { ValidateObj, ChangeEvt } from '@/app/types/common'
import ValidationInput from '../input/validationInput'
import CheckBtn from '../button/checkBtn'
import MainBtn from '../button/mainBtn'

type Validate = {
  email: ValidateObj,
  password: ValidateObj,
}

const initValidate = {
  email: { msg: '', status: null },
  password: { msg: '', status: null },
} as const


const EmailLoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [validate, setValidate] = useState<Validate>({ ...initValidate })
  const [rememberEmail, setRememberEmail] = useState(false)
  const [count, setCount] = useState(0)

  const inputs = [
    {
      validate: validate.email,
      placeholder: '이메일 입력',
      type: 'email',
      value: email,
      name: 'email',
      onChange: (value: ChangeEvt) => {
        setEmail(value)
      },
      onBlur: () => {
      }
    },
    {
      validate: validate.password,
      placeholder: '비밀번호 입력',
      type: 'password',
      value: password,
      name: 'password',
      onChange: (value: ChangeEvt) => {
        setPassword(value)
      },
      onBlur: () => {
      }
    },
  ]

  const handleSubmit = async () => {

  }
  return (
    <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <ValidationInput
          key={input.name}
          value={input.value}
          placeholder={input.placeholder}
          name={input.name}
          type={input.type}
          validate={input.validate}
          onChange={input.onChange}
          onBlur={input?.onBlur}
        />
      ))}
      {count > 0 && <div className='error-box'>
        등록되지 않은 이메일이거나<br />
        이메일 또는 비밀번호를 잘못 입력했습니다. ({count}/5)
      </div>}
      <fieldset>
        {rememberEmail}
        <CheckBtn
          name='rememberEmail'
          checked={rememberEmail}
          text='이메일 기억하기'
          onChange={(val) => setRememberEmail(val)}
        />
      </fieldset>
      <MainBtn text='로그인' className='mt-5' />
    </form>
  )
}
export default EmailLoginForm