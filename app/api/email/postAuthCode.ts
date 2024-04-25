import { AxiosResponse } from 'axios';
import type { Dispatch, SetStateAction } from 'react'
import { postData } from '../api';
import { initValidateObj } from '@/app/constants/login'

interface AuthEmailRequestData { email: string }
export interface AuthEmailResponseData {
  response: {
    authCode: string;
    verificationStatusId: number; // 유효기간 id
  }
}
async function postAuthCode<T>(
  email: AuthEmailRequestData['email'],
  setValidate: Dispatch<SetStateAction<T>>
) {
  // FIXME: 중복코드
  
  // 유효성 검사 초기화 && 성공
  function initializeValidate(key: keyof T) {
    setValidate((prev) => ({ ...prev, [key]: initValidateObj }))
  }
  
  // 유효성 검사 성공
  function successValidate(key: string, msg = '') {
    setValidate((prev) => ({ ...prev, [key]: { msg, status: true } }))
  }

  const res = await postData<AxiosResponse<AuthEmailResponseData>, AuthEmailRequestData>('sign-in/verification', {
    email
  });

  if (res.data.response.authCode) {
    successValidate('email');
    initializeValidate('authCode' as keyof T);
  }
  return res.data.response;
}

export default postAuthCode
