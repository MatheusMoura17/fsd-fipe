// Local
import {FilterVehicleButton} from './filter-vehicle-button';
import {FilterVehicleContainer} from './filter-vehicle-container';
import {FilterVehicleDropdownBrand} from './filter-vehicle-dropdown-brand';
import {FilterVehicleDropdownModel} from './filter-vehicle-dropdown-model';
import {FilterVehicleDropdownType} from './filter-vehicle-dropdown-type';
import {FilterVehicleDropdownYear} from './filter-vehicle-dropdown-year';

export const FilterVehicle = () => {
  return (
    <FilterVehicleContainer>
      <FilterVehicleDropdownType />
      <FilterVehicleDropdownBrand />
      <FilterVehicleDropdownModel />
      <FilterVehicleDropdownYear />
      <FilterVehicleButton />
    </FilterVehicleContainer>
  );
};
