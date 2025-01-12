// Shared
import {Button} from '@/shared/ui/Button';
// Local
import {useVehicleFilterStore} from '../api/use-vehicle-filter-store';
import {useMemo} from 'react';
import {isFilterComplete} from '../model/vehicle-filter';

export const FilterVehicleButton = () => {
  const {filter} = useVehicleFilterStore();

  const isEnabled = useMemo(() => isFilterComplete(filter), [filter]);

  return <Button disabled={!isEnabled}>Buscar</Button>;
};
