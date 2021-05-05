import Recat from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/tv" component={TV}></Route>
      {/* <Route path="/tv/popular" render={() => <h1>Popular</h1>}></Route> */}
      <Route path="/search" component={Search}></Route>
      <Redirect from="*" to="/"></Redirect>
    </Switch>
  </Router>
);
