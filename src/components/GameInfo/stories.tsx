import { Meta, StoryFn } from '@storybook/react'
import mockGame from './mock'
import GameInfo, { GameInfoProps } from '.'

export default {
  title: 'GameInfo',
  component: GameInfo,
  parameters: {
    default: 'won-dark'
  },
  args: mockGame
} as Meta

export const Default: StoryFn<GameInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', padding: '1.1rem' }}>
    <GameInfo {...args} />
  </div>
)
