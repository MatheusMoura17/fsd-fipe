// Libs
import {useSearchParams} from 'react-router-dom';
import {useEffect} from 'react';
import {useQuery} from '@tanstack/react-query';
// Features
import {useVehicleFilter} from '@/features/filter-vehicle';
// Entities
import {getVehicleValue} from '@/entities/vehicle';

export const useVehicleValue = () => {
  const [params] = useSearchParams();
  const {loadFromSearchParams, isFilterComplete, filter} = useVehicleFilter();

  useEffect(() => {
    loadFromSearchParams(params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const {isLoading, data, error} = useQuery({
    queryKey: ['vehicle-value', params.toString()],
    queryFn: async () => {
      return await getVehicleValue(
        filter.type!,
        filter.brand!,
        filter.model!,
        filter.year!,
      );
    },
    enabled: isFilterComplete,
  });

  return {
    isLoading,
    error,
    vehicle: data,
  };
};
