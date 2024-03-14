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
      {count > 0 && <div className='text-[13px] text-center -tracking-[0.25px] leading-[19.5px] text-errorRed py-2 bg-[#E433330D] rounded-md'>
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