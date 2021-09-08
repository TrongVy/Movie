import PageNotFound from 'containers/shared/pageNotFound/PageNotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import { clientRoutes } from 'routes/routes';
import ClientLayout from 'layouts/clientLayout';
import Login from 'containers/shared/Auth/Login/Login';


function App() {
  const renderLayout = (routes, Layout) => {
    return routes.map((route, index) => {
      const { exact, path, component } = route;
      return (
        <Layout key={index} exact={exact} path={path} component={component} />
      )
    })
  }
  return (
    <div className="App">

      <Router>
        <Switch>
          {renderLayout(clientRoutes, ClientLayout)}
          <Route path="/login" component={Login} />
          <Route path="*" component={PageNotFound} />
     

        </Switch>
      </Router>

    </div>
  );
}

export default App;
