import { Meta, StoryFn } from '@storybook/react'
import Showcase, { ShowcaseProps } from '.'
import highlightMock from '../../components/Highlight/mock'
import gamesMock from '../../components/GameCardSlider/mock'

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta<ShowcaseProps>

export const Default: StoryFn<ShowcaseProps> = (args) => <Showcase {...args} />

// Com titulo
Default.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gamesMock
}

export const WithoutTitle: StoryFn<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

// Sem titulo
WithoutTitle.args = {
  highlight: highlightMock,
  games: gamesMock
}

export const WithoutHighlight: StoryFn<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

// Sem Highlight
WithoutHighlight.args = {
  title: 'Most Popular',
  games: gamesMock
}

export const WithoutGames: StoryFn<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

// Sem Highlight
WithoutGames.args = {
  title: 'Most Popular',
  highlight: highlightMock
}
