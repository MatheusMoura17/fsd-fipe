// Libs
import {useNavigate} from 'react-router-dom';
// Features
import {
  FilterVehicle,
  IVehicleFilter,
  serializeFilter,
} from '@/features/filter-vehicle';
// Shared
import {Layout} from '@/shared/ui/Layout';

export const SearchPage = () => {
  const navigate = useNavigate();

  const handleOnFilter = (filter: IVehicleFilter) => {
    const filterQs = serializeFilter(filter);
    navigate(`/vehicle-value?${filterQs}`);
  };

  return (
    <Layout title="Pesquisar veículo">
      <p>Utilize o formulário abaixo para buscar um veículo</p>
      <FilterVehicle onClickFilter={handleOnFilter} />
    </Layout>
  );
};
