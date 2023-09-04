import { Suspense } from 'react';
import { useSelector } from 'react-redux';

import { getUserInited } from '~/entities/User';
import { AppRouter } from './providers/router';

const App = () => {
    const inited = useSelector(getUserInited);

    return (
        <Suspense fallback="">
            {inited && (
                <AppRouter />
            )}
        </Suspense>
    );
};

export default App;
