import MainLayout from '@/components/layout/MainLayout';
import ServerPage from '@/components/server';
import React from 'react';

const ServerView: React.FC = () => {
    return (
        <MainLayout>
            <ServerPage />
        </MainLayout>
    );
};
export default ServerView;
