import type { StorybookConfig } from "@storybook/nextjs";
const path = require('path');

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../stories/**/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-designs",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ['../public'],

  async webpackFinal(config) {
    const imageRule = config.module?.rules?.find(rule => {
      const test = (rule as { test: RegExp }).test

      if (!test) {
        return false
      }

      return test.test('.svg')
    }) as { [key: string]: any }

    imageRule.exclude = /\.svg$/

    /** 절대경로 생성 */
    if (config.resolve?.alias) {
      config.resolve.alias['@'] = path.resolve(__dirname, '../');
      config.resolve.alias['@app'] = path.resolve(__dirname, '../app');
    }
    // if (config.resolve) {
    //   config.resolve.alias = {
    //     ...config.resolve?.alias,
    //     '@app': path.resolve(__dirname, '../../*')
    //   }
    // }
    /** svg파일을 storybook에도 적용시킴 */
    config.module?.rules?.push(
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      })
    return config;
  }
};
export default config;
