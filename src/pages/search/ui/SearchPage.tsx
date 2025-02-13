// Features
import {FilterVehicle} from '@/features/filter-vehicle';
// Shared
import {Layout} from '@/shared/ui/layout';

export const SearchPage = () => {
  return (
    <Layout title="Pesquisar veículo">
      <p>Utilize o formulário abaixo para buscar um veículo</p>
      <FilterVehicle destination="/vehicle-value" />
    </Layout>
  );
};
