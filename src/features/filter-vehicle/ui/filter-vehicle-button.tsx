// Shared
import {Button} from '@/shared/ui/Button';
// Local
import {useVehicleFilterStore} from '../api/use-vehicle-filter-store';
import {useMemo} from 'react';
import {isFilterComplete, IVehicleFilter} from '../model/vehicle-filter';

interface IFilterVehicleButtonProps {
  onClick?: (filter: IVehicleFilter) => void;
}

export const FilterVehicleButton: React.FC<IFilterVehicleButtonProps> = ({
  onClick,
}) => {
  const {filter} = useVehicleFilterStore();

  const isEnabled = useMemo(() => isFilterComplete(filter), [filter]);

  const handleClick = () => {
    onClick?.(filter as IVehicleFilter);
  };

  return (
    <Button onClick={handleClick} disabled={!isEnabled}>
      Buscar
    </Button>
  );
};
