import {common} from './common';
import {ITheme} from './types';

export const darkTheme: ITheme = {
  ...common,
  colors: {
    surface: '#31393C',
    onSurface: '#fff',
    font: '#ecf0f1',
    border: '#2c3e50',
    primary: '#2176FF',
    onPrimary: '#000',
  },
};
