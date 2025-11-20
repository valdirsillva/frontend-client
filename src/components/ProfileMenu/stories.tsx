
import { Meta, StoryFn } from '@storybook/react'

import ProfileMenu, { ProfileMenuProps } from '.'

export default {
  title: 'ProfileMenu',
  component: ProfileMenu,
  parameters: {
    default: 'won-dark'
  }
} as Meta


export const Default: StoryFn<ProfileMenuProps> = (args) => <ProfileMenu {...args} />