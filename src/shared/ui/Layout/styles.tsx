import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
`;

export const Container = styled.main`
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
  background-color: ${({theme}) => theme.colors.surface[1]};
  padding: ${({theme}) => theme.spacing[0]};
`;
