import { Meta, StoryFn } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
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
  icon: <AddShoppingCart />
}
