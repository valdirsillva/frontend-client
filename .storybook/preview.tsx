import type { Preview } from '@storybook/experimental-nextjs-vite';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/styles/global';
import theme from '../src/styles/theme';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'won-light',
      values: [
        {
          name: 'won-light',
          value: theme.colors.white
        },
        {
          name: 'won-dark',
          value: theme.colors.mainBg
        }
      ]
    }
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyles removeBg />
        <Story />
      </ThemeProvider>
    )
  ]
};

export default preview;