// Local
import {IVehicleType} from '../model/vehicle-type';

type GetVehicleTypeListDto = IVehicleType[];

export const getVehicleTypes = async (): Promise<GetVehicleTypeListDto> => {
  return [
    {
      id: 'motos',
      title: 'Motos',
    },
    {
      id: 'carros',
      title: 'Carros',
    },
    {
      id: 'caminhoes',
      title: 'Caminhões',
    },
  ];
};
