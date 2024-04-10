import { ChangeEvt, ValidateObj } from '@/app/types/common'
import ValidationInput from '../input/validationInput'
import { type FormEvent, useMemo, useState } from 'react'
import MainBtn from '../button/mainBtn'
import { initValidateObj } from '@/app/constants/login'
import checkPassword from '@/app/utils/checkPassword'
import api from '@/app/api/axios'
import type { AxiosResponse } from 'axios'

interface Props {
  email: string;
  handleClose: () => void;
}

interface Validate {
  password: ValidateObj,
  checkPassword: ValidateObj,
}

const initValidate = {
  password: { msg: '', status: null },
  checkPassword: { msg: '', status: null },
} as const

type ValidateKey = keyof typeof initValidate;

const initResetPassword = {
  password: '',
  checkPassword: '',
}

interface ResetPasswordResponse {
  email: string;
  password: string;
}

interface ResetPasswordRequest {
  dsc_code: '0' | '1'
}

const passwordPlaceholder = '영문, 숫자, 특수문자 혼합 8자 이상 입력'

const ResettingPasswordForm = ({ handleClose, email }: Props) => {
  const [resetPassword, setResetPassword] = useState(initResetPassword)
  const [validate, setValidate] = useState<Validate>({ ...initValidate })

  // FIXME: 중복코드
  // 유효성 검사 초기화 && 성공
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
      label: '새 비밀번호',
      validate: validate.password,
      placeholder: passwordPlaceholder,
      type: 'password',
      value: resetPassword.password,
      name: 'password',
      onChange: (value: ChangeEvt) => {
        setResetPassword({ ...resetPassword, password: value })
        initializeValidate('password')
        initializeValidate('checkPassword')
      },
      onBlur: () => {
        // FIXME: 회원가입과 중복
        if (checkPassword(resetPassword.password)) {
          failValidate('password', '영문, 숫자, 특수문자 혼합하여 8자 이상으로 설정해야 합니다.')
          return
        }

        successValidate('password')
      }
    },
    {
      label: '새 비밀번호 확인',
      validate: validate.checkPassword,
      placeholder: passwordPlaceholder,
      type: 'password',
      value: resetPassword.checkPassword,
      name: 'checkPassword',
      onChange: (value: ChangeEvt) => {
        setResetPassword({ ...resetPassword, checkPassword: value })
        initializeValidate('checkPassword')
      },
      onBlur: () => {
        const condition = resetPassword.password !== resetPassword.checkPassword

        // FIXME: 회원가입과 중복
        if (!condition) {
          successValidate('checkPassword')
          return
        }
        failValidate('checkPassword', '비밀번호가 일치하지 않습니다.')
      }
    },
  ]

  const disabled = useMemo(() => !(validate.checkPassword.status && validate.password.status) , [validate])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    try {
      const res = await api.post<ResetPasswordResponse, AxiosResponse<ResetPasswordRequest>>('sign-in/my-password', {
        email,
        password: resetPassword.password,
      })

      if (res.data.dsc_code === '1') {
        initializeValidate('password')
        initializeValidate('checkPassword')
        handleClose()
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
      {inputs.map((input, idx) => (
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
        />))}
      <MainBtn text='재설정 완료' disabled={disabled} />
    </form>
  )
}

export default ResettingPasswordForm