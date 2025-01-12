import {IVehicleBrandDto} from '../dtos/vehicle-brand-dto';
import {IVehicleModelDto} from '../dtos/vehicle-model-dto';
import {IVehicleValueDto} from '../dtos/vehicle-value-dto';
import {IVehicleYearDto} from '../dtos/vehicle-year-dto';
import {IVehicleBrand} from '../../model/vehicle-brand';
import {IVehicleModel} from '../../model/vehicle-model';
import {IVehicleValue} from '../../model/vehicle-value';
import {IVehicleYear} from '../../model/vehicle-year';

export const mapVehicleBrand = (
  vehicleBrandDto: IVehicleBrandDto,
): IVehicleBrand => ({
  code: vehicleBrandDto.codigo,
  title: vehicleBrandDto.nome,
});

export const mapVehicleModel = (
  vehicleModelDto: IVehicleModelDto,
): IVehicleModel => ({
  code: vehicleModelDto.codigo,
  title: vehicleModelDto.nome,
});

export const mapVehicleYear = (
  vehicleYearDto: IVehicleYearDto,
): IVehicleYear => ({
  code: vehicleYearDto.codigo,
  title: vehicleYearDto.nome,
});

export const mapVehicleValue = (
  mapVehicleValueDto: IVehicleValueDto,
): IVehicleValue => ({
  brand: mapVehicleValueDto.Marca,
  fipeCode: mapVehicleValueDto.CodigoFipe,
  fuelAcronym: mapVehicleValueDto.SiglaCombustivel,
  fuelType: mapVehicleValueDto.Combustivel,
  model: mapVehicleValueDto.Modelo,
  monthRef: mapVehicleValueDto.MesReferencia,
  type: mapVehicleValueDto.TipoVeiculo,
  value: mapVehicleValueDto.Valor,
  year: mapVehicleValueDto.AnoModelo,
});
