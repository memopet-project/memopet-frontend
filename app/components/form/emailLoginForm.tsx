'use client'

import { type FormEvent, Fragment, useEffect, useState } from 'react'
import type { ChangeEvt } from '@/app/types/common'
import ValidationInput from '../input/validationInput'
import CheckBtn from '../button/checkBtn'
import MainBtn from '../button/mainBtn'
import type { List } from '../modal/start'
import api from '@/app/api/axios'
import { AxiosError } from 'axios'
import { useSetRecoilState } from 'recoil'
import { modalStatus } from '@/app/recoil/startModalStatus'

type ValidateType = 'email' | 'password' | null;

type Validate = {
  type: ValidateType;
  status: boolean | null;
  msg: string;
}

type Props = {
  handleClick: (arg: List) => void
}

const initValidate = {
  type: null,
  status: null,
  msg: '',
} as const

const initLoginInfo = {
  email: '',
  password: '',
}

interface LoginResponse {
  username: string;
  user_status: string;
  user_role: string;
  login_fail_count: number;
  access_token: string;
  access_token_expiry: number;
}

interface LoginError {
  status: number;
  timestamp: string;
  message: string;
}

const EmailLoginForm = ({ handleClick }: Props) => {
  const [loginInfo, setLoginInfo] = useState(initLoginInfo)
  const [validate, setValidate] = useState<Validate>({ ...initValidate })
  const [rememberEmail, setRememberEmail] = useState(false)
  const [count, setCount] = useState(0)
  const setModalStatus = useSetRecoilState(modalStatus);

  // 유효성 검사 초기화 && 성공
  const initializeValidate = () => {
    setValidate(initValidate)
  }
  // 유효성 검사 실패
  const failValidate = (type: ValidateType, msg: string) => {
    setValidate({ type, msg, status: false })
  }

  const inputs = [
    {
      placeholder: '이메일 입력',
      type: 'email',
      value: loginInfo.email,
      name: 'email',
      onChange: (value: ChangeEvt) => {
        setLoginInfo({ ...loginInfo, email: value })
        initializeValidate()
      },
    },
    {
      placeholder: '비밀번호 입력',
      type: 'password',
      value: loginInfo.password,
      name: 'password',
      onChange: (value: ChangeEvt) => {
        setLoginInfo({ ...loginInfo, password: value })
        initializeValidate()
      },
    },
  ]

  const functionList: List[] = [
    {
      label: '이메일 찾기',
      value: 'findEmail',
    },
    {
      label: '비밀번호 찾기',
      value: 'findPassword',
    },
    {
      label: '회원가입',
      value: 'join',
    },
  ]

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    try {
      const res = await api.post<LoginResponse>('sign-in', loginInfo)
      initializeValidate()
      // TODO: 쿠키에 넣어주기
    } catch (error) {
      const errorMsg = {
        '아이디 또는 비밀번호가 맞지 않습니다. 다시 확인해 주세요.': '이메일 또는 비밀번호를 잘못 입력했습니다.',
        '해당 고객은 존재하지 않습니다.': '등록되지 않은 이메일입니다.'
      } as Record<string, string>
      const { response } = error as unknown as AxiosError<LoginError>

      if (!response) {
        failValidate('email', '서버에러가 발생했습니다.')
        return
      }

      const mappedMsg = errorMsg[response.data.message]

      if (mappedMsg === '이메일 또는 비밀번호를 잘못 입력했습니다.') {
        setCount(count + 1)
        failValidate('password', mappedMsg)
      } else if (mappedMsg) {
        failValidate('email', mappedMsg)
      } else {
        // 어카운트가 5회 실패로 사용불가능 합니다.
        setModalStatus('failLogin')
      }
    }
  }

  useEffect(() => {
    // TODO: 이메일 기억하기 로컬스토리지에 이메일 넣기
  }, [rememberEmail])

  return (
    <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <ValidationInput
          key={input.name}
          value={input.value}
          placeholder={input.placeholder}
          name={input.name}
          type={input.type}
          onChange={input.onChange}
        />
      ))}
      {validate.type && <div className='error-box'>
        {validate.msg} {validate.type === 'password' && `(${count}/5)`}
      </div>}
      <fieldset>
        <CheckBtn
          name='rememberEmail'
          checked={rememberEmail}
          text='이메일 기억하기'
          onChange={(val) => setRememberEmail(val)}
        />
      </fieldset>
      <MainBtn text='로그인' className='mt-5' />
      <ul className='function-button__with-divider px-[26px] mt-3'>
        {functionList.map((item, idx) =>
          <Fragment key={`${item.value}-email-login`}>
            <li key={item.value} onClick={() => handleClick(item)}>{item.label}</li>
            {idx < (functionList.length - 1) && <div key={item.label} className='mx-2'></div>}
          </Fragment>
        )}
      </ul>
    </form>
  )
}

export default EmailLoginForm
