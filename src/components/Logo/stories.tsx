import { Meta, StoryFn } from '@storybook/react'
import Logo, { LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['white', 'black']
    }
  }
} as Meta

export const Default: StoryFn<LogoProps> = (args) => <Logo {...args} />
