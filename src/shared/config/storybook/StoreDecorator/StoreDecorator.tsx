import { Decorator } from '@storybook/react';

import { StateSchema, StoreProvider } from '~/app/providers/StoreProvider';
import { ReducersList } from '~/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

export const StoreDecorator =
    (
        state: DeepPartial<StateSchema>,
        asyncReducers?: ReducersList,
    ): Decorator =>
    (StoryComponent) => (
        <StoreProvider
            // @ts-ignore
            store={state}
            // @ts-ignore
            asyncReducers={{
                ...asyncReducers,
            }}
        >
            {StoryComponent()}
        </StoreProvider>
    );
