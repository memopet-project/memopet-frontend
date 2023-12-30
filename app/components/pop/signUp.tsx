import ClipSVG from '@/public/svg/clipTop.svg'

const SignUp = () => {
  return (
    <div className="p-10 border border-gray07 rounded-2xl font-pretendard">
      <ClipSVG className='absolute -top-1 -left-1' />
      <header className='font-medium text-gray09 text-3xl mb-8'>회원가입</header>
    </div>
  )
}

export default SignUp