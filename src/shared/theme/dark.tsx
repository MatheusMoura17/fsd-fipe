import {common} from './common';
import {ITheme} from './types';

export const darkTheme: ITheme = {
  ...common,
  colors: {
    surface: {
      0: '#1f2527',
      1: '#191d1f',
      2: '#141516',
    },
    onSurface: {
      0: '#fff',
      1: '#c6c6c6',
    },
    font: '#050a0b',
    border: '#050a0b',
    primary: '#0091ff',
    onPrimary: '#050a0b',
  },
};
