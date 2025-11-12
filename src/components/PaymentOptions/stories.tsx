
import { Meta, StoryFn } from '@storybook/react'
import cardsMock from './mock'
import PaymentOptions, { PaymentOptionsProps } from '.'

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: cardsMock
  },

  argTypes: {
    cards: {
      type: "symbol"
    },
    handlePayment: {
      action: 'clicked'
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }

} as Meta


export const Default: StoryFn<PaymentOptionsProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 400 }}>
    <PaymentOptions {...args} />
  </div>
)