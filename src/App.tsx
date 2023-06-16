import React from 'react';
import { ThemeProvider } from '@material-tailwind/react';
import AppRouters from './routes';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api/v1/';

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <AppRouters />
        </ThemeProvider>
    );
};

export default App;
