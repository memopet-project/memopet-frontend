import ClipSVG from '@/public/svg/clipTop.svg'
import Close from '@/public/svg/close_24.svg'
import LabelInput from '../input/labelInput'
import { ChangeEvent, useState } from 'react'
import checkEmailType from '@/app/utils/checkEmail'

type Props = {
  handleSignUp: (arg: boolean) => void
}

const SignUp = ({ handleSignUp }: Props) => {
  const [email, setEmail] = useState('')
  const initValidate = { email: { msg: '', status: null } }
  const [validate, setValidate] = useState<{[key: string] : { msg: string; status: boolean | null }}>({ ...initValidate })
  const inputs = [
    {
      label: '이메일',
      validate: validate.email,
      placeholder: 'sample@email.com',
      type: 'email',
      value: email,
      buttonLabel: '인증 요청',
      name: 'email',
      onClick: () => {
        console.log('인증 요청')
      },
      onChange: (value: ChangeEvent<HTMLInputElement>['target']['value']) => {
        setEmail(value)
      },
      onBlur: () => {
        if (checkEmailType(email)) {
          setValidate({ email: { msg: '이메일을 정확히 입력해주세요.', status: false }})
          return;
        }
        
        setValidate({ email: { msg: '', status: true }})
      }
    }
  ]
  return (
    <section className='fixed bg-[#0000004D] flex justify-center items-center top-0 left-0 w-full h-full z-50'>
      <aside className='relative bg-white max-w-[480px] max-h-[905px] w-full min-h-[796px] rounded-2xl p-10 border border-gray07 shadow-[0px_4px_4px_0px_#00000040]'>
        <ClipSVG className='absolute -top-[17px] -left-[14px]' />
        <button className='absolute w-6 h-6 top-4 right-4' onClick={() => handleSignUp(false)}>
          <Close className='text-gray09' />
        </button>
        <h1 className='text-gray09 text-[28px] font-medium leading-9 font-gothic'>회원가입</h1>
        <form>
          {inputs.map((input) => (
            <LabelInput
              key={input.name}
              label={input.label}
              value={input.value}
              onChange={input.onChange}
              placeholder={input.placeholder}
              name={input.name}
              type={input.type}
              validate={input.validate}
              buttonLabel={input.buttonLabel}
              onBlur={input.onBlur}
            />
          ))}
        </form>
      </aside>
    </section>
  )
}

export default SignUp