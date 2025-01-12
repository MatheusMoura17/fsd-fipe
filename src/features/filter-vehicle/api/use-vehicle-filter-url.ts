// Libs
import {useMemo} from 'react';
import {useSearchParams} from 'react-router-dom';
// Local
import {
  isFilterComplete,
  IVehicleFilter,
  serializeFilter,
} from '../model/vehicle-filter';

export const useVehicleFilterSearchParamsUrl = () => {
  const [params] = useSearchParams();

  const filter = useMemo(() => {
    const partialFilter: Partial<IVehicleFilter> = {
      brand: params.get('brand') || undefined,
      model: params.get('model') || undefined,
      type: params.get('type') || undefined,
      year: params.get('year') || undefined,
    };
    return partialFilter;
  }, [params]);

  const isComplete = useMemo(() => isFilterComplete(filter), [filter]);
  const fitlerString = useMemo(() => params.toString(), [params]);

  return {
    fitlerString,
    filter,
    isComplete,
    serializeFilter,
  };
};
