import { useState } from 'react'
import Join from '../modal/join'
import { modalStatus } from '@/app/recoil/startModalStatus'
import { useResetRecoilState } from 'recoil'
import Start from '../modal/start'

const Logout = () => {
  const textClass="text-base leading-4 px-5 py-3"
  const [openJoin, setOpenJoin] = useState(false)
  const [openLogin, setOpenLogin] = useState(false)
  const resetModalStatus = useResetRecoilState(modalStatus);
  
  function handleJoin(state: boolean) {
    setOpenJoin(state)
  }

  function handleLogin(state: boolean) {
    resetModalStatus()
    setOpenLogin(state)
  }

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
      {openJoin && <Join handleJoin={handleJoin} />}
      {openLogin && <Start handleStart={handleLogin} />}
    </>
  )
}

export default Logout