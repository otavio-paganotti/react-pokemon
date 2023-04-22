import routes from '@/routes';
import { useRoutes } from 'react-router-dom';
import '@/assets/css/main.scss';

const App = () => {
  const content = useRoutes(routes);

  return content;
};

export default App;
