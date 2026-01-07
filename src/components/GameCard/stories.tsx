import { Meta, StoryFn } from '@storybook/react'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    slug: 'population-zero',
    title: 'Population Zero',
    price: 215,
    promotionalPrice: 200,
    developer: 'Rockstart Games',
    img: '/img/red-dead-img.jpg'
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: {
      type: 'string'
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryFn<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

export const WithRibbon: StoryFn<GameCardProps> = (args) => (
  <div style={{ maxWidth: '30rem' }}>
    <GameCard {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'normal',
  ribbonColor: 'primary'
}
