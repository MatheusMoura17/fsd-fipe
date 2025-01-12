// Libs
import React from 'react';
// Local
import {IVehicleFilter} from '../model/vehicle-filter';
import {FilterVehicleButton} from './filter-vehicle-button';
import {FilterVehicleContainer} from './filter-vehicle-container';
import {FilterVehicleDropdownBrand} from './filter-vehicle-dropdown-brand';
import {FilterVehicleDropdownModel} from './filter-vehicle-dropdown-model';
import {FilterVehicleDropdownType} from './filter-vehicle-dropdown-type';
import {FilterVehicleDropdownYear} from './filter-vehicle-dropdown-year';

interface IFilterVehicleProps {
  onClickFilter?: (filter: IVehicleFilter) => void;
}

export const FilterVehicle: React.FC<IFilterVehicleProps> = ({
  onClickFilter,
}) => {
  return (
    <FilterVehicleContainer>
      <FilterVehicleDropdownType />
      <FilterVehicleDropdownBrand />
      <FilterVehicleDropdownModel />
      <FilterVehicleDropdownYear />
      <FilterVehicleButton onClick={onClickFilter} />
    </FilterVehicleContainer>
  );
};
