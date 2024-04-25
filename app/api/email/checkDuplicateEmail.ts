import type { Dispatch, SetStateAction } from 'react'
import { AxiosResponse } from 'axios';
import { getData } from '../api';
import { initValidateObj } from '@/app/constants/login';

type RequestData = { email: string }
type ResponseType = {
  duplicationCheckResponse: {
    dscCode: '1' | '0'; // 0 -> 중복, 1 -> 정상
    errMessage: 'Email is invalid' | 'Email is valid';
  }
}
const checkDuplicateEmail = async<T>(
  email: string,
  setValidate: Dispatch<SetStateAction<T>>
) => {
  // FIXME: 중복코드
  // 유효성 검사 초기화 && 성공
  function initializeValidate(key: keyof T) {
    setValidate((prev) => ({ ...prev, [key]: initValidateObj }))
  }

  // 유효성 검사 실패
  function failValidate(key: string, msg: string) {
    setValidate((prev) => ({ ...prev, [key]: { msg: msg, status: false } }))
  }

  const res = await getData<AxiosResponse<ResponseType>, RequestData>('sign-in/duplication-check', { params: { email } });
  if (res.data.duplicationCheckResponse.dscCode !== '1') {
    failValidate('email', '이미 가입한 계정입니다.')
    return
  }

  initializeValidate('email' as keyof T)
  return res.data.duplicationCheckResponse;
}

export default checkDuplicateEmail
