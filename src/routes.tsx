import React from 'react';
import { useRoutes } from 'react-router-dom';
import HomeView from './views/Home.view';
import LoginView from './views/Login-view';
import ServerView from './views/Server.view';
import ApplicationView from './views/Application.view';
import PrivateRoute from './utils/PrivateRoute';
import ResetPasswordView from './views/ResetPassword.view';
import UserView from './views/User.view';

const AppRouters: React.FC = () => {
    return useRoutes([
        {
            path: '/',
            index: true,
            element: (
                <PrivateRoute>
                    <HomeView />
                </PrivateRoute>
            )
        },
        {
            path: '/servers',
            element: (
                <PrivateRoute>
                    <ServerView />
                </PrivateRoute>
            )
        },
        {
            path: '/applications',
            element: (
                <PrivateRoute>
                    <ApplicationView />
                </PrivateRoute>
            )
        },
        {
            path: '/settings',
            element: (
                <PrivateRoute>
                    <ApplicationView />
                </PrivateRoute>
            )
        },
        {
            path: '/alerts',
            element: (
                <PrivateRoute>
                    <ApplicationView />
                </PrivateRoute>
            )
        },
        {
            path: '/manage-team',
            element: (
                <PrivateRoute>
                    <UserView />
                </PrivateRoute>
            )
        },
        {
            path: '/login',
            element: <LoginView />
        },
        {
            path: '/reset-password',
            element: <ResetPasswordView />
        }
    ]);
};

export default AppRouters;
