import { type FormEvent, useMemo, useState } from 'react'
import MainBtn from '../button/mainBtn'
import ValidationInput from '../input/validationInput'
import Google from '@/public/svg/google.svg'
import type { ChangeEvt, ValidateObj } from '@/app/types/common'
import checkEmailType from '@/app/utils/checkEmail'

type Validate = {
  email: ValidateObj,
  authCode: ValidateObj,
}

const initValidate = {
  email: { msg: '', status: null },
  authCode: { msg: '', status: null },
} as const

type Result = null | { dsc_code: '0' | '1', confirm_code: string }

const FindPasswordForm = () => {
  const [email, setEmail] = useState('')
  const [authCode, setAuthCode] = useState('')
  const [validate, setValidate] = useState<Validate>({ ...initValidate })
  const [result, setResult] = useState<Result>(null)
  const [checkEmail, setCheckEmail] = useState(false)


  const checkValidate = (key: keyof typeof initValidate, condition: boolean, errorMsg = '') => {
    if (condition) {
      setValidate((prev) => ({ ...prev, [key]: { msg: errorMsg, status: false } }))
      return;
    }

    setValidate((prev) => ({ ...prev, [key]: { msg: '', status: null } }))
  }
  const inputs = [
    {
      label: '이메일',
      validate: validate.email,
      placeholder: 'sample@email.com',
      type: 'email',
      value: email,
      name: 'email',
      onChange: (value: ChangeEvt) => {
        setEmail(value)
        setAuthCode('')
        setCheckEmail(false)
      },
      onBlur: () => {
      }
    },
    {
      label: '입력하신 이메일로 인증코드를 보냈어요!',
      validate: validate.authCode,
      placeholder: 'ABC123',
      type: 'text',
      value: authCode,
      name: 'authCode',
      labelClass: '-mt-3 font-normal !text-[13px] !text-gray07',
      hide: checkEmail,
      onChange: (value: ChangeEvt) => {
        setAuthCode(value)
        if (value) {
          checkValidate('authCode', false)
        }
      },
    },
  ]

  const disabled = useMemo(() => !email || !!(email && result?.dsc_code === '0'), [email])
  const buttonLabel = useMemo(() => result?.dsc_code === '1' ? '재설정 완료' : '비밀번호 재설정하기', [email])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setResult({ dsc_code: '0', confirm_code: '1234' })
  }

  const authEmail = async () => {
    console.log('인증요청');
    if (checkEmailType(email)) {
      checkValidate('email', true, '이메일을 정확히 입력해주세요.')
      return;
    }

    if (email === 'memopet@naver.com') { // test
      setValidate((prev) => ({ ...prev, email: { msg: '이미 가입한 계정입니다.', status: false } }))
      return
    }

    setValidate((prev) => ({
      ...prev,
      email: { msg: '', status: true },
      authCode: { msg: '', status: null },
    }))
    setCheckEmail(true)
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
          labelClass={input?.labelClass}
          hide={input?.hide}
          onChange={input.onChange}
          onBlur={input?.onBlur}
        >
          {input.name === 'email' &&
          <button
            type='button'
            className='auth-button'
            disabled={!input.value}
            onClick={authEmail}
          >
            인증 요청
          </button>}
          {input.name === 'authCode' &&
            <button
              type='button'
              disabled={!input.value}
              className='auth-button'
            >
              확인
            </button>
          }
        </ValidationInput>
      ))}
      {result?.dsc_code === '0' && <div className='other-options-box mt-4'><span>가입한 이메일이 생각나지 않나요?</span><button>이메일 찾기</button></div>}
      <MainBtn text={buttonLabel} disabled={disabled} />
    </form>
  )
}

export default FindPasswordForm