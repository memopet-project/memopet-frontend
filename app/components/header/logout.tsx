import { useState } from 'react'
import Join from '../pop/join'
import EmailLogin from '../pop/emailLogin'

const Logout = () => {
  const textClass="text-base leading-4 px-5 py-3"
  const [openSignup, setOpenSignup] = useState(false)
  const [openLogin, setOpenLogin] = useState(false)
  
  function handleJoin(state: boolean) {
    setOpenSignup(state)
  }

  function handleLogin(state: boolean) {
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
      {openSignup && <Join handleJoin={handleJoin} />}
      {openLogin && <EmailLogin handleLogin={handleLogin} />}
    </>
  )
}

export default Logout