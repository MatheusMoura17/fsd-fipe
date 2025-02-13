import {useMemo} from 'react';
// Shared
import {Dropdown, IDropdownItem} from '@/shared/ui/dropdown';
// Local
import {useVehicleFilter} from '../model/use-vehicle-filter';

export const FilterVehicleDropdownModel = () => {
  const {filter, modelList, isModelsEnabled, isLoading, setModel} =
    useVehicleFilter();

  const dropdownData = useMemo(
    () =>
      modelList.map<IDropdownItem>(vehicleModel => ({
        id: vehicleModel.code.toString(),
        title: vehicleModel.title,
      })),
    [modelList],
  );

  return (
    <Dropdown
      id="dropdown-vehicle-model"
      selectedId={filter.model}
      title="Escolha o modelo"
      disabled={!isModelsEnabled || isLoading}
      onSelect={setModel}
      data={dropdownData}
    />
  );
};
