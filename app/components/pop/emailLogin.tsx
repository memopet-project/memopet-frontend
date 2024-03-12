import ClipPopupLayout from './clipPopupLayout'

type Props = {
  handleLogin: (arg: boolean) => void
}

const EmailLogin = ({ handleLogin }: Props) => {
  return (
    <ClipPopupLayout handleClose={handleLogin} title='이메일 로그인' maxWidth='400px'>
      <form className='flex flex-col gap-6'>
      </form>
    </ClipPopupLayout>
  )
}
export default EmailLogin