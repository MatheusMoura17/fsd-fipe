// Libs
import {useQuery} from '@tanstack/react-query';
import {useMemo} from 'react';
// Entities
import {getVehicleModels} from '@/entities/vehicle';
// Shared
import Dropdown from '@/shared/ui/Dropdown';
import {IDropdownItem} from '@/shared/ui/Dropdown/types';
// Local
import {useVehicleFilterStore} from '../api/use-vehicle-filter-store';

export const FilterVehicleDropdownYear = () => {
  const {filter, setYear} = useVehicleFilterStore();

  const {isPending, data, error} = useQuery({
    queryKey: ['filter-vehicle-dropdown-models', filter?.type, filter?.brand],
    queryFn: () => getVehicleModels(filter.type!, filter.brand!),
    enabled: !!filter?.type && !!filter?.brand,
  });

  const dropdownData = useMemo(
    () =>
      (data?.years || [])?.map<IDropdownItem>(vehicleYear => ({
        id: vehicleYear.code.toString(),
        title: vehicleYear.title,
      })),
    [data],
  );

  return (
    <Dropdown
      id="dropdown-vehicle-year"
      title="Escolha o ano"
      selectedId={filter.year}
      disabled={!filter.type || !filter.brand || isPending || !!error}
      onSelect={setYear}
      data={dropdownData}
    />
  );
};
