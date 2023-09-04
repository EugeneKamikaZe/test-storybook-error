import { RouterDecorator } from '../../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '../../../src/shared/config/storybook/StoreDecorator/StoreDecorator';
import { SuspenseDecorator } from '../../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { TranslationsDecorator } from '../../../src/shared/config/storybook/TranslationsDecorator/TranslationsDecorator';
import { argsConfig } from './argsConfig';
import { backgroundConfig } from './backgroundConfig';
import { badgeConfig } from './bageConfig';
import { viewports } from './costomViewport';
import { htmlConfig } from './htmlConfig';
import { localeConfig } from './localeConfig';

export const parameters = {
    html: htmlConfig,
    backgrounds: backgroundConfig,
    actions: {
        disable: true,
        argTypesRegex: '^on[A-Z].*',
    },
    layout: 'fullscreen',
    controls: {
        disable: true,
        expanded: true,
    },
    badgesConfig: badgeConfig,
    docs: { toc: true },
    design: {
        disable: true,
    },
    formik: {
        disable: true,
    },
    viewport: {
        viewports,
    },
};

export const decorators = [
    RouterDecorator,
    SuspenseDecorator,
    StoreDecorator({}),
    // ViewPortDecorator,
    TranslationsDecorator,
];

export const argTypes = argsConfig;

export const globalTypes = localeConfig;
