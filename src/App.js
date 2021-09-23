import { BrowserRouter, Switch, Route } from "react-router-dom";
import Player from "./components/Player";
import NotFound from "./components/NotFound";
import GlobalStyle from "./components/styles/GlobalStyle";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path='/:videoId?' component={Player} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
