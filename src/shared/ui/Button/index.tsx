import {IButtonProps} from './types';

export const Button: React.FC<IButtonProps> = ({children}) => {
  return <button className="btn">{children}</button>;
};
