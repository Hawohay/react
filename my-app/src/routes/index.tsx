import { useEffect } from 'react'; 
import { Routes, Route, Navigate } from 'react-router-dom';

import { useDrawerContext } from '../shared/contexts';
import { 
    Dashboard,
    ListagemDeBens
} from '../pages';


export const AppRoutes = () => {
    const { setDrawerOptions } = useDrawerContext();

    useEffect(() => {
        setDrawerOptions([
            {
                icon: 'home',
                path: '/pagina-inicial',
                label: 'Página inicial',
            },

            {
                icon: 'chair',
                path: '/bens',
                label: 'Bens patrimoniais',
            },            
        ]);
    }, []);

    return (
        <Routes>
            <Route path='/pagina-inicial' element={<Dashboard />} />

            <Route path='/bens' element={<ListagemDeBens />} />
            

            <Route path='*' element={<Navigate to='/pagina-inicial' />} />
        </Routes>
    );
};