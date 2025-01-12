import {common} from './common';
import {ITheme} from './types';

export const lightTheme: ITheme = {
  ...common,
  colors: {
    font: '#2c3e50',
    border: '#bdc3c7',
    primary: '#33A1FD',
    onPrimary: '#00000',
    surface: {
      0: '#fffff',
      1: '#f1f1f1',
    },
    onSurface: '#00000',
  },
};
