
import { Meta, StoryFn } from '@storybook/react'
import CartIcon, { CartIconProps } from '.'

export default {
  title: 'CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    }
  }
} as Meta

export const Default: StoryFn = () => <CartIcon />

export const WithItems: StoryFn<CartIconProps> = (args) => <CartIcon {...args} />

WithItems.args = {
  quantity: 5
}