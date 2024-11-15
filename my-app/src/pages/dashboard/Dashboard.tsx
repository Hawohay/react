import { FerramentasDeDetalhe } from '../../shared/components/ferramentas-de-detalhe/FerramentasDeDetalhe';
import { LayoutBaseDePagina } from '../../shared/layouts';

export const Dashboard = () => {

    return (
        <LayoutBaseDePagina
            titulo='Página Inicial'
            barraDeFerramentas={(
                <FerramentasDeDetalhe  mostrarBotaoSalvarEFechar />
            )}
        >
            Testando
        </LayoutBaseDePagina>
    );
};