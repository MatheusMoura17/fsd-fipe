// Libs
import {useNavigate} from 'react-router-dom';
// shared
import {Layout} from '@/shared/ui/layout';
import {Button} from '@/shared/ui/button';
// entities
import {VehicleValueCard} from '@/entities/vehicle';
import {useVehicleValue} from '../model/useVehicleValue';

export const VehicleValue = () => {
  const {vehicle, isLoading, error} = useVehicleValue();
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/search');
  };

  const backButton = <Button onClick={handleClickBack}>Nova busca</Button>;

  if (isLoading) {
    return <Layout title="Carregando...">por favor aguarde um pouco</Layout>;
  }

  if (error) {
    return (
      <Layout title="Erro">
        Erro: {error.message} {backButton}
      </Layout>
    );
  }

  if (vehicle) {
    return (
      <Layout title={'Resultado da busca'}>
        <VehicleValueCard data={vehicle} />
        {backButton}
      </Layout>
    );
  } else {
    return <Layout title="Erro">Veiculo não encontrado! {backButton}</Layout>;
  }
};
