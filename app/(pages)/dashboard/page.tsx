'use client'
import { textState } from '@/app/recoil/recoilContextProvider'
import { useRecoilState } from 'recoil'

/** 리코일은 클라이언트 컴포넌트일때만 동작함 */
const page = () => {
  const [text, setText] = useRecoilState(textState)
  const onChangeText = (e:React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  return (
    <div>
      리코일테스트
      <div>
        <input type='text' value={text} onChange={onChangeText} className='bg-slate-300'/>
        <div>나오는 글자 : {text}</div>
      </div>
    </div>
  )
}

export default page