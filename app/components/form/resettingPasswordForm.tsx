import { ChangeEvt, ValidateObj } from '@/app/types/common'
import ValidationInput from '../input/validationInput'
import { useMemo, useState } from 'react'
import MainBtn from '../button/mainBtn'
type Validate = {
  password: ValidateObj,
  checkPassword: ValidateObj,
}

const initValidate = {
  password: { msg: '', status: null },
  checkPassword: { msg: '', status: null },
} as const

const passwordPlaceholder = '영문, 숫자, 특수문자 혼합 8자 이상 입력'

const ResettingPasswordForm = () => {
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')
  const [validate, setValidate] = useState<Validate>({ ...initValidate })

  const checkValidate = (key: keyof typeof initValidate, condition: boolean, errorMsg = '') => {
    if (condition) {
      setValidate((prev) => ({ ...prev, [key]: { msg: errorMsg, status: false } }))
      return;
    }

    setValidate((prev) => ({ ...prev, [key]: { msg: '', status: null } }))
  }

  const inputs = [
    {
      label: '새 비밀번호',
      validate: validate.password,
      placeholder: passwordPlaceholder,
      type: 'password',
      value: password,
      name: 'password',
      onChange: (value: ChangeEvt) => {
        setPassword(value)
      },
      onBlur: () => {
        checkValidate('password', /* 비밀번호 특수문자 + 숫자 + 영어 + 8자 이상 체크 */ false, '영문, 숫자, 특수문자 혼합하여 8자 이상으로 설정해야 합니다.')
      }
    },
    {
      label: '새 비밀번호 확인',
      validate: validate.checkPassword,
      placeholder: passwordPlaceholder,
      type: 'password',
      value: checkPassword,
      name: 'checkPassword',
      onChange: (value: ChangeEvt) => {
        setCheckPassword(value)
      },
      onBlur: () => {
        checkValidate('checkPassword', password === checkPassword, '비밀번호가 일치하지 않습니다.')
      }
    },
  ]
  const disabled = useMemo(() => !(checkPassword && password) , [password, checkPassword])

  return (
    <form className='flex flex-col gap-6'>
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