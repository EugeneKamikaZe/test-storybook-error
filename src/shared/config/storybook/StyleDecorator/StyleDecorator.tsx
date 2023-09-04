import { Decorator } from '@storybook/react';
import classnames from 'classnames';

import s from './StyleDecorator.module.scss';

export const StyleDecorator =
    (
        withPadding?: boolean,
        height?: number | undefined,
        isCenter?: boolean,
    ): Decorator =>
    (StoryComponent) => (
        <div
            className={classnames({
                [s.padding]: withPadding,
                [s.minHeight]: !height,
                [s.center]: isCenter,
            })}
            style={{
                height: `${height}px`,
            }}
        >
            {StoryComponent()}
        </div>
    );
