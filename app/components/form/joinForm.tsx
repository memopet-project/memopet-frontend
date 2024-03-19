import { useMemo, useState } from 'react'
import checkEmailType from '@/app/utils/checkEmail'
import checkContactNumber from '@/app/utils/checkContactNumber'
import type { ValidateObj, ChangeEvt } from '@/app/types/common'
import authEmail from '@/app/modules/authEmail'
import checkDuplicateEmail from '@/app/modules/checkDuplicateEmail'
import ValidationInput from '../input/validationInput'
import CheckBtn from '../button/checkBtn'

type Validate = {
  email: ValidateObj;
  authCode: ValidateObj;
  password: ValidateObj;
  checkPassword: ValidateObj;
  name: ValidateObj;
  contact: ValidateObj;
  agree: ValidateObj;
}

const initValidateObj = { msg: '', status: null }
const initValidate = {
  email: initValidateObj,
  authCode: initValidateObj,
  password: initValidateObj,
  checkPassword: initValidateObj,
  name: initValidateObj,
  contact: initValidateObj,
  agree: initValidateObj,
} as const
const passwordPlaceholder = '영문, 숫자, 특수문자 혼합 8자 이상 입력'
type ValidateKey = keyof typeof initValidate
const JoinForm = () => {
  const [email, setEmail] = useState('')
  const [authCode, setAuthCode] = useState('')
  const [checkEmail, setCheckEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [agree, setAgree] = useState(false)
  const [validate, setValidate] = useState<Validate>({ ...initValidate })

  const initValidateWithCondition = (key: ValidateKey, condition: boolean, msg = '') => {
    if (condition) {
      setValidate((prev) => ({ ...prev, [key]: { msg: msg, status: false } }))
      return;
    }

    setValidate((prev) => ({ ...prev, [key]: initValidateObj }))
  }

  const successValidate = (key: ValidateKey, msg = '') => {
    setValidate((prev) => ({ ...prev, [key]: { msg, status: true } }))
  }

  const buttonLabel = useMemo(() =>
    !!email && !!validate.email.status && !!authCode && !!validate.authCode.status 
    ? '이메일 변경' 
    : !!email && validate.email.status ? '다시 요청' : '인증 요청',
    [email, authCode, validate.email.status, validate.authCode.status])

  const inputs = [
    {
      label: '이메일',
      validate: validate.email,
      placeholder: 'sample@email.com',
      type: 'email',
      value: email,
      name: 'email',
      hideButton: buttonLabel === '이메일 변경',
      disable: buttonLabel === '이메일 변경',
      onChange: (value: ChangeEvt) => {
        setEmail(value)
        setAuthCode('')
        setCheckEmail('')
        initValidateWithCondition('email', false)
      },
    },
    {
      label: '입력하신 이메일로 인증코드를 보냈어요!',
      validate: validate.authCode,
      placeholder: 'ABC123',
      type: 'text',
      value: authCode,
      name: 'authCode',
      hideButton: buttonLabel === '이메일 변경',
      disable: buttonLabel === '이메일 변경',
      labelClass: '-mt-3 font-normal !text-[13px] !text-gray07',
      hide: !!checkEmail,
      onChange: (value: ChangeEvt) => {
        setAuthCode(value)
        if (value) {
          initValidateWithCondition('authCode', false)
        }
      },
    },
    {
      label: '비밀번호',
      validate: validate.password,
      placeholder: passwordPlaceholder,
      type: 'password',
      value: password,
      name: 'password',
      onChange: (value: ChangeEvt) => {
        setPassword(value)
        initValidateWithCondition('password', false)
      },
      onBlur: () => {
        const regex = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/
        if (regex.test(password)) {
          successValidate('password')
          return
        }

        initValidateWithCondition('password', !regex.test(password), '영문, 숫자, 특수문자 혼합하여 8자 이상으로 설정해야 합니다.')
      }
    },
    {
      label: '비밀번호 확인',
      validate: validate.checkPassword,
      placeholder: passwordPlaceholder,
      type: 'password',
      value: checkPassword,
      name: 'checkPassword',
      onChange: (value: ChangeEvt) => {
        setCheckPassword(value)
        initValidateWithCondition('checkPassword', false)
      },
      onBlur: () => {
        const condition = password !== checkPassword
        if (!condition) {
          successValidate('checkPassword')
          return
        }

        initValidateWithCondition('checkPassword', condition, '비밀번호가 일치하지 않습니다.')
      }
    },
    {
      label: '이름',
      validate: validate.name,
      placeholder: '이름 입력',
      type: 'text',
      value: name,
      name: 'name',
      onChange: (value: ChangeEvt) => {
        setName(value)
        initValidateWithCondition('name', false)
      },
      onBlur: () => {
        const regex = /^[가-힣]+$/
        if (regex.test(name)) {
          successValidate('name')
          return
        }

        initValidateWithCondition('name', !regex.test(name), '한글만 입력해주세요. (영문, 특수기호 입력 불가)')
      }
    },
    {
      label: '휴대폰번호',
      validate: validate.contact,
      placeholder: '‘-’ 없이 숫자만 입력',
      type: 'tel',
      value: contact,
      name: 'contact',
      description: '*내 계정을 찾을 때 필요해요',
      onChange: (value: ChangeEvt) => {
        setContact(value)
        initValidateWithCondition('contact', false)
      },
      onBlur: () => {
        if (!checkContactNumber(contact)) {
          successValidate('contact')
          return
        }

        initValidateWithCondition('contact', checkContactNumber(contact), '숫자만 입력해주세요.')
      }
    },
  ]

  const checkAuthEmail = async () => {
    if (checkEmailType(email)) {
      initValidateWithCondition('email', true, '이메일을 정확히 입력해주세요.')
      return
    }

    checkDuplicateEmail(email).then((res) => {
      if (res.dsc_code !== '1') {
        initValidateWithCondition('email', true, '이미 가입한 계정입니다.')
        return
      }
  
      setValidate((prev) => ({ ...prev, email: initValidateObj }))

      authEmail(email).then((res) => {
        if (res) {
          setCheckEmail(res)
          setValidate((prev) => ({
            ...prev,
            email: { msg: '', status: true },
            authCode: initValidateObj,
          }))
        }
      })
    })
  }

  const retryAuthEmail = () => {
    setEmail('')
    setAuthCode('')
    setCheckEmail('')
    initValidateWithCondition('email', false)
    initValidateWithCondition('authCode', false)
  }

  const checkAuthCode = async () => {
    if (authCode !== checkEmail) {
      initValidateWithCondition('email', true, '인증코드가 일치하지 않습니다.')
      return
    }

    successValidate('authCode', '이메일이 인증되었습니다.')
  }

  const handleAgreeCheckbox = (val: boolean) => {
    setAgree(val)
    if (val) {
      successValidate('agree', '')
      return
    }
    
    initValidateWithCondition('agree', !val, '')
    console.log(validate)
  }

  return (
    <form className='flex flex-col gap-6'>
      {inputs.map((input) => (
        <ValidationInput
          key={input.name}
          label={input.label}
          value={input.value}
          placeholder={input.placeholder}
          name={input.name}
          type={input.type}
          validate={input.validate}
          labelClass={input?.labelClass}
          hide={input?.hide}
          description={input?.description}
          onChange={input.onChange}
          onBlur={input?.onBlur}
          hideButton={input?.hideButton}
          disable={input?.disable}
        >
          {input.name === 'email' &&
            <button
              type='button'
              disabled={!input.value}
              className={`auth-button ${buttonLabel === '이메일 변경' && '!border !border-gray04 !bg-white !text-gray07'}`}
              onClick={() => buttonLabel === '이메일 변경' ? retryAuthEmail() : checkAuthEmail()}
            >{ buttonLabel }
            </button>}
          {input.name === 'authCode' &&
            <button
              type='button'
              disabled={!input.value || buttonLabel === '이메일 변경'}
              className='auth-button'
              onClick={checkAuthCode}
            >
              확인
            </button>
          }
        </ValidationInput>
      ))}
      <fieldset className='pb-2'>
      <CheckBtn
        name='agree'
        checked={agree}
        children={<span><a className='underline'>이용약관</a> 및 <a className='underline'>개인정보 보호정책</a>에 동의합니다.</span>}
        onChange={handleAgreeCheckbox}
      />
      </fieldset>
      <button
        disabled={Object.values(validate).some((val) => !val.status)}
        type='submit' 
        className='bg-red05 text-white rounded-lg py-[18px] font-semibold text-base leading-4 disabled:bg-gray03'
      >
        가입하기
      </button>
    </form>
  )
}

export default JoinForm