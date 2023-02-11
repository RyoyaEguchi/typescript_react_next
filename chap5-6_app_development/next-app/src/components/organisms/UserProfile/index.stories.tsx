import { ComponentMeta, ComponentStory } from '@storybook/react'
import UserProfile from '.'

export default {
  title: 'Organisms/UserProfile',
  argTypes: {
    variant: {
      options: ['normal', 'small'],
      control: { type: 'radio' },
      defaultValue: 'normal',
      description: 'バリアント（表示スタイル）',
      table: {
        type: { summary: 'normal | small' },
        defaultValue: { summary: 'normal' },
      },
    },
  },
  username: {
    control: { type: 'text' },
    description: 'ユーザ名',
    table: {
      type: { summary: 'string' },
    },
  },
  profileImageUrl: {
    control: { type: 'text' },
    description: 'ユーザ画像URL',
    table: {
      type: { summary: 'string' },
    },
  },
  numberOfProducts: {
    control: { type: 'number' },
    description: 'ユーザが所有する商品数',
    table: {
      type: { summary: 'number' },
    },
  },
  description: {
    control: { type: 'text' },
    description: 'ユーザの説明',
    table: { sumamry: 'string' },
  },
} as ComponentMeta<typeof UserProfile>

const Template: ComponentStory<typeof UserProfile> = (args) => (
  <UserProfile {...args} />
)

export const Small = Template.bind({})
Small.args = {
  variant: 'small',
  username: 'テストユーザ',
  profileImageUrl: '/images/sample/1.jpg',
  numberOfProducts: 200,
  description: 'サンプルテキスト',
}

export const Normal = Template.bind({})
Normal.args = {
  variant: 'normal',
  username: 'テストユーザ',
  profileImageUrl: '/images/sample/1.jpg',
  numberOfProducts: 200,
  description: 'サンプルテキスト',
}
