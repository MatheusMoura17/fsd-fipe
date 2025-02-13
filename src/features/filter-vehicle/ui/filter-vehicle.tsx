// Libs
import React from 'react';
// Local
import {FilterVehicleButton} from './filter-vehicle-button';
import {FilterVehicleContainer} from './filter-vehicle-container';
import {FilterVehicleDropdownBrand} from './filter-vehicle-dropdown-brand';
import {FilterVehicleDropdownModel} from './filter-vehicle-dropdown-model';
import {FilterVehicleDropdownType} from './filter-vehicle-dropdown-type';
import {FilterVehicleDropdownYear} from './filter-vehicle-dropdown-year';

interface IFilterVehicleProps {
  destination: string;
}

export const FilterVehicle: React.FC<IFilterVehicleProps> = ({destination}) => {
  return (
    <FilterVehicleContainer>
      <FilterVehicleDropdownType />
      <FilterVehicleDropdownBrand />
      <FilterVehicleDropdownModel />
      <FilterVehicleDropdownYear />
      <FilterVehicleButton {...{destination}} />
    </FilterVehicleContainer>
  );
};
