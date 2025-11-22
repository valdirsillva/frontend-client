import path from 'path'
import type { StorybookConfig } from '@storybook/experimental-nextjs-vite';

const config: StorybookConfig = {
  staticDirs: ['../public'],
  stories: ['../src/components/**/stories.tsx'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@chromatic-com/storybook',
    '@storybook/experimental-addon-test'
  ],
  framework: {
    // name: '@storybook/nextjs',
    name: '@storybook/experimental-nextjs-vite',
    options: {}
  },

  docs: {
    autodocs: true
  },
  // webpackFinal: (config) => {
  //   config.resolve?.modules?.push(`${process.cwd()}/src`)
  //   return config
  // }

  viteFinal: async (config) => {
    config.resolve = config.resolve || {};

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, '../src'),
    };

    return config;
  }
}
export default config
