import { Meta, StoryFn } from '@storybook/react'
import { GameCardProps } from '../GameCard'

import GameCardSlider from '.'

const items = [
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://images.pexels.com/photos/671629/pexels-photo-671629.jpeg',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://images.pexels.com/photos/687811/pexels-photo-687811.jpeg',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://images.pexels.com/photos/1657332/pexels-photo-1657332.jpeg',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://images.pexels.com/photos/277124/pexels-photo-277124.jpeg',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://images.pexels.com/photos/209956/pexels-photo-209956.jpeg',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  }
]
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
