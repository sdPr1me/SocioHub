import React, { Component } from "react";
import Home from "./screens/home/Home";
import Dashboard from "./screens/dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact render={routeProps => <Home {...routeProps} />} />
        <Route
          path="/dashboard/:userId"
          exact
          render={routeProps => <Dashboard {...routeProps} />}
        />
      </Switch>
    );
  }
}
export default Routes;
