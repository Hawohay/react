import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { AppThemeProvider } from './shared/contexts';
import { MenuLateral } from './shared/components';
import React from 'react';

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
      <MenuLateral />        
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  );
};