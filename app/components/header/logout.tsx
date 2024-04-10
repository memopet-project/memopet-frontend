import { useMemo, useState } from 'react'
import { modalStatus, modalTitle } from '@/app/recoil/startModalStatus'
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import ClipModalLayout from '../modal/clipModal'
import JoinForm from '../form/joinForm'
import StartForm from '../form/startForm'
import FindEmailForm from '../form/findEmailForm'
import FindPasswordForm from '../form/findPasswordForm'
import ResettingPasswordForm from '../form/resettingPasswordForm'
import EmailLoginForm from '../form/emailLoginForm'
import FailLoginForm from '../form/failLoginForm'
import ConfirmModal from '../modal/confirmModal'

const Logout = () => {
  const textClass = "text-base leading-4 px-5 py-3"
  const [openJoin, setOpenJoin] = useState(false)
  const [openLogin, setOpenLogin] = useState(false)
  const [email, setEmail] = useState('')
  const [open, setOpen] = useState(false)
  const modal = useRecoilValue(modalStatus);
  const title = useRecoilValue(modalTitle);
  const setModalStatus = useSetRecoilState(modalStatus);
  const resetModalStatus = useResetRecoilState(modalStatus);

  function handleJoin(state: boolean) {
    setOpenJoin(state)
  }

  function handleLogin(state: boolean) {
    resetModalStatus()
    setOpenLogin(state)
  }

  function handleOk() {
    setModalStatus('emailLogin');
    setOpenLogin(true); 
  }

  function handleClose() {
    setOpenLogin(false);
    setOpen(true);
  }

  const maxWidth = useMemo(
    () => ['이메일 찾기', '이메일 로그인', '비밀번호 찾기', '시작하기', '로그인 실패', '비밀번호 재설정'].includes(title) ? '400px' : '480px',
    [title])
  return (
    <>
      <li>
        <button className={`text-gray07 ${textClass}`} onClick={() => handleLogin(true)}>
          로그인
        </button>
      </li>
      <li>
        <button className={`text-red05 ${textClass}`} onClick={() => handleJoin(true)}>
          회원가입
        </button>
      </li>
      <ClipModalLayout
        open={openJoin}
        setOpen={setOpenJoin}
        title='회원가입'
      >
        <JoinForm />
      </ClipModalLayout>
      <ClipModalLayout
        open={openLogin}
        setOpen={setOpenLogin}
        title={title}
        maxWidth={maxWidth}
      >
        {modal === 'start' && <StartForm />}
        {modal === 'join' && <JoinForm />}
        {modal === 'findEmail' && <FindEmailForm />}
        {modal === 'findPassword' && <FindPasswordForm setState={setEmail}/>}
        {modal === 'resettingPassword' && <ResettingPasswordForm email={email} handleClose={handleClose} />}
        {modal === 'emailLogin' && <EmailLoginForm />}
        {modal === 'failLogin' && <FailLoginForm handleClose={handleClose} />}
      </ClipModalLayout>
      {/* TODO: 재설정한 비밀번호로 로그인해주세요, 입력하신 이메일로 새로운 비밀번호를 보내드렸어요 -> 확인 모달 두 개 */}
      <ConfirmModal
        open={open}
        setOpen={setOpen}
        handleOk={handleOk}
        buttons={[{ label: '닫기', useOk: false }, { label: '로그인 하기', useOk: true }]}
      >
        <p className='text-gray07 font-bold -tracking-[0.5px] text-base'>
          재설정한 비밀번호로<br /> 로그인해주세요
        </p>
      </ConfirmModal>
    </>
  )
}

export default Logout