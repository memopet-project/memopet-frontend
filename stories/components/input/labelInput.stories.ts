import LabelInput from '@/app/components/input/labelInput'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

const meta: Meta<typeof LabelInput> = {
  title: '팝업/회원가입/input',
  component: LabelInput,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    discription: {
      control: 'text',
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number']
    },
    placeholder: {
      control: 'text',
    },
    validate: {
      control: {
        type: 'object',
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof LabelInput>

let value = ''

export const Example:Story = {
  args: {
    label: '이메일',
    discription: '*내 계정을 찾을 때 필요해요',
    type: 'email',
    placeholder: 'sample@email.com',
    value,
    validate: { status: false, msg: 'assistive message' },
    buttonLabel: '확인',
    name: 'email',
    onChange: (v) => value = v
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
    url: 'https://www.figma.com/file/75R7nErXHjHLca98qtOdqh/(23-11-22)MEMOPET?type=design&node-id=672%3A1861&mode=design&t=aCudXqfFgyflH6ix-1',
    accessToken: process.env.NEXT_PUBLIC_STORYBOOK_FIGMA_ACCESS_TOKEN
  }
}