import { FormEvent, useState } from 'react'
import ValidationInput from '../input/validationInput'
import { ChangeEvt, ValidateObj } from '@/app/types/common'
import MainBtn from '../button/mainBtn'
import api from '@/app/api/axios'
import { modalStatus } from '@/app/recoil/startModalStatus'
import { useSetRecoilState } from 'recoil'
import { initValidateObj } from '@/app/constants/login'

type Props = {
  handleClose: (arg: boolean) => void;
}

// FIXME: 중복코드
interface ResponseType {
  dsc_code: '1' | '0';
  err_message: string;
}

type Result = ResponseType | null;

const FailLoginForm = ({ handleClose }: Props) => {
  const [email, setEmail] = useState('')
  const [validate, setValidate] = useState<ValidateObj>({ ...initValidateObj })
  const [result, setResult] = useState<Result>(null)
  const setModalStatus = useSetRecoilState(modalStatus);

  // FIXME: 중복코드

  // 유효성 검사 초기화 && 성공
  function initializeValidate() {
    setValidate({ ...initValidateObj })
  }
  // 유효성 검사 실패
  function failValidate(msg: string) {
    setValidate({ msg, status: false })
  }

  function handleChange(value: ChangeEvt) {
    setEmail(value)
    initializeValidate()
    setResult(null)
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const res = await api.post<ResponseType>('sign-in/password-reset',
        { email, })

      const responseMsg = {
        'Email is not valid': '해당 이메일로 가입한 계정을 찾을 수 없습니다.'
      } as Record<string, string>

      if (res.data.dsc_code === '0') {
        setResult(res.data)
        failValidate(responseMsg[res.data.err_message])
        return;
      }

      initializeValidate()
      handleClose(false)
      // TODO:컨펌 모달 열기
    } catch (error) {
      console.error(error)
    }
  }

  function handleClick() {
    setModalStatus('findEmail')
  }

  return (
    <form onSubmit={handleSubmit}>
      <ul className='list-none p-0 m-0 mb-8'>
        <li className='-tracking-[0.5px] leading-6 text-gray07'><span className='text-red05'>5회 이상</span> 로그인 실패하여</li>
        <li className='-tracking-[0.5px] leading-6 text-gray07'>보안을 위해 로그인을 제한합니다.</li>
        <li className='-tracking-[0.5px] leading-6 text-gray07'>이메일 계정을 입력하시면 로그인 할 수 있는</li>
        <li className='-tracking-[0.5px] leading-6 text-gray07'><span className='text-red05'>새로운 비밀번호</span>를 받을 수 있습니다.</li>
      </ul>
      <ValidationInput
        label='이메일'
        value={email}
        placeholder='sample@email.com'
        name='email'
        type='email'
        validate={validate}
        onChange={handleChange}
      />
      {result?.dsc_code === '0' && <div className='other-options-box mt-3'>
        <span>가입한 이메일이 생각나지 않나요?</span>
        <button type='button' onClick={handleClick}>이메일 찾기</button>
      </div>}
      <MainBtn
        className='mt-8'
        text='새로운 비밀번호 받기'
        disabled={!email || validate.msg === '해당 이메일로 가입한 계정을 찾을 수 없습니다.'}
      />
    </form>
  )
}
export default FailLoginForm