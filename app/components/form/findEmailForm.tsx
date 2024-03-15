import { type FormEvent, useMemo, useState } from 'react'
import MainBtn from '../button/mainBtn'
import ValidationInput from '../input/validationInput'
import Google from '@/public/images/google.png'
import type { ChangeEvt, ValidateObj } from '@/app/types/common'
import Image from 'next/image'

type Validate = {
  name: ValidateObj,
  contact: ValidateObj,
}

const initValidate = {
  name: { msg: '', status: null },
  contact: { msg: '', status: null },
} as const

type Result = null | { dsc_code: '0' | '1' | '2', email: string }

const FindEmailForm = () => {
  const [name, setName] = useState('')
  const [contact, setPassword] = useState('')
  const [validate, setValidate] = useState<Validate>({ ...initValidate })
  const [result, setResult] = useState<Result>(null)

  const inputs = [
    {
      label: '이름',
      validate: validate.name,
      placeholder: '이름 입력',
      type: 'name',
      value: name,
      name: 'name',
      onChange: (value: ChangeEvt) => {
        setName(value)
        setResult(null)
      },
      onBlur: () => {
      }
    },
    {
      label: '휴대폰번호',
      validate: validate.contact,
      placeholder: "'-' 없이 숫자만 입력",
      type: 'contact',
      value: contact,
      name: 'contact',
      onChange: (value: ChangeEvt) => {
        setPassword(value)
        setResult(null)
      },
      onBlur: () => {
      }
    },
  ]

  const disabled = useMemo(() => !(name && contact) || !!(name && contact && result?.dsc_code === '0'), [name, contact])
  const buttonLabel = useMemo(() => result?.dsc_code === '1' ? '로그인하기' : result?.dsc_code === '2' ? '소셜 로그인하기' : '아이디 찾기', [name, contact])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setResult({ dsc_code: '2', email: 'eunjin9639@gmail.com' })
  }

  return (
    <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
      {(!result || (result?.dsc_code && result?.dsc_code === '0')) && inputs.map((input, idx) => (
        <ValidationInput
          fieldClass={(idx === inputs.length - 1) ? 'mb-2' : ''}
          key={input.name}
          label={input.label}
          value={input.value}
          placeholder={input.placeholder}
          name={input.name}
          type={input.type}
          validate={input.validate}
          onChange={input.onChange}
          onBlur={input?.onBlur}
        />
      ))}
      {result?.dsc_code && (result?.dsc_code === '0'
        ? <div className='error-box -mb-2'>해당 이름과 휴대폰번호로 가입한 계정을 찾을 수 없습니다.</div>
        : (<div className='mb-2'>
          <p className='text-sm text-gray09 -tracking-[0.25px] leading-[21px] font-medium'>
            {result?.dsc_code === '1' ? '이메일' : '소셜 아이디로 가입한 계정입니다.'}
          </p>
          <p className='text-gray05 -tracking-[0.5px] leading-6 flex items-center gap-2 border border-[#40404080] rounded-md px-3 py-[14px] mt-4'>
            {result?.dsc_code === '2' && <span className='p-[6px] border border-gray05 rounded'>
              <Image
                src='/images/google.png'
                sizes='12px'
                priority
                width={12}
                height={12}
                alt='google'
              />
            </span>}{result?.email}
          </p>
          {result?.dsc_code === '1' && <div className='other-options-box mt-4'><span>비밀번호가 생각나지 않나요?</span><button>비밀번호 찾기</button></div>}
        </div>))
      }
      <MainBtn text={buttonLabel} disabled={disabled} />
    </form>
  )
}

export default FindEmailForm