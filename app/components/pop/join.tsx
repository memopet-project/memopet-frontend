import ClipModalLayout from './clipModalLayout'
import JoinForm from './joinForm'

type Props = {
  handleJoin: (arg: boolean) => void
}

const Join = ({ handleJoin }: Props) => {
  return (
    <ClipModalLayout handleClose={handleJoin} title='회원가입'>
      {<JoinForm />}
    </ClipModalLayout>
  )
}
export default Join