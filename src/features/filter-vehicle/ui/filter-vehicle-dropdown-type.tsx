// Libs
import {useQuery} from '@tanstack/react-query';
import {useMemo} from 'react';
// Entities
import {getVehicleTypes} from '@/entities/vehicle';
// Shared
import Dropdown from '@/shared/ui/Dropdown';
import {IDropdownItem} from '@/shared/ui/Dropdown/types';
import {useVehicleFilterStore} from '../api/use-vehicle-filter-store';

export const FilterVehicleDropdownType = () => {
  const {filter, setType} = useVehicleFilterStore();

  const {isPending, data, error} = useQuery({
    queryKey: ['filter-vehicle-dropdown-type'],
    queryFn: getVehicleTypes,
  });

  const dropdownData = useMemo(
    () =>
      (data || [])?.map<IDropdownItem>(vehicleType => ({
        id: vehicleType.id,
        title: vehicleType.title,
      })),
    [data],
  );

  return (
    <Dropdown
      id="dropdown-vehicle-type"
      selectedId={filter.type}
      title="Escolha um tipo de veiculo"
      disabled={isPending || !!error}
      onSelect={setType}
      data={dropdownData}
    />
  );
};
