// Libs
import {useMemo} from 'react';
// Shared
import {Dropdown, IDropdownItem} from '@/shared/ui/dropdown';
// Local
import {useVehicleFilter} from '../model/use-vehicle-filter';

export const FilterVehicleDropdownBrand = () => {
  const {filter, isBrandsEnabled, setBrand, brandList, isLoading} =
    useVehicleFilter();

  const dropdownData = useMemo(
    () =>
      brandList.map<IDropdownItem>(vehicleBrand => ({
        id: vehicleBrand.code.toString(),
        title: vehicleBrand.title,
      })),
    [brandList],
  );

  return (
    <Dropdown
      id="dropdown-vehicle-brand"
      selectedId={filter.brand}
      title="Escolha a marca"
      disabled={!isBrandsEnabled || isLoading}
      onSelect={setBrand}
      data={dropdownData}
    />
  );
};
