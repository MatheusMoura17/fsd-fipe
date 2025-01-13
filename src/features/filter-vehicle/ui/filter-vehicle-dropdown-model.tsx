// Libs
import {useQuery} from '@tanstack/react-query';
import {useMemo} from 'react';
// Entities
import {getVehicleModels} from '@/entities/vehicle';
// Shared
import {Dropdown, IDropdownItem} from '@/shared/ui/dropdown';
// Local
import {useVehicleFilterStore} from '../api/use-vehicle-filter-store';

export const FilterVehicleDropdownModel = () => {
  const {filter, setModel} = useVehicleFilterStore();

  const {isPending, data, error} = useQuery({
    queryKey: ['filter-vehicle-dropdown-models', filter?.type, filter?.brand],
    queryFn: () => getVehicleModels(filter.type!, filter.brand!),
    enabled: !!filter?.type && !!filter?.brand,
  });

  const dropdownData = useMemo(
    () =>
      (data?.models || [])?.map<IDropdownItem>(vehicleModel => ({
        id: vehicleModel.code.toString(),
        title: vehicleModel.title,
      })),
    [data],
  );

  return (
    <Dropdown
      id="dropdown-vehicle-model"
      selectedId={filter.model}
      title="Escolha o modelo"
      disabled={!filter.type || !filter.brand || isPending || !!error}
      onSelect={setModel}
      data={dropdownData}
    />
  );
};
