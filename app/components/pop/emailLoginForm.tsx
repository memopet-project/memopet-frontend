'use client'

import { type ChangeEvent, useState } from 'react'
import ValidationInput from '../input/validationInput'
import CheckBtn from '../button/checkBtn'
import MainBtn from '../button/mainBtn'

type Validate = {
  email: { msg: string, status: null | boolean },
  password: { msg: string, status: null | boolean },
}

type ChangeEvt = ChangeEvent<HTMLInputElement>['target']['value']

const initValidate = {
  email: { msg: '', status: null },
  password: { msg: '', status: null },
} as const


const EmailLoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberEmail, setRememberEmail] = useState(false)
  const [validate, setValidate] = useState<Validate>({ ...initValidate })

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