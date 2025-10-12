
import { Meta, StoryFn } from '@storybook/react'
import TextContent, { TextContentProps } from '.'
import TextMock from './mock'

export default {
  title: 'TextContent',
  component: TextContent,
  args: TextMock,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta 


export const Default: StoryFn<TextContentProps> = (args) => <TextContent {...args} /> 