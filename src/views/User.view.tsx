import MainLayout from '@/components/layout/MainLayout';
import UserPage from '@/components/user';
import React from 'react';

const UserView: React.FC = () => {
    return (
        <MainLayout>
            <UserPage />
        </MainLayout>
    );
};
export default UserView;
