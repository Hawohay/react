
import { Box, Icon, IconButton, useTheme, useMediaQuery, Theme, Typography } from '@mui/material';
import React from 'react';
import { useDrawerContext } from '../contexts';

interface ILayoutBaseDePaginaProps {
    titulo: string;
    children: React.ReactNode;
    barraDeFerramentas?: React.ReactNode;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({ titulo, children, barraDeFerramentas }) => {
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const theme = useTheme();

    const { toggleDrawerOpen } = useDrawerContext();

    return (
        <Box height='100%' display='flex' flexDirection='column' gap={1}>
            <Box padding={1} display='flex' alignItems='center' height={theme.spacing(12)} gap={1}>
                {smDown && (
                    <IconButton onClick={toggleDrawerOpen}>
                        <Icon>menu</Icon>
                    </IconButton>
                )}
                
                <Typography variant='h5'>
                    {titulo}
                </Typography>
            </Box>
            
            <Box>
                {barraDeFerramentas}
            </Box>
            
            <Box>
                {children}
            </Box>
            
        </Box>
    );
};