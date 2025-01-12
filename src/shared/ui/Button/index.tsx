import {ButtonContainer} from './styles';
import {IButtonProps} from './types';

export const Button: React.FC<IButtonProps> = ({children, onClick}) => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
};
