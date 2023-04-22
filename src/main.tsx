import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.hydrateRoot(
  document.getElementById('root') as Document | Element,
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
