import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: ${({theme}) => theme.border.radius};
  padding: ${({theme}) => theme.spacing[0]};
  color: ${({theme}) => theme.colors.font};
  cursor: pointer;
  border: none;
  outline: none;
  min-width: 300px;
  width: 100%;

  &:disabled {
    background-color: ${({theme}) => theme.colors.surface[2]};
    color: ${({theme}) => theme.colors.onSurface[0]};
    opacity: 0.5;
    cursor: no-drop;
  }
`;
