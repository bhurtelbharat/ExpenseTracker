import { Route, Routes } from 'react-router';
import { APP_ROUTES } from './routes';
import { IRoute } from './route.interface';

export const AppRoutes = () => {
    return <Routes>
        {APP_ROUTES.map((route: IRoute, key: number) => (
            <Route path={route.path} element={route.element} key={key} />
        ))}
    </Routes>
}