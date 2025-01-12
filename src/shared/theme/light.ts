import {common} from './common';
import {ITheme} from './types';

export const lightTheme: ITheme = {
  ...common,
  colors: {
    font: '#2c3e50',
    border: '#bdc3c7',
    primary: '#33A1FD',
    onPrimary: '#00000',
    surface: '#fffff',
    onSurface: '#00000',
  },
};
