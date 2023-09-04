// eslint-disable-next-line
import path from 'path';
import { AddonOptionsBabel } from '@storybook/addon-coverage';
import { mergeConfig } from 'vite';

const coverageConfig: AddonOptionsBabel = {
    // @ts-ignore
    include: ['**/stories/**'],
    excludeNodeModules: true,
    requireEnv: true,
};

export default {
    stories: ['../../src/**/*.stories.@(js|jsx|mdx|ts|tsx)'],
    staticDirs: ['../../public'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        {
            name: '@storybook/addon-coverage',
            options: {
                istanbul: {
                    ...coverageConfig,
                },
            },
        },
        '@storybook/addon-storysource',
        '@storybook/addon-a11y',
        '@whitespace/storybook-addon-html',
        '@bbbtech/storybook-formik/register',
        '@geometricpanda/storybook-addon-badges',
        '@storybook/addon-designs',
        'storybook-css-modules',
        'storybook-react-i18next',
        'storybook-addon-mock',
    ],
    framework: '@storybook/react-vite',
    core: {
        builder: '@storybook/builder-vite', // 👈 The builder enabled here.
    },
    async viteFinal(config: Record<string, any>) {
        return mergeConfig(config, {
            resolve: {
                alias: {
                    '~': path.resolve(__dirname, '../../src'),
                },
            },
            define: {
                __IS_DEV__: JSON.stringify(true),
                __API__: JSON.stringify('https://testapi.ru'),
                __PROJECT__: JSON.stringify('storybook'),
            },
        });
    },
};
