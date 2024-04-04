import { getData } from '../api';

type RequestData = { email: string }
// FIXME: 중복코드
type ResponseType = {
  dsc_code: '1' | '0'; // 0 -> 중복, 1 -> 정상
  err_message : string;
}
const checkDuplicateEmail = (
  email: string,
) => (
  getData<ResponseType, RequestData>('sign-in/duplication-check', { params: { email } }).then((res) => {
    return res
  })
)

export default checkDuplicateEmail
