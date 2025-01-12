// Shared
import {fipeClient} from '@/shared/api/fipeClient';
// Local
import {IVehicleValue} from '../model/vehicle-value';
import {IVehicleValueDto} from './dtos/vehicle-value-dto';
import {mapVehicleValue} from './mappers/map-vehicle';

export const getVehicleValue = async (
  vehicleTypeId: string,
  vehicleBrandId: string,
  vehicleModelId: string,
  vehicleYearId: string,
): Promise<IVehicleValue> => {
  const response = await fipeClient.get<IVehicleValueDto>(
    `/${vehicleTypeId}/marcas/${vehicleBrandId}/modelos/${vehicleModelId}/anos/${vehicleYearId}`,
  );
  return mapVehicleValue(response.data);
};
