import ButtonDefault from '../app/components/button'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ButtonDefault> = {
  title: '연습',
  component: ButtonDefault,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ButtonDefault>

export const Primary:Story = {
  args: {
    text:'기본',
    bgColor: 'blue'
  }
}
export const Warning:Story = {
  args: {
    text:'경고',
    bgColor: 'red'
  }
}

/** 
 * figma 대신 figspec이라는 타입을 사용했습니다! css 속성이 더 세밀하게 보여요
 * url은 1.figma에서 컴포넌트 클릭 2. share 버튼 클릭 3. copy link에서 가지고 오시면 됩니다
 * https://www.figma.com/developers/api#access-tokens 에서 토큰 받아서 사용하시면 됩니다
 *  */

Primary.parameters = {
  design: {
    type: 'figspec',
    url: 'https://www.figma.com/file/ZYSDCk1qmBQ8CFhHZBYPLG/JS-Project?type=design&node-id=11%3A7&mode=design&t=iNtpjRcL7BhD0gRd-1',
    accessToken: process.env.NEXT_PUBLIC_STORYBOOK_FIGMA_ACCESS_TOKEN
  }
}

Warning.parameters = {
  design: {
    type: 'figspec',
    url: 'https://www.figma.com/file/ZYSDCk1qmBQ8CFhHZBYPLG/JS-Project?type=design&node-id=11%3A7&mode=design&t=iNtpjRcL7BhD0gRd-1',
    accessToken: process.env.NEXT_PUBLIC_STORYBOOK_FIGMA_ACCESS_TOKEN
  }
}