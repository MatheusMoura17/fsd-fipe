// Libs
import {useNavigate} from 'react-router-dom';
// Shared
import {Button} from '@/shared/ui/button';
// Local
import {useVehicleFilter} from '../model/use-vehicle-filter';

interface IFilterVehicleButtonProps {
  destination: string;
}

export const FilterVehicleButton: React.FC<IFilterVehicleButtonProps> = ({
  destination,
}) => {
  const navigate = useNavigate();
  const {isFilterComplete, filterSearchParams} = useVehicleFilter();

  const handleClick = () => {
    navigate(`${destination}?${filterSearchParams.toString()}`);
  };

  return (
    <Button onClick={handleClick} disabled={!isFilterComplete}>
      Buscar
    </Button>
  );
};
