import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  min-width: 300px;
  border-sizing: border-box;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${({theme}) => theme.colors.surface[1]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.colors.onSurface[1]};
    border-radius: ${({theme}) => theme.border.radius};
  }
`;

export const DropdownButton = styled.button`
  background-color: ${({theme}) => theme.colors.surface[0]};
  border-radius: ${({theme}) => theme.border.radius};
  padding: ${({theme}) => theme.spacing[0]};
  color: ${({theme}) => theme.colors.onSurface[0]};
  cursor: pointer;
  border: ${({theme}) => `${theme.border.width} solid ${theme.colors.primary}`};
  outline: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DropdownModal = styled.div`
  position: absolute;
  background-color: ${({theme}) => theme.colors.surface[1]};
  width: 100%;
  overflow-y: auto;
  max-height: 200px;
  border-radius: ${({theme}) => theme.border.radius};
  z-index: 10;
`;

export const DropdownUl = styled.div`
  padding: 0;
`;

export const DropdownLi = styled.div`
  padding: ${({theme}) => theme.spacing[0]};
  &:hover {
    background-color: ${({theme}) => theme.colors.surface[0]};
  }
`;
