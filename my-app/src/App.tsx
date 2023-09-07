import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { AppThemeProvider } from './shared/contexts';
import { MenuLateral } from './shared/components/index';

export const App = () => {
    return (
        <AppThemeProvider>
            <BrowserRouter>
                <MenuLateral>
                    <AppRoutes />
                </MenuLateral>
            </BrowserRouter>
        </AppThemeProvider>
    );
};