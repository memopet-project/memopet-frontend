import ClipPopupLayout from './clipPopupLayout'

type Props = {
  handleLogin: (arg: boolean) => void
}

const Login = ({ handleLogin }: Props) => {
  return (
    <ClipPopupLayout handleClose={handleLogin} title='로그인' maxWidth='400px'>
      <form className='flex flex-col gap-6'>
      </form>
    </ClipPopupLayout>
  )
}
export default Login