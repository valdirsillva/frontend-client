
import { Meta, StoryFn } from '@storybook/react'
import cardsMock from '@/components/PaymentOptions/mock'
import CardsList, { CardsListProps } from '.'

export default {
  title: 'Profile/CardsList',
  component: CardsList,
  args: {
    cadrs: cardsMock
  }
} as Meta


export const Default: StoryFn<CardsListProps> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <CardsList {...args} />
  </div>
)