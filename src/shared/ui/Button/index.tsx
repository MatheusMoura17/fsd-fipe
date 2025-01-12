import {ButtonContainer} from './styles';
import {IButtonProps} from './types';

export const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  disabled,
}) => {
  return (
    <ButtonContainer onClick={onClick} disabled={disabled}>
      {children}
    </ButtonContainer>
  );
};
