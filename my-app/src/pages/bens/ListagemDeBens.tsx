import React from 'react';
import { LayoutBaseDePagina } from '../../shared/layouts';
import { FerramentasDaListagem } from '../../shared/components';

export const ListagemDeBens: React.FC = () => {

    return (
        <LayoutBaseDePagina
            titulo='Listagem de Bens Patrimoniais'
            barraDeFerramentas={
                <FerramentasDaListagem


                />
            }
        >

        </LayoutBaseDePagina>
    );
};