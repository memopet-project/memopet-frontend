import { SetStateAction } from 'react';
import { postData } from '../api/api';
import checkEmailType from '../utils/checkEmail';

type RequestData = { email: string }
type SetState<V> = (value: SetStateAction<V>) => void
const authEmail = async <V>(
  email: RequestData['email'],
  setState: SetState<V>
) => {
  if (checkEmailType(email)) {
    setState((prev) => ({ ...prev, email: { msg: '이메일을 정확히 입력해주세요.', status: false } }))
    return
  }

  return postData<string, RequestData>('sign-in/verification', { data: { email } })
}

export default authEmail
