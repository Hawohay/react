import React, { useEffect, useMemo } from 'react';
import { LayoutBaseDePagina } from '../../shared/layouts';
import { FerramentasDaListagem } from '../../shared/components';
import { useSearchParams } from 'react-router-dom';
import { BensService } from '../../shared/services/api/bens/BensService';

export const ListagemDeBens: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const busca = useMemo(() => {
        return searchParams.get('busca') || '';
    }, [searchParams]);


    useEffect(() => {

        BensService.getAll()
            .then((result) => {
                if (result instanceof Error) {
                    alert(result.message);                    
                } else {
                    console.log(result);
                }
            });
    }, []);

    return (
        <LayoutBaseDePagina
            titulo='Listagem de Bens Patrimoniais'
            barraDeFerramentas={
                <FerramentasDaListagem
                    mostrarInputBusca
                    textoBotaoNovo='Novo'
                    textoDaBusca={busca}
                    aoMudarTextoDeBusca={texto => setSearchParams({ busca: texto }, { replace: true })}
                />
            }
        >

        </LayoutBaseDePagina>
    );
};