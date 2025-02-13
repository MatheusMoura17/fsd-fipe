// Libs
import {useMemo} from 'react';
// Shared
import {Dropdown, IDropdownItem} from '@/shared/ui/dropdown';
// Local
import {useVehicleFilter} from '../model/use-vehicle-filter';

export const FilterVehicleDropdownType = () => {
  const {filter, isTypesEnabled, typeList, isLoading, setType} =
    useVehicleFilter();

  const dropdownData = useMemo(
    () =>
      (typeList || [])?.map<IDropdownItem>(vehicleType => ({
        id: vehicleType.id,
        title: vehicleType.title,
      })),
    [typeList],
  );

  return (
    <Dropdown
      id="dropdown-vehicle-type"
      selectedId={filter.type}
      disabled={!isTypesEnabled || isLoading}
      onSelect={setType}
      data={dropdownData}
    />
  );
};
