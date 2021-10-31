import React from "react";
import { Route, Switch } from "react-router-dom";
import Pricing from "./pages/Pricing";
import About from "./pages/About";

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
