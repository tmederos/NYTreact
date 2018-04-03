import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Reference the high-level components
import Main from "./components/Main";
import Search from "./components/Search";
import Saved from "./components/Saved";
import NoMatch from "./components/NoMatch";
const App = () =>
  <Router>
    <div>
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/saved" component={Saved} />
        <Route exact path="/scrape" component={Search} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;
export default App;
