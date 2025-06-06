import { Meta, StoryFn } from '@storybook/react'

import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: StoryFn = () => (
  <MediaMatch greaterThan="medium">Only onDesktop</MediaMatch>
)
export const Mobile: StoryFn = () => (
  <MediaMatch lessThan="medium">Only Mobile</MediaMatch>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
