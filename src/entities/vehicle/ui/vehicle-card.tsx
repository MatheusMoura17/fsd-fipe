import {IVehicleValue} from '../model/vehicle-value';

interface IVehicleValueCardProps {
  data: IVehicleValue;
}

export const VehicleValueCard: React.FC<IVehicleValueCardProps> = ({data}) => {
  return (
    <div>
      <span>Código fipe</span>
      <h2>{data.fipeCode}</h2>
      <span>Modelo</span>
      <h2>
        {data.brand} - {data.model} - {data.year}
      </h2>
      <span>Preço</span>
      <h2>
        {data.value} - {data.monthRef}
      </h2>
    </div>
  );
};
