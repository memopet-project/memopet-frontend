import { SetStateAction } from 'react';
import { postData } from '../api/api';

type RequestData = { email: string }
const authEmail = (
  email: RequestData['email'],
) => (
  postData<string, RequestData>('sign-in/verification', { email }).then((res) => {
    return res
  })
)

export default authEmail
