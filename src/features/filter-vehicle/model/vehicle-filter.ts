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
  return Boolean(!!type && !!brand && !!model && !!year);
};

export const serializeFilter = (filter: IVehicleFilter) => {
  return `type=${filter.type}&brand=${filter.brand}&model=${filter.model}&year=${filter.year}`;
};
