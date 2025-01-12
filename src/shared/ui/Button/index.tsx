import {ButtonContainer} from './styles';
import {IButtonProps} from './types';

export const Button: React.FC<IButtonProps> = ({children}) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};
