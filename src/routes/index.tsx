import { Navigate, Route, Routes } from 'react-router';
import { APP_ROUTES } from './routes';
import { IRoute } from './route.interface';
import { useSelector } from 'react-redux';
import { LoginPage } from '../components/modules/auth/LoginPage';
import { Dashboard } from 'tabler-icons-react';
import { DashboardLayout } from '../layouts/Dashboard.layout';
import { useEffect } from 'react';
import { getTokenFromStorage } from '../utils/helpers/token.helper';

export const AppRoutes = () => {
    const isAuthenticated = useSelector(
        (state: any) => state.authReducer.isAuthenticated,
    ) || getTokenFromStorage();

    return <Routes>
        <Route path={'/'} element={!isAuthenticated ? <LoginPage/> : <Navigate to='/dashboard' /> }/>
        <Route path={'/dashboard/*'} element={isAuthenticated ? <DashboardLayout/> : <Navigate to='/' /> }/>
        <Route path={'*'} element={<div>Not found</div>} />
    </Routes>
}