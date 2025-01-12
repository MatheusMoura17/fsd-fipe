// Libs
import {useNavigate} from 'react-router-dom';
// Shared
import {Button} from '@/shared/ui/Button';
import {Layout} from '@/shared/ui/Layout';

export const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/search');
  };

  return (
    <Layout title="Tabela fipe">
      <p>Veja os preços médios de veículos usados no Brasil.</p>
      <Button onClick={handleClick}>Iniciar</Button>
    </Layout>
  );
};
