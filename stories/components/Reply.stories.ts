import ReplyComponent from '../../app/components/comment/reply'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ReplyComponent> = {
  title: '요소/답안',
  component: ReplyComponent,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ReplyComponent>

export const Reply:Story = {
  // args: {
  //   inputValue:'안녕 코코야 ^_^'
  // }
}

/** 
 * figma 대신 figspec이라는 타입을 사용했습니다! css 속성이 더 세밀하게 보여요
 * url은 1.figma에서 컴포넌트 클릭 2. share 버튼 클릭 3. copy link에서 가지고 오시면 됩니다
 * https://www.figma.com/developers/api#access-tokens 에서 토큰 받아서 사용하시면 됩니다.
 *  */

Reply.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/75R7nErXHjHLca98qtOdqh/(23-11-22)MEMOPET?type=design&node-id=672%3A1861&mode=design&t=aCudXqfFgyflH6ix-1',
    accessToken: process.env.NEXT_PUBLIC_STORYBOOK_FIGMA_ACCESS_TOKEN
  }
}