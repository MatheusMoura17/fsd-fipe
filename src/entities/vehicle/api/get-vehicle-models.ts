// Shared
import {fipeClient} from '@/shared/api';
// Local
import {IVehicleModel} from '../model/vehicle-model';
import {IGetVehicleModelsDto} from './dtos/get-vehicle-models-dto';
import {mapVehicleModel, mapVehicleYear} from './mappers/map-vehicle';
import {IVehicleYear} from '../model/vehicle-year';

interface IGetVehicleModelsResult {
  years: IVehicleYear[];
  models: IVehicleModel[];
}

export const getVehicleModels = async (
  vehicleTypeId: string,
  vehicleBrandId: string,
): Promise<IGetVehicleModelsResult> => {
  const response = await fipeClient.get<IGetVehicleModelsDto>(
    `/${vehicleTypeId}/marcas/${vehicleBrandId}/modelos`,
  );
  const years = response.data.anos.map(mapVehicleYear);
  const models = response.data.modelos.map(mapVehicleModel);
  return {years, models};
};
