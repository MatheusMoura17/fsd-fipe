export interface ITheme {
  colors: {
    surface: {
      0: string;
      1: string;
    };
    onSurface: string;
    font: string;
    onPrimary: string;
    primary: string;
    border: string;
  };
  spacing: {
    0: string;
    1: string;
    2: string;
  };
  border: {
    width: string;
    radius: string;
  };
}
