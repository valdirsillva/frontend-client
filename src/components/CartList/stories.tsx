
import { Meta, StoryFn } from '@storybook/react'
import CartList, { CartListProps } from '.'
import mockItems from './mock'

export default {
  title: 'CartList',
  component: CartList,
  args: {
    item: mockItems,
    total: 'R$ 330,00'
  },
  argTypes: {
    items: {
      type: 'symbol'
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryFn<CartListProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
)