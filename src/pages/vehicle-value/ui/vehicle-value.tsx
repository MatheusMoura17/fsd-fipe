import {useQuery} from '@tanstack/react-query';
// features
import {useVehicleFilterSearchParamsUrl} from '@/features/filter-vehicle';
// shared
import {Layout} from '@/shared/ui/layout';
import {Button} from '@/shared/ui/button';
// entities
import {getVehicleValue, VehicleValueCard} from '@/entities/vehicle';
import {useNavigate} from 'react-router-dom';

export const VehicleValue = () => {
  const {filter, fitlerString, isComplete} = useVehicleFilterSearchParamsUrl();
  const navigate = useNavigate();

  const {isPending, data, error} = useQuery({
    queryKey: ['vehicle-value', fitlerString],
    queryFn: async () => {
      return await getVehicleValue(
        filter.type!,
        filter.brand!,
        filter.model!,
        filter.year!,
      );
    },
    enabled: isComplete,
  });

  const handleClick = () => {
    navigate('/search');
  };

  const backButton = <Button onClick={handleClick}>Nova busca</Button>;

  if (isPending) {
    return <Layout title="Carregando...">por favor aguarde um pouco</Layout>;
  }

  if (error) {
    return <Layout title="Erro">Falha ao buscar veiculo {backButton}</Layout>;
  }

  if (!isComplete) {
    return (
      <Layout title="Filtro incompleto">
        Parametros insuficientes para busca
        {backButton}
      </Layout>
    );
  }

  if (data) {
    return (
      <Layout title={'Resultado da busca'}>
        <VehicleValueCard data={data} />
        {backButton}
      </Layout>
    );
  }
};
