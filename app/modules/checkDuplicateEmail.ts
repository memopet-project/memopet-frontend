import { SetStateAction } from 'react';
import { getData } from '../api/api';

type RequestData = { email: string }
type SetState<V> = (value: SetStateAction<V>) => void
type ResponseType = {
  dsc_code: '1' | '0', // 0 -> 중복, 1 -> 정상
  err_message : string
}
const checkDuplicateEmail = <V>(
  email: string,
  setState: SetState<V>
) => {
  getData<ResponseType, RequestData>('sign-in/duplication-check', { params: { email } }).then((res) => {
    console.log('duplication', res)
    if (res.dsc_code !== '1') {
      setState((prev) => ({ ...prev, email: { msg: '이미 가입한 계정입니다.', status: false } }))
      return
    }
  })
}

export default checkDuplicateEmail
