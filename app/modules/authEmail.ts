import { postData } from '../api/api';

type RequestData = { email: string }
type ResponseData = {
  auth_code: string;
  dsc_code: '0' | '1'
  err_message: string
}
const authEmail = (
  email: RequestData['email'],
) => (
  postData<ResponseData, RequestData>('sign-in/verification', { email }).then((res) => {
    return res
  })
)

export default authEmail
