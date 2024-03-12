import { useState } from 'react'
import SignUp from '../pop/signUp'
import Login from '../pop/login'

const Logout = () => {
  const textClass="text-base leading-4 px-5 py-3"
  const [openSignup, setOpenSignup] = useState(false)
  const [openLogin, setOpenLogin] = useState(false)
  
  function handleSignUp(state: boolean) {
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
        <button className={`text-red05 ${textClass}`} onClick={() => handleSignUp(true)}>
          회원가입
        </button>
      </li>
      {openSignup && <SignUp handleSignUp={handleSignUp} />}
      {openLogin && <Login handleLogin={handleLogin} />}
    </>
  )
}

export default Logout