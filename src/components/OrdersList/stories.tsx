
import { Meta, StoryFn } from '@storybook/react'
import itemsMock from './mock'
import OrdersList, { OrdersListProps } from '.'

export default {
  title: 'OrdersList',
  component: OrdersList,
  args: {
    items: itemsMock
  }
} as Meta


export const Default: StoryFn<OrdersListProps> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <OrdersList {...args} />
  </div>
)