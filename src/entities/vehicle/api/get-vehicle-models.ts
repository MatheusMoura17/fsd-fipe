// Shared
import {fipeClient} from '@/shared/api/fipeClient';
// Local
import {IVehicleModel} from '../model/vehicle-model';
import {IVehicleModelDto} from './dtos/vehicle-model-dto';
import {mapVehicleModel} from './mappers/map-vehicle';

export const getVehicleModels = async (
  vehicleTypeId: string,
  vehicleBrandId: string,
): Promise<IVehicleModel[]> => {
  const response = await fipeClient.get<IVehicleModelDto[]>(
    `/${vehicleTypeId}/marcas/${vehicleBrandId}/modelos`,
  );
  return response.data.map(mapVehicleModel);
};
