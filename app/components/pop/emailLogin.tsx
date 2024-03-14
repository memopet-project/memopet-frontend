import { useMemo, useState } from 'react'
import ClipPopupLayout from './clipPopupLayout'
import EmailLoginForm from './emailLoginForm'
import FindEmailForm from './findEmailForm'

type Props = {
  handleLogin: (arg: boolean) => void
}

type Func = '' | 'email' | 'password' | 'join'
type List = { label: string, value: Func }

const EmailLogin = ({ handleLogin }: Props) => {
  const [func, setFunc] = useState<Func>('')
  const [title, setTitle] = useState('이메일 로그인')
  const functionList: List[] = [
    {
      label: '이메일 찾기',
      value: 'email',
    },
    {
      label: '비밀번호 찾기',
      value: 'password',
    },
    {
      label: '회원가입',
      value: 'join',
    },
  ]

  const handleClick = (item: { label: string, value: Func }) => {
    setFunc(item.value);
    setTitle(item.label)
  }

  return (
    <ClipPopupLayout handleClose={handleLogin} title={title} maxWidth='400px'>
      {func === '' && 
        <>
          <EmailLoginForm />
          <ul className='flex row items-center px-[26px] mt-3'>
            {functionList.map((item, idx) =>
              <>
                <li className='p-2 text-gray05 whitespace-nowrap text-sm -tracking-[0.25px] cursor-pointer' onClick={() => handleClick(item)}>{item.label}</li>
                {idx < (functionList.length - 1) && <div className='h-3 w-[1px] mx-2 bg-gray03'></div>}
              </>
            )}
          </ul>
        </>
      }
      {func === 'email' && <FindEmailForm />}
    </ClipPopupLayout>
  )
}
export default EmailLogin