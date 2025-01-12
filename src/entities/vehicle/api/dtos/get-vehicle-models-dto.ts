import {IVehicleModelDto} from './vehicle-model-dto';
import {IVehicleYearDto} from './vehicle-year-dto';

export interface IGetVehicleModelsDto {
  modelos: IVehicleModelDto[];
  anos: IVehicleYearDto[];
}
