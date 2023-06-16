import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ApplicationPage from '@/components/application';

const ApplicationView: React.FC = () => {
    return (
        <MainLayout>
            <ApplicationPage />
        </MainLayout>
    );
};
export default ApplicationView;
