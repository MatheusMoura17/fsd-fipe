// Libs
import {useMemo} from 'react';
// Local
import {useVehicleFilterStore} from './use-vehicle-filter-store';
import {IVehicleFilter, verifyFilterIsComplete} from './vehicle-filter';
import {useQuery} from '@tanstack/react-query';
import {
  getVehicleBrands,
  getVehicleModels,
  getVehicleTypes,
  getVehicleYears,
} from '@/entities/vehicle';

export const useVehicleFilter = () => {
  const {filter, setFilter, setBrand, setModel, setType, setYear} =
    useVehicleFilterStore();

  const isTypesEnabled = true;
  const isBrandsEnabled = Boolean(filter.type);
  const isModelsEnabled = isBrandsEnabled && Boolean(filter.brand);
  const isYearsEnabled = isModelsEnabled && Boolean(filter.model);

  const typesQuery = useQuery({
    queryKey: ['filter-vehicle-types'],
    queryFn: getVehicleTypes,
    enabled: isTypesEnabled,
  });

  const brandsQuery = useQuery({
    queryKey: ['filter-vehicle-brands', filter.type],
    queryFn: () => getVehicleBrands(filter.type!),
    enabled: isBrandsEnabled,
  });

  const modelsQuery = useQuery({
    queryKey: ['filter-vehicle-models', filter.type, filter.brand],
    queryFn: () => getVehicleModels(filter.type!, filter.brand!),
    enabled: isModelsEnabled,
  });

  const yearsQuery = useQuery({
    queryKey: ['filter-vehicle-years', filter.type, filter.brand, filter.model],
    queryFn: () => getVehicleYears(filter.type!, filter.brand!, filter.model!),
    enabled: isYearsEnabled,
  });

  const isLoading = useMemo(() => {
    return (
      typesQuery.isPending ||
      brandsQuery.isPending ||
      modelsQuery.isPending ||
      yearsQuery.isPending
    );
  }, [typesQuery, brandsQuery, modelsQuery, yearsQuery]);

  const isFilterComplete = useMemo(
    () => verifyFilterIsComplete(filter),
    [filter],
  );

  const filterSearchParams = useMemo(() => {
    const searchParams = new URLSearchParams();

    Object.entries(filter).forEach(([key, value]) => {
      searchParams.set(key, value);
    });

    return searchParams;
  }, [filter]);

  const loadFromSearchParams = (search: URLSearchParams) => {
    const partialFilter: Partial<IVehicleFilter> = {
      brand: search.get('brand') || undefined,
      model: search.get('model') || undefined,
      type: search.get('type') || undefined,
      year: search.get('year') || undefined,
    };

    setFilter(partialFilter);
  };

  const buildSearchParams = () => {};

  return {
    filter,
    filterSearchParams,
    setType,
    setBrand,
    setModel,
    setYear,
    isLoading,
    loadFromSearchParams,
    buildSearchParams,
    isFilterComplete,
    typeList: typesQuery.data || [],
    brandList: brandsQuery.data || [],
    modelList: modelsQuery.data || [],
    yearList: yearsQuery.data || [],
    isTypesEnabled,
    isBrandsEnabled,
    isModelsEnabled,
    isYearsEnabled,
  };
};
