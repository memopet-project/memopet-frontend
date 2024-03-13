import ActionBtn from '@/app/components/button/actionBtn'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ActionBtn> = {
  title: '버튼/액션 버튼',
  component: ActionBtn,
  tags: ['autodocs'],
  argTypes: {
    buttonGroup: [{
      color: 'red',
      label: '신고',
      display: true,
      onClick: () => { }
    }]
  }
}

export default meta
type Story = StoryObj<typeof ActionBtn>

export const Example: Story = {
  args: {
    buttonGroup: [{
      color: 'gray07',
      label: '답글',
      display: true,
      onClick: () => { }
      },
      {
        color: 'errorRed',
        label: '신고',
        display: true,
        onClick: () => { }
      },
      {
        color: 'gray04',
        label: '삭제',
        display: true,
        onClick: () => { }
      }
    ]
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
    url: 'https://www.figma.com/file/aybhtTJpes4WTqfDf6GlNa/%E2%98%85memopet?type=design&node-id=667-292&mode=design&t=KZV8gJe3JI66bDl9-4',
    accessToken: process.env.NEXT_PUBLIC_STORYBOOK_FIGMA_ACCESS_TOKEN
  }
}