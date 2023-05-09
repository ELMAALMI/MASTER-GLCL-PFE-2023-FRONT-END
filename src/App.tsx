import React from 'react';
import { ThemeProvider } from '@material-tailwind/react';
import AppRouters from './routes';

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <AppRouters />
        </ThemeProvider>
    );
};

export default App;
