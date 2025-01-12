import {ITheme} from './types';

export const common: Pick<ITheme, 'border' | 'spacing'> = {
  border: {
    radius: '15px',
    width: '1px',
  },
  spacing: {
    0: '2px',
    1: '4px',
    2: '8px',
  },
};
