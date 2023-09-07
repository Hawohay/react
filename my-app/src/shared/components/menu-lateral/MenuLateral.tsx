import React from 'react'; // Importe o React explicitamente
import { Drawer, createTheme } from '@mui/material';
import { Box } from '@mui/system';


interface IPppThemeProviderPropos {
    children: React.ReactNode;
}

export const MenuLateral: React.FC<IPppThemeProviderPropos> = ({ children }) => {
    const theme = createTheme();

    return (
        <>
            <Drawer variant='permanent'>
                <Box width={theme.spacing(28)}>
                    Menu Lateral
                </Box>
            </Drawer>

            <Box height='100vh' marginLeft={theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
};