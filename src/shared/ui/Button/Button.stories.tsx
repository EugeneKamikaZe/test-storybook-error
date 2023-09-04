import { Meta, StoryObj } from '@storybook/react';

import { StyleDecorator } from '~/shared/config/storybook/StyleDecorator/StyleDecorator';

import { Button, ButtonTheme } from './Button';
import s from './Button.module.scss';

const meta: Meta = {
    title: 'shared/Button',
    tags: ['autodocs'],
    component: Button,
    decorators: [StyleDecorator(true)],
    parameters: {
        design: {
            disable: false,
            type: 'figma',
            url: 'https://www.figma.com/file/VydKumqELWSX4dKl0j5Fb1/Dashboard-Hi-Fi?type=design&t=RKfPMeoAN71tYdjc-0',
        },
        controls: {
            disable: false,
        },
    },
    argTypes: {
        isIcon: {
            description: 'Shows an icon in Storybook only',
            control: 'boolean',
        },
        theme: {
            defaultValue: {
                summary: 'primary',
            },
            description: 'Change theme',
        },
        iconPosition: {
            defaultValue: {
                summary: 'right',
            },
            description: 'Change icon position',
        },
        size: {
            defaultValue: {
                summary: 'small',
            },
            description: 'Change size',
        },
        isDisabled: {
            defaultValue: {
                summary: 'false',
            },
            description: 'If `true` set disable class',
        },
    },
};
export default meta;

interface ButtonTemplateProps {
    text: string;
}
const ButtonTemplate = (templateArgs: ButtonTemplateProps) => {
    const { text } = templateArgs;
    return (
        <Button {...templateArgs} className={s.storyIcon}>
            {text}
        </Button>
    );
};

export const Primary: StoryObj = {
    render: (args) => <ButtonTemplate text="Primary" {...args} />,
    args: {
        isDisabled: false,
        theme: ButtonTheme.PRIMARY,
    },
    parameters: {},
};

export const Secondary: StoryObj = {
    render: (args) => <ButtonTemplate text="Secondary" {...args} />,
    args: {
        isDisabled: false,
        theme: ButtonTheme.SECONDARY,
    },
    parameters: {},
};

export const Bordered: StoryObj = {
    render: (args) => <ButtonTemplate text="Account btn" {...args} />,
    args: {
        isDisabled: false,
        theme: ButtonTheme.BORDERED,
    },
    parameters: {
        docs: {
            description: {
                story: 'Buttons in Account',
            },
        },
    },
};

export const Clear: StoryObj = {
    render: (args) => <ButtonTemplate text="Text or ReactNode" {...args} />,
    args: {
        isDisabled: false,
        theme: ButtonTheme.CLEAR,
    },
    parameters: {},
};

export const Link: StoryObj = {
    render: (args) => <ButtonTemplate text="Link" {...args} />,
    args: {
        isDisabled: false,
        theme: ButtonTheme.LINK,
    },
    parameters: {},
};

export const LinkDashed: StoryObj = {
    render: (args) => <ButtonTemplate text="Dashed" {...args} />,
    args: {
        isDisabled: false,
        theme: ButtonTheme.LINK_DASHED,
    },
    parameters: {},
};
