import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html,
body,
:root {
    padding: 0;
    margin: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Roboto", serif;
    font-optical-sizing: auto;
    font-style: normal;
    background-color: ${({theme}) => theme.colors.surface[0]};
    color: ${({theme}) => theme.colors.onSurface};
}
`;
