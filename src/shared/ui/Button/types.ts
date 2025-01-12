import {ReactNode} from 'react';

export interface IButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}
