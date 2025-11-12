import { Meta, StoryFn } from '@storybook/react'
import GameItem, { GameItemProps } from '.'

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    img: 'https://images.pexels.com/photos/671629/pexels-photo-671629.jpeg',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,00'
  }
} as Meta


export const Default: StoryFn<GameItemProps> = (args) => <GameItem {...args} />

export const WithPayment: StoryFn<GameItemProps> = (args) => (
  <GameItem {...args} />
)

WithPayment.args = {
  downloadLink: 'https://wongames.com/game/download/game-bullet-force',
  paymentInfo: {
    flag: 'mastercard',
    img: '/img/cards/master-card.png',
    number: '**** **** **** 4326',
    purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
  }
}