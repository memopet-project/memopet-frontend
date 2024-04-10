import type { Dispatch, SetStateAction } from 'react'
import { postData } from '../api';

interface AuthCodeResponseData {
  dsc_code: '0' | '1'
  err_message: string
}

interface FormData {
  email: string;
  authCode: string;
}

interface AuthCodeRequestData {
  email: string;
  code: string
}

async function checkAuthCode<T>(formData: FormData, setValidate: Dispatch<SetStateAction<T>>) {
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
    code: formData.authCode
  }).then((res) => {
    const status = {
      'expired': '인증코드가 만료되었습니다.',
      'different': '인증코드가 일치하지 않습니다.',
    } as Record<string, string>

    if (res.dsc_code !== '1') {
      failValidate('authCode', status[res.err_message])
      return;
    }

    successValidate('authCode', '이메일이 인증되었습니다.')
    return res
  }).catch((error) => {
    console.error(error)
  })
}

export default checkAuthCode
