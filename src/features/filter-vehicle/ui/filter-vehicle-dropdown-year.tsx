// Libs
import {useMemo} from 'react';
// Shared
import {Dropdown, IDropdownItem} from '@/shared/ui/dropdown';
// Local
import {useVehicleFilter} from '../model/use-vehicle-filter';

export const FilterVehicleDropdownYear = () => {
  const {filter, setYear, isYearsEnabled, isLoading, yearList} =
    useVehicleFilter();

  const dropdownData = useMemo(
    () =>
      yearList.map<IDropdownItem>(vehicleYear => ({
        id: vehicleYear.code.toString(),
        title: vehicleYear.title,
      })),
    [yearList],
  );

  return (
    <Dropdown
      id="dropdown-vehicle-year"
      title="Escolha o ano"
      selectedId={filter.year}
      disabled={!isYearsEnabled || isLoading}
      onSelect={setYear}
      data={dropdownData}
    />
  );
};
