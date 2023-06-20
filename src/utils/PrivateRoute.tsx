import { useAppSelector } from '@/hooks/redux-hook';
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute: React.FC<Props> = ({ children }) => {
    const { isAuthenticated } = useAppSelector((state) => state.auth);
    if (!isAuthenticated) {
        return <Navigate to={'/login'} />;
    }
    return children;
};
export default PrivateRoute;

interface Props {
    children: JSX.Element;
}
