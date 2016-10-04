import App from './App.jsx';
import childRoutes from './routes/index.js';

export default {
  component: App,
  path: '/',
  ...childRoutes
};
