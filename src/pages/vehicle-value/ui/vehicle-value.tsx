import {useQuery} from '@tanstack/react-query';
// features
import {useVehicleFilter} from '@/features/filter-vehicle';
// shared
import {Layout} from '@/shared/ui/layout';
import {Button} from '@/shared/ui/button';
// entities
import {getVehicleValue, VehicleValueCard} from '@/entities/vehicle';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {useEffect} from 'react';

export const VehicleValue = () => {
  const [params] = useSearchParams();
  const {loadFromSearchParams} = useVehicleFilter();
  const navigate = useNavigate();

  useEffect(() => {
    loadFromSearchParams(params);
  }, [loadFromSearchParams, params]);

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
