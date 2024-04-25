import type { Dispatch, SetStateAction } from 'react'
import { postData } from '../api';
import { AxiosError } from 'axios';

interface AuthCodeResponseData {
  authCode: '0' | '1'
  verificationStatusId: number;
}

interface ResponseError {
  code: 'bad_request'
  message: 'different' | 'expired'
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
    console.error(error)
    
    const { response } = error as AxiosError<ResponseError>
    const status = {
      'expired': '인증코드가 만료되었습니다.',
      'different': '인증코드가 일치하지 않습니다.',
    } as Record<string, string>

    if (response?.data.message) {
      failValidate('authCode', status[response.data.message])
    }
  })
}

export default checkAuthCode
