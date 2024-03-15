import { useState } from 'react'
import ClipModalLayout from './clipModalLayout'
import EmailLoginForm from '../form/emailLoginForm'
import FindEmailForm from '../form/findEmailForm'
import FindPasswordForm from '../form/findPasswordForm'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { Status, modalStatus, modalTitle } from '@/app/recoil/startModalStatus'
import ResettingPasswordForm from '../form/resettingPasswordForm'

type Props = {
  handleLogin: (arg: boolean) => void
}

type List = { label: string, value: Status }

const EmailLogin = ({ handleLogin }: Props) => {
  const modal = useRecoilValue(modalStatus);
  const setModalStatus = useSetRecoilState(modalStatus);
  const title = useRecoilValue(modalTitle);

  const functionList: List[] = [
    {
      label: '이메일 찾기',
      value: 'findEmail',
    },
    {
      label: '비밀번호 찾기',
      value: 'findPassword',
    },
    {
      label: '회원가입',
      value: 'join',
    },
    {
      label: '시작하기',
      value: 'start',
    },
  ]

  const handleClick = (item: { label: string, value: Status }) => {
    setModalStatus(item.value)
  }

  return (
    <ClipModalLayout handleClose={handleLogin} title={title} maxWidth={['이메일 찾기', '이메일 로그인', '비밀번호 찾기'].includes(title) ? '400px' : '480px'}>
      {modal === 'emailLogin' && 
        <>
          <EmailLoginForm />
          <ul className='flex row items-center px-[26px] mt-3'>
            {functionList.map((item, idx) =>
              <>
                <li key={item.value} className='p-2 text-gray05 whitespace-nowrap text-sm -tracking-[0.25px] cursor-pointer' onClick={() => handleClick(item)}>{item.label}</li>
                {idx < (functionList.length - 1) && <div className='h-3 w-[1px] mx-2 bg-gray03'></div>}
              </>
            )}
          </ul>
        </>
      }
      {modal === 'findEmail' && <FindEmailForm />}
      {modal === 'findPassword' && <FindPasswordForm />}
      {modal === 'resettingPassword' && <ResettingPasswordForm />}
    </ClipModalLayout>
  )
}
export default EmailLogin