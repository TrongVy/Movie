
import Header from 'components/header/Header';
import PageNotFound from 'containers/shared/pageNotFound/PageNotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import { clientRoutes } from 'routes/routes';


function App() {
 const  renderRoute = (routes) => {
    return routes.map((route, index) => {
      const { exact, path, component } = route;
      return (
        <Route key={index} exact={exact} path={path} component={component} />
      )
    })
  }
  return (
    <div className="App">

      <Router>
        <Header />
        <Switch>
          {renderRoute(clientRoutes)}
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
