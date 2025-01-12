import {common} from './common';
import {ITheme} from './types';

export const darkTheme: ITheme = {
  ...common,
  colors: {
    surface: {
      0: '#1f2527',
      1: '#1f2528',
    },
    onSurface: '#fff',
    font: '#050a0b',
    border: '#050a0b',
    primary: '#0091ff',
    onPrimary: '#050a0b',
  },
};
