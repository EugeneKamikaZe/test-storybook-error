import {
    AppRoutes,
    getRouteMain,
} from '~/shared/const/router';

export const routeConfig: Record<AppRoutes, any> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <div>Main</div>,
    },
    // 404
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <div>Not found</div>,
    },
};
