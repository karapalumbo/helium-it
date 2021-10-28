import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Pricing from "./Pricing";
import About from "./About";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <About />
      </Route>
      <Route exact path="/pricing">
        <Pricing />
      </Route>
    </Switch>
  );
}

export default Routes;
