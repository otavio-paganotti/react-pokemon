import routes from '@/routes';
import { useRoutes } from 'react-router-dom';
import '@/assets/sass/main.scss';

const App = () => {
  const content = useRoutes(routes);

  return content;
};

export default App;
