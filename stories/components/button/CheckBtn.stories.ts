import CheckBtn from '@/app/components/button/checkBtn'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CheckBtn> = {
  title: '버튼/체크 버튼',
  component: CheckBtn,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'radio',
      options: [true, false]
    },
    text: {
      control: 'text',
    },
  }
}

export default meta
type Story = StoryObj<typeof CheckBtn>

let checked = false
export const Example:Story = {
  args:{
    disabled: false,
    checked: false,
    text: '이메일 기억하기',
  }
}


/** 
 * figma 대신 figspec이라는 타입을 사용했습니다! css 속성이 더 세밀하게 보여요
 * url은 1.figma에서 컴포넌트 클릭 2. share 버튼 클릭 3. copy link에서 가지고 오시면 됩니다
 * https://www.figma.com/developers/api#access-tokens 에서 토큰 받아서 사용하시면 됩니다.
 *  */

Example.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/75R7nErXHjHLca98qtOdqh/(23-11-22)MEMOPET?type=design&node-id=1001%3A2986&mode=dev',
    accessToken: process.env.NEXT_PUBLIC_STORYBOOK_FIGMA_ACCESS_TOKEN
  }
}