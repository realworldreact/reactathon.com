import App from './App.jsx';
import childRoutes from './routes';

export default {
  component: App,
  path: '/',
  ...childRoutes
};
