// Shared
import {fipeClient} from '@/shared/api';
// Local
import {IVehicleYear} from '../model/vehicle-year';
import {IVehicleYearDto} from './dtos/vehicle-year-dto';
import {mapVehicleYear} from './mappers/map-vehicle';

export const getVehicleYears = async (
  vehicleTypeId: string,
  vehicleBrandId: string,
  vehicleModelId: string,
): Promise<IVehicleYear[]> => {
  const response = await fipeClient.get<IVehicleYearDto[]>(
    `/${vehicleTypeId}/marcas/${vehicleBrandId}/modelos/${vehicleModelId}/anos`,
  );
  return response.data.map(mapVehicleYear);
};
