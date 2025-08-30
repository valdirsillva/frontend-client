import { Meta, StoryFn } from '@storybook/react'

import FormSignin from '.'

export default {
  title: 'Form/FormSignin',
  component: FormSignin
} as Meta

export const Default: StoryFn = () => (
  <div style={{ width: 300, margin: 'auto' }}>
    <FormSignin />
  </div>
)
