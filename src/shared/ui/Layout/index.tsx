import {Container, Title} from './styles';
import {ILayoutProps} from './types';

export const Layout: React.FC<ILayoutProps> = ({children, title}) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {children}
    </Container>
  );
};
