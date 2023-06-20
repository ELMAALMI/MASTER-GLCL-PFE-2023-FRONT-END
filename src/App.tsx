import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@material-tailwind/react';
import AppRouters from './routes';
import axios from 'axios';
import { useAppDispatch } from './hooks/redux-hook';
import authActionThunk from './store/app/auth/auth-action-thunk';

axios.defaults.baseURL = 'http://localhost:8080/api/v1/';
axios.defaults.withCredentials = true;

const App: React.FC = () => {
    const dispatch = useAppDispatch();

    const [checkAuth, setCheckAuth] = useState(true);

    const checkAuthentication = async () => {
        await dispatch(authActionThunk.checkAuthenticated());
        setCheckAuth(false);
    };
    useEffect(() => {
        checkAuthentication();
    }, []);

    return <ThemeProvider>{checkAuth ? <h1>check auth ...</h1> : <AppRouters />}</ThemeProvider>;
};

export default App;
