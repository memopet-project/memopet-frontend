import { useState } from 'react'
import SignUp from '../pop/signUp'

const Logout = () => {
  const textClass="text-base leading-4 px-5 py-3"
  const [openSignup, setOpenSignup] = useState(false)
  function handleSignUp(state: boolean) {
    setOpenSignup(state)
  }
  return (
    <>
      <li>
        <button className={`text-gray07 ${textClass}`}>
          로그인
        </button>
      </li>
      <li>
        <button className={`text-red05 ${textClass}`} onClick={() => handleSignUp(true)}>
          회원가입
        </button>
      </li>
      {openSignup && <SignUp handleSignUp={handleSignUp} />}
    </>
  )
}

export default Logout