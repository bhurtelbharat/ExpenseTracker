import { LoginPage } from "../components/modules/auth/LoginPage";
import { DashboardLayout } from "../layouts/Dashboard/Dashboard.page";
import { LandingLayout } from "../layouts/Landing/Landing.page";
import { IRoute } from "./route.interface";

export const APP_ROUTES: IRoute[] = [
    {
        path: '/*',
        element: <LandingLayout />
    },
    {
        path: '/dashboard/*',
        element: <DashboardLayout />
    },
    {
        path:'/login/*',
        element:<LoginPage/>
    }
];