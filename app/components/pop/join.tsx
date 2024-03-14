import ClipPopupLayout from './clipPopupLayout'
import JoinForm from './joinForm'

type Props = {
  handleJoin: (arg: boolean) => void
}

const Join = ({ handleJoin }: Props) => {
  return (
    <ClipPopupLayout handleClose={handleJoin} title='회원가입'>
      {<JoinForm />}
    </ClipPopupLayout>
  )
}
export default Join