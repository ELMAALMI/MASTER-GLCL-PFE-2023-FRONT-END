import React from 'react';
import { useRoutes } from 'react-router-dom';
import HomeView from './views/Home.view';
import LoginView from './views/Login-view';
import ServerView from './views/Server.view';
import ApplicationView from './views/Application.view';

const AppRouters: React.FC = () => {
    return useRoutes([
        {
            path: '/',
            index: true,
            element: <HomeView />
        },
        {
            path: '/servers',
            element: <ServerView />
        },
        {
            path: '/applications',
            element: <ApplicationView />
        },
        {
            path: '/settings',
            element: <HomeView />
        },
        {
            path: '/alerts',
            element: <HomeView />
        },
        {
            path: '/manage-team',
            element: <HomeView />
        },
        {
            path: '/login',
            element: <LoginView />
        }
    ]);
};

export default AppRouters;
