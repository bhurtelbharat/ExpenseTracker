import { Navigate, Route, Routes } from 'react-router'
import { useSelector } from 'react-redux'
import { LoginAuth } from '../pages/auth/Login.auth'
import { DashboardLayout } from '../layouts/Dashboard.layout'
import { getTokenFromStorage } from '../utils/helpers/token.helper'
import { LandingLayout } from '../layouts/Landing.layout'
import { UserDashboardLayout } from '../layouts/UserDashboard.layout'
import { AuthenticationLayout } from '../layouts/Authentication.layout'

export const AppRoutes = () => {
    const isAuthenticated = useSelector(
        (state: any) => state.authReducer.isAuthenticated,
    ) || getTokenFromStorage()

    return <Routes>
        <Route path={'/*'} element={<LandingLayout />} />
        <Route path={'/auth/*'} element={!isAuthenticated ? <AuthenticationLayout /> : <Navigate to="/dashboard" />} />
        <Route path={'/dashboard/*'} element={isAuthenticated ? <DashboardLayout /> : <Navigate to="/" />} />
        <Route path={'/me/*'} element={isAuthenticated ? <UserDashboardLayout /> : <Navigate to="/" />} />
        <Route path={'*'} element={<div>Not found</div>} />
    </Routes>
}