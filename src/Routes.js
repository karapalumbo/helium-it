import React from "react";
import { Route, Switch } from "react-router-dom";
import Pricing from "./pages/Pricing";
import MainPage from "./pages/MainPage";
import CryptoMiningSection from "./pages/CryptoMining";
import Projects from "./pages/Projects";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>

      <Route exact path="/pricing">
        <Pricing />
      </Route>

      <Route exact path="/crypto-mining">
        <CryptoMiningSection />
      </Route>

      <Route exact path="/projects">
        <Projects />
      </Route>
    </Switch>
  );
}

export default Routes;
