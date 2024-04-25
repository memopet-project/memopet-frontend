import { Dispatch, type FormEvent, SetStateAction, useMemo, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import ValidationInput from '../input/validationInput'
import type { ChangeEvt, ValidateObj } from '@/app/types/common'
import checkEmailType from '@/app/utils/checkEmail'
import { modalStatus } from '@/app/recoil/startModalStatus'
import { initValidateObj } from '@/app/constants/login'
import postAuthCode, { type AuthEmailResponseData } from '@/app/api/email/postAuthCode'
import MainBtn from '../button/mainBtn'
import checkAuthCode from '@/app/api/email/checkAuthCode'

interface Validate {
  email: ValidateObj,
  authCode: ValidateObj,
}

const initValidate = {
  email: { msg: '', status: null },
  authCode: { msg: '', status: null },
} as const

type ValidateKey = keyof typeof initValidate;

const initFindPasswordInfo = {
  email: '',
  authCode: '',
}

type Result = null | AuthEmailResponseData['response']

const FindPasswordForm = ({ setState }: { setState: Dispatch<SetStateAction<string>> }) => {
  const [findPasswordInfo, setFindPasswordInfo] = useState(initFindPasswordInfo)
  const [validate, setValidate] = useState<Validate>({ ...initValidate })
  const [result, setResult] = useState<Result>(null)
  const [checkEmail, setCheckEmail] = useState<number | null>(null)
  const setModalStatus = useSetRecoilState(modalStatus);

  // FIXME: 중복코드
  function initializeValidate(key: ValidateKey) {
    setValidate((prev) => ({ ...prev, [key]: initValidateObj }))
  }

  // 유효성 검사 실패
  function failValidate(key: ValidateKey, msg: string) {
    setValidate((prev) => ({ ...prev, [key]: { msg: msg, status: false } }))
  }

  // 유효성 검사 성공
  function successValidate(key: ValidateKey, msg = '') {
    setValidate((prev) => ({ ...prev, [key]: { msg, status: true } }))
  }
  
  const inputs = [
    {
      label: '이메일',
      validate: validate.email,
      placeholder: 'sample@email.com',
      type: 'email',
      value: findPasswordInfo.email,
      name: 'email',
      onChange: (value: ChangeEvt) => {
        initializeValidate('email')
        initializeValidate('authCode')
        setFindPasswordInfo({ ...findPasswordInfo, email: value })
        setCheckEmail(null)
      },
    },
    {
      label: '입력하신 이메일로 인증코드를 보냈어요!',
      validate: validate.authCode,
      placeholder: 'ABC123',
      type: 'text',
      value: findPasswordInfo.authCode,
      name: 'authCode',
      labelClass: '-mt-3 font-normal !text-[13px] !text-gray07',
      hide: !!checkEmail,
      onChange: (value: ChangeEvt) => {
        initializeValidate('authCode')
        setFindPasswordInfo({ ...findPasswordInfo, authCode: value })
      },
    },
  ]

  const disabled = useMemo(() => !(validate.authCode.status && validate.email.status), [validate])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setState(findPasswordInfo.email)
    setModalStatus('resettingPassword')
  }

  async function checkAuthEmail() {
    if (checkEmailType(findPasswordInfo.email)) {
      failValidate('email', '이메일을 정확히 입력해주세요.')
      return;
    }

    successValidate('email')

    postAuthCode<Validate>(findPasswordInfo.email, setValidate).then((res) => {
      if (res.authCode) {
        setCheckEmail(res.verificationStatusId)
      }
    })
  }

  function handleClick() {
    setModalStatus('findEmail')
  }

  return (
    <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
      {(!result || (result?.authCode && result?.authCode === '0')) && inputs.map((input, idx) => (
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
        >
          {input.name === 'email' &&
            <button
              type='button'
              className='auth-button'
              disabled={!input.value}
              onClick={checkAuthEmail}
            >
              인증 요청
            </button>}
          {input.name === 'authCode' &&
            <button
              type='button'
              disabled={!input.value}
              className='auth-button'
              onClick={() => checkAuthCode<Validate>({ ...findPasswordInfo, id: checkEmail! }, setValidate)}
            >
              확인
            </button>
          }
        </ValidationInput>
      ))}
      {result?.authCode === '0' && <div className='other-options-box mt-4'>
        <span>가입한 이메일이 생각나지 않나요?</span>
        <button onClick={handleClick}>이메일 찾기</button>
      </div>}
      <MainBtn text='비밀번호 재설정하기' disabled={disabled} />
    </form>
  )
}

export default FindPasswordForm