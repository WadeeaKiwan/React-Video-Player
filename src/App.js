import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Player from './components/Player';
import NotFound from './components/NotFound';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/:activeVideo" component={Player} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
