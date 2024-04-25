import type { Dispatch, SetStateAction } from 'react'
import { postData } from '../api';

interface AuthCodeResponseData {
  authCode: '0' | '1'
  verificationStatusId: number;
}

interface FormData {
  email: string;
  authCode: string;
  id: number
}

interface AuthCodeRequestData {
  email: string;
  code: string
  verificationStatusId: string;
}

function checkAuthCode<T>(formData: FormData, setValidate: Dispatch<SetStateAction<T>>) {
  // FIXME: 중복코드
  
  // 유효성 검사 실패
  function failValidate(key: string, msg: string) {
    setValidate((prev) => ({ ...prev, [key]: { msg: msg, status: false } }))
  }
  
  // 유효성 검사 성공
  function successValidate(key: string, msg = '') {
    setValidate((prev) => ({ ...prev, [key]: { msg, status: true } }))
  }

  postData<AuthCodeResponseData, AuthCodeRequestData>('sign-in/verification-email', {
    email: formData.email,
    code: formData.authCode,
    verificationStatusId: String(formData.id)
  }).then((res) => {
    successValidate('authCode', '이메일이 인증되었습니다.')
    return res
  }).catch((error) => {
    console.log(error)
    const status = {
      'expired': '인증코드가 만료되었습니다.',
      'different': '인증코드가 일치하지 않습니다.',
    } as Record<string, string>

    if (error.dsc_code !== '1') {
      failValidate('authCode', status[error.err_message])
      return;
    }
    console.error(error)
  })
}

export default checkAuthCode
