// Shared
import {fipeClient} from '@/shared/api';
// Local
import {IVehicleModel} from '../model/vehicle-model';
import {IGetVehicleModelsDto} from './dtos/get-vehicle-models-dto';
import {mapVehicleModel} from './mappers/map-vehicle';

export const getVehicleModels = async (
  vehicleTypeId: string,
  vehicleBrandId: string,
): Promise<IVehicleModel[]> => {
  const response = await fipeClient.get<IGetVehicleModelsDto>(
    `/${vehicleTypeId}/marcas/${vehicleBrandId}/modelos`,
  );
  return response.data.modelos.map(mapVehicleModel);
};
