
import { Meta, StoryFn } from '@storybook/react'

import UserDropdown, { UserDropdownProps } from '.'

export default {
  title: 'UserDropdown',
  component: UserDropdown,

  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta


export const Default: StoryFn<UserDropdownProps> = (args) => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end', padding: '2rem' }}>
    <UserDropdown {...args} />
  </div>
)

Default.args = {
  username: 'JohnDoe'
}