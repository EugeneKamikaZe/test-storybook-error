import { Preview } from '@storybook/react';

import { argTypes, decorators, globalTypes, parameters } from './config';

const preview: Preview = {
    globalTypes,
    parameters,
    argTypes,
    decorators,
};

export default preview;
