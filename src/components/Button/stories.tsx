import { Meta, StoryFn } from '@storybook/react'
import { ShoppingCart } from 'lucide-react'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: 'symbol'
    }
  }
} as Meta

export const Default: StoryFn = (args) => <Button {...args} />

Default.args = {
  children: 'By now'
}

export const withIcon: StoryFn = (args) => <Button {...args} />

Default.args = {
  size: 'small',
  children: 'By now',
  icon: <ShoppingCart />
}
