import { AxiosResponse } from 'axios';
import { getData } from '../api';

type RequestData = { email: string }
type ResponseType = {
  duplicationCheckResponse: {
    dscCode: '1' | '0'; // 0 -> 중복, 1 -> 정상
    errMessage : 'Email is invalid' | 'Email is valid';
  }
}
const checkDuplicateEmail = (
  email: string,
) => (
  getData<AxiosResponse<ResponseType>, RequestData>('sign-in/duplication-check', { params: { email } }).then((res) => {
    return res.data.duplicationCheckResponse
  })
)

export default checkDuplicateEmail
