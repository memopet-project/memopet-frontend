import { SetStateAction } from 'react';
import { getData } from '../api/api';

type RequestData = { email: string }
type ResponseType = {
  dsc_code: '1' | '0', // 0 -> 중복, 1 -> 정상
  err_message : string
}
const checkDuplicateEmail = (
  email: string,
) => (
  getData<ResponseType, RequestData>('sign-in/duplication-check', { params: { email } }).then((res) => {
    return res
  })
)

export default checkDuplicateEmail
