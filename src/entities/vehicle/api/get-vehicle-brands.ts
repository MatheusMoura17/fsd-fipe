// Shared
import {fipeClient} from '@/shared/api';
// Local
import {IVehicleBrand} from '../model/vehicle-brand';
import {IVehicleBrandDto} from './dtos/vehicle-brand-dto';
import {mapVehicleBrand} from './mappers/map-vehicle';

export const getVehicleBrands = async (
  vehicleTypeId: string,
): Promise<IVehicleBrand[]> => {
  const response = await fipeClient.get<IVehicleBrandDto[]>(
    `/${vehicleTypeId}/marcas`,
  );
  return response.data.map(mapVehicleBrand);
};
