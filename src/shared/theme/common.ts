import {ITheme} from './types';

export const common: Pick<ITheme, 'border' | 'spacing'> = {
  border: {
    radius: '10px',
    width: '1px',
  },
  spacing: {
    0: '10px',
    1: '12px',
    2: '16px',
  },
};
