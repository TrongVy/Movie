import PageNotFound from 'containers/shared/pageNotFound/PageNotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import { adminRoutes, clientRoutes } from 'routes/routes';
import ClientLayout from 'layouts/clientLayout';
import Login from 'containers/shared/Auth/Login/Login';
import AdminLayout from 'layouts/adminLayout';
import Register from 'containers/shared/Auth/Register/Register';

function App() {
  const renderLayout = (routes, Layout) => {
    return routes.map((route, index) => {
      const { exact, path, component, isPrivate } = route;
      return (
        <Layout key={index} exact={exact} path={path} component={component} isPrivate={isPrivate} />
      )
    })
  }
  return (
    <div className="App">

      <Router>
        <Switch>
          {renderLayout(clientRoutes, ClientLayout)}
          {renderLayout(adminRoutes, AdminLayout)}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
