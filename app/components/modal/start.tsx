import ClipModalLayout from './clipModalLayout';
import StartForm from '../form/startForm';
import { useRecoilValue } from 'recoil';
import { type Status, modalStatus, modalTitle } from '@/app/recoil/startModalStatus';
import FindEmailForm from '../form/findEmailForm'
import FindPasswordForm from '../form/findPasswordForm'
import ResettingPasswordForm from '../form/resettingPasswordForm'
import EmailLoginForm from '../form/emailLoginForm';
import FailLoginForm from '../form/failLoginForm';
import { useMemo } from 'react';
import JoinForm from '../form/joinForm';

type Props = {
  handleStart: (arg: boolean) => void
}

export type List = { label: string, value: Status }
const Start = ({ handleStart }: Props) => {
  const modal = useRecoilValue(modalStatus);
  const title = useRecoilValue(modalTitle);

  const maxWidth = useMemo(
    () => ['이메일 찾기', '이메일 로그인', '비밀번호 찾기', '시작하기', '로그인 실패', '비밀번호 재설정'].includes(title) ? '400px' : '480px',
    [title])

  return (
    <ClipModalLayout handleClose={handleStart} title={title} maxWidth={maxWidth}>
      {modal === 'start' && <StartForm />}
      {modal === 'join' && <JoinForm />}
      {modal === 'findEmail' && <FindEmailForm />}
      {modal === 'findPassword' && <FindPasswordForm />}
      {modal === 'resettingPassword' && <ResettingPasswordForm />}
      {modal === 'emailLogin' && <EmailLoginForm />}
      {modal === 'failLogin' && <FailLoginForm handleClose={handleStart} />}
    </ClipModalLayout>
  )
}

export default Start