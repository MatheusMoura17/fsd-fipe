export interface IVehicleFilter {
  type: string;
  brand: string;
  model: string;
  year: string;
}

export const verifyFilterIsComplete = ({
  type,
  brand,
  model,
  year,
}: Partial<IVehicleFilter>) => {
  return Boolean(!!type && !!brand && !!model && !!year);
};
