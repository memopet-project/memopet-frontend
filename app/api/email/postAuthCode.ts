import { postData } from '../api';

interface AuthEmailRequestData { email: string }
export interface AuthEmailResponseData {
  auth_code: string;
  dsc_code: '0' | '1'
  err_message: string
}
const postAuthCode = (
  email: AuthEmailRequestData['email'],
) => (
  postData<AuthEmailResponseData, AuthEmailRequestData>('sign-in/verification', { email }).then((res) => {
    return res
  })
)

export default postAuthCode
