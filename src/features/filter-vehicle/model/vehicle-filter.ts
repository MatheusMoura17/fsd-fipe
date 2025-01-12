export interface IVehicleFilter {
  type: string;
  brand: string;
  model: string;
  year: string;
}

export const isFilterComplete = ({
  type,
  brand,
  model,
  year,
}: Partial<IVehicleFilter>) => {
  return !!type && !!brand && !!model && year;
};
