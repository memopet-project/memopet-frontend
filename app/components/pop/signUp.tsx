import ClipSVG from '@/public/svg/clipTop.svg'
import Close from '@/public/svg/close.svg'

type Props = {
  handleSignUp: (arg: boolean) => void
}
const SignUp = ({ handleSignUp }: Props) => {
  return (
    <section className='fixed bg-[#0000004D] flex justify-center items-center top-0 left-0 w-full h-full z-50'>
      <aside className='relative bg-white max-w-[480px] max-h-[905px] w-full min-h-[796px] rounded-2xl p-10 border border-gray07 shadow-[0px_4px_4px_0px_#00000040]'>
        <ClipSVG className='absolute -top-[17px] -left-[14px]' />
        <button className='absolute w-6 h-6 top-4 right-4' onClick={() => handleSignUp(false)}>
          <Close />
        </button>
        <h1 className='text-gray09 text-[28px] font-medium leading-9 font-gothic'>회원가입</h1>
      </aside>
    </section>
  )
}

export default SignUp