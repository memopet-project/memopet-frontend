import { type FormEvent, useMemo, useState } from 'react'
import MainBtn from '../button/mainBtn'
import ValidationInput from '../input/validationInput'
// import Google from '@/public/images/google.png'
import type { ChangeEvt, ValidateObj } from '@/app/types/common'
import Image from 'next/image'
import api from '@/app/api/axios'
import { initValidateObj } from '@/app/constants/login'
import checkName from '@/app/utils/checkName'
import checkContactNumber from '@/app/utils/checkContactNumber'
import { useSetRecoilState } from 'recoil'
import { modalStatus } from '@/app/recoil/startModalStatus'

interface ResponseType { dsc_code: '0' | '1' | '2', email: string }

type Result = null | ResponseType

const initFindEmailInfo = {
  name: '',
  contact: '',
}
interface Validate {
  name: ValidateObj,
  contact: ValidateObj,
}

const initValidate = {
  name: { msg: '', status: null },
  contact: { msg: '', status: null },
} as const
type ValidateKey = keyof typeof initValidate;


const FindEmailForm = () => {
  const [findEmailInfo, setFindEmailInfo] = useState(initFindEmailInfo)
  const [validate, setValidate] = useState<Validate>({ ...initValidate })
  const [result, setResult] = useState<Result>(null)
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
      label: '이름',
      placeholder: '이름 입력',
      type: 'text',
      value: findEmailInfo.name,
      name: 'name',
      validate: validate.name,
      onChange: (value: ChangeEvt) => {
        setFindEmailInfo({ ...findEmailInfo, name: value })
        setResult(null)
        initializeValidate('name')
      },
    },
    {
      label: '휴대폰번호',
      placeholder: "'-' 없이 숫자만 입력",
      type: 'tel',
      value: findEmailInfo.contact,
      name: 'contact',
      validate: validate.contact,
      onChange: (value: ChangeEvt) => {
        setFindEmailInfo({ ...findEmailInfo, contact: value })
        setResult(null)
        initializeValidate('contact')
      },
    },
  ]

  const disabled = useMemo(() => !(findEmailInfo.name && findEmailInfo.contact) || !!(findEmailInfo.name && findEmailInfo.contact && result?.dsc_code === '0'), [findEmailInfo])
  const buttonLabel = {
    '0': '이메일 찾기',
    '1': '로그인하기',
    '2': '소셜 로그인하기'
  }
  async function findEmail() {
    if (checkName(findEmailInfo.name)) {
      failValidate('name', '한글만 입력해주세요. (영문, 특수기호 입력 불가)')
      return
    }
    successValidate('name')

    if (checkContactNumber(findEmailInfo.contact)) {
      failValidate('contact', '숫자만 입력해주세요.')
      return
    }
    successValidate('contact')

    try {
      const res = await api.post<ResponseType>('sign-in/my-id', {
        username: findEmailInfo.name,
        phone_num: findEmailInfo.contact,
      })
      setResult(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  function handleClick() {
    setModalStatus('findPassword')
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (result?.dsc_code === '1') {
      setModalStatus('emailLogin')
      return;
    }

    if (result?.dsc_code === '2') {
      setModalStatus('start')
      return
    }

    findEmail()
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
          onChange={input.onChange}
          validate={input.validate}
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
          {result?.dsc_code === '1' && <div className='other-options-box mt-4'>
              <span>비밀번호가 생각나지 않나요?</span>
              <button onClick={handleClick}>비밀번호 찾기</button>
            </div>}
        </div>))
      }
      <MainBtn text={buttonLabel[result?.dsc_code || '0']} disabled={disabled} />
    </form>
  )
}

export default FindEmailForm