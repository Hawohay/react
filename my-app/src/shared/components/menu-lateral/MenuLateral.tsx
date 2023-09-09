import React from 'react'; // Importe o React explicitamente
import { Avatar, Drawer, createTheme, Divider, useMediaQuery, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import HomeIcon from '@mui/icons-material/Home';
import { useDrawerContext } from '../../contexts';


interface IPppThemeProviderPropos {
    children: React.ReactNode;
}

export const MenuLateral: React.FC<IPppThemeProviderPropos> = ({ children }) => {
    const theme = createTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

    return (
        <>
            <Drawer open={ isDrawerOpen } variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
                <Box width={theme.spacing(28)} height='100%' display='flex' flexDirection='column'>
                    <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
                        <Avatar 
                            sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
                            src="C:/Users/hawohay/OneDrive/Área de Trabalho/sem.jpg" 
                        />
                    </Box>

                    <Divider />

                    <Box flex={1}>
                        <List component='nav'>
                            <ListItemButton>
                                <ListItemIcon>
                                    <HomeIcon>home</HomeIcon>
                                </ListItemIcon>
                                <ListItemText primary='Página inicial' />
                            </ListItemButton>
                        </List>
                    </Box>

                </Box>
            </Drawer>

            <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
};