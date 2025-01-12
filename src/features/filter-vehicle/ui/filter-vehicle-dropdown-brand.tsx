// Libs
import {useQuery} from '@tanstack/react-query';
import {useMemo} from 'react';
// Entities
import {getVehicleBrands} from '@/entities/vehicle';
// Shared
import Dropdown from '@/shared/ui/Dropdown';
import {IDropdownItem} from '@/shared/ui/Dropdown/types';
// Local
import {useVehicleFilterStore} from '../api/use-vehicle-filter-store';

export const FilterVehicleDropdownBrand = () => {
  const {filter, setBrand} = useVehicleFilterStore();

  const {isPending, data, error} = useQuery({
    queryKey: ['filter-vehicle-dropdown-brands', filter?.type],
    queryFn: () => getVehicleBrands(filter.type!),
    enabled: !!filter?.type,
  });

  const dropdownData = useMemo(
    () =>
      (data || [])?.map<IDropdownItem>(vehicleBrand => ({
        id: vehicleBrand.code.toString(),
        title: vehicleBrand.title,
      })),
    [data],
  );

  return (
    <Dropdown
      id="dropdown-vehicle-brand"
      selectedId={filter.brand}
      title="Escolha a marca"
      disabled={!filter.type || isPending || !!error}
      onSelect={setBrand}
      data={dropdownData}
    />
  );
};
