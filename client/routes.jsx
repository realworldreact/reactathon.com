import App from './components/App.jsx';
import Home from './routes/home/Home.jsx';
import childRoutes from './routes/index.jsx';

export default {
  component: App,
  path: '/',
  indexRoute: { component: Home },
  childRoutes
};
