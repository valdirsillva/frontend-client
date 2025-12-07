
import { Meta, StoryFn } from '@storybook/react'
import items from './mock'
import ExploreSidebar, { ExploreSidebarProps } from '.'

export default {
  title: 'ExporerSidebar',
  component: ExploreSidebar,
  args: {
    items,
    onFilter: () => console.log('filter')
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta


export const Default: StoryFn<ExploreSidebarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSidebar {...args} />
  </div>
)

export const WithInicialValues: StoryFn<ExploreSidebarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSidebar
      {...args}
      initialValues={{
        platforms: ['windows', 'linux'],
        sort_by: 'low-to-high'
      }}
    />
  </div>
)
