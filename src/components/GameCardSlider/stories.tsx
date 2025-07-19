import { Meta, StoryFn } from '@storybook/react'
import { GameCardProps } from '../GameCard'

import GameCardSlider from '.'
import items from './mock'

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryFn<Omit<GameCardProps[], 'onFav'>> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider items={args} {...args} />
  </div>
)
